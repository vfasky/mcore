###*
# 
# @date 2016-01-27 16:00:25
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

crypto = require 'crypto'

module.exports = (text, len = 8)->
    crypto.createHash('md5')
          .update String(text)
          .digest('hex')
          .substring(0, len)
    
