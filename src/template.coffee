###*
 * 模板
 * @module mcore/template
 * @author vfasky <vfasky@gmail.com>
###

"use strict"

$ = require 'jquery'
rivets = require 'rivets'
Stapes = require 'stapes'
util = require './util'
config = require('./config')()

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
    rootInterface: '.'
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
    return [] if false == Array.isArray value

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

# sprintf
rivets.formatters['%'] = util.format


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
Template = (@view, @data = {})->
    @rv = false
    return

Template::init = ->
    data = @data
    keys = Object.keys data
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
            dtd.reject 'template render error'
    
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
            newData = {}
            keys.forEach (k)=>
                v = vData[k]
                newData[k] = v if v?
                #@view.set k, v if v?

            @view.set newData

            dtd.resolve vData

            return
        .fail ->
            dtd.reject 'template update error'
    
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
        config.AMDLoader ["tpl/#{info[0]}"], (tpl)->
            html = tpl[info[1]]
            if html
                dtd.resolve html
            else
                dtd.reject 'url data map error'
    else
        dtd.reject 'uri error: ' + uri
    
    dtd.promise()

    
Template.bind = (data = {}, model)->
    model.tpl = new Template model, data
    model.tpl.init().then ->
        model.emit 'render'
        model.tpl


Template.renderString = (html, data = {}, model)->
    keys = Object.keys data
    
    # 初始值
    if keys.length > 0 and !model.tpl
        defTplVal = {}
        
        keys.forEach (k)=>
            defTplVal[k] = {}

        model.set defTplVal

    #$parent = model.$el.parent()
    #isHasParent = $parent.length > 0

    # 移出 dom tree
    #model.$el.detach() if isHasParent
            
    # 模板已经初始化，更新
    if model.tpl
        model.emit 'tplBeforeUpdate'
        
        return model.tpl.update(data).then ->
            #model.$el.appendTo $parent if isHasParent

            model.emit 'tplUpdate'
            model.tpl
    else
        model.$el.hide().append html
        model.emit 'beforeRender'

        return Template.bind(data, model).then (res)->
            model.$el.show()
            #model.$el.appendTo $parent if isHasParent
            res


Template.render = (uri, data = {}, model)->
    Template.loadTpl(uri).then (html)->
        Template.renderString html, data, model



# 添加过滤函数
Template.formatters = (name, fun)->
    rivets.formatters[name] = fun


# 自定义属性类
Template.Attr = Stapes.subclass
    constructor: (@name, @rv, @el)->
        @$el = $ @el
        @init @el
        @watch()

    sync: (value)->
        @rv.observer.setValue value if @rv.observer and @rv.observer.setValue
        
    init: (el)->
    update: (value, el)->
    destroy: (el)->
    watch: ->


# 注册自定义属性
Template.regAttr = (name, Attr)->
    attr = null
    rivets.binders[name] =
        bind: (el)->
            attr = new Attr name, @, el
            
        unbind: (el)->
            attr.destroy el

        routine: (el, value)->
            attr.update value, el


# 注册自定义tag
Template.regTag = (name, options = {})->
    rivets.components[name] =
        static: options.static or []
        attributes: options.attr or []
        template: options.template or -> ''
        initialize: options.init or ->
            

exports = module.exports = Template
