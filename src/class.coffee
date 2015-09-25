###*
 * class base
 * @module mcore/class
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/class', ['jquery'], ($)->
    
    "use strict"

    # 原型链继承
    Ctor = ->
    if Object.__proto__
        createProto = (proto)->
            __proto__: proto
    else
        createProto = (proto)->
            Ctor.prototype = proto
            new Ctor()

    EventClass = ->
        @_events = {}
        return

    # 绑定事件
    EventClass::on = (event, callback)->
        @_events[event] = [] if false == @_events.hasOwnProperty(event)
        @_events[event].push callback


    # 通知事件
    EventClass::emit = (args...)->
        return if args.length == 0
        return if false == @_events.hasOwnProperty(args[0])
        event = args[0]

        args.splice 0, 1

        @_events[event].map (callback)->
            callback.apply null, args

        return


    # 关闭事件
    EventClass::off = (event)->
        return if false == @_events.hasOwnProperty(event)
        @_events[event] = []
        return

    extend = (Soure, proto = {})->
        if false == proto.hasOwnProperty('initialize')
            proto.initialize = ->

        ExtendClass = ->
            Soure.apply @
            @initialize.apply @, arguments
            return

        ExtendClass.prototype = createProto Soure.prototype

        keys = Object.keys proto
        keys.forEach (k)->
            ExtendClass.prototype[k] = proto[k]

        ExtendClass.extend = (proto)->
            extend ExtendClass, proto

        ExtendClass


    extend EventClass

    

