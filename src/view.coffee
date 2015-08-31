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
            Template.render uri, data, @
                
        when: ->
            $.when.apply @, arguments

        destroy: ->
            @tpl.destroy() if @tpl
            @$el.remove()
        
        beforeInit: ->
        init: ->
        run: ->
        afterRun: ->
        watch: ->



