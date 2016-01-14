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

{clone, nextTick} = require './util'
{diff, patch} = require './virtualDom'


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

        # virtual dom
        # @public
        # @type { Object | null }
        @virtualDom = null

        # object, 必须是可被序列化成JSON的值
        # 如果对象的值变更，更新dom
        @scope = {}

        @init()

    # 观察 scope
    watchScope: ->
        return if @__initWatch
        @__initWatch = true
        #observe @scope, (args...)=>
            #@renderQueue @
            #console.log args


    # 将 @scope 的变化，更新dom
    set: (args...)->
        doneOrAsync = null
        if args.length > 1
            key = args[0]
            val = args[1]
            @scope[key] = val
            doneOrAsync = args[2] if args.length == 3
        else
            return

        return if @_status == 0

        @emit 'changeScope', @scope, key, val
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
        
        {virtualDom, @binders} = @virtualDomDefine scope, @
        # 未渲染，不用对比
        if @virtualDom == null
            @virtualDom = virtualDom
            @refs = @virtualDom.render()
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

    # 处理 dom 的 attr
    routineBinder: (virtualDom)->
        for attr, list of @binders
            list.forEach (v)->
                if virtualDom.props[v.attr] == v.id
                    Template.binders[attr](virtualDom.el, v.val)
        return

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
            scopeKeys.forEach (v, k)=>
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
