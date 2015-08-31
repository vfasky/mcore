###*
 *
 * @module cnode/topic
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/topic', ['jquery', 'cnode/view'], ($, View)->
    
    "use strict"

    View.subclass
        constructor: View::constructor
        run: (id)->
           @render 'cnode/topic.html',
               topic: @api.topic id

