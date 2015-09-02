###*
 * util
 * @module mcore/util
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/util', ->
    
    "use strict"

    exports = {}

    _isNumberReg = /^-{0,1}\d*\.{0,1}\d+$/

    _cachePre = '__cache_'

    _localStorage = window.localStorage

    # 存放内存，刷新页面失效
    _memoryStorage = {}

    exports.isNumber = (x)->
        _isNumberReg.test x
        

    exports.isObject = (x)->
        Object::toString.call(x) == '[object Object]'


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
            promise.abort() if promise.abort
            dtd = $.Deferred()
            dtd.resolve exports.clone(data)
            return dtd.promise()
        else
            return promise.then (res)->
                options.proxy.set key, exports.clone(res), options.time

    ###*
     * 基于本地存放的cache
     * @author vfasky <vfasky@gmail.com>
     * 
    ###
    exports.promiseCacheLocalProxy =
        set: exports.cache.set
        get: exports.cache.get

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

