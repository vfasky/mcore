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
         * 缓存 promise
         * @param {String} key
         * @param {Promise} promise
         * @param {Object} options
         * @param {String} [options.storage = session] 存放类型
         *   session: 更换 view 失效，
         *   memory: 刷新页面 失败
         *   localStorage: 放在 localStorage
         * @param {Number} options.time 有效时间，只对 localStorage 有效
         * @author vfasky <vfasky@gmail.com>
         * 
        ###
        cache: (key, promise, options = {})->
            options = $.extend
                 storage: 'session'
                 time: Infinity #只对 localStorage 有效
            , options

            proxyMap =
                session: @promiseCacheSessionProxy
                memory: util.promiseCacheMemoryproxy
                localStorage: util.promiseCacheLocalProxy

            options.proxy = proxyMap[options.time] or @promiseCacheSessionProxy

            util.promise.cache key, promise, options

        # 缓存 proxy
        promiseCacheSessionProxy: ->
            proxy =
                set: (key, value)->
                    @_cacheMap[key] = value
                get: (key)->
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



