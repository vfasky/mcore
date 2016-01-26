###*
# 
# @date 2016-01-21 19:34:48
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

_id = 0

Template = require './template'
{setElementAttr, each} = require './util'

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
                
            for attr, value of @props
                @setAttribute el, attr, value


            # 渲染子元素
            each @children, (child)->
                if child instanceof Element
                    childEl = child.render()
                else
                    childEl = document.createTextNode child

                el.appendChild childEl
        el

    # 移除属性
    removeAttribute: (attrName)->
        attrName = attrName.toLowerCase()

        # 通知组件更新
        if @_component
            @_component.update attrName, null
            return

        for binder in @_binders
            if binder.attrName == attrName
                binder.binder.remove.call @, @el if binder.binder.remove
                return

        @el.removeAttribute attrName

    
    destroy: ->
        return if !@template

        if @_component
            @_component.destroy()

        # 移除事件
        for attrName of @props
            if attrName.indexOf('on-') == 0
                event = attrName.replace('on-', '')
                @template.removeEvent event, @el, @_id



    # 设置属性值
    setAttribute: (el, attrName, value)->
        attrName = String(attrName).toLowerCase()
        # 已经绑定模板引擎
        if @template
            
            # 事件注册
            if attrName.indexOf('on-') == 0
                @template.addEvent attrName.replace('on-', ''), el, value, @_id
                setElementAttr el, '_mc', @_id, true
                return

            # 通知组件更新
            if @_component
                @_component.update attrName, value
                return

            for binder in @_binders
                if binder.attrName == attrName
                    # init
                    if attrName not in @_bindersReg
                        @_bindersReg.push attrName
                        binder.binder.init.call @, el if binder.binder.init

                    # update
                    if binder.binder.update
                        binder.binder.update.call @, el, value
                    else
                        binder.binder.call @, el, value

                    binder.value = value
                        
                    return

        setElementAttr el, attrName, value, true
        
    # 绑定自定义组件
    bindComponent: ->

        return false if false == Template.components.hasOwnProperty @tagName

        el = document.createElement @tagName
        @_component = new Template.components[@tagName] el, @
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
