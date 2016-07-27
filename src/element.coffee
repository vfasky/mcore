###*
# 修改自 simple-virtual-dom
# @date 2016-01-21 19:34:48
###
'use strict'

_id = 0

Template = require './template'
{setElementAttr, each, isFunction} = require './util'

class Element
    constructor: (tagName, @props = {}, @children = [])->
        @tagName = tagName.toLowerCase()

        @_id = _id++
        # 自定义属性绑定
        @_binders = []
        # 已经初始化的属性
        @_bindersReg = []

        # 自定义组件
        @_component = null

        @_componentTree = []

        @key = @props.key or undefined

        count = 0

        each @children, (child, i)=>
            if child instanceof Element
                count += child.count
            else
                @children[i] = String child

            count++

        @count = count

    render: ->
        el = @bindComponent()

        if false == el
            el = document.createElement @tagName

            # 已经绑定模板引擎
            if @template
                el._element = @
                @el = el



            # 渲染子元素
            each @children, (child)=>
                if child instanceof Element
                    childEl = child.render()
                    if child._component
                        @_componentTree.push child._component

                    if child._componentTree
                        for c in child._componentTree
                            @_componentTree.push c
                else
                    childEl = document.createTextNode child

                el.appendChild childEl

            for attr, value of @props                
                @setAttribute el, attr, value


            for binder in @_binders
                binder.binder.rendered.call @, el, binder.value if binder.binder.rendered

        if !el._element and @_componentTree.length > 0
            el._element = @
            @el = el

        el


    # 移除属性
    removeAttribute: (attrName)->
        attrName = attrName.toLowerCase()

        # 通知组件更新
        if @_component
            @_component.update attrName, null

        for binder in @_binders
            if binder.attrName == attrName
                binder.binder.remove.call @, @el if binder.binder.remove
                binder.value = null
                return

        @el.removeAttribute attrName


    destroy: ->

        if @_component
            @_component.destroy()

        for c in @_componentTree
            #console.log c
            c.destroy()

        @_componentTree = []
        @_component = null

        return if !@template

        # 移除事件
        for attrName of @props
            if attrName.indexOf('on-') == 0
                event = attrName.replace('on-', '')
                @template.removeEvent event, @el, @_id



    # 设置属性值
    setAttribute: (el, attrName, value)->

        attrName = String(attrName).toLowerCase()

        # 通知组件更新
        if @_component
            @_component.update attrName, value

        # 已经绑定模板引擎
        if @template

            # 事件注册
            if attrName.indexOf('on-') == 0
                @template.addEvent attrName.replace('on-', ''), el, value, @_id
                #setElementAttr el, '_mc', @_id, true
                return


            for binder in @_binders
                if binder.attrName == attrName

                    # init
                    if attrName not in @_bindersReg
                        @_bindersReg.push attrName
                        binder.binder.init.call @, el if binder.binder.init

                    #return if binder.value == value

                    # update
                    if binder.binder.update
                        binder.binder.update.call @, el, value
                    else if isFunction(binder.binder)
                        binder.binder.call @, el, value

                    binder.value = value

                    return
        setElementAttr el, attrName, value, true


    # 绑定自定义组件
    bindComponent: ->

        return false if false == Template.components.hasOwnProperty @tagName

        el = document.createElement @tagName
        el._element = @
        @_component = new Template.components[@tagName] el, @
        #@_componentTree.push @_component

        for attr, value of @props
            @setAttribute el, attr, value

        el._component = @_component
        el


    # 绑定自定义属性
    bindBinder: (attrName, value)->
        if Template.binders.hasOwnProperty attrName
            @_binders.push
                binder: Template.binders[attrName]
                value: value
                attrName: attrName.toLowerCase()

    bindTemplate: (@template)->

module.exports = Element
