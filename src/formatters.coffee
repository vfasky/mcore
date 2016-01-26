###*
# 过滤函数
# @date 2016-01-13 18:07:10
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

util = require './util'

exports['toNumber'] = (x)->
    return 0 if false == util.isNumber(x)
    Number x

exports['toFixed'] = (x, len = 1)->
    Number(x).toFixed len
