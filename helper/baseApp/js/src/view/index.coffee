###*
#
# @date 2016-01-29 15:44:12
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{View} = require 'mcoreApp'

class Index extends View
    run: ->
        # console.log @
        @render require('../tpl/index.html')

    openV: (event, el)->
        PopTest = require './popTest'
        @.open PopTest,
            closeCallBack: (isBack)->
                console.log isBack

module.exports = Index
module.exports.viewName = 'index'
