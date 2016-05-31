###*
 * 弹层式view 寄托于主view 没有url指向
 * @module PopUpView
 * @author vega <vegawong@126.com>
###




$ = require 'jquery'
{Template, util} = require 'mcore'

class PopUpView extends require('./baseClass')
    constructor:(@parent,@opts={})->
        # console.log @
        super()
        @_plus()
        @.el = document.createElement 'div'
        @.el.style.position = 'absolute'
        @.el.style.left = 0
        @.el.style.top = 0
        @.el.style.width = '100%'
        @.el.style.height = '100%'
        @.el.style.backgroundColor = '#ffffff'
        @.el.style.zIndex = @opts.zIndex or 1
        @app = @parent.app


        @once 'rendered', (refs)=>
            @el.appendChild refs
            @parent.$el[0].appendChild @el



    _plus: ->

    back: ->
        @close(true)

    close: (isBack = false)->
        @.emit 'close',isBack
        util.nextTick =>
            @destroy()

    destroy: ->
        super()
        $(@.el).remove()



module.exports = PopUpView
