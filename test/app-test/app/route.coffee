###*
 *
 * 路由分发
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

module.exports = (app)->

    app.route '/', require '../view/index'
       .route '/template', require '../view/template'
       .route '*', require '../view/index'
