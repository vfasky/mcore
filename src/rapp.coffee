###*
 *
 * @module mcore/rapp
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/rapp', ['react', 'mcore/route', 'mcore/rtemplate', 'mcore/class'],
(React, route, Template, EventClass)->
    
    "use strict"

    App = EventClass.extend
        initialize: (@mountNode = document.body, @options = {})->
            if false == @options.hasOwnProperty 'routeChange'
                @options.routeChange = route.Route.changeByLocationHash

            # 路由
            @router = new route.Route @options.routeChange

            # 中间件
            @_middlewares = []

            # 当前的 view
            @curView = null

            # 标注是否正在加载view
            @_onLoadViw = false

            return

    # 添加中间件
    App::use = (middleware)->
        @_middlewares.push middleware
        @

    # stack
    App::stack = (ix = 0, err = null, done = ->)->
        return @_runView done if ix == @_middlewares.length

        middleware = @_middlewares[ix]
        nextIx = ix + 1
        next = (err)=>
            @stack nextIx, err, done

        @env.View = @curView
        middleware.call @env, err, next

    # 运行中间件
    App::runMiddlewares = (done = ->)->
        if @_middlewares.length == 0
            return @_runView done

        @stack 0, null, done


    # 绑定路由
    App::route = (path, viewName)->
        self = @
        @router.add path, ->
            self.runView viewName, @, arguments
        
        @

    App::render = (View, data)->
        AppView = React.createClass
            displayName: 'App'
            render: =>
                React.createElement 'div', null,
	                React.createElement(View, {
                        env: @env
                        args: @env.args
                        context: @env.context
                        data: data
                    })

        @emit 'render', Template.render AppView, null, @mountNode

        
    App::_runView = (done = ->) ->
        view = @curView()

        view.on 'beforeRender', =>
            @emit 'beforeRender'
        view.on 'render', (res)=>
            @render res.View, res.data


    # 启动view
    App::runView = (viewName, route, args)->
        return if @_onLoadViw

        @_onLoadViw = true

        # ENV
        @env =
            route: route
            context: route.context
            args: args
            viewName: viewName
            app: @

        requirejs [viewName], (View)=>
            @emit 'runView', viewName
            @curView = View

            @runMiddlewares =>
                @_onLoadViw = false



    # 启动
    App::run = -> @router.run()


    App
