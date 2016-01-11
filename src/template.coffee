###*
# 基于 virtual dom 的模板引擎
# @date 2016-01-09 16:39:56
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

EventEmitter = require './eventEmitter'
requestAnimationFrame = require './requestAnimationFrame'

{diff, patch} = require './virtualDom'

require './objectWatch'

class Template extends EventEmitter
    constructor: ->

        # 状态值
        #   0 : 未加载 virtual dom
        #   1 : 已加载 virtual dom ，未渲染
        #   2 : 已加入渲染队列
        #   3 : 渲染完成
        # @type { Int }
        @_status = 0

        # 渲染队列id
        @_queueId = null

        # 真实 dom 的引用
        # @public
        # @type { DOM | null }
        @refs = null

        # virtual dom 定义
        # @public
        # @type { Function | null }
        @virtualDomDefine = null

        # virtual dom 定义
        # @public
        # @type { Object | null }
        @virtualDom = null

        # watch object
        # 如果对象的值变更，更新dom
        @scope = {}

        @init()


    # 观察 @scope 的变化，更新dom
    watchScope: ->
        return if @_initWatchObject or @_status == 0

        @_initWatchObject = true

        Object::watch @, 'scope', (id, oldval, newval)=>
            @email 'changeScope', oldval, newval
            @renderQueue @


    # 销毁
    destroy: ->
        if @_initWatchObject
            Object::unwatch @, 'scope'
        if @refs and @refs.parentNode and @refs.parentNode.removeChild
            @refs.parentNode.removeChild @refs


    # 预留接口 , new 时调用
    init: ->

    # 渲染操作
    _render: (data, done)->
        virtualDom = @virtualDomDefine data.scope
        # 未渲染，不用对比
        if @virtualDom == null
            @virtualDom = virtualDom
            @refs = @virtualDom.render()
        else
            # 对比
            patches = diff @virtualDom, virtualDom

            # 更新dom
            patch @refs, patches

        @_status = 2
        @emit 'rendered'
        done() if done


    # 渲染队列
    renderQueue: (data, doneOrAsync)->
        requestAnimationFrame.clear @_queueId

        # 马上渲染，不进队列
        if true == doneOrAsync
            @_render data
        else
            @_status = 1
            @_queueId = requestAnimationFrame =>
                @_render data, doneOrAsync

        
    # 渲染
    render: (@virtualDomDefine, @scope = {}, doneOrAsync = ->)->
        @_status = 1
        @emit 'beforeRender'
        @renderQueue @, doneOrAsync
        requestAnimationFrame => @watchScope()


module.exports = Template
