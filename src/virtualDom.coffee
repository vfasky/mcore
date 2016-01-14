###*
# simple-virtual-dom
# @date 2016-01-07 21:50:58
###
'use strict'

{el, diff, patch} = require 'simple-virtual-dom'

Element = el
render = el.prototype.render
Element::render = ->
    el = render.call @
    console.log el
    el

module.exports =
    el: Element
    diff: diff
    patch: patch
