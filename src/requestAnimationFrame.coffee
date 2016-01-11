'use strict'

###*
 * 放到下一帧执行
 * @author vfasky <vfasky@gmail.com>
###
if window.requestAnimationFrame
    module.exports = (fun)->
        window.requestAnimationFrame -> fun()

    module.exports.clear = (id)->
        window.cancelAnimationFrame id if id

else
    module.exports = (fun)->
        setTimeout fun, 0

    module.exports.clear = (id)->
        clearTimeout id if id


