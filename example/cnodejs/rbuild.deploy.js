// rbuild deploy config

var config = require('./rbuild.config');
var webpack = require('/usr/local/lib/node_modules/node-rbuild/node_modules/webpack/lib/webpack.js');

// min js
config.webpackConfig.plugins = config.webpackConfig.plugins || [];
config.webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
}));

// change file name
config.configFile.filename = 'config.[chunkhash].min.js';
config.tpl.filename = '[name].[chunkhash].min.js';
config.webpackConfig.output.filename = '[name].[chunkhash].min.js';

module.exports = config;
