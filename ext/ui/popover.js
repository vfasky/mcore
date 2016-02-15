
/**
 * 表单错误提醒
 * @module mcoreExtUiPopover
 * @author vfasky <vfasky@gmail.com>
 */
'use strict';
var $, $doc, Component, Popover,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$ = require('jquery');

Component = require('mcore').Component;

$doc = $(document);

Popover = (function(superClass) {
  extend(Popover, superClass);

  function Popover() {
    return Popover.__super__.constructor.apply(this, arguments);
  }

  Popover.prototype.init = function() {
    this.showTime = 3000;
    return this.hideTimeId = null;
  };

  Popover.prototype.showError = function(errData) {
    var $el, className, offset;
    this.errData = errData;
    $el = this.errData.$el.data('proxyEl') || this.errData.$el;
    $el.off('focus.popover').focus().on('focus.popover', (function(_this) {
      return function() {
        $el.removeClass('error');
        return _this.hideError();
      };
    })(this));
    $el.addClass('error');
    offset = $el.offset();
    className = 'popover-top';
    if (offset.top > $doc.height() * 0.8) {
      offset.top -= $el.height() || 20;
    } else {
      offset.top += $el.height() || 20;
      className = 'popover-bottom';
    }
    if (this.hideTimeId) {
      clearTimeout(this.hideTimeId);
    }
    return this.render(require('./tpl/popover.html'), {
      err: this.errData.err,
      className: className + ' active '
    }, (function(_this) {
      return function() {
        if (!_this.$el) {
          _this.$el = $(_this.refs);
        }
        _this.$el.css(offset);
        return _this.hideTimeId = setTimeout(function() {
          return _this.hideError();
        }, _this.showTime);
      };
    })(this));
  };

  Popover.prototype.hideError = function() {
    return this.set('className', '');
  };

  return Popover;

})(Component);

module.exports = Popover;
