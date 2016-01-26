###*
# 基本 virtualDom 的模板引擎
# @date 2016-01-07 21:46:45
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

module.exports =
    version: '2.0.0'
    virtualDom: require './virtualDom'
    util: require './util'
    EventEmitter: require './eventEmitter'
    Template: require './template'
    Component: require './component'
