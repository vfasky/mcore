
/**
 * #组件
 * @date 2016-01-23 16:46:42
 * @author vfasky <vfasky@gmail.com>
 * @link http://vfasky.com
 */
'use strict';
var Component, EventEmitter, Template, util,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

EventEmitter = require('./eventEmitter');

Template = require('./template');

util = require('./util');


/*
## demo
``` coffeescript
{Template, Component} = require 'mcore'

class Time extends Component
    init: ->
        #渲染完成时执行
        @on 'rendered', =>
            #1秒后，更新time值，当渲染完成时
            #会执行 rendered, 等同于，每秒
            #更新一次time值
            setTimeout =>
                @set 'time', new Date()
            , 1000

        @render require('./tpl/tagTime.html'),
            time: new Date(),
            id: 2

#注册组件
Template.components.time = Time
```

**模板可以只是一个变量**
``` html
<!-- ./tpl/tagTime.html -->
{scope.time}
```

注册组件后，在其它模板中使用该TAG: `time`
``` html
<div class="test">
    <time mc-id="scope.id"></time>
    <!--render:<time id="2">Tue Feb 16 2016 16:11:58 GMT+0800 (CST)</time>-->
</div>
```
 */

Component = (function(superClass) {
  extend(Component, superClass);

  function Component(el, virtualEl) {
    this.el = el;
    this.virtualEl = virtualEl != null ? virtualEl : null;
    this.init();
    this.watch();
  }

  Component.prototype.init = function() {};


  /*
  ## 观察属性更新
  
  ```coffee
  class Time extends Component
      watch: ->
          #<time mc-id="scope.id"></time>
          #当 id 属性更新时，执行
          @on 'change:id', (value)->
              console.log value
  
  ```
   */

  Component.prototype.watch = function() {};


  /*
  ## 向 parent dom 发送自定义事件
  当组件有自定义事件，向上级DOM对发送事件
  
  如： <time> 有一个自定义事件 'change-time'
  
  ```html
  <time mc-on-change-time="chageTime"></time>
  ```
  
  当 scope.time 更新时，需要通知调用它的模板引擎
  
  ```coffee
  #自定义组件
  class Time extends Component
      init: ->
          #渲染完成时执行
          @on 'rendered', =>
              #1秒后，更新time值，当渲染完成时
              #会执行 rendered, 等同于，每秒
              #更新一次time值
              setTimeout =>
                  time = new Date()
                  @set 'time', time
                  #触发自定义事件，并传参 time
                  @emitEvent 'change-time', [time]
              , 1000
  
          @render require('./tpl/tagTime.html'),
              time: new Date(),
              id: 2
  
  #template
  tpl = new Template()
  tpl.changeTime = (time)->
      console.log time
  ```
  
  > **约定** 如果是`click`等标准事件触发的自定义事件
  > 需将 event, el 这两个参数传回, 如
  
  ```coffee
  class Tabs extends Component
  
      init: ->
          @.$el = $ @el
          @render require('../tpl/tag/tabs.html'),
              index: 0
              items: []
  
      #当用户点击tab时，参数原路回传
      changeTab: ->
          @emitEvent 'change-tab', arguments
          false
  ```
  
  ```html
  <ul class="tab">
      <li mc-for="v, i in scope.items"
          mc-class="'item ' + (i == scope.index ? 'current' : '')">
          <a mc-data-ix="i"
             mc-on-click="changeTab(v, i)"
             class="link">{v.title}</a>
      </li>
  </ul>
  ```
   */

  Component.prototype.emitEvent = function(eventName, args) {
    var parentView, proxyEventName;
    proxyEventName = this.getProxyEventName(eventName);
    parentView = this.el._element.template._proxy;
    if (!parentView) {
      return;
    }
    if (util.isFunction(parentView[proxyEventName])) {
      return parentView[proxyEventName].apply(parentView, args);
    }
  };


  /*
  ## 渲染, 同 Template 方法
   - {Function} virtualDomDefine 用于生成 virtual dom 的函数
   - {Object} scope
   - {Null | Function | Boolean} doneOrAsync 渲染成功时回调或者马上渲染，不放入队列
   */

  Component.prototype.render = function(virtualDomDefine, scope, doneOrAsync) {
    this.virtualDomDefine = virtualDomDefine;
    if (scope == null) {
      scope = {};
    }
    if (doneOrAsync == null) {
      doneOrAsync = true;
    }
    if (!this.template) {
      this.template = new Template();
      this.template._proxy = this;
      this.template.once('rendered', (function(_this) {
        return function(refs1) {
          _this.refs = refs1;
          return _this.mount();
        };
      })(this));
      this.template.on('rendered', (function(_this) {
        return function(refs) {
          return _this.emit('rendered', refs);
        };
      })(this));
    }
    return this.template.render(this.virtualDomDefine, scope, doneOrAsync);
  };

  Component.prototype.mount = function() {
    return this.el.appendChild(this.refs);
  };

  Component.prototype.set = function() {
    if (this.template) {
      return this.template.set.apply(this.template, arguments);
    }
  };

  Component.prototype.get = function() {
    if (this.template) {
      return this.template.get.apply(this.template, arguments);
    }
  };

  Component.prototype.remove = function() {
    if (this.template) {
      return this.template.remove.apply(this.template, arguments);
    }
  };

  Component.prototype.update = function(attrName, value) {
    if (this.get(attrName) !== value) {
      this.set(attrName, value);
      this.emit('update', attrName, value);
      return this.emit('change:' + attrName, value);
    }
  };

  Component.prototype.getProxyEventName = function(eventName) {
    if (!this.virtualEl || !this.virtualEl.props) {
      return null;
    }
    return this.virtualEl.props['on-' + eventName];
  };

  Component.prototype.destroy = function() {
    if (this.template) {
      this.template.destroy();
      return this.template = null;
    }
  };

  return Component;

})(EventEmitter);

module.exports = Component;
