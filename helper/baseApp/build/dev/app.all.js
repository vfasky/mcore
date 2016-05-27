/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/dev/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *
	 * @date 2016-01-29 15:38:50
	 * @author vfasky <vfasky@gmail.com>
	 * @link http://vfasky.com
	 */
	'use strict';
	var $, app, mcoreApp;
	
	mcoreApp = __webpack_require__(1);
	
	$ = __webpack_require__(2);
	
	app = new mcoreApp.App($('body'));
	
	app.route('/', __webpack_require__(3)).route('*', __webpack_require__(3));
	
	app.run();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define(["jquery"], factory);
		else {
			var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jquery"]);
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function(__WEBPACK_EXTERNAL_MODULE_16__) {
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
		 *
		 * @date 2016-01-26 11:37:47
		 * @author vfasky <vfasky@gmail.com>
		 * @link http://vfasky.com
		 */
		'use strict';
		var mcoreApp;
	
		mcoreApp = __webpack_require__(14);
	
		mcoreApp.util = __webpack_require__(15);
	
		mcoreApp.Template = __webpack_require__(17);
	
		mcoreApp.Component = __webpack_require__(18);
	
		mcoreApp.App = __webpack_require__(19);
	
		mcoreApp.Route = __webpack_require__(20);
	
		mcoreApp.BaseClass = __webpack_require__(23);
	
		mcoreApp.View = __webpack_require__(24);
	
		mcoreApp.PopUpView = __webpack_require__(25);
	
		mcoreApp.http = __webpack_require__(26);
	
		module.exports = mcoreApp;
	
	
	/***/ },
	/* 1 */,
	/* 2 */,
	/* 3 */,
	/* 4 */,
	/* 5 */,
	/* 6 */,
	/* 7 */,
	/* 8 */,
	/* 9 */,
	/* 10 */,
	/* 11 */,
	/* 12 */,
	/* 13 */,
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
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
			    this._componentTree = [];
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
			      each(this.children, (function(_this) {
			        return function(child) {
			          var c, childEl, j, len, ref2;
			          if (child instanceof Element) {
			            childEl = child.render();
			            if (child._component) {
			              _this._componentTree.push(child._component);
			            }
			            if (child._componentTree) {
			              ref2 = child._componentTree;
			              for (j = 0, len = ref2.length; j < len; j++) {
			                c = ref2[j];
			                _this._componentTree.push(c);
			              }
			            }
			          } else {
			            childEl = document.createTextNode(child);
			          }
			          return el.appendChild(childEl);
			        };
			      })(this));
			      ref2 = this._binders;
			      for (j = 0, len = ref2.length; j < len; j++) {
			        binder = ref2[j];
			        if (binder.binder.rendered) {
			          binder.binder.rendered.call(this, el, binder.value);
			        }
			      }
			    }
			    if (!el._element && this._componentTree.length > 0) {
			      el._element = this;
			      this.el = el;
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
			    var attrName, c, event, j, len, ref1, results;
			    if (this._component) {
			      this._component.destroy();
			    }
			    ref1 = this._componentTree;
			    for (j = 0, len = ref1.length; j < len; j++) {
			      c = ref1[j];
			      c.destroy();
			    }
			    this._componentTree = [];
			    this._component = null;
			    if (!this.template) {
			      return;
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
			    el._element = this;
			    this._component = new Template.components[this.tagName](el, this);
			    ref1 = this.props;
			    for (attr in ref1) {
			      value = ref1[attr];
			      this.setAttribute(el, attr, value);
			    }
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
			var EventEmitter, Template, addEvent, diff, each, extend, isArray, isFunction, isPlainObject, nextTick, nodeContains, objectKeys, patch, ref, removeEvent,
			  extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
			  hasProp = {}.hasOwnProperty,
			  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
			EventEmitter = __webpack_require__(4);
	
			ref = __webpack_require__(6), extend = ref.extend, nextTick = ref.nextTick, each = ref.each, isFunction = ref.isFunction, isArray = ref.isArray, isPlainObject = ref.isPlainObject, objectKeys = ref.objectKeys, addEvent = ref.addEvent, removeEvent = ref.removeEvent, nodeContains = ref.nodeContains;
	
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
			    this._queueCallbacks = [];
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
			    var isChange;
			    if (doneOrAsync == null) {
			      doneOrAsync = null;
			    }
			    isChange = this.scope[key] !== value;
			    this.scope[key] = value;
			    if (this._status === 0) {
			      if (isFunction(doneOrAsync)) {
			        this._queueCallbacks.push(doneOrAsync);
			      }
			      return;
			    }
			    if (isChange) {
			      this.emit('changeScope', this.scope, key, value);
			      this.emit('change:' + key, value);
			    }
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
			      if (isPlainObject(this.scope[key])) {
			        return extend(true, {}, this.scope[key]);
			      } else if (isArray(this.scope[key])) {
			        return extend(true, [], this.scope[key]);
			      } else {
			        return this.scope[key];
			      }
			    }
			    return defaultVal;
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
			  ## 销毁实例
			  已经插入 DOM Tree 的，会被移除
			   */
	
			  Template.prototype.destroy = function() {
			    this.emit('destroy');
			    if (this.refs && this.refs._element && this.refs._element.destroy) {
			      this.refs._element.destroy();
			      this.refs._element = null;
			    }
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
			    var scopeKeys, scopeLen;
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
			      each(scopeKeys, (function(_this) {
			        return function(v) {
			          return _this.set(v, scope[v]);
			        };
			      })(this));
			      this.renderQueue(doneOrAsync);
			    }
			    return this;
			  };
	
			  Template.prototype._render = function() {
			    var patches, scope, virtualDom;
			    scope = this.scope;
			    if (this.virtualDomDefine) {
			      virtualDom = this.virtualDomDefine(scope, this).virtualDom;
			      this._status = 2;
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
			      this._status = 3;
			      this.emit('rendered', this.refs);
			      return each(this._queueCallbacks, (function(_this) {
			        return function(done, k) {
			          if (isFunction(done)) {
			            done(_this.refs);
			            return _this._queueCallbacks[k] = null;
			          }
			        };
			      })(this));
			    }
			  };
	
			  Template.prototype.renderQueue = function(doneOrAsync) {
			    if (isFunction(doneOrAsync)) {
			      this._queueCallbacks.push(doneOrAsync);
			    }
			    nextTick.clear(this._queueId);
			    if (true === doneOrAsync) {
			      return this._render();
			    } else {
			      this._status = 1;
			      return this._queueId = nextTick((function(_this) {
			        return function() {
			          return _this._render();
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
			      this._events[event].splice(0, 0, {
			        el: el,
			        callback: callback,
			        id: id
			      });
			    }
			    return this.addEventListener(event, el);
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
	
			Template.getEnv = function(el) {
			  var proxyEnv;
			  proxyEnv = null;
			  if (el._element.template._proxy) {
			    proxyEnv = el._element.template._proxy;
			  } else if (el._element.template[funName]) {
			    proxyEnv = el._element.template;
			  }
			  return proxyEnv;
			};
	
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
	
			var has = Object.prototype.hasOwnProperty;
	
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
			 * @param {Boolean} [once=false] Only emit once
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
			 * Hold the assigned EventEmitters by name.
			 *
			 * @type {Object}
			 * @private
			 */
			EventEmitter.prototype._events = undefined;
	
			/**
			 * Return an array listing the events for which the emitter has registered
			 * listeners.
			 *
			 * @returns {Array}
			 * @api public
			 */
			EventEmitter.prototype.eventNames = function eventNames() {
			  var events = this._events
			    , names = []
			    , name;
	
			  if (!events) return names;
	
			  for (name in events) {
			    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
			  }
	
			  if (Object.getOwnPropertySymbols) {
			    return names.concat(Object.getOwnPropertySymbols(events));
			  }
	
			  return names;
			};
	
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
			 * @param {Function} fn Callback function.
			 * @param {Mixed} [context=this] The context of the function.
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
			 * @param {Mixed} [context=this] The context of the function.
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
			  if (attrName === 'key') {
			    return el._key = value;
			  }
			  if (attrName === 'style') {
			    return el.style.cssText = value;
			  }
			  if (attrName === 'class') {
			    return el.className = value;
			  }
			  tagName = (el.tagName || '').toLowerCase();
			  if (attrName === 'value' && (tagName === 'input' || tagName === 'textarea')) {
			    return el.value = value;
			  }
			  if (el._element && el._element.setAttribute && !noHash) {
			    return el._element.setAttribute(el, attrName, value);
			  } else {
			    if (exports.isString(value) || exports.isNumber(value)) {
			      return el.setAttribute(attrName, value);
			    }
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
			    if (!oldNode._component && true !== oldNode._noDiffChild) {
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
			  if (node._element) {
			    if (node._element._noDiffChild || node._element._component) {
			      len = 0;
			    }
			  }
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
			  var currentPatch, j, len1, newNode;
			  for (j = 0, len1 = currentPatches.length; j < len1; j++) {
			    currentPatch = currentPatches[j];
			    switch (currentPatch.type) {
			      case REPLACE:
			        if (typeof currentPatch.node === 'string') {
			          newNode = document.createTextNode(currentPatch.node);
			        } else {
			          newNode = currentPatch.node.render();
			        }
			        node.parentNode.replaceChild(newNode, node);
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
			      key = node.getAttribute('key') || node._key;
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
			        if (el) {
			          if (el._element && el._element.destroy) {
			            el._element.destroy();
			          }
			          node.removeChild(el);
			        }
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
			var util,
			  slice = [].slice,
			  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
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
			## in 是否在指参数中
			```html
			<span mc-show="scope.id | in 1 2 3"></span>
			```
			 */
	
			exports['in'] = function() {
			  var arr, x;
			  x = arguments[0], arr = 2 <= arguments.length ? slice.call(arguments, 1) : [];
			  return indexOf.call(arr, x) >= 0;
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
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * # dom attr binders
			 * 自定义的 dom 属性
			 * @date 2016-01-14 21:25:51
			 * @author vfasky <vfasky@gmail.com>
			 * @link http://vfasky.com
			 */
			'use strict';
			var util;
	
			util = __webpack_require__(6);
	
	
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
			  el.innerHTML = value != null ? value : '';
			  return el._element._noDiffChild = true;
			};
	
			exports['no-diff-child'] = function(el, value) {
			  return el._element._noDiffChild = value && true || false;
			};
	
			exports['selected'] = {
			  asyncSet: function(el, value) {
			    el.value = value;
			    if (el.value !== value) {
			      if (el._setValTime) {
			        clearTimeout(el._setValTime);
			      }
			      return el._setValTime = setTimeout(function() {
			        return el.value = value;
			      }, 70);
			    }
			  },
			  rendered: function(el, value) {
			    el._rendered = true;
			    if (el._renderedVal !== void 0) {
			      exports['selected'].asyncSet(el, el._renderedVal);
			      return el._renderedVal = void 0;
			    } else {
			      return exports['selected'].asyncSet(el, value);
			    }
			  },
			  update: function(el, value) {
			    if (el._rendered) {
			      return exports['selected'].asyncSet(el, value);
			    } else {
			      return el._renderedVal = value;
			    }
			  }
			};
	
			exports['disabled'] = function(el, value) {
			  return el.disabled = value;
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
			    this.template = new Template();
			    this.template._proxy = this;
			    this._isInit = false;
			    this._plus();
			    this.init();
			    this.watch();
			  }
	
			  Component.prototype._plus = function() {};
	
			  Component.prototype.init = function() {};
	
			  Component.prototype.parent = function() {
			    if (this.virtualEl && this.virtualEl.template) {
			      return this.virtualEl.template._proxy;
			    }
			    return null;
			  };
	
	
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
			    parentView = this.parent();
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
			    if (false === this._isInit) {
			      this._isInit = true;
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
			    this.el.appendChild(this.refs);
			    return this.emit('mount', this.refs);
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
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 *
		 * 扩展 util
		 * @author vfasky <vfasky@gmail.com>
		 */
		'use strict';
		var $, each, util,
		  slice = [].slice;
	
		util = __webpack_require__(14).util;
	
		each = util.each;
	
		$ = __webpack_require__(16);
	
		util.loadPromise = function(data) {
		  var dtd, keys, promises;
		  if (data == null) {
		    data = {};
		  }
		  dtd = $.Deferred();
		  keys = util.objectKeys(data);
		  if (keys.length === 0) {
		    dtd.resolve({});
		  } else {
		    promises = [];
		    each(keys, function(v) {
		      return promises.push(data[v]);
		    });
		    $.when.apply(null, promises).done(function() {
		      var args, vData;
		      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		      vData = {};
		      each(args, (function(_this) {
		        return function(v, k) {
		          var key;
		          key = keys[k];
		          if (key !== void 0) {
		            if (util.isArray(v) && v.length === 3 && v[2].promise) {
		              v = v[0];
		            }
		            vData[key] = v;
		          }
		        };
		      })(this));
		      return dtd.resolve(vData);
		    }).fail(function(err) {
		      return dtd.reject(err);
		    });
		  }
		  return dtd.promise();
		};
	
		module.exports = util;
	
	
	/***/ },
	/* 16 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_16__;
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 *
		 * 扩展 template
		 * @author vfasky <vfasky@gmail.com>
		 */
		'use strict';
		var $, Template, _keyCode, mcore, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty,
		  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
		mcore = __webpack_require__(14);
	
		$ = __webpack_require__(16);
	
		util = mcore.util;
	
		_keyCode = {
		  keyenter: 13,
		  keyesc: 27
		};
	
		Template = (function(superClass) {
		  extend(Template, superClass);
	
		  function Template() {
		    return Template.__super__.constructor.apply(this, arguments);
		  }
	
		  Template.prototype.set = function(key, value, doneOrAsync) {
		    if (value && util.isFunction(value.then)) {
		      return value.then((function(_this) {
		        return function(val) {
		          return Template.__super__.set.call(_this, key, val, doneOrAsync);
		        };
		      })(this));
		    } else {
		      return Template.__super__.set.call(this, key, value, doneOrAsync);
		    }
		  };
	
		  Template.prototype.addEventListener = function(event, el) {
		    var $refs;
		    if (!this.refs) {
		      this._initTask.push((function(_this) {
		        return function() {
		          return _this.addEventListener(event, el);
		        };
		      })(this));
		      return;
		    }
		    if (indexOf.call(this._eventReged, event) < 0) {
		      this.regEventCallback(event);
		      $refs = $(this.refs);
		      if (event === 'scroll') {
		        $(el).on('scroll', (function(_this) {
		          return function() {
		            return _this._eventListener[event].apply(_this, arguments);
		          };
		        })(this));
		        return;
		      }
		      if (event !== 'blur' && event !== 'focus') {
		        if (_keyCode.hasOwnProperty(event)) {
		          return $refs.on('keyup', (function(_this) {
		            return function(e) {
		              if (e.keyCode === _keyCode[event]) {
		                return _this._eventListener[event].apply(_this, arguments);
		              }
		            };
		          })(this));
		        } else {
		          return $refs.on(event, (function(_this) {
		            return function() {
		              return _this._eventListener[event].apply(_this, arguments);
		            };
		          })(this));
		        }
		      } else {
		        return $refs.on(event, 'input, textarea, select', (function(_this) {
		          return function() {
		            return _this._eventListener[event].apply(_this, arguments);
		          };
		        })(this));
		      }
		    }
		  };
	
		  Template.prototype.removeEvent = function(event, el, id) {
		    if (!this.refs) {
		      return;
		    }
		    event = event.toLowerCase();
		    if (false === this._events.hasOwnProperty(event)) {
		      return;
		    }
		    util.each(this._events[event], (function(_this) {
		      return function(e, i) {
		        if (e.id === id) {
		          _this._events[event].splice(i, 1);
		          return false;
		        }
		      };
		    })(this));
		    if (this._events[event].length === 0) {
		      return $(this.refs).off(event);
		    }
		  };
	
		  return Template;
	
		})(mcore.Template);
	
		module.exports = Template;
	
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 *
		 * 扩展组件
		 * @author vfasky <vfasky@gmail.com>
		 */
		'use strict';
		var $, $body, $win, Component, Template, isFunction, loadPromise, mcore, ref,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		$ = __webpack_require__(16);
	
		mcore = __webpack_require__(14);
	
		Template = __webpack_require__(17);
	
		ref = __webpack_require__(15), loadPromise = ref.loadPromise, isFunction = ref.isFunction;
	
		$win = $(window);
	
		$body = $('body');
	
		Component = (function(superClass) {
		  extend(Component, superClass);
	
		  function Component(el, virtualEl) {
		    this.el = el;
		    this.virtualEl = virtualEl != null ? virtualEl : null;
		    this.$win = $win;
		    this.$body = $body;
		    this.template = new Template();
		    this.template._proxy = this;
		    this._isInit = false;
		    this._plus();
		    this.init();
		    this.watch();
		  }
	
		  Component.prototype.render = function(virtualDomDefine, scope, doneOrSync) {
		    var dtd;
		    if (scope == null) {
		      scope = {};
		    }
		    if (doneOrSync == null) {
		      doneOrSync = null;
		    }
		    if (true === doneOrSync) {
		      return Component.__super__.render.call(this, virtualDomDefine, scope, doneOrSync);
		    }
		    dtd = $.Deferred();
		    loadPromise(scope).then((function(_this) {
		      return function(scope) {
		        return Component.__super__.render.call(_this, virtualDomDefine, scope, function(refs) {
		          dtd.resolve(refs);
		          if (isFunction(doneOrSync)) {
		            return doneOrSync(refs);
		          }
		        });
		      };
		    })(this)).fail(function(err) {
		      return dtd.reject(err);
		    });
		    return dtd.promise();
		  };
	
		  return Component;
	
		})(mcore.Component);
	
		module.exports = Component;
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * app
		 * @module mcore/app
		 * @author vfasky <vfasky@gmail.com>
		 */
		"use strict";
		var $, App, EventEmitter, ref, route, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		$ = __webpack_require__(16);
	
		route = __webpack_require__(20);
	
		ref = __webpack_require__(14), util = ref.util, EventEmitter = ref.EventEmitter;
	
		App = (function(superClass) {
		  extend(App, superClass);
	
		  function App($el1, options) {
		    this.$el = $el1;
		    if (options == null) {
		      options = {};
		    }
		    this.options = $.extend({
		      viewClass: 'mcore-app-view',
		      routeChange: route.Route.changeByLocationHash
		    }, options);
		    this.router = new route.Route(this.options.routeChange);
		    this.curView = null;
		    this._middlewares = [];
		  }
	
		  App.prototype.route = function(path, view) {
		    var self;
		    self = this;
		    this.router.add(path, function() {
		      return self.runView(view, this, arguments);
		    });
		    return this;
		  };
	
		  App.prototype.use = function(middleware) {
		    this._middlewares.push(middleware);
		    return this;
		  };
	
		  App.prototype._runView = function(done) {
		    if (done == null) {
		      done = function() {};
		    }
		    this.curView.instantiate.route = this.env.route;
		    this.curView.instantiate.context = this.env.context;
		    this.curView.instantiate.run.apply(this.curView.instantiate, this.env.args);
		    this.emit('runView', this.curView);
		    return done(this.curView.instantiate);
		  };
	
		  App.prototype.stack = function(ix, err, done) {
		    var middleware, next, nextIx;
		    if (ix == null) {
		      ix = 0;
		    }
		    if (err == null) {
		      err = null;
		    }
		    if (done == null) {
		      done = function() {};
		    }
		    if (ix === this._middlewares.length) {
		      return this._runView(done);
		    }
		    middleware = this._middlewares[ix];
		    nextIx = ix + 1;
		    next = (function(_this) {
		      return function(err) {
		        return _this.stack(nextIx, err, done);
		      };
		    })(this);
		    this.env.view = this.curView.instantiate;
		    return middleware.call(this.env, err, next);
		  };
	
		  App.prototype.runMiddlewares = function(done) {
		    if (done == null) {
		      done = function() {};
		    }
		    if (this._middlewares.length === 0) {
		      return this._runView(done);
		    }
		    return this.stack(0, null, done);
		  };
	
		  App.prototype._initView = function(View, viewName) {
		    var $el;
		    $el = $("<div class='" + this.options.viewClass + "' />");
		    this.curView = {
		      name: viewName,
		      instantiate: new View($el, this)
		    };
		    return this.runMiddlewares((function(_this) {
		      return function() {
		        _this.curView.instantiate.$el.appendTo(_this.$el);
		        return _this.curView.instantiate.afterRun();
		      };
		    })(this));
		  };
	
		  App.prototype.runView = function(View, route, args) {
		    var viewName;
		    viewName = View.viewName;
		    this.env = {
		      route: route,
		      context: route.context,
		      args: args,
		      viewName: viewName,
		      app: this
		    };
		    if (this.curView) {
		      if (this.curView.name === viewName) {
		        this.runMiddlewares((function(_this) {
		          return function() {
		            return _this.curView.instantiate.afterRun();
		          };
		        })(this));
		        return;
		      } else {
		        this.emit('destroyView', this.curView);
		        this.curView.instantiate.destroy();
		        this.curView = null;
		      }
		    }
		    return this._initView(View, viewName);
		  };
	
		  App.prototype.run = function() {
		    return this.router.run();
		  };
	
		  return App;
	
		})(EventEmitter);
	
		module.exports = App;
	
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * 路由
		 * @module mcore/route
		 * @author vfasky <vfasky@gmail.com>
		 * @example
		 * route = new mcore.Route()
		 *
		 * route.add '/index/:id', (id)->
		 *     console.log id
		 *
		 * route.add '/show/*', (name)->
		 *     console.log name
		 *
		 * route.add '/get/:id?', (id)->
		 *     console.log id # or undefined
		 *
		 * route.add 'user user/:id', (id)->
		 *     console.log route.lookup('user', id:1) #/user/1
		 *
		 * route.run()
		 */
		"use strict";
		var Route, exports, pathToObject, pathToRegexp, util;
	
		util = __webpack_require__(14).util;
	
		pathToRegexp = __webpack_require__(21);
	
	
		/**
		 * 将 url 的参数转换为对象
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		pathToObject = function(url) {
		  var argStr, args, attr, data, keys;
		  url = String(url);
		  argStr = '';
		  attr = [];
		  if (url.indexOf('?') !== -1) {
		    argStr = url.split('?').pop();
		  } else if (url.indexOf('&') !== -1) {
		    argStr = url;
		  }
		  if (argStr === '') {
		    return {};
		  }
		  args = argStr.split('&');
		  data = {};
		  keys = [];
		  util.each(args, function(v) {
		    var key, value;
		    if (v.indexOf('=') === -1) {
		      return;
		    }
		    v = v.split('=');
		    if (v.length !== 2) {
		      return;
		    }
		    key = v[0].trim();
		    value = v[1];
		    if (util.isNumber(value) && String(value).length < 14) {
		      value = Number(value);
		    } else {
		      value = decodeURIComponent(value);
		    }
		    data[key] = value;
		  });
		  return data;
		};
	
	
		/**
		 * 路由
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route = function(hashchange, sensitive, strict) {
		  this.hashchange = hashchange != null ? hashchange : Route.changeByLocationHash;
		  this.sensitive = sensitive != null ? sensitive : false;
		  this.strict = strict != null ? strict : false;
		  this.rule = [];
		};
	
	
		/**
		 * 开始监听路由
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route.prototype.run = function() {
		  this.hashchange((function(_this) {
		    return function(url) {
		      _this.match(url);
		    };
		  })(this));
		};
	
	
		/**
		 * 添加规则
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route.prototype.add = function(path, fn) {
		  var keys, reg;
		  keys = [];
		  reg = pathToRegexp(path, keys, this.sensitive, this.strict);
		  this.rule.push({
		    path: path,
		    reg: reg,
		    keys: keys,
		    fn: fn
		  });
		  return this;
		};
	
	
		/**
		 * 配对 url
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route.prototype.match = function(url) {
		  var argStr, fullPath, getIx, isMatch, path;
		  path = String(url);
		  fullPath = path;
		  argStr = '';
		  getIx = path.indexOf('?');
		  if (getIx === -1) {
		    getIx = path.indexOf('&');
		  }
		  isMatch = false;
		  if (getIx !== -1) {
		    argStr = path.substring(getIx);
		    path = path.substring(0, getIx);
		  }
		  util.each(this.rule, function(v) {
		    var args, context, data, env, i, j, k, ref, ref1, value;
		    if (isMatch) {
		      return false;
		    }
		    ref = v.reg.exec(path);
		    if (null === ref) {
		      return;
		    }
		    isMatch = true;
		    context = pathToObject(argStr);
		    data = {};
		    args = [];
		    for (i = j = 1, ref1 = ref.length; 1 <= ref1 ? j < ref1 : j > ref1; i = 1 <= ref1 ? ++j : --j) {
		      k = v.keys[i - 1];
		      value = ref[i];
		      if (util.isNumber(value) && String(value).length < 14) {
		        value = Number(value);
		      } else if (value) {
		        value = decodeURIComponent(value);
		      }
		      if (k && k.name) {
		        data[k.name] = value;
		      }
		      args.push(value || null);
		    }
		    env = {
		      url: fullPath,
		      path: path,
		      args: argStr,
		      rule: v.path,
		      context: context,
		      keys: v.keys,
		      data: data
		    };
		    v.fn.apply(env, args);
		  });
		  return this;
		};
	
	
		/**
		 * 通过 hashchange 触发
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route.changeByLocationHash = function(emit) {
		  var hashChanged;
		  hashChanged = function() {
		    return emit(window.location.hash.substring(1));
		  };
		  if (window.addEventListener) {
		    window.addEventListener('hashchange', hashChanged, false);
		  } else {
		    window.attachEvent('onhashchange', hashChanged);
		  }
		  return hashChanged();
		};
	
	
		/*
		    通过 history api 触发
		    @author jackieLin <dashi_lin@163.com>
		 */
	
		Route.changeByHistory = function(emit) {
		  var historyChange;
		  if (!window.history) {
		    return Route.changeByLocationHash(emit);
		  }
		  historyChange = function() {
		    return emit(window.location.hash.substring(1));
		  };
		  window.onpopstate = function(event) {
		    return historyChange();
		  };
		  return historyChange();
		};
	
		exports = module.exports = {
		  pathToRegexp: pathToRegexp,
		  pathToObject: pathToObject,
		  Route: Route
		};
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isarray = __webpack_require__(22)
	
		/**
		 * Expose `pathToRegexp`.
		 */
		module.exports = pathToRegexp
		module.exports.parse = parse
		module.exports.compile = compile
		module.exports.tokensToFunction = tokensToFunction
		module.exports.tokensToRegExp = tokensToRegExp
	
		/**
		 * The main path matching regexp utility.
		 *
		 * @type {RegExp}
		 */
		var PATH_REGEXP = new RegExp([
		  // Match escaped characters that would otherwise appear in future matches.
		  // This allows the user to escape special characters that won't transform.
		  '(\\\\.)',
		  // Match Express-style parameters and un-named parameters with a prefix
		  // and optional suffixes. Matches appear as:
		  //
		  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
		  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
		  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
		  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
		].join('|'), 'g')
	
		/**
		 * Parse a string for the raw tokens.
		 *
		 * @param  {String} str
		 * @return {Array}
		 */
		function parse (str) {
		  var tokens = []
		  var key = 0
		  var index = 0
		  var path = ''
		  var res
	
		  while ((res = PATH_REGEXP.exec(str)) != null) {
		    var m = res[0]
		    var escaped = res[1]
		    var offset = res.index
		    path += str.slice(index, offset)
		    index = offset + m.length
	
		    // Ignore already escaped sequences.
		    if (escaped) {
		      path += escaped[1]
		      continue
		    }
	
		    // Push the current path onto the tokens.
		    if (path) {
		      tokens.push(path)
		      path = ''
		    }
	
		    var prefix = res[2]
		    var name = res[3]
		    var capture = res[4]
		    var group = res[5]
		    var suffix = res[6]
		    var asterisk = res[7]
	
		    var repeat = suffix === '+' || suffix === '*'
		    var optional = suffix === '?' || suffix === '*'
		    var delimiter = prefix || '/'
		    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
	
		    tokens.push({
		      name: name || key++,
		      prefix: prefix || '',
		      delimiter: delimiter,
		      optional: optional,
		      repeat: repeat,
		      pattern: escapeGroup(pattern)
		    })
		  }
	
		  // Match any characters still remaining.
		  if (index < str.length) {
		    path += str.substr(index)
		  }
	
		  // If the path exists, push it onto the end.
		  if (path) {
		    tokens.push(path)
		  }
	
		  return tokens
		}
	
		/**
		 * Compile a string to a template function for the path.
		 *
		 * @param  {String}   str
		 * @return {Function}
		 */
		function compile (str) {
		  return tokensToFunction(parse(str))
		}
	
		/**
		 * Expose a method for transforming tokens into the path function.
		 */
		function tokensToFunction (tokens) {
		  // Compile all the tokens into regexps.
		  var matches = new Array(tokens.length)
	
		  // Compile all the patterns before compilation.
		  for (var i = 0; i < tokens.length; i++) {
		    if (typeof tokens[i] === 'object') {
		      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
		    }
		  }
	
		  return function (obj) {
		    var path = ''
		    var data = obj || {}
	
		    for (var i = 0; i < tokens.length; i++) {
		      var token = tokens[i]
	
		      if (typeof token === 'string') {
		        path += token
	
		        continue
		      }
	
		      var value = data[token.name]
		      var segment
	
		      if (value == null) {
		        if (token.optional) {
		          continue
		        } else {
		          throw new TypeError('Expected "' + token.name + '" to be defined')
		        }
		      }
	
		      if (isarray(value)) {
		        if (!token.repeat) {
		          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
		        }
	
		        if (value.length === 0) {
		          if (token.optional) {
		            continue
		          } else {
		            throw new TypeError('Expected "' + token.name + '" to not be empty')
		          }
		        }
	
		        for (var j = 0; j < value.length; j++) {
		          segment = encodeURIComponent(value[j])
	
		          if (!matches[i].test(segment)) {
		            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
		          }
	
		          path += (j === 0 ? token.prefix : token.delimiter) + segment
		        }
	
		        continue
		      }
	
		      segment = encodeURIComponent(value)
	
		      if (!matches[i].test(segment)) {
		        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
		      }
	
		      path += token.prefix + segment
		    }
	
		    return path
		  }
		}
	
		/**
		 * Escape a regular expression string.
		 *
		 * @param  {String} str
		 * @return {String}
		 */
		function escapeString (str) {
		  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
		}
	
		/**
		 * Escape the capturing group by escaping special characters and meaning.
		 *
		 * @param  {String} group
		 * @return {String}
		 */
		function escapeGroup (group) {
		  return group.replace(/([=!:$\/()])/g, '\\$1')
		}
	
		/**
		 * Attach the keys as a property of the regexp.
		 *
		 * @param  {RegExp} re
		 * @param  {Array}  keys
		 * @return {RegExp}
		 */
		function attachKeys (re, keys) {
		  re.keys = keys
		  return re
		}
	
		/**
		 * Get the flags for a regexp from the options.
		 *
		 * @param  {Object} options
		 * @return {String}
		 */
		function flags (options) {
		  return options.sensitive ? '' : 'i'
		}
	
		/**
		 * Pull out keys from a regexp.
		 *
		 * @param  {RegExp} path
		 * @param  {Array}  keys
		 * @return {RegExp}
		 */
		function regexpToRegexp (path, keys) {
		  // Use a negative lookahead to match only capturing groups.
		  var groups = path.source.match(/\((?!\?)/g)
	
		  if (groups) {
		    for (var i = 0; i < groups.length; i++) {
		      keys.push({
		        name: i,
		        prefix: null,
		        delimiter: null,
		        optional: false,
		        repeat: false,
		        pattern: null
		      })
		    }
		  }
	
		  return attachKeys(path, keys)
		}
	
		/**
		 * Transform an array into a regexp.
		 *
		 * @param  {Array}  path
		 * @param  {Array}  keys
		 * @param  {Object} options
		 * @return {RegExp}
		 */
		function arrayToRegexp (path, keys, options) {
		  var parts = []
	
		  for (var i = 0; i < path.length; i++) {
		    parts.push(pathToRegexp(path[i], keys, options).source)
		  }
	
		  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
		  return attachKeys(regexp, keys)
		}
	
		/**
		 * Create a path regexp from string input.
		 *
		 * @param  {String} path
		 * @param  {Array}  keys
		 * @param  {Object} options
		 * @return {RegExp}
		 */
		function stringToRegexp (path, keys, options) {
		  var tokens = parse(path)
		  var re = tokensToRegExp(tokens, options)
	
		  // Attach keys back to the regexp.
		  for (var i = 0; i < tokens.length; i++) {
		    if (typeof tokens[i] !== 'string') {
		      keys.push(tokens[i])
		    }
		  }
	
		  return attachKeys(re, keys)
		}
	
		/**
		 * Expose a function for taking tokens and returning a RegExp.
		 *
		 * @param  {Array}  tokens
		 * @param  {Array}  keys
		 * @param  {Object} options
		 * @return {RegExp}
		 */
		function tokensToRegExp (tokens, options) {
		  options = options || {}
	
		  var strict = options.strict
		  var end = options.end !== false
		  var route = ''
		  var lastToken = tokens[tokens.length - 1]
		  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
	
		  // Iterate over the tokens and create our regexp string.
		  for (var i = 0; i < tokens.length; i++) {
		    var token = tokens[i]
	
		    if (typeof token === 'string') {
		      route += escapeString(token)
		    } else {
		      var prefix = escapeString(token.prefix)
		      var capture = token.pattern
	
		      if (token.repeat) {
		        capture += '(?:' + prefix + capture + ')*'
		      }
	
		      if (token.optional) {
		        if (prefix) {
		          capture = '(?:' + prefix + '(' + capture + '))?'
		        } else {
		          capture = '(' + capture + ')?'
		        }
		      } else {
		        capture = prefix + '(' + capture + ')'
		      }
	
		      route += capture
		    }
		  }
	
		  // In non-strict mode we allow a slash at the end of match. If the path to
		  // match already ends with a slash, we remove it for consistency. The slash
		  // is valid at the end of a path match, not in the middle. This is important
		  // in non-ending mode, where "/test/" shouldn't match "/test//route".
		  if (!strict) {
		    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
		  }
	
		  if (end) {
		    route += '$'
		  } else {
		    // In non-ending mode, we need the capturing groups to match as much as
		    // possible by using a positive lookahead to the end or next path segment.
		    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
		  }
	
		  return new RegExp('^' + route, flags(options))
		}
	
		/**
		 * Normalize the given path string, returning a regular expression.
		 *
		 * An empty array can be passed in for the keys, which will hold the
		 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
		 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
		 *
		 * @param  {(String|RegExp|Array)} path
		 * @param  {Array}                 [keys]
		 * @param  {Object}                [options]
		 * @return {RegExp}
		 */
		function pathToRegexp (path, keys, options) {
		  keys = keys || []
	
		  if (!isarray(keys)) {
		    options = keys
		    keys = []
		  } else if (!options) {
		    options = {}
		  }
	
		  if (path instanceof RegExp) {
		    return regexpToRegexp(path, keys, options)
		  }
	
		  if (isarray(path)) {
		    return arrayToRegexp(path, keys, options)
		  }
	
		  return stringToRegexp(path, keys, options)
		}
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
		module.exports = Array.isArray || function (arr) {
		  return Object.prototype.toString.call(arr) == '[object Array]';
		};
	
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 *
		 * @date 2016-01-26 15:20:09
		 * @author vfasky <vfasky@gmail.com>
		 * @link http://vfasky.com
		 */
		'use strict';
		var $, $body, $win, BaseClass, EventEmitter, Template, _id, _isIOS, _isWeixinBrowser, each, loadPromise, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		EventEmitter = __webpack_require__(14).EventEmitter;
	
		Template = __webpack_require__(17);
	
		$ = __webpack_require__(16);
	
		util = __webpack_require__(15);
	
		each = util.each, loadPromise = util.loadPromise;
	
		$win = $(window);
	
		$body = $('body');
	
		_isWeixinBrowser = /MicroMessenger/i.test(window.navigator.userAgent);
	
		_isIOS = /iphone|ipad/gi.test(window.navigator.appVersion);
	
		_id = 0;
	
		BaseClass = (function(superClass) {
		  extend(BaseClass, superClass);
	
		  function BaseClass() {
		    this._id = _id++;
		    this.$win = $win;
		    this.$body = $body;
		    this.util = util;
		    this.nextTick = util.nextTick;
		    this.isWeixinBrowser = _isWeixinBrowser;
		    this.isIOS = _isIOS;
		    this.template = new Template();
		    this.template._proxy = this;
		    this.beforeInit();
		    this.init();
		    this.watch();
		  }
	
		  BaseClass.prototype.beforeInit = function() {};
	
		  BaseClass.prototype.init = function() {};
	
		  BaseClass.prototype.watch = function() {};
	
		  BaseClass.prototype.render = function(virtualDomDefine, scope) {
		    var dtd;
		    this.virtualDomDefine = virtualDomDefine;
		    if (scope == null) {
		      scope = {};
		    }
		    dtd = $.Deferred();
		    loadPromise(scope).then((function(_this) {
		      return function(scope) {
		        return _this.template.render(_this.virtualDomDefine, scope, function(refs) {
		          _this.emit('rendered', refs);
		          return dtd.resolve(refs);
		        });
		      };
		    })(this)).fail(function(err) {
		      return dtd.reject(err);
		    });
		    return dtd.promise();
		  };
	
		  BaseClass.prototype.set = function() {
		    return this.template.set.apply(this.template, arguments);
		  };
	
		  BaseClass.prototype.get = function() {
		    return this.template.get.apply(this.template, arguments);
		  };
	
		  BaseClass.prototype.remove = function() {
		    return this.template.remove.apply(this.template, arguments);
		  };
	
		  BaseClass.prototype.clone = function(value) {
		    return $.extend(true, $.isArray(value) && [] || {}, value);
		  };
	
		  BaseClass.prototype.destroy = function() {
		    return this.template.destroy();
		  };
	
		  BaseClass.prototype.when = function() {
		    return $.when.apply(this, arguments);
		  };
	
		  return BaseClass;
	
		})(EventEmitter);
	
		BaseClass.loadPromise = loadPromise;
	
		module.exports = BaseClass;
	
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * view
		 * @date 2016-01-26 15:10:13
		 * @author vfasky <vfasky@gmail.com>
		 * @link http://vfasky.com
		 */
		'use strict';
		var $, Template, View, ref, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		ref = __webpack_require__(14), Template = ref.Template, util = ref.util;
	
		$ = __webpack_require__(16);
	
		View = (function(superClass) {
		  extend(View, superClass);
	
		  function View($el, app) {
		    this.$el = $el;
		    this.app = app;
		    View.__super__.constructor.call(this);
		    this._plus();
		    this.el = this.$el[0];
		    this.subViews = [4, 5, 3];
		    this.curVix = 0;
		    this.once('rendered', (function(_this) {
		      return function(refs) {
		        return _this.el.appendChild(refs);
		      };
		    })(this));
		  }
	
		  View.prototype._plus = function() {};
	
		  View.prototype.setTitle = function(title) {
		    var $iframe;
		    this.title = title;
		    if (document.title === this.title) {
		      return;
		    }
		    document.title = this.title;
		    if (this.isWeixinBrowser && this.isIOS) {
		      $iframe = $('<iframe src="/favicon.ico"></iframe>');
		      return $iframe.one('load', function() {
		        return setTimeout(function() {
		          return $iframe.remove();
		        }, 0);
		      }).appendTo(this.$body);
		    }
		  };
	
		  View.prototype.back = function() {
		    if (window.history.length > 1) {
		      window.history.back();
		    } else {
		      window.location.href = '#';
		    }
		    return false;
		  };
	
		  View.prototype.destroy = function() {
		    View.__super__.destroy.call(this);
		    return this.$el.remove();
		  };
	
		  View.prototype.open = function(View, options) {
		    var _view, e, error;
		    if (options == null) {
		      options = {};
		    }
		    try {
		      if (!options.zIndex) {
		        options.zIndex = this.curVix + 1;
		      }
		      _view = new View(this, options);
		      _view.vix = this.curVix++;
		      if (_view) {
		        _view.on('close', (function(_this) {
		          return function(isBack) {
		            var _tmpArr;
		            _tmpArr = [];
		            _this.subViews.forEach(function(v) {
		              if (v.vix !== _view.vix) {
		                return _tmpArr.push(_view);
		              }
		            });
		            _this.subViews = _tmpArr;
		            return options.closeCallBack && options.closeCallBack(isBack);
		          };
		        })(this));
		        return _view.run();
		      }
		    } catch (error) {
		      e = error;
		      throw e;
		    }
		  };
	
		  View.prototype.run = function() {};
	
		  View.prototype.afterRun = function() {};
	
		  return View;
	
		})(__webpack_require__(23));
	
		module.exports = View;
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * 弹层式view 寄托于主view 没有url指向
		 * @module PopUpView
		 * @author vega <vegawong@126.com>
		 */
		var $, PopUpView, Template, ref, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		$ = __webpack_require__(16);
	
		ref = __webpack_require__(14), Template = ref.Template, util = ref.util;
	
		PopUpView = (function(superClass) {
		  extend(PopUpView, superClass);
	
		  function PopUpView(parent, opts) {
		    this.parent = parent;
		    this.opts = opts != null ? opts : {};
		    this._plus();
		    this.el = document.createElement('div');
		    this.el.style.position = 'absolute';
		    this.el.style.left = 0;
		    this.el.style.top = 0;
		    this.el.style.width = '100%';
		    this.el.style.height = '100%';
		    this.el.style.backgroundColor = '#ffffff';
		    this.el.style.zIndex = this.opts.zIndex || 1;
		    this.app = this.parent.app;
		    this.once('rendered', (function(_this) {
		      return function(refs) {
		        _this.el.appendChild(refs);
		        return _this.parent.$el[0].appendChild(_this.el);
		      };
		    })(this));
		    PopUpView.__super__.constructor.call(this);
		  }
	
		  PopUpView.prototype._plus = function() {};
	
		  PopUpView.prototype.back = function() {
		    return this.close(true);
		  };
	
		  PopUpView.prototype.close = function(isBack) {
		    if (isBack == null) {
		      isBack = false;
		    }
		    this.emit('close', isBack);
		    return util.nextTick((function(_this) {
		      return function() {
		        return _this.destroy();
		      };
		    })(this));
		  };
	
		  PopUpView.prototype.destroy = function() {
		    PopUpView.__super__.destroy.call(this);
		    return $(this.el).remove();
		  };
	
		  return PopUpView;
	
		})(__webpack_require__(23));
	
		module.exports = PopUpView;
	
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * 封装 http 请求
		 * @date 2015-12-07 14:32:01
		 * @author vfasky <vfasky@gmail.com>
		 * @link http://vfasky.com
		 * @version $Id$
		 */
		"use strict";
		var $, errCallback, http, networkErrCallback;
	
		$ = __webpack_require__(16);
	
		networkErrCallback = function(xhr, status, hideError) {
		  var error, error1, httpCode, msg, res;
		  msg = 'Network Error';
		  if (xhr.responseText) {
		    try {
		      res = $.parseJSON(xhr.responseText);
		      if (res.error) {
		        msg = res.error;
		      }
		    } catch (error1) {
		      error = error1;
		    }
		  }
		  httpCode = xhr.statusCode().status;
		  if (httpCode) {
		    msg = msg + ' ( code: ' + httpCode + ' )';
		  }
		  if (!hideError) {
		    return alert(msg);
		  } else {
		    return console.log(msg);
		  }
		};
	
		errCallback = function(res, hideError) {
		  var msg;
		  msg = res.error || res.msg || 'An unknown error occurred';
		  if (!hideError) {
		    return alert(msg);
		  } else {
		    return console.log(msg);
		  }
		};
	
		http = (function() {
		  var ajax, exports, timeout;
		  timeout = 10000;
		  ajax = function(type, url, data, hideError) {
		    var dtd, options, promise, xhr;
		    if (hideError == null) {
		      hideError = false;
		    }
		    dtd = $.Deferred();
		    data = http.sendDataFormat(data || {});
		    options = {
		      cache: false,
		      data: data,
		      dataType: 'json',
		      type: type || 'GET',
		      timeout: timeout,
		      headers: http.buildHeaders()
		    };
		    if (window['FormData'] && data instanceof FormData) {
		      options.processData = false;
		      options.contentType = false;
		    }
		    if (type === 'jsonp') {
		      options.type = 'GET';
		      options.dataType = 'jsonp';
		    }
		    xhr = $.ajax(url, options);
		    xhr.sendData = options.data;
		    http.onBeforeSend(xhr);
		    xhr.then(function(res) {
		      if (http.isSuccess(res, this)) {
		        return dtd.resolve(http.responseFormat(res));
		      } else {
		        dtd.reject(res);
		        return errCallback(res, hideError);
		      }
		    }).fail(function(xhr, status) {
		      var error, error1, res;
		      dtd.reject(xhr, status);
		      if (!xhr.statusCode().status) {
		        return networkErrCallback(xhr, status, hideError);
		      } else {
		        try {
		          res = $.parseJSON(xhr.responseText);
		        } catch (error1) {
		          error = error1;
		          res = {};
		        }
		        return errCallback(res, hideError);
		      }
		    }).always(function() {
		      return http.onComplete(xhr);
		    });
		    promise = dtd.promise();
		    promise.xhr = xhr;
		    promise.reject = function(err) {
		      dtd = $.Deferred();
		      dtd.reject(err);
		      return dtd.promise();
		    };
		    return promise;
		  };
		  return exports = {
		    get: function(url, data, hideError) {
		      if (hideError == null) {
		        hideError = false;
		      }
		      return ajax('GET', url, data, hideError);
		    },
		    post: function(url, data, hideError) {
		      if (hideError == null) {
		        hideError = false;
		      }
		      return ajax('POST', url, data, hideError);
		    },
		    jsonp: function(url, data, hideError) {
		      if (hideError == null) {
		        hideError = false;
		      }
		      return ajax('jsonp', url, data, hideError);
		    }
		  };
		})();
	
		http.onBeforeSend = function() {};
	
		http.onComplete = function() {};
	
		http.isSuccess = function(res) {
		  return Number(res.code) === 1;
		};
	
		http.buildHeaders = function() {
		  return {};
		};
	
		http.regErrCallback = function(type, fun) {
		  if (type === 'network') {
		    return networkErrCallback = fun;
		  } else {
		    return errCallback = fun;
		  }
		};
	
		http.responseFormat = function(res) {
		  return res;
		};
	
		http.sendDataFormat = function(data) {
		  return data;
		};
	
		module.exports = http;
	
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *
	 * @date 2016-01-29 15:44:12
	 * @author vfasky <vfasky@gmail.com>
	 * @link http://vfasky.com
	 */
	'use strict';
	var Index, View,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	View = __webpack_require__(1).View;
	
	Index = (function(superClass) {
	  extend(Index, superClass);
	
	  function Index() {
	    return Index.__super__.constructor.apply(this, arguments);
	  }
	
	  Index.prototype.run = function() {
	    return this.render(__webpack_require__(4));
	  };
	
	  Index.prototype.openV = function(event, el) {
	    var PopTest;
	    PopTest = __webpack_require__(5);
	    return this.open(PopTest, {
	      closeCallBack: function(isBack) {
	        return console.log(isBack);
	      }
	    });
	  };
	
	  return Index;
	
	})(View);
	
	module.exports = Index;
	
	module.exports.viewName = 'index';


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mcore = __webpack_require__(1);
	var __mc_T_El = mcore.virtualDom.Element;
	var __mc_T_formatters = mcore.Template.formatters;
	var __mc_T_binders = mcore.Template.binders;
	var __mc_T_components = mcore.Template.components;
	var __objectKeys = mcore.util.objectKeys;
	var __each = mcore.util.each;
	var __isArray = mcore.util.isArray;
	
	module.exports = function(scope, __mc__observe) {
	    var __mc__children_0 = [];
	    var __mc__binders = {};
	    var __mc__dom_id = 0;
	    var __pathMap = {};
	
	    var __getPath = function(path) {
	        var key = path;
	        if (__pathMap[path] >= 0) {
	            path = path + ':' + String(__pathMap[path]);
	            //console.log(path, String(__pathMap[key]));
	            __pathMap[key]++;
	            //console.log(path, __pathMap[key]);
	        } else {
	            __pathMap[path] = 0;
	        }
	        return path;
	    };
	
	    var __parserBinders = function(__mc__binderData, __mc__isBindObserve, key, val) {
	        if (__mc_T_binders.hasOwnProperty(key)) {
	            __mc__isBindObserve = true;
	            __mc__binderData.push({
	                attrName: key,
	                value: val
	            });
	        }
	        return __mc__isBindObserve;
	    };
	
	    var __bindBinder = function(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData) {
	        if (!__mc__isBindObserve) {
	            var __mc__attr__keys = __objectKeys(__mc__attr);
	            __each(__mc__attr__keys, function(attr) {
	                if (attr.indexOf('on-') === 0) {
	                    __mc__isBindObserve = true;
	                }
	            });
	        }
	        if (__mc__isBindObserve || __mc_T_components[__mc__new_el.tagName]) {
	            __mc__new_el.bindTemplate(__mc__observe);
	        }
	
	        if (__mc__isBindObserve) {
	            for (var __mc_i = 0, __mc_len = __mc__binderData.length; __mc_i < __mc_len; __mc_i++) {
	                var __mc_v = __mc__binderData[__mc_i];
	                __mc__new_el.bindBinder(__mc_v.attrName, __mc_v.value);
	            }
	        }
	    };
	
	    (function(scope, tree) { // startTree 0
	
	        // <h1/>
	        var __mc__children_0 = [],
	            __mc__attr = {},
	            __mc__isBindObserve = false,
	            __mc__binderData = [];
	        __mc__attr['key'] = __getPath('.0');
	        (function(scope, tree) { // startTree 1
	
	            tree.push('hello mcore');
	        })(scope, __mc__children_0); // endTree 1
	        var __mc__new_el = new __mc_T_El('h1', __mc__attr, __mc__children_0);
	        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	        tree.push(__mc__new_el);
	        // <p/>
	        var __mc__children_2 = [],
	            __mc__attr = {},
	            __mc__isBindObserve = false,
	            __mc__binderData = [];
	        __mc__attr['key'] = __getPath('.2');
	        (function(scope, tree) { // startTree 3
	
	            // <a href="javascript:;"  mc-on-click="openV" />
	            var __mc__children_3 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['href'] = 'javascript:;';
	            __mc__attr['on-click'] = 'openV';
	            __mc__attr['key'] = __getPath('.2.1');
	            (function(scope, tree) { // startTree 4
	
	                tree.push('Open a PopUpView');
	            })(scope, __mc__children_3); // endTree 4
	            var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_3);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	        })(scope, __mc__children_2); // endTree 3
	        var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_2);
	        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	        tree.push(__mc__new_el);
	    })(scope, __mc__children_0); // endTree 0
	
	
	    if (__mc__children_0.length === 1 && __mc__children_0[0].render) {
	        var virtualDom = __mc__children_0[0];
	    } else {
	        var virtualDom = new __mc_T_El('mc-vd', {}, __mc__children_0);
	    }
	
	    var templateDefined = {
	        'virtualDom': virtualDom
	    };
	    return templateDefined;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var PopTest, PopUpView,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	PopUpView = __webpack_require__(1).PopUpView;
	
	PopTest = (function(superClass) {
	  extend(PopTest, superClass);
	
	  function PopTest() {
	    return PopTest.__super__.constructor.apply(this, arguments);
	  }
	
	  PopTest.prototype.run = function() {
	    return this.render(__webpack_require__(6), {
	      id: this.vix
	    });
	  };
	
	  PopTest.prototype.backClick = function(event, el) {
	    return this.back();
	  };
	
	  PopTest.prototype.closeClick = function(event, el) {
	    return this.close();
	  };
	
	  PopTest.prototype.openClick = function(event, el) {
	    return this.parent.open(PopTest);
	  };
	
	  return PopTest;
	
	})(PopUpView);
	
	module.exports = PopTest;
	
	module.exports.viewName = 'poptest';


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mcore = __webpack_require__(1);
	var __mc_T_El = mcore.virtualDom.Element;
	var __mc_T_formatters = mcore.Template.formatters;
	var __mc_T_binders = mcore.Template.binders;
	var __mc_T_components = mcore.Template.components;
	var __objectKeys = mcore.util.objectKeys;
	var __each = mcore.util.each;
	var __isArray = mcore.util.isArray;
	
	module.exports = function(scope, __mc__observe) {
	    var __mc__children_0 = [];
	    var __mc__binders = {};
	    var __mc__dom_id = 0;
	    var __pathMap = {};
	
	    var __getPath = function(path) {
	        var key = path;
	        if (__pathMap[path] >= 0) {
	            path = path + ':' + String(__pathMap[path]);
	            //console.log(path, String(__pathMap[key]));
	            __pathMap[key]++;
	            //console.log(path, __pathMap[key]);
	        } else {
	            __pathMap[path] = 0;
	        }
	        return path;
	    };
	
	    var __parserBinders = function(__mc__binderData, __mc__isBindObserve, key, val) {
	        if (__mc_T_binders.hasOwnProperty(key)) {
	            __mc__isBindObserve = true;
	            __mc__binderData.push({
	                attrName: key,
	                value: val
	            });
	        }
	        return __mc__isBindObserve;
	    };
	
	    var __bindBinder = function(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData) {
	        if (!__mc__isBindObserve) {
	            var __mc__attr__keys = __objectKeys(__mc__attr);
	            __each(__mc__attr__keys, function(attr) {
	                if (attr.indexOf('on-') === 0) {
	                    __mc__isBindObserve = true;
	                }
	            });
	        }
	        if (__mc__isBindObserve || __mc_T_components[__mc__new_el.tagName]) {
	            __mc__new_el.bindTemplate(__mc__observe);
	        }
	
	        if (__mc__isBindObserve) {
	            for (var __mc_i = 0, __mc_len = __mc__binderData.length; __mc_i < __mc_len; __mc_i++) {
	                var __mc_v = __mc__binderData[__mc_i];
	                __mc__new_el.bindBinder(__mc_v.attrName, __mc_v.value);
	            }
	        }
	    };
	
	    (function(scope, tree) { // startTree 0
	
	        // <div/>
	        var __mc__children_0 = [],
	            __mc__attr = {},
	            __mc__isBindObserve = false,
	            __mc__binderData = [];
	        __mc__attr['key'] = __getPath('.0');
	        (function(scope, tree) { // startTree 1
	
	            // <h1/>
	            var __mc__children_1 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['key'] = __getPath('.0.1');
	            (function(scope, tree) { // startTree 2
	
	                tree.push('I am the popUpView');
	            })(scope, __mc__children_1); // endTree 2
	            var __mc__new_el = new __mc_T_El('h1', __mc__attr, __mc__children_1);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <h1/>
	            var __mc__children_3 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['key'] = __getPath('.0.3');
	            (function(scope, tree) { // startTree 4
	
	                var __mc__rp__key_0;
	                __mc__rp__key_0 = scope.id;
	                if (__mc__rp__key_0 == undefined) {
	                    __mc__rp__key_0 = '';
	                }
	                tree.push("My id is " + __mc__rp__key_0 + "");
	            })(scope, __mc__children_3); // endTree 4
	            var __mc__new_el = new __mc_T_El('h1', __mc__attr, __mc__children_3);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <a href="javascript:;"  mc-on-click="backClick" />
	            var __mc__children_5 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['href'] = 'javascript:;';
	            __mc__attr['on-click'] = 'backClick';
	            __mc__attr['key'] = __getPath('.0.5');
	            (function(scope, tree) { // startTree 6
	
	                tree.push(' <=Back');
	            })(scope, __mc__children_5); // endTree 6
	            var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_5);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <br/>
	            var __mc__children_7 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['key'] = __getPath('.0.7');
	            var __mc__new_el = new __mc_T_El('br', __mc__attr, __mc__children_7);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <a href="javascript:;"  mc-on-click="closeClick" />
	            var __mc__children_8 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['href'] = 'javascript:;';
	            __mc__attr['on-click'] = 'closeClick';
	            __mc__attr['key'] = __getPath('.0.9');
	            (function(scope, tree) { // startTree 9
	
	                tree.push('Close');
	            })(scope, __mc__children_8); // endTree 9
	            var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_8);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <br/>
	            var __mc__children_10 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['key'] = __getPath('.0.11');
	            var __mc__new_el = new __mc_T_El('br', __mc__attr, __mc__children_10);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <br/>
	            var __mc__children_11 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['key'] = __getPath('.0.13');
	            var __mc__new_el = new __mc_T_El('br', __mc__attr, __mc__children_11);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <br/>
	            var __mc__children_12 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['key'] = __getPath('.0.15');
	            var __mc__new_el = new __mc_T_El('br', __mc__attr, __mc__children_12);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <br/>
	            var __mc__children_13 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['key'] = __getPath('.0.17');
	            var __mc__new_el = new __mc_T_El('br', __mc__attr, __mc__children_13);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <a href="javascript:;"  mc-on-click="openClick" />
	            var __mc__children_14 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['href'] = 'javascript:;';
	            __mc__attr['on-click'] = 'openClick';
	            __mc__attr['key'] = __getPath('.0.19');
	            (function(scope, tree) { // startTree 15
	
	                tree.push('open a subView');
	            })(scope, __mc__children_14); // endTree 15
	            var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_14);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	        })(scope, __mc__children_0); // endTree 1
	        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_0);
	        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	        tree.push(__mc__new_el);
	    })(scope, __mc__children_0); // endTree 0
	
	
	    if (__mc__children_0.length === 1 && __mc__children_0[0].render) {
	        var virtualDom = __mc__children_0[0];
	    } else {
	        var virtualDom = new __mc_T_El('mc-vd', {}, __mc__children_0);
	    }
	
	    var templateDefined = {
	        'virtualDom': virtualDom
	    };
	    return templateDefined;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.all.js.map