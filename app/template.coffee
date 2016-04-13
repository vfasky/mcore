###*
 *
 * 扩展 template
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

mcore = require 'mcore'
$ = require 'jquery'

util = mcore.util

_keyCode =
    keyenter: 13
    keyesc: 27


class Template extends mcore.Template


    set: (key, value, doneOrAsync)->
        if value and util.isFunction value.then
            return value.then (val)=>
                super key, val, doneOrAsync
        else
            super key, value, doneOrAsync




    addEventListener: (event, el)->
        if !@refs
            @_initTask.push => @addEventListener event, el
            return
        if event not in @_eventReged
            @regEventCallback event

            $refs = $(@refs)

            # 滚到事件的处理
            if event == 'scroll'
                $(el).on 'scroll', =>
                    return @_eventListener[event].apply @, arguments
                return

            if event not in ['blur', 'focus']
                if _keyCode.hasOwnProperty(event)
                    $refs.on 'keyup', (e)=>
                        if e.keyCode == _keyCode[event]
                            return @_eventListener[event].apply @, arguments

                else
                    $refs.on event, =>
                        return @_eventListener[event].apply @, arguments

            else
                $refs.on event, 'input, textarea, select', =>
                    return @_eventListener[event].apply @, arguments


    removeEvent: (event, el, id)->
        return if !@refs

        event = event.toLowerCase()
        return if false == @_events.hasOwnProperty(event)

        util.each @_events[event], (e, i)=>
            if e.id == id
                @_events[event].splice i, 1
                return false

        # 移除事件
        if @_events[event].length == 0
            $(@refs).off event

module.exports = Template
