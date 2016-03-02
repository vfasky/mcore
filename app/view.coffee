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


    run: ->

    afterRun: ->

module.exports = View
