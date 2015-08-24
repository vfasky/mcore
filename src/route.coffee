###*
 * 路由
 * @module mcore/route
 * @author vfasky <vfasky@gmail.com>
 * @example 
 * route = new mcore.Route()
 *
 * route.add '/index/:id', (id)->
 *     console.log id
 *
 * route.add '/show/*', (name)->
 *     console.log name
 * 
 * route.add '/get/:id?', (id)->
 *     console.log id # or undefined
 * 
 * route.add 'user user/:id', (id)->
 *     console.log route.lookup('user', id:1) #/user/1
 *
 * route.run()
###
define 'mcore/route', ->
    
    "use strict"

    _isNumberReg = /^-{0,1}\d*\.{0,1}\d+$/

    # 将路径转化为正则
    pathToRegexp = (path, keys = [], sensitive = false, strict = false)->

        return path if path instanceof RegExp

        toKeys = (_, slash, format, key, capture, optional) ->
            keys.push
                name: key
                optional: !!optional

            slash = slash or ''

            '' + (optional and '' or slash) +
            '(?:' + (optional and slash or '') +
            (format or '') +
            (capture or (format and '([^/.]+?)' or '([^/]+?)')) + ')' +
            (optional or '')


        path = path.concat strict and '' or '/?'
                   .replace /\/\(/g, '(?:/'
                   .replace /\+/g, '__plus__'
                   .replace /(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, toKeys
                   .replace /([\/.])/g, '\\$1'
                   .replace /__plus__/g, '(.+)'
                   .replace /\*/g, '(.*)'

        new RegExp('^' + path + '$', sensitive and '' or 'i')
                       

    # 将get 参数转换为对象
    pathToObject = (url)->
        url = String url
        argStr = ''
        attr = []
        if url.indexOf('?') != -1
            argStr = url.split('?').pop()
        else if url.indexOf('&') != -1
            argStr = url

        return {} if argStr == ''

        args = argStr.split '&'
        data = {}
        keys = []

        args.forEach (v)->
            return if v.indexOf('=') == -1
            v = v.split '='
            return if v.length != 2

            key = v[0].trim()
            value = v[1]
            if _isNumberReg.test value
                value = Number value
            else
                value = decodeURIComponent value
            data[key] = value
            return
        
        data

    ###*
     * 路由
    ###
    Route = (
        @hashchange = Route.changeByLocationHash,
        @sensitive = false,
        @strict = false
    )->
        @rule = []
        return


    Route::add = (path, fn)->
        keys = []
        reg = pathToRegexp(path, keys, @sensitive, @strict)

        @rule.push
            path: path
            reg: reg
            keys: keys
            fn: fn
            
        @


    Route::match = (url)->
        path = String url
        fullPath = path
        argStr = ''
        getIx = path.indexOf '?'
        getIx = path.indexOf '&' if getIx == -1
        # 路由只配对一次
        isMatch = false

        if getIx != -1
            argStr = path.substring getIx
            path = path.substring 0, getIx

        @rule.forEach (v)=>
            return if isMatch
            ref = v.reg.exec path
            return if null == ref

            isMatch = true
            context = pathToObject argStr
            
            data = {}
            args = []
            for i in [1...ref.length]
                k = v.keys[i-1]
                value = ref[i]

                if _isNumberReg.test value
                    value = Number value
                else if value
                    value = decodeURIComponent value

                data[k.name] = value if k and k.name
                args.push value or null

            env =
                url: fullPath
                path: v.path
                context: context
                keys: v.keys
                data: data
            
            v.fn.apply env, args
            return

        @


    # 通过 hashchange 触发
    Route.changeByLocationHash = (emit)->
        hashChanged = ->
            emit window.location.hash.substring(1)

        if window.addEventListener
            window.addEventListener 'hashchange', hashChanged, false
        else
            window.attachEvent 'onhashchange', hashChanged


    return {
        pathToRegexp: pathToRegexp
        pathToObject: pathToObject
        Route: Route
    }
