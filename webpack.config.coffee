###*
# mcore webpack.config
# @date 2015-11-10 14:34:39
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###
webpack = require 'webpack'
#commonsPlugin = new webpack.optimize.CommonsChunkPlugin 'common.js'

module.exports =
    entry:
        mcore: './src/index.js'
        'mcore.ext': './ext/src/index.js'

    output:
        path: __dirname + '/dist/'
        filename: '[name].js'
        libraryTarget: 'amd'

    resolve:
        alias:
            jquery: __dirname + '/vendor/jquery-2.1.4.min.js'
            stapes: __dirname + '/vendor/stapes.js'
            rivets: __dirname + '/vendor/rivets.js'
            sightglass: __dirname + '/vendor/sightglass.js'

    externals:[
        'jquery', 'mcore'
    ]

    plugins: [
        #new webpack.ProvidePlugin
            #$: 'jquery'
            #jQuery: 'jquery'
            #'window.jQuery': 'jquery'
    ]

