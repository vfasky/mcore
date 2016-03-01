###*
# #组件
# @date 2016-01-23 16:46:42
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'
EventEmitter = require './eventEmitter'
Template = require './template'
util = require './util'

###
## demo
``` coffeescript
{Template, Component} = require 'mcore'

class Time extends Component
    init: ->
        #渲染完成时执行
        @on 'rendered', =>
            #1秒后，更新time值，当渲染完成时
            #会执行 rendered, 等同于，每秒
            #更新一次time值
            setTimeout =>
                @set 'time', new Date()
            , 1000

        @render require('./tpl/tagTime.html'),
            time: new Date(),
            id: 2

#注册组件
Template.components.time = Time
```

**模板可以只是一个变量**
``` html
<!-- ./tpl/tagTime.html -->
{scope.time}
```

注册组件后，在其它模板中使用该TAG: `time`
``` html
<div class="test">
    <time mc-id="scope.id"></time>
    <!--render:<time id="2">Tue Feb 16 2016 16:11:58 GMT+0800 (CST)</time>-->
</div>
```
###
class Component extends EventEmitter
    ## @el 真实的 DOM
    ## @virtualEl 虚拟 el
    constructor: (@el, @virtualEl = null)->
        @template = new Template()
        @template._proxy = @

        @_isInit = false

        @init()
        @watch()

    ## 初始化
    init: ->

    ###
    ## 观察属性更新

    ```coffee
    class Time extends Component
        watch: ->
            #<time mc-id="scope.id"></time>
            #当 id 属性更新时，执行
            @on 'change:id', (value)->
                console.log value

    ```
    ###
    watch: ->

    ###
    ## 向 parent dom 发送自定义事件
    当组件有自定义事件，向上级DOM对发送事件

    如： <time> 有一个自定义事件 'change-time'

    ```html
    <time mc-on-change-time="chageTime"></time>
    ```

    当 scope.time 更新时，需要通知调用它的模板引擎

    ```coffee
    #自定义组件
    class Time extends Component
        init: ->
            #渲染完成时执行
            @on 'rendered', =>
                #1秒后，更新time值，当渲染完成时
                #会执行 rendered, 等同于，每秒
                #更新一次time值
                setTimeout =>
                    time = new Date()
                    @set 'time', time
                    #触发自定义事件，并传参 time
                    @emitEvent 'change-time', [time]
                , 1000

            @render require('./tpl/tagTime.html'),
                time: new Date(),
                id: 2

    #template
    tpl = new Template()
    tpl.changeTime = (time)->
        console.log time
    ```

    > **约定** 如果是`click`等标准事件触发的自定义事件
    > 需将 event, el 这两个参数传回, 如

    ```coffee
    class Tabs extends Component

        init: ->
            @.$el = $ @el
            @render require('../tpl/tag/tabs.html'),
                index: 0
                items: []

        #当用户点击tab时，参数原路回传
        changeTab: ->
            @emitEvent 'change-tab', arguments
            false
    ```

    ```html
    <ul class="tab">
        <li mc-for="v, i in scope.items"
            mc-class="'item ' + (i == scope.index ? 'current' : '')">
            <a mc-data-ix="i"
               mc-on-click="changeTab(v, i)"
               class="link">{v.title}</a>
        </li>
    </ul>
    ```

    ###
    emitEvent: (eventName, args)->
        proxyEventName = @getProxyEventName eventName
        parentView = @el._element.template._proxy
        return if !parentView

        if util.isFunction parentView[proxyEventName]
            parentView[proxyEventName].apply parentView, args


    ###
    ## 渲染, 同 Template 方法
     - {Function} virtualDomDefine 用于生成 virtual dom 的函数
     - {Object} scope
     - {Null | Function | Boolean} doneOrAsync 渲染成功时回调或者马上渲染，不放入队列
    ###
    render: (@virtualDomDefine, scope = {}, doneOrAsync = true)->
        if false == @_isInit
            @_isInit = true
            @template.once 'rendered', (@refs)=> @mount()
            @template.on 'rendered', (refs)=> @emit 'rendered', refs

        @template.render @virtualDomDefine, scope, doneOrAsync



    ## 插入渲染完成的DOM
    mount: ->
        @el.appendChild @refs
        @emit 'mount', @refs

    # ## 更新 `scope` 同 Template 方法
    set: ->
        @template.set.apply @template, arguments if @template


    # ## 取 `scope`值 同 Template 方法
    get: ->
        @template.get.apply @template, arguments if @template


    # ## 移除 `scope`值 同 Template 方法
    remove: ->
        @template.remove.apply @template, arguments if @template


    ##属性有更新
    update: (attrName, value)->
        if @get(attrName) != value
            @set attrName, value
            @emit 'update', attrName, value
            @emit 'change:' + attrName, value



    ##取代理事件名
    getProxyEventName: (eventName)->
        return null if !@virtualEl or !@virtualEl.props
        @virtualEl.props['on-' + eventName]


    destroy: ->
        if @template
            @template.destroy()
            @template = null

module.exports = Component
