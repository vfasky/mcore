###*
 * loading 效果
 * @module middleware/loader
 * @author vfasky <vfasky@gmail.com>
###
define 'middleware/loader', ['jquery'], ($)->
    
    "use strict"

    $el = $ '''
    <div class="loader-wrap">
        <div class="flower-loader">
            Loading…
        </div>
    </div>
    '''

    $el.appendTo 'body'

    (err, next)->
        return next err if err

        @view.on 'beforeRender', ->
            $el.show()

        @view.on 'tplBeforeUpdate', ->
            $el.show()

        @view.on 'render', ->
            #$el.hide()

        @view.on 'tplUpdate', ->
            #$el.hide()

        next()

