###*
# MVVM 模板
# @date 2016-01-09 16:39:56
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

EventEmitter = require './eventEmitter'

class Template extends EventEmitter
    constructor: (@tagName) ->
        super()


