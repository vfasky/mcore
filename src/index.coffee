###*
 * @version 1.1.0
 * @module mcore
 * @author vfasky <vfasky@gmail.com>
###
"use strict"

util = require './util'
route = require './route'
config = require './config'
Template = require './template'
View = require './view'
Ui = require './ui'
App = require './app'
Stapes = require 'stapes'

exports = module.exports =
    util: util
    route: route
    config: config
    Template: Template
    View: View
    Ui: Ui
    App: App
    Stapes: Stapes


