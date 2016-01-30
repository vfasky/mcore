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
        @render require('../tpl/index.html')


module.exports = Index
module.exports.viewName = 'index'
