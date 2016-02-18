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
        loaders: [
            { test: /\/tpl\/.*(\.html)$/, loader: 'h2svd-loader' }
        ]
    },
    resolve: {
        jquery: 'jQuery',
        alias: {
            mcoreApp: __dirname + '/../../dist/mcoreApp.js',
            mcore: 'mcoreApp'
        }
    },
    externals: {
        jquery: 'jQuery'
    }
};
