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
        key = []
        reg = pathToRegexp(path, key, @sensitive, @strict)
        @rule.push
            path: path
            reg: reg
            key: key
            fn: fn
        return

    Route::urlToObject = (url)->
        url = String url
        argStr = ''
        attr = []
        if url.indexOf('?') != -1
            argStr = url.split('?').pop()
        else if url.indexOf('&') != -1


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
        Route: Route
    }
