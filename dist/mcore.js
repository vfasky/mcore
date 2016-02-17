(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * 基本 virtualDom 的模板引擎
	 * @date 2016-01-07 21:46:45
	 * @author vfasky <vfasky@gmail.com>
	 * @link http://vfasky.com
	 */
	'use strict';
	module.exports = {
	  version: '2.0.0',
	  virtualDom: __webpack_require__(1),
	  util: __webpack_require__(6),
	  EventEmitter: __webpack_require__(4),
	  Template: __webpack_require__(3),
	  Component: __webpack_require__(13)
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * simple-virtual-dom
	 * @date 2016-01-07 21:50:58
	 */
	'use strict';
	module.exports = {
	  Element: __webpack_require__(2),
	  diff: __webpack_require__(7),
	  patch: __webpack_require__(8)
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * 修改自 simple-virtual-dom 
	 * @date 2016-01-21 19:34:48
	 */
	'use strict';
	var Element, Template, _id, each, isFunction, ref, setElementAttr,
	  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	_id = 0;

	Template = __webpack_require__(3);

	ref = __webpack_require__(6), setElementAttr = ref.setElementAttr, each = ref.each, isFunction = ref.isFunction;

	Element = (function() {
	  function Element(tagName, props, children) {
	    var count;
	    this.props = props != null ? props : {};
	    this.children = children != null ? children : [];
	    this.tagName = tagName.toLowerCase();
	    this._id = _id++;
	    this._binders = [];
	    this._bindersReg = [];
	    this._component = null;
	    this.key = this.props.key || void 0;
	    count = 0;
	    each(this.children, (function(_this) {
	      return function(child, i) {
	        if (child instanceof Element) {
	          count += child.count;
	        } else {
	          _this.children[i] = String(child);
	        }
	        return count++;
	      };
	    })(this));
	    this.count = count;
	  }

	  Element.prototype.render = function() {
	    var attr, binder, el, j, len, ref1, ref2, value;
	    el = this.bindComponent();
	    if (false === el) {
	      el = document.createElement(this.tagName);
	      if (this.template) {
	        el._element = this;
	        this.el = el;
	      }
	      ref1 = this.props;
	      for (attr in ref1) {
	        value = ref1[attr];
	        this.setAttribute(el, attr, value);
	      }
	      each(this.children, function(child) {
	        var childEl;
	        if (child instanceof Element) {
	          childEl = child.render();
	        } else {
	          childEl = document.createTextNode(child);
	        }
	        return el.appendChild(childEl);
	      });
	      ref2 = this._binders;
	      for (j = 0, len = ref2.length; j < len; j++) {
	        binder = ref2[j];
	        if (binder.binder.rendered) {
	          binder.binder.rendered.call(this, el, binder.value);
	        }
	      }
	    }
	    return el;
	  };

	  Element.prototype.removeAttribute = function(attrName) {
	    var binder, j, len, ref1;
	    attrName = attrName.toLowerCase();
	    if (this._component) {
	      this._component.update(attrName, null);
	    }
	    ref1 = this._binders;
	    for (j = 0, len = ref1.length; j < len; j++) {
	      binder = ref1[j];
	      if (binder.attrName === attrName) {
	        if (binder.binder.remove) {
	          binder.binder.remove.call(this, this.el);
	        }
	        binder.value = null;
	        return;
	      }
	    }
	    return this.el.removeAttribute(attrName);
	  };

	  Element.prototype.destroy = function() {
	    var attrName, event, results;
	    if (!this.template) {
	      return;
	    }
	    if (this._component) {
	      this._component.destroy();
	    }
	    results = [];
	    for (attrName in this.props) {
	      if (attrName.indexOf('on-') === 0) {
	        event = attrName.replace('on-', '');
	        results.push(this.template.removeEvent(event, this.el, this._id));
	      } else {
	        results.push(void 0);
	      }
	    }
	    return results;
	  };

	  Element.prototype.setAttribute = function(el, attrName, value) {
	    var binder, j, len, ref1;
	    attrName = String(attrName).toLowerCase();
	    if (this._component) {
	      this._component.update(attrName, value);
	    }
	    if (this.template) {
	      if (attrName.indexOf('on-') === 0) {
	        this.template.addEvent(attrName.replace('on-', ''), el, value, this._id);
	        return;
	      }
	      ref1 = this._binders;
	      for (j = 0, len = ref1.length; j < len; j++) {
	        binder = ref1[j];
	        if (binder.attrName === attrName) {
	          if (indexOf.call(this._bindersReg, attrName) < 0) {
	            this._bindersReg.push(attrName);
	            if (binder.binder.init) {
	              binder.binder.init.call(this, el);
	            }
	          }
	          if (binder.binder.update) {
	            binder.binder.update.call(this, el, value);
	          } else if (isFunction(binder.binder)) {
	            binder.binder.call(this, el, value);
	          }
	          binder.value = value;
	          return;
	        }
	      }
	    }
	    return setElementAttr(el, attrName, value, true);
	  };

	  Element.prototype.bindComponent = function() {
	    var attr, el, ref1, value;
	    if (false === Template.components.hasOwnProperty(this.tagName)) {
	      return false;
	    }
	    el = document.createElement(this.tagName);
	    this._component = new Template.components[this.tagName](el, this);
	    ref1 = this.props;
	    for (attr in ref1) {
	      value = ref1[attr];
	      this.setAttribute(el, attr, value);
	    }
	    el._element = this;
	    el._component = this._component;
	    return el;
	  };

	  Element.prototype.bindBinder = function(attrName, value) {
	    if (Template.binders.hasOwnProperty(attrName)) {
	      return this._binders.push({
	        binder: Template.binders[attrName],
	        value: value,
	        attrName: attrName.toLowerCase()
	      });
	    }
	  };

	  Element.prototype.bindTemplate = function(template) {
	    this.template = template;
	  };

	  return Element;

	})();

	module.exports = Element;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
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

	EventEmitter = __webpack_require__(4);

	ref = __webpack_require__(6), extend = ref.extend, nextTick = ref.nextTick, each = ref.each, isFunction = ref.isFunction, isArray = ref.isArray, objectKeys = ref.objectKeys, addEvent = ref.addEvent, removeEvent = ref.removeEvent, nodeContains = ref.nodeContains;

	diff = __webpack_require__(7);

	patch = __webpack_require__(8);

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
	  
	  > *如果事件不需要传参，侧不需要 `()`, 否则 h2svd-loader 编绎时，会报错*
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
	  tpl.remove 'list'
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

	Template.formatters = __webpack_require__(11);

	Template.components = {};

	Template.binders = __webpack_require__(12);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * EventEmitter
	 * @date 2016-01-07 21:57:26
	 */
	'use strict';
	module.exports = __webpack_require__(5);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt]
	    , events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	
	/**
	 * 
	 * @date 2016-01-11 20:41:14
	 * @author vfasky <vfasky@gmail.com>
	 * @link http://vfasky.com
	 */
	'use strict';
	var _isNumberReg;

	if (window.Node && Node.prototype && !Node.prototype.contains) {
	  Node.prototype.contains = function(arg) {
	    return !!(this.compareDocumentPosition(arg) & 16);
	  };
	}

	_isNumberReg = /^-{0,1}\d*\.{0,1}\d+$/;

	exports.isNumber = function(x) {
	  return _isNumberReg.test(x);
	};

	exports.isArray = function(x) {
	  if (Array.isArray) {
	    return Array.isArray(x);
	  }
	  return Object.prototype.toString.call(x) === '[object Array]';
	};

	exports.isObject = function(x) {
	  return Object.prototype.toString.call(x) === '[object Object]';
	};

	exports.isString = function(x) {
	  return Object.prototype.toString.call(x) === '[object String]';
	};

	exports.isFunction = function(x) {
	  return Object.prototype.toString.call(x) === '[object Function]';
	};

	exports.isPlainObject = function(x) {
	  var hasIsPropertyOfMethod, hasOwnConstructor, key, lastKey;
	  if (!x || Object.prototype.toString.call(x) !== '[object Object]' || x.nodeType || x.setInterval) {
	    return false;
	  }
	  hasOwnConstructor = Object.hasOwnProperty.call(x, 'constructor');
	  hasIsPropertyOfMethod = Object.hasOwnProperty.call(x.constructor.prototype, 'isPrototypeOf');
	  if (x.constructor && !hasOwnConstructor && !hasIsPropertyOfMethod) {
	    return false;
	  }
	  for (key in x) {
	    lastKey = key;
	  }
	  return typeof lastKey === 'undefined' || Object.hasOwnProperty.call(x, lastKey);
	};

	exports.extend = function() {
	  var clone, copy, deep, i, j, length, name, options, ref, ref1, src, start, target;
	  target = arguments[0] || {};
	  length = arguments.length;
	  deep = false;
	  start = 1;
	  if (typeof target === 'boolean') {
	    deep = target;
	    target = arguments[1] || {};
	    start = 2;
	  }
	  if (typeof target !== 'object' && typeof target !== 'function') {
	    target = {};
	  }
	  for (i = j = ref = start, ref1 = length; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
	    if ((options = arguments[i]) !== null) {
	      for (name in options) {
	        src = target[name];
	        copy = options[name];
	        if (target === copy) {
	          continue;
	        }
	        if (deep && copy && (exports.isPlainObject(copy) || exports.isArray(copy))) {
	          clone = {};
	          if (src && (exports.isPlainObject(src) || exports.isArray(src))) {
	            clone = exports.isArray(copy) && [] || {};
	          }
	          target[name] = exports.extend(deep, clone, copy);
	        } else if (typeof copy !== 'undefined') {
	          target[name] = copy;
	        }
	      }
	    }
	  }
	  return target;
	};

	exports.setElementAttr = function(el, attrName, value, noHash) {
	  var tagName;
	  if (attrName === 'style') {
	    return el.style.cssText = value;
	  }
	  tagName = (el.tagName || '').toLowerCase();
	  if (attrName === 'value' && (tagName === 'input' || tagName === 'textarea')) {
	    return el.value = value;
	  }
	  if (el._element && el._element.setAttribute && !noHash) {
	    return el._element.setAttribute(el, attrName, value);
	  } else {
	    return el.setAttribute(attrName, value);
	  }
	};

	exports.removeElementAttr = function(el, attrName) {
	  if (el._element && el._element.removeAttribute) {
	    return el._element.removeAttribute(attrName);
	  } else {
	    return el.removeAttribute(attrName);
	  }
	};

	exports.toArray = function(listLike) {
	  var i, j, list, ref;
	  if (!listLike) {
	    return [];
	  }
	  list = [];
	  for (i = j = 0, ref = listLike.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	    list.push(listLike[i]);
	  }
	  return list;
	};

	exports.each = function(arr, done) {
	  var j, k, len, res, v;
	  for (k = j = 0, len = arr.length; j < len; k = ++j) {
	    v = arr[k];
	    res = done(v, k);
	    if (false === res) {
	      return;
	    }
	  }
	};

	exports.objectKeys = function(obj) {
	  var key, keys;
	  if (obj == null) {
	    obj = {};
	  }
	  if (Object.keys) {
	    return Object.keys(obj);
	  }
	  keys = [];
	  for (key in obj) {
	    keys.push(key);
	  }
	  return keys;
	};

	exports.nodeContains = function(parentNode, node) {
	  return parentNode.contains(node);
	};

	exports.addEvent = function(node, type, callback) {
	  if (node.addEventListener) {
	    return node.addEventListener(type, callback);
	  } else if (node.attachEvent) {
	    node['e' + type + callback] = callback;
	    node[type + callback] = function() {
	      var event;
	      event = window.event;
	      event.target = event.srcElement;
	      return node['e' + type + callback](event);
	    };
	    return node.attachEvent('on' + type, node[type + callback]);
	  }
	};

	exports.removeEvent = function(node, type, callback) {
	  if (node.removeEventListener) {
	    return node.removeEventListener(type, callback);
	  } else if (node.detachEvent) {
	    node.detachEvent('on' + type, node[type + callback]);
	    return node[type + callback] = null;
	  }
	};

	(function() {
	  if (window.requestAnimationFrame) {
	    exports.nextTick = function(fun) {
	      return window.requestAnimationFrame(function() {
	        return fun();
	      });
	    };
	    return exports.nextTick.clear = function(id) {
	      if (id) {
	        return window.cancelAnimationFrame(id);
	      }
	    };
	  } else {
	    exports.nextTick = function(fun) {
	      return setTimeout(fun, 0);
	    };
	    return exports.nextTick.clear = function(id) {
	      if (id) {
	        return clearTimeout(id);
	      }
	    };
	  }
	})();


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * 修改自 simple-virtual-dom
	 * @date 2016-01-21 19:36:17
	 */
	'use strict';
	var dfsWalk, diff, diffChildren, diffProps, each, isString, listDiff, patch, ref;

	patch = __webpack_require__(8);

	listDiff = __webpack_require__(9);

	ref = __webpack_require__(6), isString = ref.isString, each = ref.each;

	diff = function(oldTree, newTree) {
	  var index, patches;
	  index = 0;
	  patches = {};
	  dfsWalk(oldTree, newTree, index, patches);
	  return patches;
	};

	dfsWalk = function(oldNode, newNode, index, patches) {
	  var currentPatch, propsPatches;
	  currentPatch = [];
	  if (newNode === null) {

	  } else if (isString(oldNode) && isString(newNode)) {
	    if (newNode !== oldNode) {
	      currentPatch.push({
	        type: patch.TEXT,
	        content: newNode
	      });
	    }
	  } else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
	    if (oldNode._element) {
	      newNode._element = oldNode._element;
	    }
	    if (oldNode._component) {
	      newNode._component = oldNode._component;
	    }
	    propsPatches = diffProps(oldNode, newNode);
	    if (propsPatches) {
	      currentPatch.push({
	        type: patch.PROPS,
	        props: propsPatches
	      });
	    }
	    if (!oldNode._component) {
	      diffChildren(oldNode.children, newNode.children, index, patches, currentPatch);
	    }
	  } else {
	    currentPatch.push({
	      type: patch.REPLACE,
	      node: newNode
	    });
	  }
	  if (currentPatch.length) {
	    patches[index] = currentPatch;
	  }
	};

	diffChildren = function(oldChildren, newChildren, index, patches, currentPatch) {
	  var currentNodeIndex, diffs, leftNode, reorderPatch;
	  diffs = listDiff(oldChildren, newChildren, 'key');
	  newChildren = diffs.children;
	  if (diffs.moves.length) {
	    reorderPatch = {
	      type: patch.REORDER,
	      moves: diffs.moves
	    };
	    currentPatch.push(reorderPatch);
	  }
	  leftNode = null;
	  currentNodeIndex = index;
	  each(oldChildren, function(child, i) {
	    var newChild;
	    newChild = newChildren[i];
	    currentNodeIndex = leftNode && leftNode.count ? currentNodeIndex + leftNode.count + 1 : currentNodeIndex + 1;
	    dfsWalk(child, newChild, currentNodeIndex, patches);
	    leftNode = child;
	  });
	};

	diffProps = function(oldNode, newNode) {
	  var count, j, key, len, newProps, oldProps, propsPatches, value;
	  count = 0;
	  oldProps = oldNode.props;
	  newProps = newNode.props;
	  propsPatches = {};
	  for (key in oldProps) {
	    value = oldProps[key];
	    if (newProps[key] !== value) {
	      count++;
	      propsPatches[key] = newProps[key];
	    }
	  }
	  for (value = j = 0, len = newProps.length; j < len; value = ++j) {
	    key = newProps[value];
	    if (!oldProps.hasOwnProperty(key)) {
	      count++;
	      propsPatches[key] = newProps[key];
	    }
	  }
	  if (count === 0) {
	    return null;
	  }
	  return propsPatches;
	};

	module.exports = diff;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * 修改自 simple-virtual-dom
	 * @date 2016-01-21 19:39:03
	 */
	'use strict';
	var PROPS, REORDER, REPLACE, TEXT, applyPatches, dfsWalk, each, patch, ref, removeElementAttr, reorderChildren, setElementAttr, setProps, toArray;

	REPLACE = 0;

	REORDER = 1;

	PROPS = 2;

	TEXT = 3;

	ref = __webpack_require__(6), setElementAttr = ref.setElementAttr, removeElementAttr = ref.removeElementAttr, toArray = ref.toArray, each = ref.each;

	patch = function(node, patches) {
	  var walker;
	  walker = {
	    index: 0
	  };
	  dfsWalk(node, walker, patches);
	};

	dfsWalk = function(node, walker, patches) {
	  var child, currentPatches, i, len;
	  currentPatches = patches[walker.index];
	  len = node.childNodes ? node.childNodes.length : 0;
	  if (node._component) {
	    len = 0;
	  }
	  i = 0;
	  while (i < len) {
	    child = node.childNodes[i];
	    walker.index++;
	    dfsWalk(child, walker, patches);
	    i++;
	  }
	  if (currentPatches) {
	    applyPatches(node, currentPatches);
	  }
	};

	applyPatches = function(node, currentPatches) {
	  var currentPatch, j, len1;
	  for (j = 0, len1 = currentPatches.length; j < len1; j++) {
	    currentPatch = currentPatches[j];
	    switch (currentPatch.type) {
	      case REPLACE:
	        node.parentNode.replaceChild(currentPatch.node.render(), node);
	        break;
	      case REORDER:
	        reorderChildren(node, currentPatch.moves);
	        break;
	      case PROPS:
	        setProps(node, currentPatch.props);
	        break;
	      case TEXT:
	        if (node.textContent) {
	          node.textContent = currentPatch.content;
	        } else {
	          node.nodeValue = currentPatch.content;
	        }
	        break;
	      default:
	        throw new Error('Unknown patch type ' + currentPatch.type);
	    }
	  }
	};

	setProps = function(node, props) {
	  var key, results, value;
	  results = [];
	  for (key in props) {
	    if (props[key] === void 0) {
	      if (key !== '_mc') {
	        results.push(removeElementAttr(node, key));
	      } else {
	        results.push(void 0);
	      }
	    } else {
	      value = props[key];
	      results.push(setElementAttr(node, key, value));
	    }
	  }
	  return results;
	};

	reorderChildren = function(node, moves) {
	  var maps, staticNodeList;
	  staticNodeList = toArray(node.childNodes);
	  maps = {};
	  each(staticNodeList, function(node) {
	    var key;
	    if (node.nodeType === 1) {
	      key = node.getAttribute('key');
	    }
	    if (key) {
	      maps[key] = node;
	    }
	  });
	  each(moves, function(move) {
	    var el, index, insertNode;
	    index = move.index;
	    if (move.type === 0) {
	      if (staticNodeList[index] === node.childNodes[index]) {
	        el = node.childNodes[index];
	        if (el._element && el._element.destroy) {
	          el._element.destroy();
	        }
	        node.removeChild(el);
	      }
	      staticNodeList.splice(index, 1);
	    } else if (move.type === 1) {
	      insertNode = maps[move.item.key] ? maps[move.item.key] : typeof move.item === 'object' ? move.item.render() : document.createTextNode(move.item);
	      staticNodeList.splice(index, 0, insertNode);
	      node.insertBefore(insertNode, node.childNodes[index] || null);
	    }
	  });
	};

	patch.REPLACE = REPLACE;

	patch.REORDER = REORDER;

	patch.PROPS = PROPS;

	patch.TEXT = TEXT;

	module.exports = patch;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10).diff


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Diff two list in O(N).
	 * @param {Array} oldList - Original List
	 * @param {Array} newList - List After certain insertions, removes, or moves
	 * @return {Object} - {moves: <Array>}
	 *                  - moves is a list of actions that telling how to remove and insert
	 */
	function diff (oldList, newList, key) {
	  var oldMap = makeKeyIndexAndFree(oldList, key)
	  var newMap = makeKeyIndexAndFree(newList, key)

	  var newFree = newMap.free

	  var oldKeyIndex = oldMap.keyIndex
	  var newKeyIndex = newMap.keyIndex

	  var moves = []

	  // a simulate list to manipulate
	  var children = []
	  var i = 0
	  var item
	  var itemKey
	  var freeIndex = 0

	  // fist pass to check item in old list: if it's removed or not
	  while (i < oldList.length) {
	    item = oldList[i]
	    itemKey = getItemKey(item, key)
	    if (itemKey) {
	      if (!newKeyIndex.hasOwnProperty(itemKey)) {
	        children.push(null)
	      } else {
	        var newItemIndex = newKeyIndex[itemKey]
	        children.push(newList[newItemIndex])
	      }
	    } else {
	      var freeItem = newFree[freeIndex++]
	      children.push(freeItem || null)
	    }
	    i++
	  }

	  var simulateList = children.slice(0)

	  // remove items no longer exist
	  i = 0
	  while (i < simulateList.length) {
	    if (simulateList[i] === null) {
	      remove(i)
	      removeSimulate(i)
	    } else {
	      i++
	    }
	  }

	  // i is cursor pointing to a item in new list
	  // j is cursor pointing to a item in simulateList
	  var j = i = 0
	  while (i < newList.length) {
	    item = newList[i]
	    itemKey = getItemKey(item, key)

	    var simulateItem = simulateList[j]
	    var simulateItemKey = getItemKey(simulateItem, key)

	    if (simulateItem) {
	      if (itemKey === simulateItemKey) {
	        j++
	      } else {
	        // new item, just inesrt it
	        if (!oldKeyIndex.hasOwnProperty(itemKey)) {
	          insert(i, item)
	        } else {
	          // if remove current simulateItem make item in right place
	          // then just remove it
	          var nextItemKey = getItemKey(simulateList[j + 1], key)
	          if (nextItemKey === itemKey) {
	            remove(i)
	            removeSimulate(j)
	            j++ // after removing, current j is right, just jump to next one
	          } else {
	            // else insert item
	            insert(i, item)
	          }
	        }
	      }
	    } else {
	      insert(i, item)
	    }

	    i++
	  }

	  function remove (index) {
	    var move = {index: index, type: 0}
	    moves.push(move)
	  }

	  function insert (index, item) {
	    var move = {index: index, item: item, type: 1}
	    moves.push(move)
	  }

	  function removeSimulate (index) {
	    simulateList.splice(index, 1)
	  }

	  return {
	    moves: moves,
	    children: children
	  }
	}

	/**
	 * Convert list to key-item keyIndex object.
	 * @param {Array} list
	 * @param {String|Function} key
	 */
	function makeKeyIndexAndFree (list, key) {
	  var keyIndex = {}
	  var free = []
	  for (var i = 0, len = list.length; i < len; i++) {
	    var item = list[i]
	    var itemKey = getItemKey(item, key)
	    if (itemKey) {
	      keyIndex[itemKey] = i
	    } else {
	      free.push(item)
	    }
	  }
	  return {
	    keyIndex: keyIndex,
	    free: free
	  }
	}

	function getItemKey (item, key) {
	  if (!item || !key) return void 666
	  return typeof key === 'string'
	    ? item[key]
	    : key(item)
	}

	exports.makeKeyIndexAndFree = makeKeyIndexAndFree // exports for test
	exports.diff = diff


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * ## 过滤函数
	 * @date 2016-01-13 18:07:10
	 * @author vfasky <vfasky@gmail.com>
	 * @link http://vfasky.com
	 */
	'use strict';
	var util;

	util = __webpack_require__(6);

	exports['toNumber'] = function(x) {
	  if (false === util.isNumber(x)) {
	    return 0;
	  }
	  return Number(x);
	};

	exports['toFixed'] = function(x, len) {
	  if (len == null) {
	    len = 1;
	  }
	  return Number(x).toFixed(len);
	};


	/*
	## 添加过滤函数

	```coffee
	{Template} = require 'mcore'
	moment = require 'moment'

	Temaplat.formatters.formNow = (value)->
	    moment(value).formNow()

	Template.formatters.toString = (value)->
	    String value or ''
	```

	使用

	```html
	<span>{ scope.date | formNow | toString }</span>
	```
	 */


/***/ },
/* 12 */
/***/ function(module, exports) {

	
	/**
	 * # dom attr binders
	 * 自定义的 dom 属性
	 * @date 2016-01-14 21:25:51
	 * @author vfasky <vfasky@gmail.com>
	 * @link http://vfasky.com
	 */
	'use strict';

	/*

	## 属性值可以执行 js

	```html
	<ul>
	    <li mc-for="v , k in scope.list">
	        {v} - {k + 1}
	        <span mc-show="k > 1"
	         mc-class="'item' + (k == 1 ? 'one' : '')">
	            {k | toString}
	        </span>
	    </li>
	</ul>
	```

	## mc-for
	遍历数组或对象，生成DOM

	**Array**

	```html
	<ul>
	    <li mc-for="v in scope.list">{v}</li>
	</ul>
	```
	下标的访问

	```html
	<ul>
	    <li mc-for="v , k in lscope.ist">{v} - {k}</li>
	</ul>
	```

	**Object**
	```html
	<ul>
	    <li mc-for="key of scope.data">{key}</li>
	</ul>

	<ul>
	    <li mc-for="key, val of scope.data">{key} : {val}</li>
	</ul>
	```

	## mc-if
	当值为 true 时，生成
	> **注意** 在 mc-if 的 DOM 及其子DOM 中，不要绑定 `mc-on-*` 的方法
	> 因为初始渲染时，DOM可能并没有生成，对应的事件并不保证能注册到。
	> 要确保事件能注册，请使用 `mc-show` 代替 `mc-if`

	## mc-unless
	当值为 true 时, 移除DOM

	## mc-on-*
	绑定事件，如：`mc-on-click` `mc-on-submit` 等

	> **注：模板事件回调至少传入二个参数**
	> * 第一个参数：event
	> * 第二个参数：DOM
	> * ... 模板中定义的参数，如：
	> `mc-on-click="showIx(v, k)"` 中接收 v, k
	> 需要这样 `tpl.showIx = (event, el, v, k)->`

	> *如果事件不需要传参，侧不需要 `()`, 否则 h2svd-loader 编绎时，会报错*
	 */
	exports['show'] = function(el, value) {
	  return el.style.display = value ? '' : 'none';
	};

	exports['hide'] = function(el, value) {
	  return el.style.display = value ? 'none' : '';
	};

	exports['checked'] = function(el, value) {
	  return el.checked = value && true || false;
	};

	exports['html'] = function(el, value) {
	  return el.innerHTML = value != null ? value : '';
	};


	/*
	## mc-*
	设置对应属性的值(没有找到对应的自定义属性，就会执行该方式)
	如 `mc-style` ，是设置 style； 'mc-height' 设置高度等

	## 注册自定义属性

	```coffee
	{Template} = require 'mcore'

	Template.binders['test'] = (el, value)->
	    console.log el, value


	#注册有状态的属性
	Template.binders['look'] =
	    #初始化时执行
	    init: ->
	    #DOM生成后执行
	    rendered: (el, value)->
	    #属性更新时执行
	    update: (el, value)->
	    #dom移除时执行
	    remove: (el)->

	```
	 */


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
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

	EventEmitter = __webpack_require__(4);

	Template = __webpack_require__(3);

	util = __webpack_require__(6);


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


/***/ }
/******/ ])
});
;