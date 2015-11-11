###*
 * attr ext
 * @module mcore-attr
 * @author vfasky <vfasky@gmail.com>
###
"use strict"

validator = require './validator'
mcore = require 'mcore'
require './scroller'

mcore.ext =
    validator: validator

exports = module.exports = mcore

