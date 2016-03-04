###*
 *
 * 跳由跳转，用于测试
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

# 测试路由 change

class RouteChange

    init: (@callback)->
        hashChanged = =>
            @callback window.location.hash.substring(1)

        if window.addEventListener
            window.addEventListener 'hashchange', hashChanged, false
        else
            window.attachEvent 'onhashchange', hashChanged

        #init
        hashChanged()



module.exports = RouteChange
