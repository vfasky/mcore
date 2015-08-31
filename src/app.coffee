###*
 * app
 * @module mcore/app
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/app', ['jquery', 'stapes', 'mcore/route'], ($, Stapes, route)->
    
    "use strict"

    Stapes.subclass
        constructor: (@$el, options = {})->
            @options = $.extend
                viewClass: 'mcore-app-view'
                routeChange: route.Route.changeByLocationHash
            , options

            @router = new route.Route @options.routeChange
            @curView = null
            
            return
        
        route: (path, viewName)->
            self = @
            @router.add path, ->
                self.runView viewName, @, arguments
            
            @

        runView: (viewName, route, args)->
            if @curView
                # 已经初始化，只调用run方法
                if @curView.name == viewName
                    @curView.instantiate.route = route
                    @curView.instantiate.context = route.context
                    @curView.instantiate.run.apply @curView.instantiate, args
                    @emit 'runView', @curView
                # 删除旧实例
                else
                    @emit 'destroyView', @curView
                    @curView.instantiate.destroy()

            requirejs [viewName], (View)=>
                $el = $ "<div class='#{@options.viewClass}' />"

                @curView =
                    name: viewName
                    instantiate: new View $el, @

                @curView.instantiate.route = route
                @curView.instantiate.context = route.context
                @curView.instantiate.run.apply @curView.instantiate, args
                @curView.instantiate.$el.appendTo @$el
                @emit 'runView', @curView
                @curView.instantiate.afterRun()

        run: ->
            @router.run()


