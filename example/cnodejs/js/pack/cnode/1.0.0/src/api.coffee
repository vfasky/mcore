###*
 * api
 * @module cnode/api
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/api', ['jquery'], ($)->
    
    "use strict"

    _host = 'https://cnodejs.org'

    exports =
        topics: (data = {})->
            data = $.extend
                mdrender: false
                limit: 10
            , data
            
            $.get _host + '/api/v1/topics', data



