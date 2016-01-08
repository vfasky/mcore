/**
 * 
 * @date 2016-01-07 21:45:16
 * @author vfasky <vfasky@gmail.com>
 */
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'mcore.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.IgnorePlugin(/jsdom$/)
    ]
};
