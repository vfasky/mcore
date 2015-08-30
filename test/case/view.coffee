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

            @isWeixinBrowser = _isWeixinBrowser
            @isIOS = _isIOS

            @tpl = false

            @beforeInit()
            @init()


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
            keys = Object.keys data
            dtd = $.Deferred()
            
            # 初始值
            if keys.length > 0
                keys.forEach (k)=>
                    @set k, {}
                    
            # 模板已经初始化，更新
            if @tpl
                @tpl.update data
                dtd.resolve()
                @emit 'tplUpdate'
            else
                Template.loadTpl(uri).done (html)=>
                    @$el.append html
                    @tpl = new Template @, data
                    dtd.resolve()
                    @emit 'render'
                .reject (err)->
                    dtd.reject err || 'Template init error'

            dtd.promise()

                
        when: -> $.when.apply @, arguments

        
        beforeInit: ->
        init: ->
        run: ->
        afterRun: ->
        watch: ->


