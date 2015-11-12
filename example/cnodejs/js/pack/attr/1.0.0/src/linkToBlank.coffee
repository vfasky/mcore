###*
 * 外部连接新窗口打开
 * @module attr/linkToBlank
 * @author vfasky <vfasky@gmail.com>
###

"use strict"

$ = require 'jquery'
mcore = require 'mcore'

origin = window.location.origin

mcore.Template.regAttr 'link-to-blank', mcore.Template.Attr.subclass
    constructor: mcore.Template.Attr::constructor
    init: ->
        @.$el.on 'click', 'a', ->
            href = String @.href

            # 转换topic 连接
            if href.indexOf('cnodejs.org/topic/') != -1
                id = href.split('cnodejs.org/topic/').pop()
                window.location.href = '#/topic/' + id
                return false

            if href.indexOf(origin) != 0
                window.open href
                return false

