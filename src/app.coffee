###*
 * app
 * @module mcore/app
 * @author vfasky <vfasky@gmail.com>
###
"use strict"

$ = require 'jquery'
Stapes = require 'stapes'
route = require './route'
config = require('./config')()

exports = module.exports = Stapes.subclass
    constructor: (@$el, options = {})->
        @options = $.extend
            viewClass: 'mcore-app-view'
            routeChange: route.Route.changeByLocationHash
        , options

        # 路由
        @router = new route.Route @options.routeChange
        # 当前的 view
        @curView = null

        # 标注是否正在加载view
        @_onLoadViw = false

        # 中间件
        @_middlewares = []
        
        return
    
    route: (path, viewName)->
        self = @
        @router.add path, ->
            self.runView viewName, @, arguments
        
        @

    # 添加中间件
    use: (middleware)->
        @_middlewares.push middleware
        @

    _runView: (done = ->)->
        @curView.instantiate.route = @env.route
        @curView.instantiate.context = @env.context
        @curView.instantiate.run.apply @curView.instantiate, @env.args
        @emit 'runView', @curView

        done @curView.instantiate

    # stack
    stack: (ix = 0, err = null, done = ->)->
        return @_runView done if ix == @_middlewares.length

        middleware = @_middlewares[ix]
        nextIx = ix + 1
        next = (err)=>
            @stack nextIx, err, done

        @env.view = @curView.instantiate
        middleware.call @env, err, next


    # 运行中间件
    runMiddlewares: (done = ->)->
        if @_middlewares.length == 0
            return @_runView done

        @stack 0, null, done


    # 启动view
    runView: (viewName, route, args)->
        return if @_onLoadViw

        # ENV
        @env =
            route: route
            context: route.context
            args: args
            viewName: viewName
            app: @

        if @curView
            # 已经初始化，只调用run方法
            if @curView.name == viewName
                @runMiddlewares =>
                    @curView.instantiate.afterRun()
                return
            # 删除旧实例
            else
                @emit 'destroyView', @curView
                @curView.instantiate.destroy()
                @curView = null

        @_onLoadViw = true
    
        config.AMDLoader [viewName], (View)=>
            $el = $ "<div class='#{@options.viewClass}' />"

            @curView =
                name: viewName
                instantiate: new View $el, @

            @runMiddlewares =>
                @curView.instantiate.$el.appendTo @$el
                @curView.instantiate.afterRun()
                @_onLoadViw = false


    run: ->
        @router.run()


