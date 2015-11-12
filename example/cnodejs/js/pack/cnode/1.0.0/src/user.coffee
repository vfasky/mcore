###*
 * 用户主页
 * @module cnode/user
 * @author vfasky <vfasky@gmail.com>
###
"use strict"

View = require './view'
require './formatters'
require 'mcoreExt'

module.exports = View.subclass
    constructor: View::constructor
    run: (userName)->
       @render 'cnode/user.html',
           user: @api.user userName

module.exports.viewName = 'user'
