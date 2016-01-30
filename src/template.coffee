###*
# 基于 virtual dom 的模板引擎
# @date 2016-01-09 16:39:56
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

EventEmitter = require './eventEmitter'
#observe = require './observe'

{extend, nextTick, each, isFunction, objectKeys, addEvent, removeEvent, nodeContains} = require './util'
diff = require './diff'
patch = require './patch'

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

        # 初始化 @refs 后，执行的队列
        @_initTask = []

        # 事件
        @_events = {}

        # 已经注册的事件名称
        @_eventReged = []

        # 已经注册的事件
        @_eventListener = {}

        # 真实 dom 的引用
        # @public
        # @type { DOM | null }
        @refs = null

        # virtual dom 定义
        # @public
        # @type { Function | null }
        @virtualDomDefine = null

        # virtual dom
        # @public
        # @type { Object | null }
        @virtualDom = null

        # object, 必须是可被序列化成JSON的值
        # 如果对象的值变更，更新dom
        @scope = {}

        @init()


    # 将 @scope 的变化，更新dom
    set: (key, value, doneOrAsync = null)->
        @scope[key] = value
        return if @_status == 0

        @emit 'changeScope', @scope, key, value
        @emit 'change:' + key, value
        @renderQueue doneOrAsync


    # 删除 scope 的 key
    remove: (key, doneOrAsync = null)->
        if false == @scope.hasOwnProperty(key)
            return

        delete @scope[key]
        return if @_status == 0

        @emit 'removeScope', @scope, key
        @emit 'change:' + key, null
        @renderQueue doneOrAsync


    # 取值
    get: (key, defaultVal = null)->
        if @scope.hasOwnProperty(key)
            return @scope[key]
        return defaultVal


    # 销毁
    destroy: ->
        if @refs and @refs.parentNode and @refs.parentNode.removeChild
            @refs.parentNode.removeChild @refs
            
        @virtualDomDefine = null
        @virtualDom = null
        @scope = null
        @refs = null


    # 预留接口 , new 时调用
    init: ->


    # 渲染操作
    _render: (done)->
        scope = extend true, @scope
        #scope = data.scope
        
        {virtualDom} = @virtualDomDefine scope, @
        # 未渲染，不用对比
        if @virtualDom == null
            @virtualDom = virtualDom
            @refs = @virtualDom.render()

            each @_initTask, (task)-> task()
            @_initTask = []
        else
            # 对比
            patches = diff @virtualDom, virtualDom
            @virtualDom = virtualDom
            #console.log patches, @refs

            # 更新dom
            patch @refs, patches

        @_status = 2
        @emit 'rendered', @refs
        done @refs if isFunction done

    
    # 渲染队列
    renderQueue: (doneOrAsync)->
        nextTick.clear @_queueId

        # 马上渲染，不进队列
        if true == doneOrAsync
            @_render()
        else
            @_status = 1
            @_queueId = nextTick =>
                @_render doneOrAsync


    # 注册事件
    addEvent: (event, el, callback, id)->
        event = event.toLowerCase()
        
        @_events[event] or= []
        isIn = false
        each @_events[event], (e)->
            if e.id == id
                isIn = true
                e.callback = callback
                return false
        if false == isIn
            @_events[event].push
                el: el
                callback: callback
                id: id

        @addEventListener event

    # 移除事件
    removeEvent: (event, el, id)->
        return if !@refs

        event = event.toLowerCase()
        return if false == @_events.hasOwnProperty(event)

        each @_events[event], (e, i)=>
            if e.id == id
                @_events[event].splice i, 1
                return false

        # 移除事件
        if @_events[event].length == 0
            removeEvent @refs, event, @_eventListener[event]
        
    # 注册事件
    addEventListener: (event)->
        if !@refs
            @_initTask.push => @addEventListener event
            return
        if event not in @_eventReged
            @_eventReged.push event
            @_eventListener[event] = (e)=>
                tasks = @_events[event]
                each tasks, (task)=>
                    if task.el == e.target or nodeContains task.el, e.target
                        res = null
                        if @_proxy and isFunction @_proxy[task.callback]
                            res = @_proxy[task.callback] task.el, e

                        else if isFunction task.callback
                            res = task.callback task.el, e

                        else if isFunction @[task.callback]
                            res = @[task.callback] task.el, e

                        else
                            throw new Error 'not callback : ' + task.callback
                        
                        if false == res
                            if e.stopPropagation and e.preventDefault
                                e.stopPropagation()
                                e.preventDefault()
                            else
                                window.event.cancelBubble = true
                                window.event.returnValue = false
                        return false

            addEvent @refs, event, @_eventListener[event]

        
    # 渲染
    render: (@virtualDomDefine, scope = {}, doneOrAsync = ->)->
        @_status = 1
        @emit 'beforeRender'

        scopeKeys = objectKeys scope
        scopeLen = scopeKeys.length

        if scopeLen == 0
            @renderQueue doneOrAsync
        else
            ix = scopeLen - 1
            each scopeKeys, (v, k)=>
                @set v, scope[v], k == ix and doneOrAsync or null

        this


# 过滤函数
Template.formatters = require './formatters'

# 组件
Template.components = {}

# 属性
Template.binders = require './binders'


module.exports = Template
