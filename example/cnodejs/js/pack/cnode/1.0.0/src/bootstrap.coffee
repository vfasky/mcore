###*
 * 启动
 * @module cnode/bootstrap
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode', ['jquery', 'mcore', 'middleware', 'tag', 'attr'],
($, mcore, middleware)->
    
    "use strict"

    init = false

    (select, loadSelect)->
        app = new mcore.App $(select)

        app.use middleware.loader
        
        app.route '/topic/:id', 'cnode/topic'
           .route '/user/:userName', 'cnode/user'
           .route '*', 'cnode/index'

        app.on 'runView', ->
            if init == false
                init = true
                $(loadSelect).remove()

        app.run()

