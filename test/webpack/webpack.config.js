/**
 * 
 * @date 2016-01-09 14:07:03
 * @author vfasky <vfasky@gmail.com>
 */

var webpack = require('webpack');

// h2svd-loader
require('h2svd-loader');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'test.js',
        libraryTarget: 'umd'
    },
    plugins: [
    ]
};
