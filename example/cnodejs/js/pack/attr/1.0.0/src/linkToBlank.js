// Generated by CoffeeScript 1.9.3

/**
 * 外部连接新窗口打开
 * @module attr/linkToBlank
 * @author vfasky <vfasky@gmail.com>
 */

(function() {
  "use strict";
  var $, mcore, origin;

  $ = require('jquery');

  mcore = require('mcore');

  origin = window.location.origin;

  mcore.Template.regAttr('link-to-blank', mcore.Template.Attr.subclass({
    constructor: mcore.Template.Attr.prototype.constructor,
    init: function() {
      return this.$el.on('click', 'a', function() {
        var href, id;
        href = String(this.href);
        if (href.indexOf('cnodejs.org/topic/') !== -1) {
          id = href.split('cnodejs.org/topic/').pop();
          window.location.href = '#/topic/' + id;
          return false;
        }
        if (href.indexOf(origin) !== 0) {
          window.open(href);
          return false;
        }
      });
    }
  }));

}).call(this);
