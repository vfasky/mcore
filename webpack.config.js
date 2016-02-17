/**
 *
 * @date 2016-01-07 21:45:16
 * @author vfasky <vfasky@gmail.com>
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        mcore: './src/index',
        mcoreApp: './app/index',
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
        extensions: ['', '.coffee', '.js'],
        alias: {}
    },
    module: {
        loaders: [{
            test: /\.coffee$/,
            loader: "coffee-loader"
        }, ]
    },
    externals: ['jquery', 'mcore']
};
