###*
 * util
 * @module mcore/util
 * @author vfasky <vfasky@gmail.com>
###

"use strict"

_isNumberReg = /^-{0,1}\d*\.{0,1}\d+$/

_cachePre = '__cache_'

_localStorage = window.localStorage

# 存放内存，刷新页面失效
_memoryStorage = {}

exports.isNumber = (x)->
    _isNumberReg.test String(x)
    
exports.isObject = (x)->
    Object::toString.call(x) == '[object Object]'

exports.isString = (x)->
    Object::toString.call(x) == '[object String]'

exports.clone = (value)->
    JSON.parse JSON.stringify(value)

# 基于本地存储的缓存
exports.cache =
    set: (key, value, time = Infinity)->
        time = (new Date()).getTime() + parseInt(time) if time != Infinity
        data =
            time: time
            value: value

        _localStorage.setItem _cachePre + key, JSON.stringify data

    get: (key, defaultVal = null)->
        data = _localStorage.getItem _cachePre + key
        return defaultVal if !data

        data = JSON.parse data
        curTime = (new Date()).getTime()

        return data.value if curTime <= data.time

        exports.cache.remove key

        defaultVal

    remove: (key)->
        _localStorage.removeItem _cachePre + key


###*
 * promise cache
 * @author vfasky <vfasky@gmail.com>
 * @param key 缓存key 
###
exports.promiseCache = (key, promise, options)->

    data = options.proxy.get key
    
    if data
        dtd = $.Deferred()
        dtd.resolve exports.clone(data)
        return dtd.promise()
    else
        return promise().then (res)->
            options.proxy.set key, exports.clone(res), options.time

###*
 * 基于本地存放的cache
 * @author vfasky <vfasky@gmail.com>
 * 
###
exports.promiseCacheLocalProxy =
    set: exports.cache.set
    get: exports.cache.get
    remove: exports.cache.remove

###*
 * 基于内存的cache
 * @author vfasky <vfasky@gmail.com>
 * 
###
exports.promiseCacheMemoryproxy =
    set: (key, value)->
        _memoryStorage[key] = value
    get: (key)->
        _memoryStorage[key] or null
    remove: (key)->
        delete _memoryStorage[key]

        
###*
 * 遍历数组
###
exports.each = (arr, cb = ->)->
    return if false == Array.isArray arr

    for k, v of arr
        ref = cb v, k
        break if false == ref

    return

#
# format, printf-like string formatting for JavaScript
# github.com/samsonjs/format
#
# Copyright 2010 - 2011 Sami Samhuri <sami@samhuri.net>
# ISC license
#
exports.format = (format) ->
    argIndex = 1
    args = [].slice.call(arguments)
    i = 0
    n = format.length
    result = ''
    c = undefined
    escaped = false
    arg = undefined
    precision = undefined

    nextArg = ->
        args[argIndex++]

    slurpNumber = ->
        digits = ''
        while format[i].match(/\d/)
            digits += format[i++]
        if digits.length > 0 then parseInt(digits) else null

    while i < n
        c = format[i]
        if escaped
            escaped = false
            precision = slurpNumber()
            switch c
                when 'b'
                    # number in binary
                    result += parseInt(nextArg(), 10).toString(2)
                when 'c'
                    # character
                    arg = nextArg()
                    if typeof arg == 'string' or arg instanceof String
                        result += arg
                    else
                        result += String.fromCharCode(parseInt(arg, 10))
                when 'd'
                    # number in decimal
                    result += parseInt(nextArg(), 10)
                when 'f'
                    # floating point number
                    result += parseFloat(nextArg()).toFixed(precision or 6)
                when 'o'
                    # number in octal
                    result += '0' + parseInt(nextArg(), 10).toString(8)
                when 's'
                    # string
                    result += nextArg()
                when 'x'
                    # lowercase hexadecimal
                    result += '0x' + parseInt(nextArg(), 10).toString(16)
                when 'X'
                    # uppercase hexadecimal
                    result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase()
                else
                    result += c
                    break
        else if c == '%'
            escaped = true
        else
            result += c
        ++i
    result

