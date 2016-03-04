###*
 *
 * test home
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

{View} = require 'mcoreapp'

class Index extends View

    run: ->
        @render require('../tpl/index.html')


module.exports = Index
module.exports.viewName = 'index'
