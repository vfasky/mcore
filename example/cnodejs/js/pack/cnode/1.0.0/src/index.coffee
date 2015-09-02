###*
 * 首页
 * @module cnode/index
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/index',
['jquery', 'cnode/view', 'mcore-attr/scroller', 'cnode/formatters'], ($, View)->
    
    "use strict"

    View.subclass
        constructor: View::constructor
        run: (tab)->
            @page = 1
            @render 'cnode/index.html',
                topics: @getTopics @page
                loadPageDone: true

        getTopics: (page = 1)->
            @cache "indexTopics#{page}", @api.topics(
                page: page
            ), storage: 'memory'

        watch: ->

            @$el.on 'scrollend', =>
                return if @get('loadPageDone') == false

                @set 'loadPageDone', false
                topics = @clone @get 'topics'
                @api.topics
                    page: @page + 1
                .done (res)=>
                    @page++
                    res.data.map (v)=>
                        topics.data.push v
                    
                    @set 'topics', topics
                .always =>
                    @set 'loadPageDone', true


