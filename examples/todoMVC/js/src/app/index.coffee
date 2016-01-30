###*
# 
# @date 2016-01-29 15:38:50
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{App, Template} = require 'mcoreApp'
$ = require 'jquery'

# 格式化， 还有多少条未完成
Template.formatters.itemLen = (todos)->
    len = 0
    $.each todos, (k, v)->
        len++ if v.visibility != 'completed'

    if len <= 1
        return "#{len} item left"

    return "#{len} items left"


app = new App $('body')

app.route '/:selected', require('../view/index')
   .route '*', require('../view/index')


app.run()
