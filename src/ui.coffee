###*
 * ui
 * @module mcore/ui
 * @author vfasky <vfasky@gmail.com>
###

"use strict"

$ = require 'jquery'
Template = require './template'
Stapes = require 'stapes'

$body = $ 'body'

exports = module.exports = Stapes.subclass
    constructor: ($el, @options = {})->
        @$el = $ '<div/>'
        @$parent = $el or $body

        @on 'render', =>
            @$el.appendTo @$parent

        @init()
        @watch()

    asyncSet: (key, promise)->
        promise.then (val)=>
            @set key, val
            val

    destroy: ->
        @tpl.destroy() if @tpl
        @$el.remove()

    render: (uri, data = {})->
        Template.render uri, data, @

    renderString: (html, data = {})->
        Template.renderString html, data, @

    init: ->
    watch: ->
