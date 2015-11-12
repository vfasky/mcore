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
        cnode: './js/pack/cnode/1.0.0/src/bootstrap.js'

    output:
        path: __dirname + '/js/'
        filename: '[name].all.js'
        libraryTarget: 'amd'

    resolve:
        alias:
            attr: __dirname + '/js/pack/attr/1.0.0/src/index.js'
            middleware: __dirname + '/js/pack/middleware/1.0.0/src/index.js'
            tag: __dirname + '/js/pack/tag/1.0.0/src/index.js'


    externals:[
        'jquery'
        'mcore'
        'mcoreExt'
        'hljs'
        'markdown-it'
        'moment'
    ]

    plugins: []

