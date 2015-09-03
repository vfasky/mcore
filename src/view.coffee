###*
 * View
 * @module mcore/view
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/view', ['jquery', 'mcore/template', 'stapes', 'mcore/util'],
($, Template, Stapes, util)->
    
    "use strict"

    # window
    $win = $ window
    # body
    $body = $ 'body'

    # 是否在微信中打开
    _isWeixinBrowser = (/MicroMessenger/i).test(
        window.navigator.userAgent
    )

    # 是否在ios中打开
    _isIOS = (/iphone|ipad/gi).test(
        window.navigator.appVersion
    )

    Stapes.subclass

        constructor: (@$el, @app)->
            @$win = $win
            @$body = $body
            @util = util

            # 用于同一个view的缓存
            @_cacheMap = {}

            @isWeixinBrowser = _isWeixinBrowser
            @isIOS = _isIOS

            @tpl = false

            @beforeInit()
            @init()
            @watch()


        clone: (value)->
            util.clone value


        setTitle: (@title)->
            return if document.title == @title

            document.title = @title
            
            if @isWeixinBrowser and @isIOS
                $iframe = $ '<iframe src="/favicon.ico"></iframe>'

                $iframe.one 'load', ->
                    setTimeout ->
                        $iframe.remove()
                    , 0
                .appendTo @$body

                
        render: (uri, data = {})->
            Template.render uri, data, @

        renderString: (html, data = {})->
            Template.renderString html, data, @
                
        when: ->
            $.when.apply @, arguments

        destroy: ->
            @tpl.destroy() if @tpl
            @$el.remove()

        ###*
         * 缓存，基本内存，刷新页面失效
         * @author vfasky <vfasky@gmail.com>
         * 
        ###
        memoryCache: (key)->
            proxy = util.promiseCacheMemoryproxy
            
            cache =
                has: (promise)->
                    util.promiseCache key, promise, proxy: proxy
                remove: ->
                    proxy.remove key
                    
            cache

        ###*
         * 缓存，基本 localStorage
         * @author vfasky <vfasky@gmail.com>
         * 
        ###
        localCache: (key)->
            proxy = util.promiseCacheLocalProxy
            
            cache =
                has: (promise, time = Infinity)->
                    util.promiseCache key, promise,
                        proxy: proxy
                        time: time
                remove: ->
                    proxy.remove key
                    
            cache

        ###*
         * 缓存，基本当前 view 的生命周期
         * @author vfasky <vfasky@gmail.com>
         * 
        ###
        sessionCach: (key)->
            proxy = @promiseCacheSessionProxy()

            cache =
                has: (promise)->
                    util.promiseCache key, promise, proxy: proxy
                remove: ->
                    proxy.remove key
                    
            cache

        # 缓存 proxy
        promiseCacheSessionProxy: ->
            proxy =
                set: (key, value)=>
                    @_cacheMap[key] = value
                get: (key)=>
                    @_cacheMap[key] or null
            proxy

        # 后退
        back: ->
            if window.history.length > 1
                window.history.back()
            else
                window.location.href = '#'
            return false
        
        beforeInit: ->
        init: ->
        run: ->
        afterRun: ->
        watch: ->



