// Generated by CoffeeScript 1.9.3

/**
 * 首页
 * @module cnode/index
 * @author vfasky <vfasky@gmail.com>
 */

(function() {
  define('cnode/index', ['jquery', 'cnode/view', 'mcore-attr/scroller', 'cnode/formatters'], function($, View) {
    "use strict";
    return View.subclass({
      constructor: View.prototype.constructor,
      run: function(tab) {
        this.context.page = Number(this.context.page || 1);
        this.context.tab = this.context.tab || '';
        this.nextPage = this.context.page + 1;
        this.prePage = this.context.page - 1;
        this.page = 1;
        return this.render('cnode/index.html', {
          topics: this.getTopics(),
          loadPageDone: true
        });
      },
      getTopics: function() {
        var page, promise, tab;
        page = this.context.page;
        tab = this.context.tab;
        promise = (function(_this) {
          return function() {
            return _this.api.topics({
              page: page,
              tab: tab
            });
          };
        })(this);
        return this.memoryCache("index_topics_" + page + "_" + tab).has(promise);
      }
    });
  });

}).call(this);
