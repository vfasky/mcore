###*
 * 
 * @module cnode/view
 * @author vfasky <vfasky@gmail.com>
###
"use strict"

mcore = require 'mcoreExt'
api = require './api'

module.exports = mcore.View.subclass
    constructor: mcore.View::constructor
    beforeInit: ->
        @api = api


