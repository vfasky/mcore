###*
# 
# @date 2016-01-11 20:41:14
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'


_isNumberReg = /^-{0,1}\d*\.{0,1}\d+$/

exports.isNumber = (x)->
    _isNumberReg.test x
    
exports.isObject = (x)->
    Object::toString.call(x) == '[object Object]'

exports.isString = (x)->
    Object::toString.call(x) == '[object String]'


# 浅复制
exports.clone = (src)->
    dest = {}
    for key, val of src
        if src.hasOwnProperty(key)
            dest[key] = val

    dest

# 放到下一帧执行
do ->
    if window.requestAnimationFrame
        exports.nextTick = (fun)->
            window.requestAnimationFrame -> fun()

        exports.nextTick.clear = (id)->
            window.cancelAnimationFrame id if id

    else
        exports.nextTick = (fun)->
            setTimeout fun, 0

        exports.nextTick.clear = (id)->
            clearTimeout id if id
