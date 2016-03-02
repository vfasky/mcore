###*
 *
 * 扩展 模板，增加 @.$scope 属性， @.$scope 更改，模板更新
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

require '../vendor/object-observe-lite' if !Object.observe

module.exports = (mcore)->
    {util, Template} = mcore

    _TemplatePlus = Template::_plus
    Template::_plus = ->
        @.$scope = {}

        Object.observe @.$scope, (changes)=>
            util.each changes
            @syncScope()

        _TemplatePlus.call @
        

    Template::watchObject = (obj)->
        Object.observe obj, (changes)=>
            util.each changes, (change)=>
                if change.type == 'add' and util.isPlainObject(obj[change.name])
                    @watchObject obj[change.name]
            @syncScope()


    Template::syncScope = ->
        data = util.extend true, @.$scope

        for k, v of data
            if @scope[k] != v
                console.log 'chagne:' + k
                @set k, v


    Template::render = (@virtualDomDefine, scope = {}, doneOrAsync = ->)->
        @_status = 1
        @emit 'beforeRender'

        scopeKeys = util.objectKeys scope
        scopeLen = scopeKeys.length

        if scopeLen == 0
            @renderQueue doneOrAsync
        else
            ix = scopeLen - 1
            util.each scopeKeys, (v, k)=>
                @set v, scope[v], k == ix and doneOrAsync or null
                # 只同步
                @.$scope[v] = scope[v]


        this

    mcore.Template = Template

    if mcore.View
        _ViewPlus = mcore.View::_plus
        mcore.View::_plus = ->
            @.$scope = @template.$scope
            _ViewPlus.call @
