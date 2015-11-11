###*
# mcore config 
# @date 2015-11-11 09:27:25
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###
"use strict"

$ = require 'jquery'
util = require './util'

_config =
    # AMD 加载器
    AMDLoader: window.requirejs

exports = module.exports = (config)->
    return _config if false == util.isObject(config)
    
    _config = $.extend _config, config
    


