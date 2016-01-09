###*
# 
# @date 2016-01-09 11:23:24
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

loaderUtils = require 'loader-utils'
h2v = require './h2'


module.exports = (html)->
    this.cacheable() if this.cacheable
    callback = this.async()

    callback null, h2v html
