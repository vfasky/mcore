// Generated by CoffeeScript 1.10.0

/**
 * mcore config 
 * @date 2015-11-11 09:27:25
 * @author vfasky <vfasky@gmail.com>
 * @link http://vfasky.com
 * @version $Id$
 */
"use strict";
var $, _config, exports, util;

$ = require('jquery');

util = require('./util');

_config = {
  AMDLoader: window.requirejs
};

exports = module.exports = function(config) {
  if (false === util.isObject(config)) {
    return _config;
  }
  return _config = $.extend(_config, config);
};
