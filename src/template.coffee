###*
# 基于 virtual dom 的模板引擎
# @date 2016-01-09 16:39:56
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

EventEmitter = require './eventEmitter'
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


    # 将 @scope 的变化，更新dom
    set: (args...)->
        if args.length == 1 and util.isObject(args[0])
            @scope = args[0]
        else if args.length == 2
            @scope[args[0]] = args[1]
        else
            return

        return if @_status == 0

        @emit 'changeScope', @scope
        @renderQueue @

    # 取值
    get: (key, defaultVal = null)->
        if @scope.hasOwnProperty(key)
            return @scope[key]
        return defaultVal

    # 销毁
    destroy: ->
        if @refs and @refs.parentNode and @refs.parentNode.removeChild
            @refs.parentNode.removeChild @refs


    # 预留接口 , new 时调用
    init: ->


    # 渲染操作
    _render: (data, done)->
        scope = clone data.scope
        
        virtualDom = @virtualDomDefine scope
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

        @_status = 2
        @emit 'rendered'
        done() if done


    # 渲染队列
    renderQueue: (data, doneOrAsync)->
        nextTick.clear @_queueId

        # 马上渲染，不进队列
        if true == doneOrAsync
            @_render data
        else
            @_status = 1
            @_queueId = nextTick =>
                @_render data, doneOrAsync

        
    # 渲染
    render: (@virtualDomDefine, @scope = {}, doneOrAsync = ->)->
        @_status = 1
        @emit 'beforeRender'
        @renderQueue @, true
        doneOrAsync() if doneOrAsync


module.exports = Template
