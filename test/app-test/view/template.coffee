###*
 *
 * 模板测试
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

{View} = require 'mcoreapp'

class Template extends View

    run: ->
        @render require('../tpl/template.html'),
            list: [
                'test0'
                'test1'
                'test2'
                'test3'
                'test4'
            ]


module.exports = Template
module.exports.viewName = 'template'
