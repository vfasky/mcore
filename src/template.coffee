###
# # 基于 virtual dom 的模板引擎
# @date 2016-01-09 16:39:56
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

EventEmitter = require './eventEmitter'

{
    extend, nextTick, each, isFunction, isArray, isPlainObject,
    objectKeys, addEvent, removeEvent, nodeContains
} = require './util'

diff = require './diff'
patch = require './patch'

class Template extends EventEmitter
    ###
    ## demo

    ```coffee
    {Template} = require 'mcore'
    tpl = new Template()


    tpl.showIx = (event, el, v, k)->
        console.log v, k

    tpl.render require('./tpl/test.html'),
        list: [
           {name : 'ok1'}
           {name : 'ok2'}
        ]
    , -> # rendered
        document.body.appendChild tpl.refs
    ```

    ```html
    <!-- ./tpl/test.html -->
    <ul>
      <li mc-for="v , k in scope.list" mc-on-click="showIx(v, k)">
        <span mc-data-ix="k + 1">{v.name}</span>
      </li>
    </ul>

    ```

    > **注：模板事件回调至少传入二个参数**
    > * 第一个参数：event
    > * 第二个参数：DOM
    > * ... 模板中定义的参数，如：
    > `mc-on-click="showIx(v, k)"` 中接收 v, k
    > 需要这样 `tpl.showIx = (event, el, v, k)->`

    > *如果事件不需要传参，侧不需要 `()`, 否则 h2svd-loader 编绎时，会报错*
    ###
    constructor: ->

        # 模板状态值:
        #   * 0 : 未加载 virtual dom
        #   * 1 : 已加载 virtual dom ，未渲染
        #   * 2 : 已加入渲染队列
        #   * 3 : 渲染完成
        @_status = 0

        ## 渲染队列id
        @_queueId = null

        ## 初始化 @refs 后，执行的队列
        @_initTask = []

        ## 事件上下文
        @_events = {}

        ## 已经注册的事件名称
        @_eventReged = []

        ## 已经注册的事件
        @_eventListener = {}

        ## 真实 dom 的引用
        @refs = null

        ## virtual dom 定义
        @virtualDomDefine = null

        ## virtual dom
        @virtualDom = null

        ## 必须是可被序列化成JSON的值
        @scope = {}

        @init()


    ###
    ## 更新 `scope` 值
    ```coffee
    #清空 `scope.list`
    tpl.set 'list', []
    ```
    **注意!**

    `key` 只能是 scope 的属性，不能更新子属性
    如: `tpl.set 'list[0].name', 'test'` 是不正确的

    正确的做法是:
    ```coffee
    list = tpl.get 'list'
    list[0].name = 'test'
    tpl.set 'list', list
    ```

    你可以不停地更改 scope 的值，而不用担心性能问题，
    因为 scope 的更改，会放入队列中，放到浏览器的 nextTick 中渲染。
    换言之，你更改N次 scope , 模板引擎只更新一次 DOM

    如果你需要在值应用到DOM后，执行回调，可以传入第三个参数
    ```coffee
    tpl.set 'list', list, ->
        console.log 'dom change'
    ```

    你也可以强制模板引擎马上渲染DOM,而不是放入队列(当然，不推荐这样做，因为会阻塞后面的代码)
    ```coffee
    tpl.set 'list', list, true
    console.log 'dom change'
    ```
    ###
    set: (key, value, doneOrAsync = null)->
        isChange = @scope[key] != value
        @scope[key] = value
        return if @_status == 0

        if isChange
            @emit 'changeScope', @scope, key, value
            @emit 'change:' + key, value
        @renderQueue doneOrAsync


    ###
    ## 取值
    ```coffee
    list = tpl.get 'list'
    ```
    ###
    get: (key, defaultVal = null)->
        if @scope.hasOwnProperty(key)
            if isPlainObject(@scope[key])
                return extend true, {}, @scope[key]
            else if isArray(@scope[key])
                return extend true, [], @scope[key]
            else
                return @scope[key]

        return defaultVal



    ###
    ## 删除 scope 的 key
    ```coffee
    tpl.remove 'list'
    ```
    > 同样，第二个参数，可以是回调或者强制马上渲染
    ###
    remove: (key, doneOrAsync = null)->
        if false == @scope.hasOwnProperty(key)
            return

        delete @scope[key]
        return if @_status == 0

        @emit 'removeScope', @scope, key
        @emit 'change:' + key, null
        @renderQueue doneOrAsync


    ###
    ## 销毁实例
    已经插入 DOM Tree 的，会被移除
    ###
    destroy: ->
        @emit 'destroy'

        if @refs and @refs.parentNode and @refs.parentNode.removeChild
            @refs.parentNode.removeChild @refs

        @virtualDomDefine = null
        @virtualDom = null
        @scope = null
        @refs = null
        @_events = null
        @_initTask = null
        @_eventReged = null
        @_eventListener = null


    ###
    ## 预留接口 , extnds 时，直接重写
    ###
    init: ->

    ###
    ## 渲染
     - {Function} virtualDomDefine 用于生成 virtual dom 的函数
     - {Object} scope
     - {Null | Function | Boolean} doneOrAsync 渲染成功时回调或者马上渲染，不放入队列
    ###
    render: (@virtualDomDefine, scope = {}, doneOrAsync = ->)->
        @_status = 1
        @emit 'beforeRender'

        scopeKeys = objectKeys scope
        scopeLen = scopeKeys.length

        if scopeLen == 0
            @renderQueue doneOrAsync
        else
            #ix = scopeLen - 1
            each scopeKeys, (v)=> @set v, scope[v]
            @renderQueue doneOrAsync

        this


    ## 渲染操作
    _render: (done)->
        scope = extend true, @scope

        {virtualDom} = @virtualDomDefine scope, @
        @_status = 2
        ## 未渲染，不用对比
        if @virtualDom == null
            @virtualDom = virtualDom
            @refs = @virtualDom.render()

            each @_initTask, (task)-> task()
            @_initTask = []
        else
            ## 对比
            patches = diff @virtualDom, virtualDom
            @virtualDom = virtualDom

            ## 更新dom
            patch @refs, patches

        @_status = 3
        @emit 'rendered', @refs
        if isFunction done
            done @refs


    ## 渲染队列
    renderQueue: (doneOrAsync)->
        nextTick.clear @_queueId

        ## 马上渲染，不进队列
        if true == doneOrAsync
            @_render()
        else
            @_status = 1
            @_queueId = nextTick =>
                @_render doneOrAsync


    ## 注册事件
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
            @_events[event].splice 0, 0,
                el: el
                callback: callback
                id: id

        @addEventListener event

    ## 移除事件
    removeEvent: (event, el, id)->
        return if !@refs

        event = event.toLowerCase()
        return if false == @_events.hasOwnProperty(event)

        each @_events[event], (e, i)=>
            if e.id == id
                @_events[event].splice i, 1
                return false

        ## 移除事件
        if @_events[event].length == 0
            removeEvent @refs, event, @_eventListener[event]

    ## 注册事件回调
    regEventCallback: (event)->
        @_eventReged.push event
        @_eventListener[event] = (e)=>
            tasks = @_events[event]
            each tasks, (task)=>
                if task.el == e.target or nodeContains task.el, e.target
                    res = null
                    args = [e, task.el]
                    callbackName = task.callback

                    if isArray task.callback
                        _args = task.callback
                        callbackName = _args[0]

                        each _args, (arg, k)->
                            args.push arg if k > 0

                    if @_proxy and isFunction @_proxy[callbackName]
                        res = @_proxy[callbackName].apply @_proxy, args

                    else if isFunction callbackName
                        res = callbackName.apply @, args

                    else if isFunction @[callbackName]
                        res = @[callbackName].apply @, args

                    else
                        console.log task.callback
                        throw new Error 'not callback : ' + task.callback

                    if false == res
                        if e.stopPropagation and e.preventDefault
                            e.stopPropagation()
                            e.preventDefault()
                        else
                            window.event.cancelBubble = true
                            window.event.returnValue = false
                    return false


    ## 注册事件
    addEventListener: (event)->
        if !@refs
            @_initTask.push => @addEventListener event
            return
        if event not in @_eventReged
            @regEventCallback event
            addEvent @refs, event, @_eventListener[event]





# ## 过滤函数
Template.formatters = require './formatters'

# ## 组件
Template.components = {}

# ## 属性
Template.binders = require './binders'

# ## 用于从 DOM 的 String 属性取得对应 Template
Template.getEnv = (el)->
    proxyEnv = null

    if el._element.template._proxy
        proxyEnv = el._element.template._proxy
    else if el._element.template[funName]
        proxyEnv = el._element.template

    proxyEnv

# ## 用于从 DOM 的 String 属性取得对应 Template 的 Function
Template.strToFun = (el, funName)->
    return false if !el._element

    proxyFun = null
    proxyEnv = null

    if el._element.template.hasOwnProperty('_proxy') and el._element.template._proxy[funName]
        proxyEnv = el._element.template._proxy
    else if el._element.template[funName]
        proxyEnv = el._element.template

    if proxyEnv
        proxyFun = proxyEnv[funName]
        callback = ->
            proxyFun.apply proxyEnv, arguments

        return callback

    return false


module.exports = Template
