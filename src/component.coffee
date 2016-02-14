###*
# 组件
# @date 2016-01-23 16:46:42
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'
EventEmitter = require './eventEmitter'
Template = require './template'
util = require './util'

class Component extends EventEmitter
    # @el 真实的 DOM
    # @virtualEl 虚拟 el
    constructor: (@el, @virtualEl)->
        @init()
        @watch()

    # 初始化
    init: ->

    watch: ->


    # 渲染
    render: (@virtualDomDefine, scope = {})->
        if !@template
            @template = new Template()
            @template._proxy = @
            @template.once 'rendered', (@refs)=> @mount()
            @template.on 'rendered', (refs)=> @emit 'rendered', refs

        @template.render @virtualDomDefine, scope, true


    mount: ->
        @el.appendChild @refs


    set: ->
        @template.set.apply @template, arguments if @template


    get: ->
        @template.get.apply @template, arguments if @template


    remove: ->
        @template.remove.apply @template, arguments if @template


    # 属性有更新
    update: (attrName, value)->
        if @get(attrName) != value
            @set attrName, value
            @emit 'update', attrName, value
            @emit 'change:' + attrName, value


    # 向 parent dom 发送自定义事件
    emitEvent: (eventName, args)->
        proxyEventName = @getProxyEventName eventName
        parentView = @el._element.template._proxy
        return if !parentView

        if util.isFunction parentView[proxyEventName]
            parentView[proxyEventName].apply parentView, args

            
    # 取代理事件名
    getProxyEventName: (eventName)->
        return null if !@virtualEl or !@virtualEl.props
        @virtualEl.props['on-' + eventName]



    destroy: ->
        if @template
            @template.destroy()
            @template = null

module.exports = Component
