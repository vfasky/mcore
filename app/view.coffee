###*
# view
# @date 2016-01-26 15:10:13
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{Template, util} = require 'mcore'
$ = require 'jquery'


class View extends require('./baseClass')

    constructor: (@$el, @app)->
        super()
        @_plus()
        @el = @$el[0]
        @.subViews = []
        @curVix = 0
        @once 'rendered', (refs)=>
            @el.appendChild refs


    _plus: ->


    setTitle: (@title)->
        return if document.title == @title

        document.title = @title

        if @isWeixinBrowser and @isIOS
            $iframe = $ '<iframe src="/favicon.ico"></iframe>'

            $iframe.one 'load', ->
                setTimeout ->
                    $iframe.remove()
                , 0
            .appendTo @.$body

    # 后退
    back: ->
        if window.history.length > 1
            window.history.back()
        else
            window.location.href = '#'
        return false

    destroy: ->
        super()
        @.$el.remove()

    # 打开一个子视图
    openSubView: (View,options={})->
        try
            # 初始化zIndex参数
            if !options.zIndex
                options.zIndex = @.curVix + 1
            _view = new View(@,options)
            _view.vix = @.curVix++
            if _view
                _view.on 'close', (isBack)=>
                    _tmpArr = []
                    # 将改子view从父级的数组中移除
                    @.subViews.forEach (v)->
                        if v.vix != _view.vix
                            _tmpArr.push _view
                    @.subViews = _tmpArr
                    # 视图关闭回调
                    options.closeCallBack and options.closeCallBack(isBack)

                _view.run()
        catch e
            throw e

    run: ->

    afterRun: ->

module.exports = View
