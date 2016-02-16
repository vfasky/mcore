
/*
 * # 基于 virtual dom 的模板引擎
 * @date 2016-01-09 16:39:56
 * @author vfasky <vfasky@gmail.com>
 * @link http://vfasky.com
 */
'use strict';
var EventEmitter, Template, addEvent, diff, each, extend, isArray, isFunction, nextTick, nodeContains, objectKeys, patch, ref, removeEvent,
  extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

EventEmitter = require('./eventEmitter');

ref = require('./util'), extend = ref.extend, nextTick = ref.nextTick, each = ref.each, isFunction = ref.isFunction, isArray = ref.isArray, objectKeys = ref.objectKeys, addEvent = ref.addEvent, removeEvent = ref.removeEvent, nodeContains = ref.nodeContains;

diff = require('./diff');

patch = require('./patch');

Template = (function(superClass) {
  extend1(Template, superClass);


  /*
  ## demo
  
  ```coffee
  {Template} = require 'mcore'
  tpl = new Template()
  
  
  tpl.showIx = (event, el, v, k)->
      console.log v, k
  
  tpl.render require('./tpl/test.html'),
      list: [
         {name : 'ok1'}
         {name : 'ok2'}
      ]
  , -> # rendered
      document.body.appendChild tpl.refs
  ```
  
  ```html
  <!-- ./tpl/test.html -->
  <ul>
    <li mc-for="v , k in scope.list" mc-on-click="showIx(v, k)">
      <span mc-data-ix="k + 1">{v.name}</span>
    </li>
  </ul>
  
  ```
  
  > **注：模板事件回调至少传入二个参数**
  > * 第一个参数：event
  > * 第二个参数：DOM
  > * ... 模板中定义的参数，如：
  > `mc-on-click="showIx(v, k)"` 中接收 v, k
  > 需要这样 `tpl.showIx = (event, el, v, k)->`
  
  > *如果事件不需要传参，且不需要 `()`, 否则 h2svd-loader 编绎时，会报错*
   */

  function Template() {
    this._status = 0;
    this._queueId = null;
    this._initTask = [];
    this._events = {};
    this._eventReged = [];
    this._eventListener = {};
    this.refs = null;
    this.virtualDomDefine = null;
    this.virtualDom = null;
    this.scope = {};
    this.init();
  }


  /*
  ## 更新 `scope` 值
  ```coffee
  #清空 `scope.list`
  tpl.set 'list', []
  ```
  **注意!**
  
  `key` 只能是 scope 的属性，不能更新子属性
  如: `tpl.set 'list[0].name', 'test'` 是不正确的
  
  正确的做法是:
  ```coffee
  list = tpl.get 'list'
  list[0].name = 'test'
  tpl.set 'list', list
  ```
  
  你可以不停地更改 scope 的值，而不用担心性能问题，
  因为 scope 的更改，会放入队列中，放到浏览器的 nextTick 中渲染。
  换言之，你更改N次 scope , 模板引擎只更新一次 DOM
  
  如果你需要在值应用到DOM后，执行回调，可以传入第三个参数
  ```coffee
  tpl.set 'list', list, ->
      console.log 'dom change'
  ```
  
  你也可以强制模板引擎马上渲染DOM,而不是放入队列(当然，不推荐这样做，因为会阻塞后面的代码)
  ```coffee
  tpl.set 'list', list, true
  console.log 'dom change'
  ```
   */

  Template.prototype.set = function(key, value, doneOrAsync) {
    if (doneOrAsync == null) {
      doneOrAsync = null;
    }
    this.scope[key] = value;
    if (this._status === 0) {
      return;
    }
    this.emit('changeScope', this.scope, key, value);
    this.emit('change:' + key, value);
    return this.renderQueue(doneOrAsync);
  };


  /*
  ## 删除 scope 的 key
  ```coffee
  list = tpl.remove 'list'
  ```
  > 同样，第二个参数，可以是回调或者强制马上渲染
   */

  Template.prototype.remove = function(key, doneOrAsync) {
    if (doneOrAsync == null) {
      doneOrAsync = null;
    }
    if (false === this.scope.hasOwnProperty(key)) {
      return;
    }
    delete this.scope[key];
    if (this._status === 0) {
      return;
    }
    this.emit('removeScope', this.scope, key);
    this.emit('change:' + key, null);
    return this.renderQueue(doneOrAsync);
  };


  /*
  ## 取值
  ```coffee
  list = tpl.get 'list'
  ```
   */

  Template.prototype.get = function(key, defaultVal) {
    if (defaultVal == null) {
      defaultVal = null;
    }
    if (this.scope.hasOwnProperty(key)) {
      return this.scope[key];
    }
    return defaultVal;
  };


  /*
  ## 销毁实例
  已经插入 DOM Tree 的，会被移除
   */

  Template.prototype.destroy = function() {
    if (this.refs && this.refs.parentNode && this.refs.parentNode.removeChild) {
      this.refs.parentNode.removeChild(this.refs);
    }
    this.virtualDomDefine = null;
    this.virtualDom = null;
    this.scope = null;
    this.refs = null;
    this._events = null;
    this._initTask = null;
    this._eventReged = null;
    return this._eventListener = null;
  };


  /*
  ## 预留接口 , extnds 时，直接重写
   */

  Template.prototype.init = function() {};


  /*
  ## 渲染
   - {Function} virtualDomDefine 用于生成 virtual dom 的函数
   - {Object} scope
   - {Null | Function | Boolean} doneOrAsync 渲染成功时回调或者马上渲染，不放入队列
   */

  Template.prototype.render = function(virtualDomDefine, scope, doneOrAsync) {
    var ix, scopeKeys, scopeLen;
    this.virtualDomDefine = virtualDomDefine;
    if (scope == null) {
      scope = {};
    }
    if (doneOrAsync == null) {
      doneOrAsync = function() {};
    }
    this._status = 1;
    this.emit('beforeRender');
    scopeKeys = objectKeys(scope);
    scopeLen = scopeKeys.length;
    if (scopeLen === 0) {
      this.renderQueue(doneOrAsync);
    } else {
      ix = scopeLen - 1;
      each(scopeKeys, (function(_this) {
        return function(v, k) {
          return _this.set(v, scope[v], k === ix && doneOrAsync || null);
        };
      })(this));
    }
    return this;
  };

  Template.prototype._render = function(done) {
    var patches, scope, virtualDom;
    scope = extend(true, this.scope);
    virtualDom = this.virtualDomDefine(scope, this).virtualDom;
    if (this.virtualDom === null) {
      this.virtualDom = virtualDom;
      this.refs = this.virtualDom.render();
      each(this._initTask, function(task) {
        return task();
      });
      this._initTask = [];
    } else {
      patches = diff(this.virtualDom, virtualDom);
      this.virtualDom = virtualDom;
      patch(this.refs, patches);
    }
    this._status = 2;
    this.emit('rendered', this.refs);
    if (isFunction(done)) {
      return done(this.refs);
    }
  };

  Template.prototype.renderQueue = function(doneOrAsync) {
    nextTick.clear(this._queueId);
    if (true === doneOrAsync) {
      return this._render();
    } else {
      this._status = 1;
      return this._queueId = nextTick((function(_this) {
        return function() {
          return _this._render(doneOrAsync);
        };
      })(this));
    }
  };

  Template.prototype.addEvent = function(event, el, callback, id) {
    var base, isIn;
    event = event.toLowerCase();
    (base = this._events)[event] || (base[event] = []);
    isIn = false;
    each(this._events[event], function(e) {
      if (e.id === id) {
        isIn = true;
        e.callback = callback;
        return false;
      }
    });
    if (false === isIn) {
      this._events[event].push({
        el: el,
        callback: callback,
        id: id
      });
    }
    return this.addEventListener(event);
  };

  Template.prototype.removeEvent = function(event, el, id) {
    if (!this.refs) {
      return;
    }
    event = event.toLowerCase();
    if (false === this._events.hasOwnProperty(event)) {
      return;
    }
    each(this._events[event], (function(_this) {
      return function(e, i) {
        if (e.id === id) {
          _this._events[event].splice(i, 1);
          return false;
        }
      };
    })(this));
    if (this._events[event].length === 0) {
      return removeEvent(this.refs, event, this._eventListener[event]);
    }
  };

  Template.prototype.regEventCallback = function(event) {
    this._eventReged.push(event);
    return this._eventListener[event] = (function(_this) {
      return function(e) {
        var tasks;
        tasks = _this._events[event];
        return each(tasks, function(task) {
          var _args, args, callbackName, res;
          if (task.el === e.target || nodeContains(task.el, e.target)) {
            res = null;
            args = [e, task.el];
            callbackName = task.callback;
            if (isArray(task.callback)) {
              _args = task.callback;
              callbackName = _args[0];
              each(_args, function(arg, k) {
                if (k > 0) {
                  return args.push(arg);
                }
              });
            }
            if (_this._proxy && isFunction(_this._proxy[callbackName])) {
              res = _this._proxy[callbackName].apply(_this._proxy, args);
            } else if (isFunction(callbackName)) {
              res = callbackName.apply(_this, args);
            } else if (isFunction(_this[callbackName])) {
              res = _this[callbackName].apply(_this, args);
            } else {
              console.log(task.callback);
              throw new Error('not callback : ' + task.callback);
            }
            if (false === res) {
              if (e.stopPropagation && e.preventDefault) {
                e.stopPropagation();
                e.preventDefault();
              } else {
                window.event.cancelBubble = true;
                window.event.returnValue = false;
              }
            }
            return false;
          }
        });
      };
    })(this);
  };

  Template.prototype.addEventListener = function(event) {
    if (!this.refs) {
      this._initTask.push((function(_this) {
        return function() {
          return _this.addEventListener(event);
        };
      })(this));
      return;
    }
    if (indexOf.call(this._eventReged, event) < 0) {
      this.regEventCallback(event);
      return addEvent(this.refs, event, this._eventListener[event]);
    }
  };

  return Template;

})(EventEmitter);

Template.formatters = require('./formatters');

Template.components = {};

Template.binders = require('./binders');

Template.strToFun = function(el, funName) {
  var callback, proxyEnv, proxyFun;
  if (!el._element) {
    return false;
  }
  proxyFun = null;
  proxyEnv = null;
  if (el._element.template.hasOwnProperty('_proxy') && el._element.template._proxy[funName]) {
    proxyEnv = el._element.template._proxy;
  } else if (el._element.template[funName]) {
    proxyEnv = el._element.template;
  }
  if (proxyEnv) {
    proxyFun = proxyEnv[funName];
    callback = function() {
      return proxyFun.apply(proxyEnv, arguments);
    };
    return callback;
  }
  return false;
};

module.exports = Template;
