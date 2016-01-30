###*
# 
# @date 2016-01-29 15:38:50
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{App} = require 'mcoreApp'
$ = require 'jquery'

app = new App $('body')

app.route '/', require('../view/index')
   .route '*', require('../view/index')


app.run()
