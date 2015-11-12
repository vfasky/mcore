###*
 * api
 * @module cnode/api
 * @author vfasky <vfasky@gmail.com>
###
"use strict"

$ = require 'jquery'

_host = 'https://cnodejs.org/api/v1'

module.exports =
    # 主题列表
    topics: (data = {})->
        data = $.extend
            mdrender: false
            limit: 10
        , data
        
        $.get _host + '/topics', data
    
    # 主题详情
    topic: (id)->
        $.get _host + '/topic/' + id,
            mdrender: false

    # 用户详情
    user: (userName)->
        $.get _host + '/user/' + userName




