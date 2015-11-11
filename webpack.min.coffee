###*
# 
# @date 2015-11-11 10:27:24
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###

webpack = require 'webpack'
config = require './webpack.config'

config.plugins.push new webpack.optimize.UglifyJsPlugin
    compress:
        warnings: false

config.output.filename = '[name].min.js'

module.exports = config

