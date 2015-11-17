###*
 * attr ext
 * @module mcore.ext
 * @author vfasky <vfasky@gmail.com>
###
"use strict"

validator = require './attrValidator'
require './attrScroller'
mcore = require 'mcore'

mcore.ext =
    validator: validator

exports = module.exports = mcore

