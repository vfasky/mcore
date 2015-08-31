// Generated by CoffeeScript 1.9.3

/**
 * 
 * @date 2015-08-31 11:18:46
 * @author vfasky <vfasky@gmail.com>
 * @link http://vfasky.com
 * @version $Id$
 */

(function() {
  var FS, UglifyJS, fileList, minList, path, result, rootPath;

  UglifyJS = require('uglify-js');

  FS = require('q-io/fs');

  path = require('path');

  rootPath = '../';

  minList = ['vendor/stapes.js', 'vendor/sightglass.js', 'vendor/rivets.js', 'src/route.js', 'src/template.js', 'src/ui.js', 'src/view.js', 'src/util.js', 'src/app.js', 'src/index.js'];

  fileList = [];

  minList.map(function(v) {
    return fileList.push(path.join(rootPath, v));
  });

  result = UglifyJS.minify(fileList, {
    sourceRoot: '',
    outSourceMap: 'mcore.min.js.map'
  });

  FS.write(path.join(rootPath, 'dist/mcore.min.js'), result.code);

  FS.write(path.join(rootPath, 'dist/mcore.min.js.map'), result.map);

}).call(this);
