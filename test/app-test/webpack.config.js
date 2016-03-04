module.exports = {
    entry: {
        test: './test',
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    plugins: [
    ],
    resolve: {
        extensions: ['', '.coffee', '.js'],
        jquery: 'jQuery',
        alias: {
            mcoreapp: __dirname + '/../../app-test/index'
        }
    },
    module: {
        loaders: [{
            test: /\.coffee$/,
            loader: "coffee-loader"
        }, {
            test: /\/tpl\/.*(\.html)$/,
            loader: 'h2svd-loader?mcoreName=mcoreapp'
        }]
    },
    externals: {
        jquery: 'jQuery'
    }
};
