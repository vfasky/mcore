###*
# object.watch polyfill
# @date 2016-01-09 17:22:29
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

if !Object.prototype.watch
    Object.defineProperty Object.prototype, 'watch',
        enumerable: false
        configurable: true
        writable: false
        value: (prop, handler)->
            oldval = @[prop]
            newval = oldval
            getter = -> newval
            setter = (val)->
                oldval = newval
                newval = handler.callback @, prop, oldval, val

            if delete @[prop]
                Object.defineProperty @, prop,
                    get: getter
                    set: setter
                    enumerable: true
                    configurable: true

if !Object.prototype.unwatch
    Object.defineProperty Object.prototype, 'unwatch',
        enumerable: false
        configurable: true
        writable: false
        value: (prop)->
            val = @[prop]
            delete @[prop]
            @[prop] = val
