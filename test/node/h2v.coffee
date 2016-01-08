###*
# 
# @date 2016-01-08 20:30:49
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

h2v = require '../../bin/h2v'
fs = require 'fs'
path = require 'path'

tpl = fs.readFileSync path.join(__dirname, './t1.html'), 'utf8'

h2v tpl
