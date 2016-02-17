var webpack = require('webpack');

// h2svd-loader
require('h2svd-loader');

module.exports = {
    entry: './js/src/app/index.js',
    output: {
        path: __dirname + '/js/dist',
        filename: 'app.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\/tpl\/.*(\.html)$/,
            loader: 'h2svd-loader'
        }, {
            test: /\.coffee$/,
            loader: "coffee-loader"
        }]
    },
    resolve: {
        extensions: ['', '.coffee', '.js'],

        jquery: 'jQuery',
        alias: {
            mcore: __dirname + '/../../dist/mcore.js',
            mcoreApp: __dirname + '/../../dist/mcoreApp.js'
        }
    },
    externals: {
        jquery: 'jQuery'
    }
};
