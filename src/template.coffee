###*
 * 模板
 * @module mcore/template
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/template', ['jquery', 'rivets', 'mcore/util'],
($, rivets, util)->
    
    "use strict"

    rivets.adapters[':'] =
        observe: (obj, keypath, callback)->
            obj.on 'change:' + keypath, callback
            return
        unobserve: (obj, keypath, callback)->
            obj.off 'change:' + keypath, callback
            return
        get: (obj, keypath)->
            obj.get(keypath)
        set: (obj, keypath, value)->
            obj.set(keypath, value)
            return
    

    rivets.configure
        # 模板事件传递方式
        handler: (target, event, binding)->
            ref = @call(binding.view.models.self, target, event)

            return if false != ref
            
            if event.stopPropagation and event.preventDefault
                event.stopPropagation()
                event.preventDefault()
            else
                window.event.cancelBubble = true
                window.event.returnValue = false


    ###*
     * Formatters
    ###

    # \r\n -> <br>
    rivets.formatters['nl2br'] = (value)->
        return '' if !value

        String(value)
            .trim()
            .replace(/<[^>]+>/g, "")
            .replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br/>' + '$2')


    # 连接字符
    rivets.formatters['link'] = (value, join)->
        return '' if !value
        String(value) + String(join)


    # 值为true, 才显示 show
    rivets.formatters['and'] = (value, show)->
        # 不是真，返回原值
        return value if !value

        show
            

    # 值为false, 才显示 show
    # <input rv-value="isShow | and 'ok' | or 'no'" />
    rivets.formatters['or'] = (value, show)->
        return value if value

        show


    # array slice
    rivets.formatters['slice'] = (value, start, end)->
        return [] if Array.isArray value

        value.slice start, end
        
        
    # 字符串截取
    rivets.formatters['substr'] = (value, start, end)->
        return '' if !value

        String(value).substring(start, end)


    # 长度
    rivets.formatters['len'] = (value)->
        return value.length if Array.isArray value
        return 0 if !value
        
        String(value).length


    # 判断两个值是否绝对相等
    rivets.formatters['eq'] = (value, x)->
        value == x


    #数字运算
    rivets.formatters['<'] = (value, x)->
        Number(value) < Number(x)


    rivets.formatters['<='] = (value, x)->
        Number(value) <= Number(x)


    rivets.formatters['=='] = (value, x)->
        Number(value) == Number(x)


    rivets.formatters['>='] = (value, x)->
        Number(value) >= Number(x)


    rivets.formatters['>'] = (value, x)->
        Number(value) > Number(x)
        

    rivets.formatters['+'] = (value, x)->
        Number(value) + Number(x)


    rivets.formatters['-'] = (value, x)->
        Number(value) - Number(x)


    rivets.formatters['*'] = (value, x)->
        Number(value) * Number(x)


    rivets.formatters['/'] = (value, x)->
        Number(value) / Number(x)


    # 是否数组
    rivets.formatters['isArray'] = (value)->
        Array.isArray value


    # 遍历对象
    rivets.formatters['eachObject'] = (obj)->
        return [] if false == util.isObject(obj)

        data = []
        for k, v of obj
            data.push
                key: k
                value: v
                

    # toFixed
    rivets.formatters['toFixed'] = (value, len = 1)->
        return 0 if false == util.isNumber(value)

        Number(value).toFixed(len)


    # 是否在数组中
    rivets.formatters['in'] = (args...)->
        return false if args.length < 2

        value = args[0]
        args.splice(0, 1)

        value = Number value if util.isNumber(value)

        args.indexOf(value) != -1


    ###*
     * 模板渲染
     * @param {Object} view
     * @param {jQuery} view.$el
     * @param {Function} view.set
     * @param {Object} data
    ###
    Template = (@view, data = {})->
        keys = Object.keys data
        @rv = false

        dtd = $.Deferred()
        
        if keys.length == 0
            rv = rivets.bind @view.$el,
                self: @view
            @rv = rv
            dtd.resolve rv

        else
            Template.loadPromise(data).done (vData)=>
                keys.forEach (k)=>
                    v = vData[k]
                    @view.set k, v if v?

                rv = rivets.bind @view.$el,
                    self: @view
                @rv = rv
                dtd.resolve rv
                return
            .fail ->
                dtd.reject()
        
        dtd.promise()

        
    # 设置单个值
    Template::set = (key, promise)->
        promise.then (val)=>
            @view.set key, val


    # 更新数据
    Template::update = (data = {})->
        dtd = $.Deferred()

        if false == @rv
            dtd.reject 'Template no init'
        
        else
            keys = Object.keys data

            Template.loadPromise(data).done (vData)=>
                keys.forEach (k)=>
                    v = vData[k]
                    @view.set k, v if v?

                dtd.resolve

                return
            .fail ->
                dtd.reject()
        
        dtd.promise()

        
    # 销毁
    Template::destroy = ->
        @rv.unbind() if @rv


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

            $.when(promises).done (args...)->
                vData = {}
                args.forEach (v, k)=>
                    key = keys[k]
                    if key
                        vData[key] = v

                dtd.resolve vData
            .fail ->
                dtd.reject()
            
        dtd.promise()

        
    ###*
     * 加载amd规范的模板，
     * 包名必须为 tpl/ 前缀
    ###
    Template.loadTpl = (uri)->
        dtd = $.Deferred()

        info = uri.split('/')

        if info.length == 2
            requirejs ["tpl/#{info[0]}"], (tpl)->
                html = tpl[info[1]]
                if html
                    dtd.resolve html
                else
                    dtd.reject 'url data map error'
        else
            dtd.reject 'uri error'
        
        dtd.promise()


    # 添加过滤函数
    Template.formatters = (name, fun)->
        rivets.formatters[name] = fun


    Template

