###*
#
# @date 2016-01-26 15:20:09
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{EventEmitter} = require 'mcore'
Template = require './template'
$ = require 'jquery'
util = require './util'

{each, loadPromise} = util

# window
$win = $ window
# body
$body = $ 'body'

# 是否在微信中打开
_isWeixinBrowser = (/MicroMessenger/i).test(
    window.navigator.userAgent
)

# 是否在ios中打开
_isIOS = (/iphone|ipad/gi).test(
    window.navigator.appVersion
)

_id = 0


class BaseClass extends EventEmitter

    constructor: ->
        # 当前 view id
        @_id = _id++

        # 属性
        @.$win = $win
        @.$body = $body
        @util = util
        @nextTick = util.nextTick

        # 是否在微信中打开
        @isWeixinBrowser = _isWeixinBrowser
        # 是否在ios中打开
        @isIOS = _isIOS

        @template = new Template()
        @template._proxy = @

        @beforeInit()
        @init()
        @watch()


    beforeInit: ->


    init: ->


    watch: ->

    # 渲染
    render: (@virtualDomDefine, scope = {})->

        dtd = $.Deferred()

        loadPromise(scope).then (scope)=>
            @template.render @virtualDomDefine, scope, (refs)=>
                @emit 'rendered', refs
                dtd.resolve refs
        .fail (err)->
            dtd.reject err

        dtd.promise()


    set: ->
        @template.set.apply @template, arguments

    get: ->
        @template.get.apply @template, arguments


    remove: ->
        @template.remove.apply @template, arguments


    clone: (value)->
        util.extend true, {}, value


    destroy: ->
        @template.destroy()


    when: ->
        $.when.apply @, arguments


BaseClass.loadPromise = loadPromise

module.exports = BaseClass
