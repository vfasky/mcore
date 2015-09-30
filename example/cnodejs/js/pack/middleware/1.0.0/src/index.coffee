###*
 * 中间件
 * @module middleware
 * @author vfasky <vfasky@gmail.com>
###
define 'middleware', ['middleware/loader'], (loader)->
    
    "use strict"

    exports =
        loader: loader

