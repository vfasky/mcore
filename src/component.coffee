###*
# 组件
# @date 2016-01-23 16:46:42
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'
EventEmitter = require './eventEmitter'

Template = require './template'

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


    destroy: ->
        @template.destroy() if @template

module.exports = Component
