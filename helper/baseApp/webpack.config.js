require('coffee-script/register');

var path = require('path');
var webpack = require('webpack');
var buildHtml = require('./tool/buildHtml');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = module.exports = {
    staticPath: '.',
    env: 'dev',
    entry: {
        app: path.join(__dirname, './js/src/app/index')
    },
    output: {
        publicPath: '/build/dev/',
        path: path.join(__dirname, 'build/dev/'),
        filename: '[name].all.js',
    },
    module: {
        loaders: [{
            test: /\/tpl\/.*(\.html)$/,
            loader: 'h2svd-loader?mcoreName=mcoreapp'
        }, {
            test: /\.coffee$/,
            loader: "coffee-loader"
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=10000&name=img/[hash:8].[name].[ext]'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&name=font/[hash:8].[name].[ext]&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&name=font/[hash:8].[name].[ext]"
        }, { //放最后，用于其它环境build时，替换
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!autoprefixer!sass?sourceMap')
        }]
    },
    resolve: {
        extensions: ['', '.coffee', '.js'],

        jquery: 'jQuery',
        alias: {
            mcoreApp: 'mcoreapp',
            mcoreExtBinderValidator: 'mcoreapp/ext/binder/validator',
            mcoreExtUiPopover: 'mcoreapp/ext/ui/popover',
            mcoreExtTagPagination: 'mcoreapp/ext/tag/pagination',
            mcoreExtPlusWatch: 'mcoreapp/ext/plus/watch',
            mcoreExtPlusErrorCatch: 'mcoreapp/ext/plus/errorCatch',
        }
    },
    externals: {
        jquery: 'jQuery'
    },
    devtool: "source-map",
    plugins: [
        buildHtml({
            tplPath: path.join(__dirname, './outTpl/*.html'),
            out: __dirname,
            varMap: {
                staticPath: function() {
                    return module.exports.staticPath;
                },
                env: function() {
                    return module.exports.env;
                }
            }
        }),
        //放最后，用于其它环境build时，替换
        new ExtractTextPlugin('style/[name].min.css')
    ]
};


module.exports.buildEnv = function(envName, staticPath) {
    //静态资源域名
    config.staticPath = staticPath || '.';

    config.devtool = '';

    config.env = envName;

    config.output.publicPath = config.staticPath + '/build/' + envName + '/';
    config.output.path = path.join(__dirname, './build/' + envName);
    config.output.filename = '[name].[chunkhash].js';

    //重写 sass loader
    config.module.loaders.pop();
    config.module.loaders.push({
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer!iconfontcn!sass')
    });

    //config.resolve.alias.env = path.join(__dirname, './js/src/env/' + envName);

    config.plugins.pop();
    config.plugins.push(new ExtractTextPlugin('style/[name].[chunkhash].css'));

    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );

    return config;
};
