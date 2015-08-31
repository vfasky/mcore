###*
 * 
 * @module cnode/view
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/view', ['jquery', 'mcore', 'cnode/api'], ($, mcore, api)->
    
    "use strict"

    mcore.View.subclass
        constructor: mcore.View::constructor
        beforeInit: ->
            @api = api


