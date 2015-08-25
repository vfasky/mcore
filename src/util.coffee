###*
 * util
 * @module mcore/util
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/util', ->
    
    "use strict"

    exports = {}

    _isNumberReg = /^-{0,1}\d*\.{0,1}\d+$/

    exports.isNumber = (x)->
        _isNumberReg.test x

    ###*
     * 遍历数组
    ###
    exports.each = (arr, cb = ->)->
        return if false == Array.isArray arr

        for k, v of arr
            ref = cb v, k
            break if false == ref

        return

    exports

