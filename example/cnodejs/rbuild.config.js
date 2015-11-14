// rbuild dev config
var path = require('path');

module.exports = {
  // 静态资源目录
  basePath: __dirname,
  // 生成 require config
  configFile: {
    output: path.join(__dirname, 'js'),
    filename: 'config.js'
  },
  // 第三方库下载路径
  vendor: {
    output: path.join(__dirname, 'js/vendor')
  },
  // requirejs config
  requirejsConfig: {
    paths: {
      mcore: './../../dist/mcore',
      mcoreExt: './../../dist/mcore.ext',
      hljs: '//dn-cdnjscn.qbox.me/ajax/libs/highlight.js/8.6/highlight.min'  
    }
  },
  // 模板编译配置
  tpl: {
    watchFile: path.join(__dirname, 'tpl/**/*.html'),
    output: path.join(__dirname, 'js/tpl'),
    filename: '[name].min.js'
  },
  // webpack config
  webpackConfig: {
    watchFile: path.join(__dirname, 'js/pack/**/*.js'),
    entry: {
      cnode: './js/pack/cnode/1.0.0/src/bootstrap.js'
    },
    output: {
      path: path.join(__dirname, 'js'),
      filename: '[name].all.js',
      libraryTarget: 'amd'
    },
    resolve: {
      alias: {
        attr: __dirname + '/js/pack/attr/1.0.0/src/index.js',
        middleware: __dirname + '/js/pack/middleware/1.0.0/src/index.js',
        tag: __dirname + '/js/pack/tag/1.0.0/src/index.js' 
      }
    },
    externals: ['jquery', 'mcore', 'mcoreExt', 'moment', 'hljs']
  }
};

