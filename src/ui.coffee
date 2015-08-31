###*
 * ui
 * @module mcore/ui
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/ui', ['jquery', 'mcore/template', 'stapes'], ($, Template, stapes)->
    
    "use strict"

    stapes.subclass
        constructor: ($el, @options = {})->
            @$el = $ '<div/>'
            @$parent = $el

            @on 'render', =>
                @$el.appendTo @$parent

            @init()
            @watch()

        destroy: ->
            @tpl.destroy() if @tpl
            @$el.remove()

        render: (uri, data = {})->
            Template.render uri, data, @

        renderString: (html, data = {})->
            Template.renderString html, data, @

        init: ->
        watch: ->
