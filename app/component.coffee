###*
 *
 * 扩展组件
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

$ = require 'jquery'
mcore = require 'mcore'
Template = require './template'
{loadPromise, isFunction} = require './util'

$win = $ window
$body = $ 'body'


class Component extends mcore.Component

    constructor: (@el, @virtualEl = null)->
        @.$win = $win
        @.$body = $body

        @template = new Template()
        @template._proxy = @

        @_isInit = false
        @_plus()

        @init()
        @watch()


    render: (virtualDomDefine, scope = {}, doneOrSync = null)->
        if true == doneOrSync
            return super virtualDomDefine, scope, doneOrSync

        dtd = $.Deferred()

        loadPromise(scope).then (scope)=>
            super virtualDomDefine, scope, (refs)->
                dtd.resolve refs
                doneOrSync refs if isFunction doneOrSync
        .fail (err)->
            dtd.reject err

        dtd.promise()


module.exports = Component
