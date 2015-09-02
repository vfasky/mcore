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

;
// Generated by CoffeeScript 1.9.3

/**
 * 通用顶部
 * <top-header title="self:title" back="self.back" />
 * @module tag/topHead
 * @author vfasky <vfasky@gmail.com>
 */

(function() {
  define('tag/topHeader', ['mcore'], function(mcore) {
    "use strict";
    return mcore.Template.regTag('top-header', {
      attr: ['title', 'back'],
      template: function() {
        return '<div class="bar bar-header bar-royal">\n    <button rv-on-click="back" class="button button-icon icon ion-ios-arrow-thin-left"></button>\n\n    <h1 class="title" rv-text="title | substr 0 13"></h1>\n</div>';
      },
      init: function(el, data) {
        return data;
      }
    });
  });

}).call(this);

;
// Generated by CoffeeScript 1.9.3

/**
 * 自定义tag
 * @module tag
 * @author vfasky <vfasky@gmail.com>
 */

(function() {
  define('tag', ['tag/loading', 'tag/topHeader'], function() {
    "use strict";
  });

}).call(this);
