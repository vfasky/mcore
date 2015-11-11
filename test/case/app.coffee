###*
 * app test
 * @module case/app
 * @author vfasky <vfasky@gmail.com>
###

###*
 * test home
 * @module view/home
 * @author vfasky <vfasky@gmail.com>
###
define 'view/home', ['jquery', 'mcore'], ($, mcore)->
    
    "use strict"

    View = mcore.View

    View.subclass
        constructor: View::constructor
        run: ->
            @$el.html 'welcome'
            @runShow()

        runShow: ->
            # 注： 正常的做法是 
            # location.href ='#/test/show/1'
            @app.router.match '/test/show/1'


###*
 * test show
 * @module view/show
 * @author vfasky <vfasky@gmail.com>
###
define 'view/show', ['jquery', 'mcore'], ($, mcore)->
    
    "use strict"

    View = mcore.View

    View.subclass
        constructor: View::constructor
        run: (id)->
            @$el.html id


define 'case/app',
['describe', 'it', 'mcore', 'assert', 'jquery'],
(describe, it, mcore, assert, $)->
    
    "use strict"

    View = mcore.View
    App = mcore.App

    describe 'app test', ->

        it 'router', (done)->
            $el = $ '<div />'

            app = new App $el

            # 中间件1
            app.use (err, next)-> next()
            # 中间件2
            app.use (err, next)-> next()
            
            # 路由分发
            app.route '/test/show/:id', 'view/show'
               .route '*', 'view/home'

            app.on 'runView', (view)->
                console.log view
                if view.name == 'view/show'
                    ref = view.instantiate.$el.text()
                    done() if ref == '1'

            app.router.match '/test/show/1'

