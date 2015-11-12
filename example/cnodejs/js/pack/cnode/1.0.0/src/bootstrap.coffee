###*
 * 启动
 * @module cnode/bootstrap
 * @author vfasky <vfasky@gmail.com>
###

"use strict"

$ = require 'jquery'
mcore = require 'mcoreExt'
middleware = require 'middleware'

require 'tag'
require 'attr'

init = false

module.exports = (select, loadSelect)->
    app = new mcore.App $(select)

    app.use middleware.loader
    
    app.route '/topic/:id', require './topic'
       .route '/user/:userName', require './user'
       .route '*', require './index'

    app.on 'runView', ->
        if init == false
            init = true
            $(loadSelect).remove()

    app.run()

