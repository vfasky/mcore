###*
 *
 * @module cnode/topic
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/topic',
['jquery', 'cnode/view', 'mcore-attr/scroller', 'cnode/formatters'], ($, View)->
    
    "use strict"

    View.subclass
        constructor: View::constructor
        run: (id)->
            @render 'cnode/topic.html',
               topic: @api.topic(id)
               
