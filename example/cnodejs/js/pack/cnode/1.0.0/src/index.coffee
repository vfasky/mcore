###*
 * 首页
 * @module cnode/index
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/index', ['jquery', 'cnode/view', 'mcore-attr/scroller'], ($, View)->
    
    "use strict"

    View.subclass
        constructor: View::constructor
        run: (tab)->
          
            @render 'cnode/index.html',
                topics: @api.topics()

        watch: ->
            @on 'render', ->
                $scroller = @$el.find('.scroller')
                console.log $scroller.data 'scroller'

