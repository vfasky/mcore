// Generated by CoffeeScript 1.9.3

/**
 * <loading watch="self:data"/>
 * @module tag/loading
 * @author vfasky <vfasky@gmail.com>
 */

(function() {
  define('tag/loading', ['jquery', 'mcore'], function($, mcore) {
    "use strict";
    return mcore.Template.regTag('loading', {
      attr: ['watch'],
      template: function() {
        return '<div rv-unless="watch" class="card text-center padding">\n    loading ...\n</div>';
      },
      init: function(el, data) {
        return data;
      }
    });
  });

}).call(this);