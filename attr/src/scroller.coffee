###*
 * scroller
 * @module mcore-attr/scroller
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore-attr/scroller', ['jquery', 'mcore/template', 'scroller'],
($, Template, scroller)->
    
    "use strict"
    
    $win = $ document

    docStyle = document.documentElement.style

    if docStyle.hasOwnProperty 'WebkitAppearance'
        engine = 'webkit'
    else if docStyle.hasOwnProperty 'MozAppearance'
        engine = 'gecko'
    else if typeof navigator.cpuClass == 'string'
        engine = 'trident'
    else if window.opera && Object.prototype.toString.call(opera) == '[object Opera]'
        engine = 'presto'

    vendorPrefix = {
        webkit: 'Webkit'
        trident: 'ms'
        gecko: 'Moz'
        presto: 'O'
    }[engine]

    helperElem = document.createElement 'div'
    perspectiveProperty = vendorPrefix + 'Perspective'
    transformProperty = vendorPrefix + 'Transform'

    # 渲染
    render = (content)->
        if helperElem.style.hasOwnProperty perspectiveProperty
            return (left, top, zoom)->
                content.style[transformProperty] =
                    "translate3d(#{(-left)}px, #{(-top)}px,0) scale(#{zoom})"

                return
        else if helperElem.style.hasOwnProperty transformProperty
            return (left, top, zoom)->
                content.style[transformProperty] =
                    "translate(#{(-left)}px, #{(-top)}px,0) scale(#{zoom})"
                return

        return (left, top, zoom)->
            content.style.marginLeft = left and (-left/zoom) + 'px' or ''
            content.style.marginTop = top and (-top/zoom) + 'px' or ''
            content.style.zoom = zoom or ''
            return

    _id = 0

    # 加载图片完成，回调
    loadImg = (src, done=->)->
        return done() if !src
        img = new Image()
        img.onload = done
        img.onerror = done
        img.src = src

    Template.regAttr 'scroller', Template.Attr.subclass
        constructor: Template.Attr::constructor
        init: ->
            _id++
            @id = _id
            @scrollingY = @$el.attr('data-scrolling-y') == 'yes'
            @scrollingX = @$el.attr('data-scrolling-x') == 'yes'

            @scrollingY = true if @scrollingX == @scrollingY and @scrollingX == false

            @height = Number @$el.attr('data-scrolling-height') or 0
            @width = Number @$el.attr('data-scrolling-width') or 0

            @loadImgTime = false

            @$el.wrap '<div class="scroller-wrap"></div>'
            
            @$container = @$el.parent().css
                overflow: 'hidden'
                
            @scroller = new scroller.Scroller render(@$el[0]),
                scrollingX: @scrollingX
                scrollingY: @scrollingY
                zooming: false
                locking: false

            @$el.data 'scroller', @scroller

            @soureSize =
                width: 0
                height: 0

            @size =
                width: 0
                height: 0
            
            @resize()

        update: (value, el)->
            @$el = $ el
            @resize()

            $img = @$el.find 'img'
            imgLen = $img.length
            if imgLen > 0
                clearTimeout @loadImgTime if @loadImgTime
                loadTotal = 0
                @loadImgTime = setTimeout =>
                    self = @
                    $img.each ->
                        loadImg this.src, ->
                            loadTotal++
                            if loadTotal == imgLen
                                self.resize()

                , 300
                

        destroy: ->
            @$el.remove()
            $win.off "touchmove.scroller#{@id}"
                .off "touchend.scroller#{@id}"
                .off "mousemove.scroller#{@id}"
                .off "mouseup.scroller#{@id}"
                .off "resize.scroller#{@id}"

        getSoureHeight: ->
            height = 0
            
            @$el.children().each ->
                height += $(@).outerHeight()

            height

        getSoureWidth: ->
            width = 0
            
            @$el.children().each ->
                width += $(@).outerWidth()

            width


        watch: ->
            container = @$container[0]
            mousedown = false
            touchDown = false
            isTouch = false

            @on 'touchend', (data) =>
                e = data.e
                vals = data.vals
                
                #console.log @soureSize.height , vals.top, @size.height
                if vals.top + @size.height > @soureSize.height
                    @$el.trigger 'scrollend', e, @
                else if vals.top < 20
                    @$el.trigger 'scrollstart', e, @

            container.addEventListener 'touchstart', (e)=>
                isTouch = true
                return if e.target.tagName.match(/input|textarea|select/i)

                touchDown = true
                @scroller.doTouchStart e.touches, e.timeStamp
                return false
            , false

            $win.on "touchmove.scroller#{@id}", (event)=>
                e = event.originalEvent
                @scroller.doTouchMove e.touches, e.timeStamp, e.scale or 1
                e.preventDefault() if touchDown

            $win.on "touchend.scroller#{@id}", (event)=>
                isTouch = true
                touchDown = false
                e = event.originalEvent

                @scroller.doTouchEnd e.timeStamp
                @emit 'touchend',
                    e: e,
                    vals: @scroller.getValues()
                
                return

            container.addEventListener 'mousedown', (e)=>
                return if isTouch
                return if e.target.tagName.match(/input|textarea|select/i)

                @scroller.doTouchStart [
                    pageX: e.pageX
                    pageY: e.pageY
                ], e.timeStamp

                mousedown = true
                
            , false

            $win.on "mousemove.scroller#{@id}", (event)=>
                return if isTouch
                e = event.originalEvent
                return if false == mousedown

                @scroller.doTouchStart [
                    pageX: e.pageX
                    pageY: e.pageY
                ], e.timeStamp

                mousedown = true
                e.preventDefault()

            $win.on "mouseup.scroller#{@id}", (event)=>
                return if isTouch
                e = event.originalEvent
                return if false == mousedown
                
                @scroller.doTouchEnd e.timeStamp

                @emit 'touchend',
                    e: e,
                    vals: @scroller.getValues()

                mousedown = false

            $win.on "resize.scroller#{@id}", =>
                @resize()

                
        resize: ->
            container = @$container[0]
            content = @$el[0]
            rect = container.getBoundingClientRect()

            @scroller.setPosition(
                rect.left + container.clientLeft,
                rect.top + container.clientTop
            )
            
            width = @width or container.clientWidth
            height = @height or container.clientHeight

            sWidth = content.offsetWidth
            sHeight = content.offsetHeight

            #处理拖动区太低
            if @scrollingY and 0 == @height
                height = $win.outerHeight() - rect.top
            #处理内容区太低
            if @scrollingY and sHeight < height
                sHeight = @getSoureHeight()
                sHeight = height + 80 if sHeight < height
                #alert sHeight

            if @scrollingX and 0 == @width
                _width = @getSoureWidth() + 4
                #console.log _width
                sWidth = _width if _width > sWidth
                height = sHeight

            @$container.css
                width: width or '100%'
                height: height or '100%'

            #console.log """
            #    {width} #{height}
            #    {sWidth} #{sHeight}
            #"""

            @soureSize =
                width: sWidth
                height: sHeight

            @size =
                width: @$container.width()
                height: @$container.height()
                
            sHeight += 40 if @scrollingY

            @scroller.setDimensions(
                width,
                height,
                sWidth,
                sHeight
            )

    return
