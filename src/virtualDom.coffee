###*
# simple-virtual-dom
# @date 2016-01-07 21:50:58
###
'use strict'

{el, diff, patch} = require 'simple-virtual-dom'

class Element extends el
    render: ->
        @el = super()
        if @observe
            @emitBinderObserve()
            
        @el

    # 通知 binder
    emitBinderObserve: ->
        if @observe.binders
            @observe.routineBinder @


    bindObserve: (@observe)->


module.exports =
    el: Element
    diff: diff
    patch: patch
