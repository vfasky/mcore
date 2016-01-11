###*
 * attr ext
 * @module mcore.ext
 * @author vfasky <vfasky@gmail.com>
###
"use strict"

require './attrScroller'

mcore = require 'mcore'

mcore.ext =
    validator: require './attrValidator'
    http: require './http'

exports = module.exports = mcore

