###*
 * 用户主页
 * @module cnode/user
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/user', ['jquery', 'cnode/view', 'cnode/formatters', 'mcore-attr/scroller'],
($, View)->
    
    "use strict"

    View.subclass
        constructor: View::constructor
        run: (userName)->
           @render 'cnode/user.html',
               user: @api.user userName


