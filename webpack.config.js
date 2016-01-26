/**
 *
 * @date 2016-01-07 21:45:16
 * @author vfasky <vfasky@gmail.com>
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        mcore: './src/index.js',
        mcoreApp: './app/index.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.IgnorePlugin(/jsdom$/)
    ],
    resolve: {
        alias: {
        }
    },
    externals: ['jquery', 'mcore']
};
