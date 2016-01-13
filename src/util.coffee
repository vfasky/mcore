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

exports.isArray = (x)->
    return Array.isArray(x) if Array.isArray
    Object::toString.call(x) == '[object Array]'
    
exports.isObject = (x)->
    Object::toString.call(x) == '[object Object]'

exports.isString = (x)->
    Object::toString.call(x) == '[object String]'

exports.isFunction = (x)->
    Object::toString.call(x) == '[object Function]'

exports.isPlainObject = (x)->
    if !x or Object::toString.call(x) != '[object Object]' or
    x.nodeType or x.setInterval
        return false

    hasOwnConstructor = Object.hasOwnProperty.call x, 'constructor'
    hasIsPropertyOfMethod = Object.hasOwnProperty.call x.constructor.prototype, 'isPrototypeOf'

    if x.constructor and !hasOwnConstructor and !hasIsPropertyOfMethod
        return false

    for key of x
        lastKey = key

    typeof lastKey == 'undefined' or Object.hasOwnProperty.call x, lastKey

exports.extend = ->
    target = arguments[0] or {}
    length = arguments.length
    deep = false
    start = 1

    if typeof target == 'boolean'
        deep = target
        target = arguments[1] or {}
        start = 2

    if typeof target != 'object' and typeof target != 'function'
        target = {}

    for i in [start...length]
        if (options = arguments[i]) != null
            for name of options
                src = target[name]
                copy = options[name]

                continue if target == copy

                if deep and copy and ( exports.isPlainObject(copy) or exports.isArray(copy) )
                    clone = {}
                    if src and ( exports.isPlainObject(src) or exports.isArray(src) )
                        clone = exports.isArray(copy) and [] or {}

                    target[name] = exports.extend deep, clone, copy

                else if typeof copy != 'undefined'
                    target[name] = copy

    target

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
