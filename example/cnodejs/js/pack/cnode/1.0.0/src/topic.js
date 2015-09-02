// Generated by CoffeeScript 1.9.3

/**
 *
 * @module cnode/topic
 * @author vfasky <vfasky@gmail.com>
 */

(function() {
  define('cnode/topic', ['jquery', 'cnode/view', 'mcore-attr/scroller', 'cnode/formatters'], function($, View) {
    "use strict";
    return View.subclass({
      constructor: View.prototype.constructor,
      run: function(id) {
        return this.render('cnode/topic.html', {
          topic: this.api.topic(id)
        });
      }
    });
  });

}).call(this);
