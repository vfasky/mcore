###*
 * 启动
 * @module cnode/bootstrap
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode', ['jquery', 'mcore', 'tag'], ($, mcore)->
    
    "use strict"

    init = false

    (select, loadSelect)->
        app = new mcore.App $(select)
        
        app.route '/topic/:id', 'cnode/topic'
           .route '*', 'cnode/index'

        app.on 'runView', ->
            if init == false
                init = true
                $(loadSelect).remove()

        app.run()

