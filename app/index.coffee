###*
#
# @date 2016-01-26 11:37:47
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

mcoreApp = require 'mcore'

mcoreApp.util = require './util'
mcoreApp.Template = require './template'
mcoreApp.Component = require './component'

mcoreApp.App = require './app'
mcoreApp.Route = require './route'
mcoreApp.BaseClass = require './baseClass'
mcoreApp.View = require './view'
mcoreApp.PopUpView = require './popUpView'
mcoreApp.http = require './http'

module.exports = mcoreApp
