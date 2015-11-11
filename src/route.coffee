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
"use strict"

util = require './util'

###*
 * 将路径转化为正则 
 * @author vfasky <vfasky@gmail.com>
 * 
###
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
 * 将 url 的参数转换为对象
 * @author vfasky <vfasky@gmail.com>
 * 
###
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
        if util.isNumber(value) and String(value).length < 14
            value = Number value
        else
            value = decodeURIComponent value
        data[key] = value
        return
    
    data

###*
 * 路由
 * @author vfasky <vfasky@gmail.com>
 * 
###
Route = (
    @hashchange = Route.changeByLocationHash,
    @sensitive = false,
    @strict = false
)->
    @rule = []
    return


###*
 * 开始监听路由
 * @author vfasky <vfasky@gmail.com>
 * 
###
Route::run = ->
    @hashchange (url)=>
        @match url
        return
    return


###*
 * 添加规则
 * @author vfasky <vfasky@gmail.com>
 *
###
Route::add = (path, fn)->
    keys = []
    reg = pathToRegexp(path, keys, @sensitive, @strict)

    @rule.push
        path: path
        reg: reg
        keys: keys
        fn: fn
        
    @


###*
 * 配对 url
 * @author vfasky <vfasky@gmail.com>
 *
###
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

    util.each @rule, (v)->
        return false if isMatch
        ref = v.reg.exec path
        return if null == ref

        isMatch = true
        context = pathToObject argStr
        
        data = {}
        args = []
        for i in [1...ref.length]
            k = v.keys[i-1]
            value = ref[i]

            if util.isNumber(value) and String(value).length < 14
                value = Number value
            else if value
                value = decodeURIComponent value

            data[k.name] = value if k and k.name
            args.push value or null

        env =
            url: fullPath
            path: path
            args: argStr
            rule: v.path
            context: context
            keys: v.keys
            data: data
        
        v.fn.apply env, args
        return

    @


###*
 * 通过 hashchange 触发
 * @author vfasky <vfasky@gmail.com>
 * 
###
Route.changeByLocationHash = (emit)->
    hashChanged = ->
        emit window.location.hash.substring(1)

    if window.addEventListener
        window.addEventListener 'hashchange', hashChanged, false
    else
        window.attachEvent 'onhashchange', hashChanged

    #init
    hashChanged()


###
    通过 history api 触发
    @author jackieLin <dashi_lin@163.com>
###
Route.changeByHistory = (emit) ->
    if !window.history
        Route.changeByLocationHash emit

    historyChange = ->
        emit window.location.hash.substring(1)

    window.onpopstate = (event) ->
        historyChange()

    # init
    historyChange()


exports = module.exports =
    pathToRegexp: pathToRegexp
    pathToObject: pathToObject
    Route: Route

