###*
 * loading 效果
 * @module middleware/loader
 * @author vfasky <vfasky@gmail.com>
###

"use strict"

$ = require 'jquery'

$el = $ '''
<div class="loader-wrap">
    <div class="flower-loader">
        Loading…
    </div>
</div>
'''

$el.hide().appendTo 'body'

module.exports = (err, next)->
    return next err if err

    @view.on 'beforeRender', ->
        $el.show()

    @view.on 'tplBeforeUpdate', ->
        $el.show()

    @view.on 'render', ->
        $el.hide()

    @view.on 'tplUpdate', ->
        $el.hide()

    next()

