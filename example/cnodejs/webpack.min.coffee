###*
# 
# @date 2015-11-11 10:27:24
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###

webpack = require 'webpack'
fs = require 'fs'
path = require 'path'
config = require './webpack.config'

config.plugins.push new webpack.optimize.UglifyJsPlugin
    compress:
        warnings: false

config.plugins.push ->
    @plugin 'done', (stats)->
        fs.writeFileSync(
            path.join(__dirname, 'stats.json'),
            JSON.stringify(stats.toJson().assetsByChunkName, null, 4)
        )
            


config.output.filename = '[name].[chunkhash].min.js'

module.exports = config

