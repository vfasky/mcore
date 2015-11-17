// rbuild dev config
var path = require('path');

module.exports = {
  // 静态资源目录
  basePath: __dirname,
  // 生成 require config
  configFile: {
    output: __dirname,
    filename: 'config.js'
  },
  // 第三方库下载路径
  vendor: {
    output: path.join(__dirname, 'vendor')
  },
  // requirejs config
  requirejsConfig: {
    paths: {
      
    }
  },
  // 模板编译配置
  tpl: {
    watchFile: [],
  },
  // webpack config
  webpackConfig: {
    watchFile: [
        path.join(__dirname, 'src/*.js'),
        path.join(__dirname, 'ext/src/*.js')
    ],
    entry: {
        mcore: './src/index.js',
        'mcore.ext': './ext/src/index.js'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      libraryTarget: 'umd'
    },
    resolve: {
      alias: {
        stapes: __dirname + '/vendor/stapes.js',
        rivets: __dirname + '/vendor/rivets.js',
        sightglass: __dirname + '/vendor/sightglass.js',
        scroller: __dirname + '/ext/vendor/scroller.js',
        formSerializer: __dirname + '/ext/vendor/formSerializer.js',
      }
    },
    externals: ['jquery', 'mcore', 'mcoreExt', 'mcore.ext']
  }
};

