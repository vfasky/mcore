###*
 * 首页
 * @module cnode/index
 * @author vfasky <vfasky@gmail.com>
###


"use strict"

$ = require 'jquery'
mcore = require 'mcoreExt'
View = require './view'

module.exports = View.subclass
    constructor: View::constructor
    run: (tab)->
        
        @context.page = Number @context.page or 1
        @context.tab = @context.tab or ''

        @nextPage = @context.page + 1
        @prePage = @context.page - 1

        @page = 1
        @render 'cnode/index.html',
            topics: @getTopics()
            loadPageDone: true

    getTopics: ->
        page = @context.page
        tab = @context.tab

        promise = =>
            @api.topics
                page: page
                tab: tab
                
        @memoryCache("index_topics_#{page}_#{tab}").has promise
 

module.exports.viewName = 'index'
