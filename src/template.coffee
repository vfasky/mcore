###*
# 基于 virtual dom 的模板引擎
# @date 2016-01-09 16:39:56
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

EventEmitter = require './eventEmitter'
util = require './util'
#observe = require './observe'

{clone, nextTick, each, isFunction} = require './util'
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

        # 已经注册的事件
        @_eventReged = []

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

    test: ->
        alert 'hello'

    # 观察 scope
    watchScope: ->
        return if @__initWatch
        @__initWatch = true
        #observe @scope, (args...)=>
            #@renderQueue @
            #console.log args


    # 将 @scope 的变化，更新dom
    set: (key, value, doneOrAsync = null)->
        @scope[key] = value
        return if @_status == 0

        @emit 'changeScope', @scope, key, value
        @renderQueue doneOrAsync


    # 取值
    get: (key, defaultVal = null)->
        if @scope.hasOwnProperty(key)
            return @scope[key]
        return defaultVal


    # 销毁
    destroy: ->
        if @__initWatch
            Object.unobserve @scope

        if @refs and @refs.parentNode and @refs.parentNode.removeChild
            @refs.parentNode.removeChild @refs


    # 预留接口 , new 时调用
    init: ->


    # 渲染操作
    _render: (done)->
        scope = util.extend true, @scope
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

            # 更新dom
            patch @refs, patches

        #console.log @binders

        @_status = 2
        @emit 'rendered'
        done() if util.isFunction done

    
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
    regEvent: (event, el, callback, id)->
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

        #console.log @_events

        @addEventListener event

        
    # 注册事件
    addEventListener: (event)->
        if !@refs
            @_initTask.push => @addEventListener event
            return
        if event not in @_eventReged
            @_eventReged.push event
            @refs.addEventListener event, (e)=>
                tasks = @_events[event]
                each tasks, (task)=>
                    if task.el == e.target
                        res = null
                        if isFunction task.callback
                            res = task.callback task.el, e

                        else if isFunction @[task.callback]
                            res = @[task.callback] task.el, e

                        else
                            throw new Error 'not callback :' + task.callback
                        
                        if false == res
                            if e.stopPropagation and e.preventDefault
                                e.stopPropagation()
                                e.preventDefault()
                            else
                                window.event.cancelBubble = true
                                window.event.returnValue = false
                        return false

        
    # 渲染
    render: (@virtualDomDefine, scope = {}, doneOrAsync = ->)->
        @_status = 1
        @emit 'beforeRender'

        scopeKeys = Object.keys scope
        scopeLen = scopeKeys.length

        if scopeLen == 0
            @renderQueue doneOrAsync
        else
            ix = scopeLen - 1
            each scopeKeys, (v, k)=>
                @set v, scope[v], k == ix and doneOrAsync or null

        @watchScope()
        this


# 过滤函数
Template.formatters = require './formatters'

# 组件
Template.components = {}

# 属性
Template.binders = require './binders'



module.exports = Template
