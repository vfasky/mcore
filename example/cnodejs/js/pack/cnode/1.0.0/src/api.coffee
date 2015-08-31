###*
 * api
 * @module cnode/api
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/api', ['jquery'], ($)->
    
    "use strict"

    _host = 'https://cnodejs.org/api/v1'

    exports =
        topics: (data = {})->
            data = $.extend
                mdrender: false
                limit: 10
            , data
            
            $.get _host + '/topics', data

        topic: (id)->
            $.get _host + '/topic/' + id,
                mdrender: false




