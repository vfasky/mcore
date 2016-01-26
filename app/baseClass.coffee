###*
# 
# @date 2016-01-26 15:20:09
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{EventEmitter, Template, util} = require 'mcore'
$ = require 'jquery'

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

loadPromise = (data)->
    dtd = $.Deferred()
    keys = util.objectKeys data

    if keys.length == 0
        dtd.resolve {}
    else
        promises = []
        each keys, (v)->
            promises.push data[v]

        $.when.apply(null, promises).done (args...)->
            vData = {}
            util.each args, (v, k)=>
                key = keys[k]
                if key
                    # 坑
                    if util.isArray(v) and v.length == 3 and v[2].promise
                        v = v[0]
                    vData[key] = v

            dtd.resolve vData
        .fail (err)->
            dtd.reject err
        
    dtd.promise()

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

        @template = false

        @beforeInit()
        @init()
        @watch()


    beforeInit: ->


    init: ->


    watch: ->

    # 渲染
    render: (@virtualDomDefine, scope = {})->
        if !@template
            @template = new Template()

        dtd = $.Deferred()
        
        loadPromise(scope).then (scope)=>
            @template.render @virtualDomDefine, scope, (refs)->
                dtd.resolve refs
        .fail (err)->
            dtd.reject err

        dtd.promise()
        

    set: (key, value)->
        return if !@template
        if util.isFunction value.then
            return value.then (val)=>
                @template.set key, val
        else
            @template.set key, value

    get: ->
        @template.get.apply @template, arguments if @template


    remove: ->
        @template.remove.apply @template, arguments if @template
        

    clone: (value)->
        util.extend true, value

        
    destroy: ->
        @template.destroy() if @template


    when: ->
        $.when.apply @, arguments

module.exports = BaseClass
