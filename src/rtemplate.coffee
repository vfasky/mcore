###*
 * react template
 * @module mcore/rtemplate
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/rtemplate', ['jquery', 'react', 'mcore/class'],
($, React, EventClass)->
    
    "use strict"

    Template = EventClass.extend
        initialize: (@tagName, @proto = {}) ->
            @proto.init.call @ if @proto.hasOwnProperty 'init'
            return

    
    Template::render = (uri, data = {})->

        @emit 'beforeRender'

        # 已经初始化
        if @View
            return Template.loadPromise(data).then (data)=>
                res =
                    View: @View
                    data: data

                @emit 'render', res

                res
        else
            return Template.loadTpl(uri).then (jsxDom)=>
                @jsxDom = jsxDom

                Template.loadPromise data
            .then (data)=>
                jsxDom = @jsxDom
                proto = $.extend {}, @proto
                proto.displayName = @tagName
                proto.render = ->
                    #console.log @props
                    jsxDom

                @View = React.createClass proto

                res =
                    View: @View
                    data: data

                @emit 'render', res

                res


    
    
    # 加载以object存放的promise,并以object返回
    Template.loadPromise = (data)->
        dtd = $.Deferred()
        keys = Object.keys data

        if keys.length == 0
            dtd.resolve {}
        else
            promises = []
            keys.forEach (v)=>
                promises.push data[v]

            $.when.apply(null, promises).done (args...)->
                vData = {}
                args.forEach (v, k)=>
                    key = keys[k]
                    if key
                        # 坑
                        if Array.isArray(v) and v.length == 3 and v[2].promise
                            v = v[0]
                        vData[key] = v

                dtd.resolve vData
            .fail (err)->
                console.log err
                dtd.reject err
            
        dtd.promise()

        
    ###*
     * 加载amd规范的模板，
     * 包名必须为 tpl/ 前缀
    ###
    Template.loadTpl = (uri)->
        dtd = $.Deferred()

        info = String(uri).split('/')

        if info.length == 2
            requirejs ["tpl/#{info[0]}"], (tpl)->
                html = tpl[info[1]]
                if html
                    dtd.resolve html
                else
                    dtd.reject 'url data map error'
        else
            dtd.reject 'uri error: ' + uri
        
        dtd.promise()

    Template.render = (View, data, mountNode)->
        React.render React.createElement(View, data), mountNode

 
    Template

