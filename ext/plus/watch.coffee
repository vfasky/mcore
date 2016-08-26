###*
 *
 * 扩展 模板，增加 @.$scope 属性， @.$scope 更改，模板更新
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

require '../vendor/object-observe-lite' if !Object.observe
require '../vendor/array-observe' if !Array.observe

module.exports = (mcore)->
    {util} = mcore

    class Watch
        constructor: (@scope, @syncScope = ->)->
            @_watchReg = {}
            @_watchTotal = 0
            @watch @scope

        unwatch: ->
            for k, v of @_watchReg
                if v.type == 'object'
                    Object.unobserve v.obj, v.observer
                else
                    Array.unobserve v.obj, v.observer

            @_watchReg = {}

        unwatchByPath: (path)->
            reg = @_watchReg[path]
            return if !reg
            # 取消观察
            if reg.type == 'object'
                Object.unobserve reg.obj, reg.observer
            else
                Array.unobserve reg.obj, reg.observer
            delete @_watchReg[path]

        watch: (obj, root = '')->
            # 已经注册
            return if @_watchReg[root] and @_watchReg[root].obj == obj
            return if @_watchTotal > 2000
            @_watchTotal++

            type = 'undefined'
            if util.isPlainObject(obj)
                type = 'object'
            else if util.isArray(obj)
                type = 'array'

            return if type not in ['object', 'array']

            observer = (changes)=>
                util.each changes, (change)=>
                    if change.type == 'add'
                        if util.isPlainObject(obj[change.name]) or util.isArray(obj[change.name])
                            @_watchTotal = 1
                            @watch obj[change.name], root + '.' + change.name
                    else if change.type == 'splice'
                        @unwatchByPath root
                        @watch obj, root
                    else if change.type == 'delete' and @_watchReg[root + '.' + change.name]
                        @unwatchByPath root + '.' + change.name

                    else if change.type in ['reconfigure', 'update']
                        @unwatchByPath root + '.' + change.name
                        #console.log root + '.' + change.name

                        if util.isPlainObject(obj[change.name]) or util.isArray(obj[change.name])
                            @_watchTotal = 1
                            @watch obj[change.name], root + '.' + change.name

                @syncScope root

            # 注册
            @_watchReg[root] =
                obj: obj
                type: type
                observer: observer

            if type == 'object'
                Object.observe obj, observer

                # 注册子属性
                for k, v of obj
                    if util.isPlainObject(v) or util.isArray(v)
                        @watch v, root + '.' + k

            else
                Array.observe obj, observer

                for v, i in obj
                    if util.isPlainObject(v) or util.isArray(v)
                        @watch v, root + '.' + i

    # 扩展 Component
    _ComponentPlus = mcore.Component::_plus
    mcore.Component::_plus = ->
        @watchObject = new Watch @template.scope, (path)=>
            if @template and @template._status == 3 and @template.virtualDomDefine
                @template.renderQueue()

        @template.on 'destroy', =>
            @watchObject.unwatch()

        @scope = @template.scope
        _ComponentPlus.call @


    # 扩展 View
    if mcore.View
        _ViewPlus = mcore.View::_plus
        mcore.View::_plus = ->
            @watchObject = new Watch @template.scope, (path)=>
                if @template._status == 3 and @template.virtualDomDefine
                    @template.renderQueue()

            @template.on 'destroy', =>
                @watchObject.unwatch()

            @scope = @template.scope
            _ViewPlus.call @

    # 扩展 PopUpView
    if mcore.PopUpView
        _PopUpViewPlus = mcore.PopUpView::_plus
        mcore.PopUpView::_plus = ->
            @watchObject = new Watch @template.scope, (path)=>
                if @template._status == 3 and @template.virtualDomDefine
                    @template.renderQueue()

            @template.on 'destroy', =>
                @watchObject.unwatch()

            @scope = @template.scope
            _PopUpViewPlus.call @


    return Watch
