###*
#
# @date 2016-01-29 15:38:50
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

mcoreApp = require 'mcoreapp'
$ = require 'jquery'

# 在IE9 以上浏览器，可启动该扩展，直接操作 @scope, 省去 get() set() remove()
#require('mcoreExtPlusWatch') mcoreApp

app = new mcoreApp.App $('body')


app.route '/', require('../view/index')
   .route '*', require('../view/index')


app.run()
