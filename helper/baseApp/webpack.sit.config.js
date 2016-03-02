var config = require('./webpack.config').buildEnv('sit', 'http://localhost:3002');
//var path = require('path');
var del = require('del');

del.sync(['./build/sit/**/*.*']);

module.exports = config;
