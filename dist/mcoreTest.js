(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jquery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_17__) {
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
	 * mcoreApp Test Tool
	 * @author vfasky <vfasky@gmail.com>
	 */
	'use strict';
	var mcoreapp;

	if (!document.getElementById('mocha')) {
	  document.write('<div id="mocha"></div>');
	}

	__webpack_require__(26);

	__webpack_require__(30);

	mocha.setup('bdd');

	mcoreapp = __webpack_require__(33);

	mcoreapp.TestApp = __webpack_require__(34);

	mcoreapp.expect = __webpack_require__(36).expect;

	module.exports = mcoreapp;


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
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./mocha.css", function() {
				var newContent = require("!!./../css-loader/index.js!./mocha.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(28)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n\nbody {\n  margin:0;\n}\n\n#mocha {\n  font: 20px/1.5 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 60px 50px;\n}\n\n#mocha ul,\n#mocha li {\n  margin: 0;\n  padding: 0;\n}\n\n#mocha ul {\n  list-style: none;\n}\n\n#mocha h1,\n#mocha h2 {\n  margin: 0;\n}\n\n#mocha h1 {\n  margin-top: 15px;\n  font-size: 1em;\n  font-weight: 200;\n}\n\n#mocha h1 a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha h1 a:hover {\n  text-decoration: underline;\n}\n\n#mocha .suite .suite h1 {\n  margin-top: 0;\n  font-size: .8em;\n}\n\n#mocha .hidden {\n  display: none;\n}\n\n#mocha h2 {\n  font-size: 12px;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n#mocha .suite {\n  margin-left: 15px;\n}\n\n#mocha .test {\n  margin-left: 15px;\n  overflow: hidden;\n}\n\n#mocha .test.pending:hover h2::after {\n  content: '(pending)';\n  font-family: arial, sans-serif;\n}\n\n#mocha .test.pass.medium .duration {\n  background: #c09853;\n}\n\n#mocha .test.pass.slow .duration {\n  background: #b94a48;\n}\n\n#mocha .test.pass::before {\n  content: '\\2713';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #00d6b2;\n}\n\n#mocha .test.pass .duration {\n  font-size: 9px;\n  margin-left: 5px;\n  padding: 2px 5px;\n  color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n  border-radius: 5px;\n}\n\n#mocha .test.pass.fast .duration {\n  display: none;\n}\n\n#mocha .test.pending {\n  color: #0b97c4;\n}\n\n#mocha .test.pending::before {\n  content: '\\25E6';\n  color: #0b97c4;\n}\n\n#mocha .test.fail {\n  color: #c00;\n}\n\n#mocha .test.fail pre {\n  color: black;\n}\n\n#mocha .test.fail::before {\n  content: '\\2716';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #c00;\n}\n\n#mocha .test pre.error {\n  color: #c00;\n  max-height: 300px;\n  overflow: auto;\n}\n\n#mocha .test .html-error {\n  overflow: auto;\n  color: black;\n  line-height: 1.5;\n  display: block;\n  float: left;\n  clear: left;\n  font: 12px/1.5 monaco, monospace;\n  margin: 5px;\n  padding: 15px;\n  border: 1px solid #eee;\n  max-width: 85%; /*(1)*/\n  max-width: calc(100% - 42px); /*(2)*/\n  max-height: 300px;\n  word-wrap: break-word;\n  border-bottom-color: #ddd;\n  -webkit-border-radius: 3px;\n  -webkit-box-shadow: 0 1px 3px #eee;\n  -moz-border-radius: 3px;\n  -moz-box-shadow: 0 1px 3px #eee;\n  border-radius: 3px;\n}\n\n#mocha .test .html-error pre.error {\n  border: none;\n  -webkit-border-radius: none;\n  -webkit-box-shadow: none;\n  -moz-border-radius: none;\n  -moz-box-shadow: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 18px;\n  max-height: none;\n}\n\n/**\n * (1): approximate for browsers not supporting calc\n * (2): 42 = 2*15 + 2*10 + 2*1 (padding + margin + border)\n *      ^^ seriously\n */\n#mocha .test pre {\n  display: block;\n  float: left;\n  clear: left;\n  font: 12px/1.5 monaco, monospace;\n  margin: 5px;\n  padding: 15px;\n  border: 1px solid #eee;\n  max-width: 85%; /*(1)*/\n  max-width: calc(100% - 42px); /*(2)*/\n  word-wrap: break-word;\n  border-bottom-color: #ddd;\n  -webkit-border-radius: 3px;\n  -webkit-box-shadow: 0 1px 3px #eee;\n  -moz-border-radius: 3px;\n  -moz-box-shadow: 0 1px 3px #eee;\n  border-radius: 3px;\n}\n\n#mocha .test h2 {\n  position: relative;\n}\n\n#mocha .test a.replay {\n  position: absolute;\n  top: 3px;\n  right: 0;\n  text-decoration: none;\n  vertical-align: middle;\n  display: block;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  text-align: center;\n  background: #eee;\n  font-size: 15px;\n  -moz-border-radius: 15px;\n  border-radius: 15px;\n  -webkit-transition: opacity 200ms;\n  -moz-transition: opacity 200ms;\n  transition: opacity 200ms;\n  opacity: 0.3;\n  color: #888;\n}\n\n#mocha .test:hover a.replay {\n  opacity: 1;\n}\n\n#mocha-report.pass .test.fail {\n  display: none;\n}\n\n#mocha-report.fail .test.pass {\n  display: none;\n}\n\n#mocha-report.pending .test.pass,\n#mocha-report.pending .test.fail {\n  display: none;\n}\n#mocha-report.pending .test.pass.pending {\n  display: block;\n}\n\n#mocha-error {\n  color: #c00;\n  font-size: 1.5em;\n  font-weight: 100;\n  letter-spacing: 1px;\n}\n\n#mocha-stats {\n  position: fixed;\n  top: 15px;\n  right: 10px;\n  font-size: 12px;\n  margin: 0;\n  color: #888;\n  z-index: 1;\n}\n\n#mocha-stats .progress {\n  float: right;\n  padding-top: 0;\n}\n\n#mocha-stats em {\n  color: black;\n}\n\n#mocha-stats a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha-stats a:hover {\n  border-bottom: 1px solid #eee;\n}\n\n#mocha-stats li {\n  display: inline-block;\n  margin: 0 5px;\n  list-style: none;\n  padding-top: 11px;\n}\n\n#mocha-stats canvas {\n  width: 40px;\n  height: 40px;\n}\n\n#mocha code .comment { color: #ddd; }\n#mocha code .init { color: #2f6fad; }\n#mocha code .string { color: #5890ad; }\n#mocha code .keyword { color: #8a6343; }\n#mocha code .number { color: #2f6fad; }\n\n@media screen and (max-device-width: 480px) {\n  #mocha {\n    margin: 60px 0px;\n  }\n\n  #mocha #stats {\n    position: absolute;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 28 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31)(__webpack_require__(32))

/***/ },
/* 31 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\n(function (process){\nmodule.exports = process.env.COV\n  ? require('./lib-cov/mocha')\n  : require('./lib/mocha');\n\n}).call(this,require('_process'))\n},{\"./lib-cov/mocha\":undefined,\"./lib/mocha\":14,\"_process\":51}],2:[function(require,module,exports){\n/* eslint-disable no-unused-vars */\nmodule.exports = function(type) {\n  return function() {};\n};\n\n},{}],3:[function(require,module,exports){\n/**\n * Module exports.\n */\n\nexports.EventEmitter = EventEmitter;\n\n/**\n * Object#hasOwnProperty reference.\n */\nvar objToString = Object.prototype.toString;\n\n/**\n * Check if a value is an array.\n *\n * @api private\n * @param {*} val The value to test.\n * @return {boolean} true if the value is a boolean, otherwise false.\n */\nfunction isArray(val) {\n  return objToString.call(val) === '[object Array]';\n}\n\n/**\n * Event emitter constructor.\n *\n * @api public\n */\nfunction EventEmitter() {}\n\n/**\n * Add a listener.\n *\n * @api public\n * @param {string} name Event name.\n * @param {Function} fn Event handler.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.on = function(name, fn) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = fn;\n  } else if (isArray(this.$events[name])) {\n    this.$events[name].push(fn);\n  } else {\n    this.$events[name] = [this.$events[name], fn];\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n/**\n * Adds a volatile listener.\n *\n * @api public\n * @param {string} name Event name.\n * @param {Function} fn Event handler.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.once = function(name, fn) {\n  var self = this;\n\n  function on() {\n    self.removeListener(name, on);\n    fn.apply(this, arguments);\n  }\n\n  on.listener = fn;\n  this.on(name, on);\n\n  return this;\n};\n\n/**\n * Remove a listener.\n *\n * @api public\n * @param {string} name Event name.\n * @param {Function} fn Event handler.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.removeListener = function(name, fn) {\n  if (this.$events && this.$events[name]) {\n    var list = this.$events[name];\n\n    if (isArray(list)) {\n      var pos = -1;\n\n      for (var i = 0, l = list.length; i < l; i++) {\n        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {\n          pos = i;\n          break;\n        }\n      }\n\n      if (pos < 0) {\n        return this;\n      }\n\n      list.splice(pos, 1);\n\n      if (!list.length) {\n        delete this.$events[name];\n      }\n    } else if (list === fn || (list.listener && list.listener === fn)) {\n      delete this.$events[name];\n    }\n  }\n\n  return this;\n};\n\n/**\n * Remove all listeners for an event.\n *\n * @api public\n * @param {string} name Event name.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.removeAllListeners = function(name) {\n  if (name === undefined) {\n    this.$events = {};\n    return this;\n  }\n\n  if (this.$events && this.$events[name]) {\n    this.$events[name] = null;\n  }\n\n  return this;\n};\n\n/**\n * Get all listeners for a given event.\n *\n * @api public\n * @param {string} name Event name.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.listeners = function(name) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = [];\n  }\n\n  if (!isArray(this.$events[name])) {\n    this.$events[name] = [this.$events[name]];\n  }\n\n  return this.$events[name];\n};\n\n/**\n * Emit an event.\n *\n * @api public\n * @param {string} name Event name.\n * @return {boolean} true if at least one handler was invoked, else false.\n */\nEventEmitter.prototype.emit = function(name) {\n  if (!this.$events) {\n    return false;\n  }\n\n  var handler = this.$events[name];\n\n  if (!handler) {\n    return false;\n  }\n\n  var args = Array.prototype.slice.call(arguments, 1);\n\n  if (typeof handler === 'function') {\n    handler.apply(this, args);\n  } else if (isArray(handler)) {\n    var listeners = handler.slice();\n\n    for (var i = 0, l = listeners.length; i < l; i++) {\n      listeners[i].apply(this, args);\n    }\n  } else {\n    return false;\n  }\n\n  return true;\n};\n\n},{}],4:[function(require,module,exports){\n/**\n * Expose `Progress`.\n */\n\nmodule.exports = Progress;\n\n/**\n * Initialize a new `Progress` indicator.\n */\nfunction Progress() {\n  this.percent = 0;\n  this.size(0);\n  this.fontSize(11);\n  this.font('helvetica, arial, sans-serif');\n}\n\n/**\n * Set progress size to `size`.\n *\n * @api public\n * @param {number} size\n * @return {Progress} Progress instance.\n */\nProgress.prototype.size = function(size) {\n  this._size = size;\n  return this;\n};\n\n/**\n * Set text to `text`.\n *\n * @api public\n * @param {string} text\n * @return {Progress} Progress instance.\n */\nProgress.prototype.text = function(text) {\n  this._text = text;\n  return this;\n};\n\n/**\n * Set font size to `size`.\n *\n * @api public\n * @param {number} size\n * @return {Progress} Progress instance.\n */\nProgress.prototype.fontSize = function(size) {\n  this._fontSize = size;\n  return this;\n};\n\n/**\n * Set font to `family`.\n *\n * @param {string} family\n * @return {Progress} Progress instance.\n */\nProgress.prototype.font = function(family) {\n  this._font = family;\n  return this;\n};\n\n/**\n * Update percentage to `n`.\n *\n * @param {number} n\n * @return {Progress} Progress instance.\n */\nProgress.prototype.update = function(n) {\n  this.percent = n;\n  return this;\n};\n\n/**\n * Draw on `ctx`.\n *\n * @param {CanvasRenderingContext2d} ctx\n * @return {Progress} Progress instance.\n */\nProgress.prototype.draw = function(ctx) {\n  try {\n    var percent = Math.min(this.percent, 100);\n    var size = this._size;\n    var half = size / 2;\n    var x = half;\n    var y = half;\n    var rad = half - 1;\n    var fontSize = this._fontSize;\n\n    ctx.font = fontSize + 'px ' + this._font;\n\n    var angle = Math.PI * 2 * (percent / 100);\n    ctx.clearRect(0, 0, size, size);\n\n    // outer circle\n    ctx.strokeStyle = '#9f9f9f';\n    ctx.beginPath();\n    ctx.arc(x, y, rad, 0, angle, false);\n    ctx.stroke();\n\n    // inner circle\n    ctx.strokeStyle = '#eee';\n    ctx.beginPath();\n    ctx.arc(x, y, rad - 1, 0, angle, true);\n    ctx.stroke();\n\n    // text\n    var text = this._text || (percent | 0) + '%';\n    var w = ctx.measureText(text).width;\n\n    ctx.fillText(text, x - w / 2 + 1, y + fontSize / 2 - 1);\n  } catch (err) {\n    // don't fail if we can't render progress\n  }\n  return this;\n};\n\n},{}],5:[function(require,module,exports){\n(function (global){\nexports.isatty = function isatty() {\n  return true;\n};\n\nexports.getWindowSize = function getWindowSize() {\n  if ('innerHeight' in global) {\n    return [global.innerHeight, global.innerWidth];\n  }\n  // In a Web Worker, the DOM Window is not available.\n  return [640, 480];\n};\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{}],6:[function(require,module,exports){\n/**\n * Expose `Context`.\n */\n\nmodule.exports = Context;\n\n/**\n * Initialize a new `Context`.\n *\n * @api private\n */\nfunction Context() {}\n\n/**\n * Set or get the context `Runnable` to `runnable`.\n *\n * @api private\n * @param {Runnable} runnable\n * @return {Context}\n */\nContext.prototype.runnable = function(runnable) {\n  if (!arguments.length) {\n    return this._runnable;\n  }\n  this.test = this._runnable = runnable;\n  return this;\n};\n\n/**\n * Set test timeout `ms`.\n *\n * @api private\n * @param {number} ms\n * @return {Context} self\n */\nContext.prototype.timeout = function(ms) {\n  if (!arguments.length) {\n    return this.runnable().timeout();\n  }\n  this.runnable().timeout(ms);\n  return this;\n};\n\n/**\n * Set test timeout `enabled`.\n *\n * @api private\n * @param {boolean} enabled\n * @return {Context} self\n */\nContext.prototype.enableTimeouts = function(enabled) {\n  this.runnable().enableTimeouts(enabled);\n  return this;\n};\n\n/**\n * Set test slowness threshold `ms`.\n *\n * @api private\n * @param {number} ms\n * @return {Context} self\n */\nContext.prototype.slow = function(ms) {\n  this.runnable().slow(ms);\n  return this;\n};\n\n/**\n * Mark a test as skipped.\n *\n * @api private\n * @return {Context} self\n */\nContext.prototype.skip = function() {\n  this.runnable().skip();\n  return this;\n};\n\n/**\n * Allow a number of retries on failed tests\n *\n * @api private\n * @param {number} n\n * @return {Context} self\n */\nContext.prototype.retries = function(n) {\n  if (!arguments.length) {\n    return this.runnable().retries();\n  }\n  this.runnable().retries(n);\n  return this;\n};\n\n/**\n * Inspect the context void of `._runnable`.\n *\n * @api private\n * @return {string}\n */\nContext.prototype.inspect = function() {\n  return JSON.stringify(this, function(key, val) {\n    return key === 'runnable' || key === 'test' ? undefined : val;\n  }, 2);\n};\n\n},{}],7:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require('./runnable');\nvar inherits = require('./utils').inherits;\n\n/**\n * Expose `Hook`.\n */\n\nmodule.exports = Hook;\n\n/**\n * Initialize a new `Hook` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\nfunction Hook(title, fn) {\n  Runnable.call(this, title, fn);\n  this.type = 'hook';\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\ninherits(Hook, Runnable);\n\n/**\n * Get or set the test `err`.\n *\n * @param {Error} err\n * @return {Error}\n * @api public\n */\nHook.prototype.error = function(err) {\n  if (!arguments.length) {\n    err = this._error;\n    this._error = null;\n    return err;\n  }\n\n  this._error = err;\n};\n\n},{\"./runnable\":35,\"./utils\":39}],8:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite');\nvar Test = require('../test');\nvar escapeRe = require('escape-string-regexp');\n\n/**\n * BDD-style interface:\n *\n *      describe('Array', function() {\n *        describe('#indexOf()', function() {\n *          it('should return -1 when not present', function() {\n *            // ...\n *          });\n *\n *          it('should return the index when present', function() {\n *            // ...\n *          });\n *        });\n *      });\n *\n * @param {Suite} suite Root suite.\n */\nmodule.exports = function(suite) {\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha) {\n    var common = require('./common')(suites, context);\n\n    context.before = common.before;\n    context.after = common.after;\n    context.beforeEach = common.beforeEach;\n    context.afterEach = common.afterEach;\n    context.run = mocha.options.delay && common.runWithSuite(suite);\n    /**\n     * Describe a \"suite\" with the given `title`\n     * and callback `fn` containing nested suites\n     * and/or tests.\n     */\n\n    context.describe = context.context = function(title, fn) {\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n      return suite;\n    };\n\n    /**\n     * Pending describe.\n     */\n\n    context.xdescribe = context.xcontext = context.describe.skip = function(title, fn) {\n      var suite = Suite.create(suites[0], title);\n      suite.pending = true;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n    };\n\n    /**\n     * Exclusive suite.\n     */\n\n    context.describe.only = function(title, fn) {\n      var suite = context.describe(title, fn);\n      mocha.grep(suite.fullTitle());\n      return suite;\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    var it = context.it = context.specify = function(title, fn) {\n      var suite = suites[0];\n      if (suite.pending) {\n        fn = null;\n      }\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.it.only = function(title, fn) {\n      var test = it(title, fn);\n      var reString = '^' + escapeRe(test.fullTitle()) + '$';\n      mocha.grep(new RegExp(reString));\n      return test;\n    };\n\n    /**\n     * Pending test case.\n     */\n\n    context.xit = context.xspecify = context.it.skip = function(title) {\n      context.it(title);\n    };\n\n    /**\n     * Number of attempts to retry.\n     */\n    context.it.retries = function(n) {\n      context.retries(n);\n    };\n  });\n};\n\n},{\"../suite\":37,\"../test\":38,\"./common\":9,\"escape-string-regexp\":68}],9:[function(require,module,exports){\n'use strict';\n\n/**\n * Functions common to more than one interface.\n *\n * @param {Suite[]} suites\n * @param {Context} context\n * @return {Object} An object containing common functions.\n */\nmodule.exports = function(suites, context) {\n  return {\n    /**\n     * This is only present if flag --delay is passed into Mocha. It triggers\n     * root suite execution.\n     *\n     * @param {Suite} suite The root wuite.\n     * @return {Function} A function which runs the root suite\n     */\n    runWithSuite: function runWithSuite(suite) {\n      return function run() {\n        suite.run();\n      };\n    },\n\n    /**\n     * Execute before running tests.\n     *\n     * @param {string} name\n     * @param {Function} fn\n     */\n    before: function(name, fn) {\n      suites[0].beforeAll(name, fn);\n    },\n\n    /**\n     * Execute after running tests.\n     *\n     * @param {string} name\n     * @param {Function} fn\n     */\n    after: function(name, fn) {\n      suites[0].afterAll(name, fn);\n    },\n\n    /**\n     * Execute before each test case.\n     *\n     * @param {string} name\n     * @param {Function} fn\n     */\n    beforeEach: function(name, fn) {\n      suites[0].beforeEach(name, fn);\n    },\n\n    /**\n     * Execute after each test case.\n     *\n     * @param {string} name\n     * @param {Function} fn\n     */\n    afterEach: function(name, fn) {\n      suites[0].afterEach(name, fn);\n    },\n\n    test: {\n      /**\n       * Pending test case.\n       *\n       * @param {string} title\n       */\n      skip: function(title) {\n        context.test(title);\n      },\n\n      /**\n       * Number of retry attempts\n       *\n       * @param {string} n\n       */\n      retries: function(n) {\n        context.retries(n);\n      }\n    }\n  };\n};\n\n},{}],10:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite');\nvar Test = require('../test');\n\n/**\n * TDD-style interface:\n *\n *     exports.Array = {\n *       '#indexOf()': {\n *         'should return -1 when the value is not present': function() {\n *\n *         },\n *\n *         'should return the correct index when the value is present': function() {\n *\n *         }\n *       }\n *     };\n *\n * @param {Suite} suite Root suite.\n */\nmodule.exports = function(suite) {\n  var suites = [suite];\n\n  suite.on('require', visit);\n\n  function visit(obj, file) {\n    var suite;\n    for (var key in obj) {\n      if (typeof obj[key] === 'function') {\n        var fn = obj[key];\n        switch (key) {\n          case 'before':\n            suites[0].beforeAll(fn);\n            break;\n          case 'after':\n            suites[0].afterAll(fn);\n            break;\n          case 'beforeEach':\n            suites[0].beforeEach(fn);\n            break;\n          case 'afterEach':\n            suites[0].afterEach(fn);\n            break;\n          default:\n            var test = new Test(key, fn);\n            test.file = file;\n            suites[0].addTest(test);\n        }\n      } else {\n        suite = Suite.create(suites[0], key);\n        suites.unshift(suite);\n        visit(obj[key], file);\n        suites.shift();\n      }\n    }\n  }\n};\n\n},{\"../suite\":37,\"../test\":38}],11:[function(require,module,exports){\nexports.bdd = require('./bdd');\nexports.tdd = require('./tdd');\nexports.qunit = require('./qunit');\nexports.exports = require('./exports');\n\n},{\"./bdd\":8,\"./exports\":10,\"./qunit\":12,\"./tdd\":13}],12:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite');\nvar Test = require('../test');\nvar escapeRe = require('escape-string-regexp');\n\n/**\n * QUnit-style interface:\n *\n *     suite('Array');\n *\n *     test('#length', function() {\n *       var arr = [1,2,3];\n *       ok(arr.length == 3);\n *     });\n *\n *     test('#indexOf()', function() {\n *       var arr = [1,2,3];\n *       ok(arr.indexOf(1) == 0);\n *       ok(arr.indexOf(2) == 1);\n *       ok(arr.indexOf(3) == 2);\n *     });\n *\n *     suite('String');\n *\n *     test('#length', function() {\n *       ok('foo'.length == 3);\n *     });\n *\n * @param {Suite} suite Root suite.\n */\nmodule.exports = function(suite) {\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha) {\n    var common = require('./common')(suites, context);\n\n    context.before = common.before;\n    context.after = common.after;\n    context.beforeEach = common.beforeEach;\n    context.afterEach = common.afterEach;\n    context.run = mocha.options.delay && common.runWithSuite(suite);\n    /**\n     * Describe a \"suite\" with the given `title`.\n     */\n\n    context.suite = function(title) {\n      if (suites.length > 1) {\n        suites.shift();\n      }\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      return suite;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.suite.only = function(title, fn) {\n      var suite = context.suite(title, fn);\n      mocha.grep(suite.fullTitle());\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.test = function(title, fn) {\n      var test = new Test(title, fn);\n      test.file = file;\n      suites[0].addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn) {\n      var test = context.test(title, fn);\n      var reString = '^' + escapeRe(test.fullTitle()) + '$';\n      mocha.grep(new RegExp(reString));\n    };\n\n    context.test.skip = common.test.skip;\n    context.test.retries = common.test.retries;\n  });\n};\n\n},{\"../suite\":37,\"../test\":38,\"./common\":9,\"escape-string-regexp\":68}],13:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite');\nvar Test = require('../test');\nvar escapeRe = require('escape-string-regexp');\n\n/**\n * TDD-style interface:\n *\n *      suite('Array', function() {\n *        suite('#indexOf()', function() {\n *          suiteSetup(function() {\n *\n *          });\n *\n *          test('should return -1 when not present', function() {\n *\n *          });\n *\n *          test('should return the index when present', function() {\n *\n *          });\n *\n *          suiteTeardown(function() {\n *\n *          });\n *        });\n *      });\n *\n * @param {Suite} suite Root suite.\n */\nmodule.exports = function(suite) {\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha) {\n    var common = require('./common')(suites, context);\n\n    context.setup = common.beforeEach;\n    context.teardown = common.afterEach;\n    context.suiteSetup = common.before;\n    context.suiteTeardown = common.after;\n    context.run = mocha.options.delay && common.runWithSuite(suite);\n\n    /**\n     * Describe a \"suite\" with the given `title` and callback `fn` containing\n     * nested suites and/or tests.\n     */\n    context.suite = function(title, fn) {\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n      return suite;\n    };\n\n    /**\n     * Pending suite.\n     */\n    context.suite.skip = function(title, fn) {\n      var suite = Suite.create(suites[0], title);\n      suite.pending = true;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n    context.suite.only = function(title, fn) {\n      var suite = context.suite(title, fn);\n      mocha.grep(suite.fullTitle());\n    };\n\n    /**\n     * Describe a specification or test-case with the given `title` and\n     * callback `fn` acting as a thunk.\n     */\n    context.test = function(title, fn) {\n      var suite = suites[0];\n      if (suite.pending) {\n        fn = null;\n      }\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn) {\n      var test = context.test(title, fn);\n      var reString = '^' + escapeRe(test.fullTitle()) + '$';\n      mocha.grep(new RegExp(reString));\n    };\n\n    context.test.skip = common.test.skip;\n    context.test.retries = common.test.retries;\n  });\n};\n\n},{\"../suite\":37,\"../test\":38,\"./common\":9,\"escape-string-regexp\":68}],14:[function(require,module,exports){\n(function (process,global,__dirname){\n/*!\n * mocha\n * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>\n * MIT Licensed\n */\n\n/**\n * Module dependencies.\n */\n\nvar escapeRe = require('escape-string-regexp');\nvar path = require('path');\nvar reporters = require('./reporters');\nvar utils = require('./utils');\n\n/**\n * Expose `Mocha`.\n */\n\nexports = module.exports = Mocha;\n\n/**\n * To require local UIs and reporters when running in node.\n */\n\nif (!process.browser) {\n  var cwd = process.cwd();\n  module.paths.push(cwd, path.join(cwd, 'node_modules'));\n}\n\n/**\n * Expose internals.\n */\n\nexports.utils = utils;\nexports.interfaces = require('./interfaces');\nexports.reporters = reporters;\nexports.Runnable = require('./runnable');\nexports.Context = require('./context');\nexports.Runner = require('./runner');\nexports.Suite = require('./suite');\nexports.Hook = require('./hook');\nexports.Test = require('./test');\n\n/**\n * Return image `name` path.\n *\n * @api private\n * @param {string} name\n * @return {string}\n */\nfunction image(name) {\n  return path.join(__dirname, '../images', name + '.png');\n}\n\n/**\n * Set up mocha with `options`.\n *\n * Options:\n *\n *   - `ui` name \"bdd\", \"tdd\", \"exports\" etc\n *   - `reporter` reporter instance, defaults to `mocha.reporters.spec`\n *   - `globals` array of accepted globals\n *   - `timeout` timeout in milliseconds\n *   - `retries` number of times to retry failed tests\n *   - `bail` bail on the first test failure\n *   - `slow` milliseconds to wait before considering a test slow\n *   - `ignoreLeaks` ignore global leaks\n *   - `fullTrace` display the full stack-trace on failing\n *   - `grep` string or regexp to filter tests with\n *\n * @param {Object} options\n * @api public\n */\nfunction Mocha(options) {\n  options = options || {};\n  this.files = [];\n  this.options = options;\n  if (options.grep) {\n    this.grep(new RegExp(options.grep));\n  }\n  if (options.fgrep) {\n    this.grep(options.fgrep);\n  }\n  this.suite = new exports.Suite('', new exports.Context());\n  this.ui(options.ui);\n  this.bail(options.bail);\n  this.reporter(options.reporter, options.reporterOptions);\n  if (typeof options.timeout !== 'undefined' && options.timeout !== null) {\n    this.timeout(options.timeout);\n  }\n  if (typeof options.retries !== 'undefined' && options.retries !== null) {\n    this.retries(options.retries);\n  }\n  this.useColors(options.useColors);\n  if (options.enableTimeouts !== null) {\n    this.enableTimeouts(options.enableTimeouts);\n  }\n  if (options.slow) {\n    this.slow(options.slow);\n  }\n\n  this.suite.on('pre-require', function(context) {\n    exports.afterEach = context.afterEach || context.teardown;\n    exports.after = context.after || context.suiteTeardown;\n    exports.beforeEach = context.beforeEach || context.setup;\n    exports.before = context.before || context.suiteSetup;\n    exports.describe = context.describe || context.suite;\n    exports.it = context.it || context.test;\n    exports.setup = context.setup || context.beforeEach;\n    exports.suiteSetup = context.suiteSetup || context.before;\n    exports.suiteTeardown = context.suiteTeardown || context.after;\n    exports.suite = context.suite || context.describe;\n    exports.teardown = context.teardown || context.afterEach;\n    exports.test = context.test || context.it;\n    exports.run = context.run;\n  });\n}\n\n/**\n * Enable or disable bailing on the first failure.\n *\n * @api public\n * @param {boolean} [bail]\n */\nMocha.prototype.bail = function(bail) {\n  if (!arguments.length) {\n    bail = true;\n  }\n  this.suite.bail(bail);\n  return this;\n};\n\n/**\n * Add test `file`.\n *\n * @api public\n * @param {string} file\n */\nMocha.prototype.addFile = function(file) {\n  this.files.push(file);\n  return this;\n};\n\n/**\n * Set reporter to `reporter`, defaults to \"spec\".\n *\n * @param {String|Function} reporter name or constructor\n * @param {Object} reporterOptions optional options\n * @api public\n * @param {string|Function} reporter name or constructor\n * @param {Object} reporterOptions optional options\n */\nMocha.prototype.reporter = function(reporter, reporterOptions) {\n  if (typeof reporter === 'function') {\n    this._reporter = reporter;\n  } else {\n    reporter = reporter || 'spec';\n    var _reporter;\n    // Try to load a built-in reporter.\n    if (reporters[reporter]) {\n      _reporter = reporters[reporter];\n    }\n    // Try to load reporters from process.cwd() and node_modules\n    if (!_reporter) {\n      try {\n        _reporter = require(reporter);\n      } catch (err) {\n        err.message.indexOf('Cannot find module') !== -1\n          ? console.warn('\"' + reporter + '\" reporter not found')\n          : console.warn('\"' + reporter + '\" reporter blew up with error:\\n' + err.stack);\n      }\n    }\n    if (!_reporter && reporter === 'teamcity') {\n      console.warn('The Teamcity reporter was moved to a package named '\n        + 'mocha-teamcity-reporter '\n        + '(https://npmjs.org/package/mocha-teamcity-reporter).');\n    }\n    if (!_reporter) {\n      throw new Error('invalid reporter \"' + reporter + '\"');\n    }\n    this._reporter = _reporter;\n  }\n  this.options.reporterOptions = reporterOptions;\n  return this;\n};\n\n/**\n * Set test UI `name`, defaults to \"bdd\".\n *\n * @api public\n * @param {string} bdd\n */\nMocha.prototype.ui = function(name) {\n  name = name || 'bdd';\n  this._ui = exports.interfaces[name];\n  if (!this._ui) {\n    try {\n      this._ui = require(name);\n    } catch (err) {\n      throw new Error('invalid interface \"' + name + '\"');\n    }\n  }\n  this._ui = this._ui(this.suite);\n  return this;\n};\n\n/**\n * Load registered files.\n *\n * @api private\n */\nMocha.prototype.loadFiles = function(fn) {\n  var self = this;\n  var suite = this.suite;\n  this.files.forEach(function(file) {\n    file = path.resolve(file);\n    suite.emit('pre-require', global, file, self);\n    suite.emit('require', require(file), file, self);\n    suite.emit('post-require', global, file, self);\n  });\n  fn && fn();\n};\n\n/**\n * Enable growl support.\n *\n * @api private\n */\nMocha.prototype._growl = function(runner, reporter) {\n  var notify = require('growl');\n\n  runner.on('end', function() {\n    var stats = reporter.stats;\n    if (stats.failures) {\n      var msg = stats.failures + ' of ' + runner.total + ' tests failed';\n      notify(msg, { name: 'mocha', title: 'Failed', image: image('error') });\n    } else {\n      notify(stats.passes + ' tests passed in ' + stats.duration + 'ms', {\n        name: 'mocha',\n        title: 'Passed',\n        image: image('ok')\n      });\n    }\n  });\n};\n\n/**\n * Add regexp to grep, if `re` is a string it is escaped.\n *\n * @param {RegExp|String} re\n * @return {Mocha}\n * @api public\n * @param {RegExp|string} re\n * @return {Mocha}\n */\nMocha.prototype.grep = function(re) {\n  this.options.grep = typeof re === 'string' ? new RegExp(escapeRe(re)) : re;\n  return this;\n};\n\n/**\n * Invert `.grep()` matches.\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.invert = function() {\n  this.options.invert = true;\n  return this;\n};\n\n/**\n * Ignore global leaks.\n *\n * @param {Boolean} ignore\n * @return {Mocha}\n * @api public\n * @param {boolean} ignore\n * @return {Mocha}\n */\nMocha.prototype.ignoreLeaks = function(ignore) {\n  this.options.ignoreLeaks = Boolean(ignore);\n  return this;\n};\n\n/**\n * Enable global leak checking.\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.checkLeaks = function() {\n  this.options.ignoreLeaks = false;\n  return this;\n};\n\n/**\n * Display long stack-trace on failing\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.fullTrace = function() {\n  this.options.fullStackTrace = true;\n  return this;\n};\n\n/**\n * Enable growl support.\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.growl = function() {\n  this.options.growl = true;\n  return this;\n};\n\n/**\n * Ignore `globals` array or string.\n *\n * @param {Array|String} globals\n * @return {Mocha}\n * @api public\n * @param {Array|string} globals\n * @return {Mocha}\n */\nMocha.prototype.globals = function(globals) {\n  this.options.globals = (this.options.globals || []).concat(globals);\n  return this;\n};\n\n/**\n * Emit color output.\n *\n * @param {Boolean} colors\n * @return {Mocha}\n * @api public\n * @param {boolean} colors\n * @return {Mocha}\n */\nMocha.prototype.useColors = function(colors) {\n  if (colors !== undefined) {\n    this.options.useColors = colors;\n  }\n  return this;\n};\n\n/**\n * Use inline diffs rather than +/-.\n *\n * @param {Boolean} inlineDiffs\n * @return {Mocha}\n * @api public\n * @param {boolean} inlineDiffs\n * @return {Mocha}\n */\nMocha.prototype.useInlineDiffs = function(inlineDiffs) {\n  this.options.useInlineDiffs = inlineDiffs !== undefined && inlineDiffs;\n  return this;\n};\n\n/**\n * Set the timeout in milliseconds.\n *\n * @param {Number} timeout\n * @return {Mocha}\n * @api public\n * @param {number} timeout\n * @return {Mocha}\n */\nMocha.prototype.timeout = function(timeout) {\n  this.suite.timeout(timeout);\n  return this;\n};\n\n/**\n * Set the number of times to retry failed tests.\n *\n * @param {Number} retry times\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.retries = function(n) {\n  this.suite.retries(n);\n  return this;\n};\n\n/**\n * Set slowness threshold in milliseconds.\n *\n * @param {Number} slow\n * @return {Mocha}\n * @api public\n * @param {number} slow\n * @return {Mocha}\n */\nMocha.prototype.slow = function(slow) {\n  this.suite.slow(slow);\n  return this;\n};\n\n/**\n * Enable timeouts.\n *\n * @param {Boolean} enabled\n * @return {Mocha}\n * @api public\n * @param {boolean} enabled\n * @return {Mocha}\n */\nMocha.prototype.enableTimeouts = function(enabled) {\n  this.suite.enableTimeouts(arguments.length && enabled !== undefined ? enabled : true);\n  return this;\n};\n\n/**\n * Makes all tests async (accepting a callback)\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.asyncOnly = function() {\n  this.options.asyncOnly = true;\n  return this;\n};\n\n/**\n * Disable syntax highlighting (in browser).\n *\n * @api public\n */\nMocha.prototype.noHighlighting = function() {\n  this.options.noHighlighting = true;\n  return this;\n};\n\n/**\n * Enable uncaught errors to propagate (in browser).\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.allowUncaught = function() {\n  this.options.allowUncaught = true;\n  return this;\n};\n\n/**\n * Delay root suite execution.\n * @returns {Mocha}\n */\nMocha.prototype.delay = function delay() {\n  this.options.delay = true;\n  return this;\n};\n\n/**\n * Run tests and invoke `fn()` when complete.\n *\n * @api public\n * @param {Function} fn\n * @return {Runner}\n */\nMocha.prototype.run = function(fn) {\n  if (this.files.length) {\n    this.loadFiles();\n  }\n  var suite = this.suite;\n  var options = this.options;\n  options.files = this.files;\n  var runner = new exports.Runner(suite, options.delay);\n  var reporter = new this._reporter(runner, options);\n  runner.ignoreLeaks = options.ignoreLeaks !== false;\n  runner.fullStackTrace = options.fullStackTrace;\n  runner.asyncOnly = options.asyncOnly;\n  runner.allowUncaught = options.allowUncaught;\n  if (options.grep) {\n    runner.grep(options.grep, options.invert);\n  }\n  if (options.globals) {\n    runner.globals(options.globals);\n  }\n  if (options.growl) {\n    this._growl(runner, reporter);\n  }\n  if (options.useColors !== undefined) {\n    exports.reporters.Base.useColors = options.useColors;\n  }\n  exports.reporters.Base.inlineDiffs = options.useInlineDiffs;\n\n  function done(failures) {\n    if (reporter.done) {\n      reporter.done(failures, fn);\n    } else {\n      fn && fn(failures);\n    }\n  }\n\n  return runner.run(done);\n};\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {},\"/lib\")\n},{\"./context\":6,\"./hook\":7,\"./interfaces\":11,\"./reporters\":22,\"./runnable\":35,\"./runner\":36,\"./suite\":37,\"./test\":38,\"./utils\":39,\"_process\":51,\"escape-string-regexp\":68,\"growl\":69,\"path\":41}],15:[function(require,module,exports){\n/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @api public\n * @param {string|number} val\n * @param {Object} options\n * @return {string|number}\n */\nmodule.exports = function(val, options) {\n  options = options || {};\n  if (typeof val === 'string') {\n    return parse(val);\n  }\n  // https://github.com/mochajs/mocha/pull/1035\n  return options['long'] ? longFormat(val) : shortFormat(val);\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @api private\n * @param {string} str\n * @return {number}\n */\nfunction parse(str) {\n  var match = (/^((?:\\d+)?\\.?\\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i).exec(str);\n  if (!match) {\n    return;\n  }\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'y':\n      return n * y;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 's':\n      return n * s;\n    case 'ms':\n      return n;\n    default:\n      // No default case\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @api private\n * @param {number} ms\n * @return {string}\n */\nfunction shortFormat(ms) {\n  if (ms >= d) {\n    return Math.round(ms / d) + 'd';\n  }\n  if (ms >= h) {\n    return Math.round(ms / h) + 'h';\n  }\n  if (ms >= m) {\n    return Math.round(ms / m) + 'm';\n  }\n  if (ms >= s) {\n    return Math.round(ms / s) + 's';\n  }\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @api private\n * @param {number} ms\n * @return {string}\n */\nfunction longFormat(ms) {\n  return plural(ms, d, 'day')\n    || plural(ms, h, 'hour')\n    || plural(ms, m, 'minute')\n    || plural(ms, s, 'second')\n    || ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n *\n * @api private\n * @param {number} ms\n * @param {number} n\n * @param {string} name\n */\nfunction plural(ms, n, name) {\n  if (ms < n) {\n    return;\n  }\n  if (ms < n * 1.5) {\n    return Math.floor(ms / n) + ' ' + name;\n  }\n  return Math.ceil(ms / n) + ' ' + name + 's';\n}\n\n},{}],16:[function(require,module,exports){\n\n/**\n * Expose `Pending`.\n */\n\nmodule.exports = Pending;\n\n/**\n * Initialize a new `Pending` error with the given message.\n *\n * @param {string} message\n */\nfunction Pending(message) {\n  this.message = message;\n}\n\n},{}],17:[function(require,module,exports){\n(function (process,global){\n/**\n * Module dependencies.\n */\n\nvar tty = require('tty');\nvar diff = require('diff');\nvar ms = require('../ms');\nvar utils = require('../utils');\nvar supportsColor = process.browser ? null : require('supports-color');\n\n/**\n * Expose `Base`.\n */\n\nexports = module.exports = Base;\n\n/**\n * Save timer references to avoid Sinon interfering.\n * See: https://github.com/mochajs/mocha/issues/237\n */\n\n/* eslint-disable no-unused-vars, no-native-reassign */\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n/* eslint-enable no-unused-vars, no-native-reassign */\n\n/**\n * Check if both stdio streams are associated with a tty.\n */\n\nvar isatty = tty.isatty(1) && tty.isatty(2);\n\n/**\n * Enable coloring by default, except in the browser interface.\n */\n\nexports.useColors = !process.browser && (supportsColor || (process.env.MOCHA_COLORS !== undefined));\n\n/**\n * Inline diffs instead of +/-\n */\n\nexports.inlineDiffs = false;\n\n/**\n * Default color map.\n */\n\nexports.colors = {\n  pass: 90,\n  fail: 31,\n  'bright pass': 92,\n  'bright fail': 91,\n  'bright yellow': 93,\n  pending: 36,\n  suite: 0,\n  'error title': 0,\n  'error message': 31,\n  'error stack': 90,\n  checkmark: 32,\n  fast: 90,\n  medium: 33,\n  slow: 31,\n  green: 32,\n  light: 90,\n  'diff gutter': 90,\n  'diff added': 32,\n  'diff removed': 31\n};\n\n/**\n * Default symbol map.\n */\n\nexports.symbols = {\n  ok: '✓',\n  err: '✖',\n  dot: '․'\n};\n\n// With node.js on Windows: use symbols available in terminal default fonts\nif (process.platform === 'win32') {\n  exports.symbols.ok = '\\u221A';\n  exports.symbols.err = '\\u00D7';\n  exports.symbols.dot = '.';\n}\n\n/**\n * Color `str` with the given `type`,\n * allowing colors to be disabled,\n * as well as user-defined color\n * schemes.\n *\n * @param {string} type\n * @param {string} str\n * @return {string}\n * @api private\n */\nvar color = exports.color = function(type, str) {\n  if (!exports.useColors) {\n    return String(str);\n  }\n  return '\\u001b[' + exports.colors[type] + 'm' + str + '\\u001b[0m';\n};\n\n/**\n * Expose term window size, with some defaults for when stderr is not a tty.\n */\n\nexports.window = {\n  width: 75\n};\n\nif (isatty) {\n  exports.window.width = process.stdout.getWindowSize\n      ? process.stdout.getWindowSize(1)[0]\n      : tty.getWindowSize()[1];\n}\n\n/**\n * Expose some basic cursor interactions that are common among reporters.\n */\n\nexports.cursor = {\n  hide: function() {\n    isatty && process.stdout.write('\\u001b[?25l');\n  },\n\n  show: function() {\n    isatty && process.stdout.write('\\u001b[?25h');\n  },\n\n  deleteLine: function() {\n    isatty && process.stdout.write('\\u001b[2K');\n  },\n\n  beginningOfLine: function() {\n    isatty && process.stdout.write('\\u001b[0G');\n  },\n\n  CR: function() {\n    if (isatty) {\n      exports.cursor.deleteLine();\n      exports.cursor.beginningOfLine();\n    } else {\n      process.stdout.write('\\r');\n    }\n  }\n};\n\n/**\n * Outut the given `failures` as a list.\n *\n * @param {Array} failures\n * @api public\n */\n\nexports.list = function(failures) {\n  console.log();\n  failures.forEach(function(test, i) {\n    // format\n    var fmt = color('error title', '  %s) %s:\\n')\n      + color('error message', '     %s')\n      + color('error stack', '\\n%s\\n');\n\n    // msg\n    var msg;\n    var err = test.err;\n    var message;\n    if (err.message) {\n      message = err.message;\n    } else if (typeof err.inspect === 'function') {\n      message = err.inspect() + '';\n    } else {\n      message = '';\n    }\n    var stack = err.stack || message;\n    var index = stack.indexOf(message);\n    var actual = err.actual;\n    var expected = err.expected;\n    var escape = true;\n\n    if (index === -1) {\n      msg = message;\n    } else {\n      index += message.length;\n      msg = stack.slice(0, index);\n      // remove msg from stack\n      stack = stack.slice(index + 1);\n    }\n\n    // uncaught\n    if (err.uncaught) {\n      msg = 'Uncaught ' + msg;\n    }\n    // explicitly show diff\n    if (err.showDiff !== false && sameType(actual, expected) && expected !== undefined) {\n      escape = false;\n      if (!(utils.isString(actual) && utils.isString(expected))) {\n        err.actual = actual = utils.stringify(actual);\n        err.expected = expected = utils.stringify(expected);\n      }\n\n      fmt = color('error title', '  %s) %s:\\n%s') + color('error stack', '\\n%s\\n');\n      var match = message.match(/^([^:]+): expected/);\n      msg = '\\n      ' + color('error message', match ? match[1] : msg);\n\n      if (exports.inlineDiffs) {\n        msg += inlineDiff(err, escape);\n      } else {\n        msg += unifiedDiff(err, escape);\n      }\n    }\n\n    // indent stack trace\n    stack = stack.replace(/^/gm, '  ');\n\n    console.log(fmt, (i + 1), test.fullTitle(), msg, stack);\n  });\n};\n\n/**\n * Initialize a new `Base` reporter.\n *\n * All other reporters generally\n * inherit from this reporter, providing\n * stats such as test duration, number\n * of tests passed / failed etc.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Base(runner) {\n  var stats = this.stats = { suites: 0, tests: 0, passes: 0, pending: 0, failures: 0 };\n  var failures = this.failures = [];\n\n  if (!runner) {\n    return;\n  }\n  this.runner = runner;\n\n  runner.stats = stats;\n\n  runner.on('start', function() {\n    stats.start = new Date();\n  });\n\n  runner.on('suite', function(suite) {\n    stats.suites = stats.suites || 0;\n    suite.root || stats.suites++;\n  });\n\n  runner.on('test end', function() {\n    stats.tests = stats.tests || 0;\n    stats.tests++;\n  });\n\n  runner.on('pass', function(test) {\n    stats.passes = stats.passes || 0;\n\n    if (test.duration > test.slow()) {\n      test.speed = 'slow';\n    } else if (test.duration > test.slow() / 2) {\n      test.speed = 'medium';\n    } else {\n      test.speed = 'fast';\n    }\n\n    stats.passes++;\n  });\n\n  runner.on('fail', function(test, err) {\n    stats.failures = stats.failures || 0;\n    stats.failures++;\n    test.err = err;\n    failures.push(test);\n  });\n\n  runner.on('end', function() {\n    stats.end = new Date();\n    stats.duration = new Date() - stats.start;\n  });\n\n  runner.on('pending', function() {\n    stats.pending++;\n  });\n}\n\n/**\n * Output common epilogue used by many of\n * the bundled reporters.\n *\n * @api public\n */\nBase.prototype.epilogue = function() {\n  var stats = this.stats;\n  var fmt;\n\n  console.log();\n\n  // passes\n  fmt = color('bright pass', ' ')\n    + color('green', ' %d passing')\n    + color('light', ' (%s)');\n\n  console.log(fmt,\n    stats.passes || 0,\n    ms(stats.duration));\n\n  // pending\n  if (stats.pending) {\n    fmt = color('pending', ' ')\n      + color('pending', ' %d pending');\n\n    console.log(fmt, stats.pending);\n  }\n\n  // failures\n  if (stats.failures) {\n    fmt = color('fail', '  %d failing');\n\n    console.log(fmt, stats.failures);\n\n    Base.list(this.failures);\n    console.log();\n  }\n\n  console.log();\n};\n\n/**\n * Pad the given `str` to `len`.\n *\n * @api private\n * @param {string} str\n * @param {string} len\n * @return {string}\n */\nfunction pad(str, len) {\n  str = String(str);\n  return Array(len - str.length + 1).join(' ') + str;\n}\n\n/**\n * Returns an inline diff between 2 strings with coloured ANSI output\n *\n * @api private\n * @param {Error} err with actual/expected\n * @param {boolean} escape\n * @return {string} Diff\n */\nfunction inlineDiff(err, escape) {\n  var msg = errorDiff(err, 'WordsWithSpace', escape);\n\n  // linenos\n  var lines = msg.split('\\n');\n  if (lines.length > 4) {\n    var width = String(lines.length).length;\n    msg = lines.map(function(str, i) {\n      return pad(++i, width) + ' |' + ' ' + str;\n    }).join('\\n');\n  }\n\n  // legend\n  msg = '\\n'\n    + color('diff removed', 'actual')\n    + ' '\n    + color('diff added', 'expected')\n    + '\\n\\n'\n    + msg\n    + '\\n';\n\n  // indent\n  msg = msg.replace(/^/gm, '      ');\n  return msg;\n}\n\n/**\n * Returns a unified diff between two strings.\n *\n * @api private\n * @param {Error} err with actual/expected\n * @param {boolean} escape\n * @return {string} The diff.\n */\nfunction unifiedDiff(err, escape) {\n  var indent = '      ';\n  function cleanUp(line) {\n    if (escape) {\n      line = escapeInvisibles(line);\n    }\n    if (line[0] === '+') {\n      return indent + colorLines('diff added', line);\n    }\n    if (line[0] === '-') {\n      return indent + colorLines('diff removed', line);\n    }\n    if (line.match(/\\@\\@/)) {\n      return null;\n    }\n    if (line.match(/\\\\ No newline/)) {\n      return null;\n    }\n    return indent + line;\n  }\n  function notBlank(line) {\n    return typeof line !== 'undefined' && line !== null;\n  }\n  var msg = diff.createPatch('string', err.actual, err.expected);\n  var lines = msg.split('\\n').splice(4);\n  return '\\n      '\n    + colorLines('diff added', '+ expected') + ' '\n    + colorLines('diff removed', '- actual')\n    + '\\n\\n'\n    + lines.map(cleanUp).filter(notBlank).join('\\n');\n}\n\n/**\n * Return a character diff for `err`.\n *\n * @api private\n * @param {Error} err\n * @param {string} type\n * @param {boolean} escape\n * @return {string}\n */\nfunction errorDiff(err, type, escape) {\n  var actual = escape ? escapeInvisibles(err.actual) : err.actual;\n  var expected = escape ? escapeInvisibles(err.expected) : err.expected;\n  return diff['diff' + type](actual, expected).map(function(str) {\n    if (str.added) {\n      return colorLines('diff added', str.value);\n    }\n    if (str.removed) {\n      return colorLines('diff removed', str.value);\n    }\n    return str.value;\n  }).join('');\n}\n\n/**\n * Returns a string with all invisible characters in plain text\n *\n * @api private\n * @param {string} line\n * @return {string}\n */\nfunction escapeInvisibles(line) {\n  return line.replace(/\\t/g, '<tab>')\n    .replace(/\\r/g, '<CR>')\n    .replace(/\\n/g, '<LF>\\n');\n}\n\n/**\n * Color lines for `str`, using the color `name`.\n *\n * @api private\n * @param {string} name\n * @param {string} str\n * @return {string}\n */\nfunction colorLines(name, str) {\n  return str.split('\\n').map(function(str) {\n    return color(name, str);\n  }).join('\\n');\n}\n\n/**\n * Object#toString reference.\n */\nvar objToString = Object.prototype.toString;\n\n/**\n * Check that a / b have the same type.\n *\n * @api private\n * @param {Object} a\n * @param {Object} b\n * @return {boolean}\n */\nfunction sameType(a, b) {\n  return objToString.call(a) === objToString.call(b);\n}\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"../ms\":15,\"../utils\":39,\"_process\":51,\"diff\":67,\"supports-color\":41,\"tty\":5}],18:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar utils = require('../utils');\n\n/**\n * Expose `Doc`.\n */\n\nexports = module.exports = Doc;\n\n/**\n * Initialize a new `Doc` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\nfunction Doc(runner) {\n  Base.call(this, runner);\n\n  var indents = 2;\n\n  function indent() {\n    return Array(indents).join('  ');\n  }\n\n  runner.on('suite', function(suite) {\n    if (suite.root) {\n      return;\n    }\n    ++indents;\n    console.log('%s<section class=\"suite\">', indent());\n    ++indents;\n    console.log('%s<h1>%s</h1>', indent(), utils.escape(suite.title));\n    console.log('%s<dl>', indent());\n  });\n\n  runner.on('suite end', function(suite) {\n    if (suite.root) {\n      return;\n    }\n    console.log('%s</dl>', indent());\n    --indents;\n    console.log('%s</section>', indent());\n    --indents;\n  });\n\n  runner.on('pass', function(test) {\n    console.log('%s  <dt>%s</dt>', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.body));\n    console.log('%s  <dd><pre><code>%s</code></pre></dd>', indent(), code);\n  });\n\n  runner.on('fail', function(test, err) {\n    console.log('%s  <dt class=\"error\">%s</dt>', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.fn.body));\n    console.log('%s  <dd class=\"error\"><pre><code>%s</code></pre></dd>', indent(), code);\n    console.log('%s  <dd class=\"error\">%s</dd>', indent(), utils.escape(err));\n  });\n}\n\n},{\"../utils\":39,\"./base\":17}],19:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar color = Base.color;\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = Dot;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Dot(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var width = Base.window.width * .75 | 0;\n  var n = -1;\n\n  runner.on('start', function() {\n    process.stdout.write('\\n');\n  });\n\n  runner.on('pending', function() {\n    if (++n % width === 0) {\n      process.stdout.write('\\n  ');\n    }\n    process.stdout.write(color('pending', Base.symbols.dot));\n  });\n\n  runner.on('pass', function(test) {\n    if (++n % width === 0) {\n      process.stdout.write('\\n  ');\n    }\n    if (test.speed === 'slow') {\n      process.stdout.write(color('bright yellow', Base.symbols.dot));\n    } else {\n      process.stdout.write(color(test.speed, Base.symbols.dot));\n    }\n  });\n\n  runner.on('fail', function() {\n    if (++n % width === 0) {\n      process.stdout.write('\\n  ');\n    }\n    process.stdout.write(color('fail', Base.symbols.dot));\n  });\n\n  runner.on('end', function() {\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Dot, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":39,\"./base\":17,\"_process\":51}],20:[function(require,module,exports){\n(function (process,__dirname){\n/**\n * Module dependencies.\n */\n\nvar JSONCov = require('./json-cov');\nvar readFileSync = require('fs').readFileSync;\nvar join = require('path').join;\n\n/**\n * Expose `HTMLCov`.\n */\n\nexports = module.exports = HTMLCov;\n\n/**\n * Initialize a new `JsCoverage` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction HTMLCov(runner) {\n  var jade = require('jade');\n  var file = join(__dirname, '/templates/coverage.jade');\n  var str = readFileSync(file, 'utf8');\n  var fn = jade.compile(str, { filename: file });\n  var self = this;\n\n  JSONCov.call(this, runner, false);\n\n  runner.on('end', function() {\n    process.stdout.write(fn({\n      cov: self.cov,\n      coverageClass: coverageClass\n    }));\n  });\n}\n\n/**\n * Return coverage class for a given coverage percentage.\n *\n * @api private\n * @param {number} coveragePctg\n * @return {string}\n */\nfunction coverageClass(coveragePctg) {\n  if (coveragePctg >= 75) {\n    return 'high';\n  }\n  if (coveragePctg >= 50) {\n    return 'medium';\n  }\n  if (coveragePctg >= 25) {\n    return 'low';\n  }\n  return 'terrible';\n}\n\n}).call(this,require('_process'),\"/lib/reporters\")\n},{\"./json-cov\":23,\"_process\":51,\"fs\":41,\"jade\":41,\"path\":41}],21:[function(require,module,exports){\n(function (global){\n/* eslint-env browser */\n\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar utils = require('../utils');\nvar Progress = require('../browser/progress');\nvar escapeRe = require('escape-string-regexp');\nvar escape = utils.escape;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\n/* eslint-disable no-unused-vars, no-native-reassign */\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n/* eslint-enable no-unused-vars, no-native-reassign */\n\n/**\n * Expose `HTML`.\n */\n\nexports = module.exports = HTML;\n\n/**\n * Stats template.\n */\n\nvar statsTemplate = '<ul id=\"mocha-stats\">'\n  + '<li class=\"progress\"><canvas width=\"40\" height=\"40\"></canvas></li>'\n  + '<li class=\"passes\"><a href=\"javascript:void(0);\">passes:</a> <em>0</em></li>'\n  + '<li class=\"failures\"><a href=\"javascript:void(0);\">failures:</a> <em>0</em></li>'\n  + '<li class=\"duration\">duration: <em>0</em>s</li>'\n  + '</ul>';\n\n/**\n * Initialize a new `HTML` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction HTML(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var stats = this.stats;\n  var stat = fragment(statsTemplate);\n  var items = stat.getElementsByTagName('li');\n  var passes = items[1].getElementsByTagName('em')[0];\n  var passesLink = items[1].getElementsByTagName('a')[0];\n  var failures = items[2].getElementsByTagName('em')[0];\n  var failuresLink = items[2].getElementsByTagName('a')[0];\n  var duration = items[3].getElementsByTagName('em')[0];\n  var canvas = stat.getElementsByTagName('canvas')[0];\n  var report = fragment('<ul id=\"mocha-report\"></ul>');\n  var stack = [report];\n  var progress;\n  var ctx;\n  var root = document.getElementById('mocha');\n\n  if (canvas.getContext) {\n    var ratio = window.devicePixelRatio || 1;\n    canvas.style.width = canvas.width;\n    canvas.style.height = canvas.height;\n    canvas.width *= ratio;\n    canvas.height *= ratio;\n    ctx = canvas.getContext('2d');\n    ctx.scale(ratio, ratio);\n    progress = new Progress();\n  }\n\n  if (!root) {\n    return error('#mocha div missing, add it to your document');\n  }\n\n  // pass toggle\n  on(passesLink, 'click', function() {\n    unhide();\n    var name = (/pass/).test(report.className) ? '' : ' pass';\n    report.className = report.className.replace(/fail|pass/g, '') + name;\n    if (report.className.trim()) {\n      hideSuitesWithout('test pass');\n    }\n  });\n\n  // failure toggle\n  on(failuresLink, 'click', function() {\n    unhide();\n    var name = (/fail/).test(report.className) ? '' : ' fail';\n    report.className = report.className.replace(/fail|pass/g, '') + name;\n    if (report.className.trim()) {\n      hideSuitesWithout('test fail');\n    }\n  });\n\n  root.appendChild(stat);\n  root.appendChild(report);\n\n  if (progress) {\n    progress.size(40);\n  }\n\n  runner.on('suite', function(suite) {\n    if (suite.root) {\n      return;\n    }\n\n    // suite\n    var url = self.suiteURL(suite);\n    var el = fragment('<li class=\"suite\"><h1><a href=\"%s\">%s</a></h1></li>', url, escape(suite.title));\n\n    // container\n    stack[0].appendChild(el);\n    stack.unshift(document.createElement('ul'));\n    el.appendChild(stack[0]);\n  });\n\n  runner.on('suite end', function(suite) {\n    if (suite.root) {\n      return;\n    }\n    stack.shift();\n  });\n\n  runner.on('fail', function(test) {\n    // For type = 'test' its possible that the test failed due to multiple\n    // done() calls. So report the issue here.\n    if (test.type === 'hook'\n      || test.type === 'test') {\n      runner.emit('test end', test);\n    }\n  });\n\n  runner.on('test end', function(test) {\n    // TODO: add to stats\n    var percent = stats.tests / this.total * 100 | 0;\n    if (progress) {\n      progress.update(percent).draw(ctx);\n    }\n\n    // update stats\n    var ms = new Date() - stats.start;\n    text(passes, stats.passes);\n    text(failures, stats.failures);\n    text(duration, (ms / 1000).toFixed(2));\n\n    // test\n    var el;\n    if (test.state === 'passed') {\n      var url = self.testURL(test);\n      el = fragment('<li class=\"test pass %e\"><h2>%e<span class=\"duration\">%ems</span> <a href=\"%s\" class=\"replay\">‣</a></h2></li>', test.speed, test.title, test.duration, url);\n    } else if (test.pending) {\n      el = fragment('<li class=\"test pass pending\"><h2>%e</h2></li>', test.title);\n    } else {\n      el = fragment('<li class=\"test fail\"><h2>%e <a href=\"%e\" class=\"replay\">‣</a></h2></li>', test.title, self.testURL(test));\n      var stackString; // Note: Includes leading newline\n      var message = test.err.toString();\n\n      // <=IE7 stringifies to [Object Error]. Since it can be overloaded, we\n      // check for the result of the stringifying.\n      if (message === '[object Error]') {\n        message = test.err.message;\n      }\n\n      if (test.err.stack) {\n        var indexOfMessage = test.err.stack.indexOf(test.err.message);\n        if (indexOfMessage === -1) {\n          stackString = test.err.stack;\n        } else {\n          stackString = test.err.stack.substr(test.err.message.length + indexOfMessage);\n        }\n      } else if (test.err.sourceURL && test.err.line !== undefined) {\n        // Safari doesn't give you a stack. Let's at least provide a source line.\n        stackString = '\\n(' + test.err.sourceURL + ':' + test.err.line + ')';\n      }\n\n      stackString = stackString || '';\n\n      if (test.err.htmlMessage && stackString) {\n        el.appendChild(fragment('<div class=\"html-error\">%s\\n<pre class=\"error\">%e</pre></div>', test.err.htmlMessage, stackString));\n      } else if (test.err.htmlMessage) {\n        el.appendChild(fragment('<div class=\"html-error\">%s</div>', test.err.htmlMessage));\n      } else {\n        el.appendChild(fragment('<pre class=\"error\">%e%e</pre>', message, stackString));\n      }\n    }\n\n    // toggle code\n    // TODO: defer\n    if (!test.pending) {\n      var h2 = el.getElementsByTagName('h2')[0];\n\n      on(h2, 'click', function() {\n        pre.style.display = pre.style.display === 'none' ? 'block' : 'none';\n      });\n\n      var pre = fragment('<pre><code>%e</code></pre>', utils.clean(test.body));\n      el.appendChild(pre);\n      pre.style.display = 'none';\n    }\n\n    // Don't call .appendChild if #mocha-report was already .shift()'ed off the stack.\n    if (stack[0]) {\n      stack[0].appendChild(el);\n    }\n  });\n}\n\n/**\n * Makes a URL, preserving querystring (\"search\") parameters.\n *\n * @param {string} s\n * @return {string} A new URL.\n */\nfunction makeUrl(s) {\n  var search = window.location.search;\n\n  // Remove previous grep query parameter if present\n  if (search) {\n    search = search.replace(/[?&]grep=[^&\\s]*/g, '').replace(/^&/, '?');\n  }\n\n  return window.location.pathname + (search ? search + '&' : '?') + 'grep=' + encodeURIComponent(escapeRe(s));\n}\n\n/**\n * Provide suite URL.\n *\n * @param {Object} [suite]\n */\nHTML.prototype.suiteURL = function(suite) {\n  return makeUrl(suite.fullTitle());\n};\n\n/**\n * Provide test URL.\n *\n * @param {Object} [test]\n */\nHTML.prototype.testURL = function(test) {\n  return makeUrl(test.fullTitle());\n};\n\n/**\n * Display error `msg`.\n *\n * @param {string} msg\n */\nfunction error(msg) {\n  document.body.appendChild(fragment('<div id=\"mocha-error\">%s</div>', msg));\n}\n\n/**\n * Return a DOM fragment from `html`.\n *\n * @param {string} html\n */\nfunction fragment(html) {\n  var args = arguments;\n  var div = document.createElement('div');\n  var i = 1;\n\n  div.innerHTML = html.replace(/%([se])/g, function(_, type) {\n    switch (type) {\n      case 's': return String(args[i++]);\n      case 'e': return escape(args[i++]);\n      // no default\n    }\n  });\n\n  return div.firstChild;\n}\n\n/**\n * Check for suites that do not have elements\n * with `classname`, and hide them.\n *\n * @param {text} classname\n */\nfunction hideSuitesWithout(classname) {\n  var suites = document.getElementsByClassName('suite');\n  for (var i = 0; i < suites.length; i++) {\n    var els = suites[i].getElementsByClassName(classname);\n    if (!els.length) {\n      suites[i].className += ' hidden';\n    }\n  }\n}\n\n/**\n * Unhide .hidden suites.\n */\nfunction unhide() {\n  var els = document.getElementsByClassName('suite hidden');\n  for (var i = 0; i < els.length; ++i) {\n    els[i].className = els[i].className.replace('suite hidden', 'suite');\n  }\n}\n\n/**\n * Set an element's text contents.\n *\n * @param {HTMLElement} el\n * @param {string} contents\n */\nfunction text(el, contents) {\n  if (el.textContent) {\n    el.textContent = contents;\n  } else {\n    el.innerText = contents;\n  }\n}\n\n/**\n * Listen on `event` with callback `fn`.\n */\nfunction on(el, event, fn) {\n  if (el.addEventListener) {\n    el.addEventListener(event, fn, false);\n  } else {\n    el.attachEvent('on' + event, fn);\n  }\n}\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"../browser/progress\":4,\"../utils\":39,\"./base\":17,\"escape-string-regexp\":68}],22:[function(require,module,exports){\n// Alias exports to a their normalized format Mocha#reporter to prevent a need\n// for dynamic (try/catch) requires, which Browserify doesn't handle.\nexports.Base = exports.base = require('./base');\nexports.Dot = exports.dot = require('./dot');\nexports.Doc = exports.doc = require('./doc');\nexports.TAP = exports.tap = require('./tap');\nexports.JSON = exports.json = require('./json');\nexports.HTML = exports.html = require('./html');\nexports.List = exports.list = require('./list');\nexports.Min = exports.min = require('./min');\nexports.Spec = exports.spec = require('./spec');\nexports.Nyan = exports.nyan = require('./nyan');\nexports.XUnit = exports.xunit = require('./xunit');\nexports.Markdown = exports.markdown = require('./markdown');\nexports.Progress = exports.progress = require('./progress');\nexports.Landing = exports.landing = require('./landing');\nexports.JSONCov = exports['json-cov'] = require('./json-cov');\nexports.HTMLCov = exports['html-cov'] = require('./html-cov');\nexports.JSONStream = exports['json-stream'] = require('./json-stream');\n\n},{\"./base\":17,\"./doc\":18,\"./dot\":19,\"./html\":21,\"./html-cov\":20,\"./json\":25,\"./json-cov\":23,\"./json-stream\":24,\"./landing\":26,\"./list\":27,\"./markdown\":28,\"./min\":29,\"./nyan\":30,\"./progress\":31,\"./spec\":32,\"./tap\":33,\"./xunit\":34}],23:[function(require,module,exports){\n(function (process,global){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `JSONCov`.\n */\n\nexports = module.exports = JSONCov;\n\n/**\n * Initialize a new `JsCoverage` reporter.\n *\n * @api public\n * @param {Runner} runner\n * @param {boolean} output\n */\nfunction JSONCov(runner, output) {\n  Base.call(this, runner);\n\n  output = arguments.length === 1 || output;\n  var self = this;\n  var tests = [];\n  var failures = [];\n  var passes = [];\n\n  runner.on('test end', function(test) {\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test) {\n    passes.push(test);\n  });\n\n  runner.on('fail', function(test) {\n    failures.push(test);\n  });\n\n  runner.on('end', function() {\n    var cov = global._$jscoverage || {};\n    var result = self.cov = map(cov);\n    result.stats = self.stats;\n    result.tests = tests.map(clean);\n    result.failures = failures.map(clean);\n    result.passes = passes.map(clean);\n    if (!output) {\n      return;\n    }\n    process.stdout.write(JSON.stringify(result, null, 2));\n  });\n}\n\n/**\n * Map jscoverage data to a JSON structure\n * suitable for reporting.\n *\n * @api private\n * @param {Object} cov\n * @return {Object}\n */\n\nfunction map(cov) {\n  var ret = {\n    instrumentation: 'node-jscoverage',\n    sloc: 0,\n    hits: 0,\n    misses: 0,\n    coverage: 0,\n    files: []\n  };\n\n  for (var filename in cov) {\n    if (Object.prototype.hasOwnProperty.call(cov, filename)) {\n      var data = coverage(filename, cov[filename]);\n      ret.files.push(data);\n      ret.hits += data.hits;\n      ret.misses += data.misses;\n      ret.sloc += data.sloc;\n    }\n  }\n\n  ret.files.sort(function(a, b) {\n    return a.filename.localeCompare(b.filename);\n  });\n\n  if (ret.sloc > 0) {\n    ret.coverage = (ret.hits / ret.sloc) * 100;\n  }\n\n  return ret;\n}\n\n/**\n * Map jscoverage data for a single source file\n * to a JSON structure suitable for reporting.\n *\n * @api private\n * @param {string} filename name of the source file\n * @param {Object} data jscoverage coverage data\n * @return {Object}\n */\nfunction coverage(filename, data) {\n  var ret = {\n    filename: filename,\n    coverage: 0,\n    hits: 0,\n    misses: 0,\n    sloc: 0,\n    source: {}\n  };\n\n  data.source.forEach(function(line, num) {\n    num++;\n\n    if (data[num] === 0) {\n      ret.misses++;\n      ret.sloc++;\n    } else if (data[num] !== undefined) {\n      ret.hits++;\n      ret.sloc++;\n    }\n\n    ret.source[num] = {\n      source: line,\n      coverage: data[num] === undefined ? '' : data[num]\n    };\n  });\n\n  ret.coverage = ret.hits / ret.sloc * 100;\n\n  return ret;\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @api private\n * @param {Object} test\n * @return {Object}\n */\nfunction clean(test) {\n  return {\n    duration: test.duration,\n    currentRetry: test.currentRetry(),\n    fullTitle: test.fullTitle(),\n    title: test.title\n  };\n}\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"./base\":17,\"_process\":51}],24:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var total = runner.total;\n\n  runner.on('start', function() {\n    console.log(JSON.stringify(['start', { total: total }]));\n  });\n\n  runner.on('pass', function(test) {\n    console.log(JSON.stringify(['pass', clean(test)]));\n  });\n\n  runner.on('fail', function(test, err) {\n    test = clean(test);\n    test.err = err.message;\n    test.stack = err.stack || null;\n    console.log(JSON.stringify(['fail', test]));\n  });\n\n  runner.on('end', function() {\n    process.stdout.write(JSON.stringify(['end', self.stats]));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @api private\n * @param {Object} test\n * @return {Object}\n */\nfunction clean(test) {\n  return {\n    title: test.title,\n    fullTitle: test.fullTitle(),\n    duration: test.duration,\n    currentRetry: test.currentRetry()\n  };\n}\n\n}).call(this,require('_process'))\n},{\"./base\":17,\"_process\":51}],25:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `JSON`.\n */\n\nexports = module.exports = JSONReporter;\n\n/**\n * Initialize a new `JSON` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction JSONReporter(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var tests = [];\n  var pending = [];\n  var failures = [];\n  var passes = [];\n\n  runner.on('test end', function(test) {\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test) {\n    passes.push(test);\n  });\n\n  runner.on('fail', function(test) {\n    failures.push(test);\n  });\n\n  runner.on('pending', function(test) {\n    pending.push(test);\n  });\n\n  runner.on('end', function() {\n    var obj = {\n      stats: self.stats,\n      tests: tests.map(clean),\n      pending: pending.map(clean),\n      failures: failures.map(clean),\n      passes: passes.map(clean)\n    };\n\n    runner.testResults = obj;\n\n    process.stdout.write(JSON.stringify(obj, null, 2));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @api private\n * @param {Object} test\n * @return {Object}\n */\nfunction clean(test) {\n  return {\n    title: test.title,\n    fullTitle: test.fullTitle(),\n    duration: test.duration,\n    currentRetry: test.currentRetry(),\n    err: errorJSON(test.err || {})\n  };\n}\n\n/**\n * Transform `error` into a JSON object.\n *\n * @api private\n * @param {Error} err\n * @return {Object}\n */\nfunction errorJSON(err) {\n  var res = {};\n  Object.getOwnPropertyNames(err).forEach(function(key) {\n    res[key] = err[key];\n  }, err);\n  return res;\n}\n\n}).call(this,require('_process'))\n},{\"./base\":17,\"_process\":51}],26:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar cursor = Base.cursor;\nvar color = Base.color;\n\n/**\n * Expose `Landing`.\n */\n\nexports = module.exports = Landing;\n\n/**\n * Airplane color.\n */\n\nBase.colors.plane = 0;\n\n/**\n * Airplane crash color.\n */\n\nBase.colors['plane crash'] = 31;\n\n/**\n * Runway color.\n */\n\nBase.colors.runway = 90;\n\n/**\n * Initialize a new `Landing` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Landing(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var width = Base.window.width * .75 | 0;\n  var total = runner.total;\n  var stream = process.stdout;\n  var plane = color('plane', '✈');\n  var crashed = -1;\n  var n = 0;\n\n  function runway() {\n    var buf = Array(width).join('-');\n    return '  ' + color('runway', buf);\n  }\n\n  runner.on('start', function() {\n    stream.write('\\n\\n\\n  ');\n    cursor.hide();\n  });\n\n  runner.on('test end', function(test) {\n    // check if the plane crashed\n    var col = crashed === -1 ? width * ++n / total | 0 : crashed;\n\n    // show the crash\n    if (test.state === 'failed') {\n      plane = color('plane crash', '✈');\n      crashed = col;\n    }\n\n    // render landing strip\n    stream.write('\\u001b[' + (width + 1) + 'D\\u001b[2A');\n    stream.write(runway());\n    stream.write('\\n  ');\n    stream.write(color('runway', Array(col).join('⋅')));\n    stream.write(plane);\n    stream.write(color('runway', Array(width - col).join('⋅') + '\\n'));\n    stream.write(runway());\n    stream.write('\\u001b[0m');\n  });\n\n  runner.on('end', function() {\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Landing, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":39,\"./base\":17,\"_process\":51}],27:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar color = Base.color;\nvar cursor = Base.cursor;\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var n = 0;\n\n  runner.on('start', function() {\n    console.log();\n  });\n\n  runner.on('test', function(test) {\n    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));\n  });\n\n  runner.on('pending', function(test) {\n    var fmt = color('checkmark', '  -')\n      + color('pending', ' %s');\n    console.log(fmt, test.fullTitle());\n  });\n\n  runner.on('pass', function(test) {\n    var fmt = color('checkmark', '  ' + Base.symbols.dot)\n      + color('pass', ' %s: ')\n      + color(test.speed, '%dms');\n    cursor.CR();\n    console.log(fmt, test.fullTitle(), test.duration);\n  });\n\n  runner.on('fail', function(test) {\n    cursor.CR();\n    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());\n  });\n\n  runner.on('end', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(List, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":39,\"./base\":17,\"_process\":51}],28:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar utils = require('../utils');\n\n/**\n * Constants\n */\n\nvar SUITE_PREFIX = '$';\n\n/**\n * Expose `Markdown`.\n */\n\nexports = module.exports = Markdown;\n\n/**\n * Initialize a new `Markdown` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Markdown(runner) {\n  Base.call(this, runner);\n\n  var level = 0;\n  var buf = '';\n\n  function title(str) {\n    return Array(level).join('#') + ' ' + str;\n  }\n\n  function mapTOC(suite, obj) {\n    var ret = obj;\n    var key = SUITE_PREFIX + suite.title;\n\n    obj = obj[key] = obj[key] || { suite: suite };\n    suite.suites.forEach(function(suite) {\n      mapTOC(suite, obj);\n    });\n\n    return ret;\n  }\n\n  function stringifyTOC(obj, level) {\n    ++level;\n    var buf = '';\n    var link;\n    for (var key in obj) {\n      if (key === 'suite') {\n        continue;\n      }\n      if (key !== SUITE_PREFIX) {\n        link = ' - [' + key.substring(1) + ']';\n        link += '(#' + utils.slug(obj[key].suite.fullTitle()) + ')\\n';\n        buf += Array(level).join('  ') + link;\n      }\n      buf += stringifyTOC(obj[key], level);\n    }\n    return buf;\n  }\n\n  function generateTOC(suite) {\n    var obj = mapTOC(suite, {});\n    return stringifyTOC(obj, 0);\n  }\n\n  generateTOC(runner.suite);\n\n  runner.on('suite', function(suite) {\n    ++level;\n    var slug = utils.slug(suite.fullTitle());\n    buf += '<a name=\"' + slug + '\"></a>' + '\\n';\n    buf += title(suite.title) + '\\n';\n  });\n\n  runner.on('suite end', function() {\n    --level;\n  });\n\n  runner.on('pass', function(test) {\n    var code = utils.clean(test.body);\n    buf += test.title + '.\\n';\n    buf += '\\n```js\\n';\n    buf += code + '\\n';\n    buf += '```\\n\\n';\n  });\n\n  runner.on('end', function() {\n    process.stdout.write('# TOC\\n');\n    process.stdout.write(generateTOC(runner.suite));\n    process.stdout.write(buf);\n  });\n}\n\n}).call(this,require('_process'))\n},{\"../utils\":39,\"./base\":17,\"_process\":51}],29:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\n\n/**\n * Expose `Min`.\n */\n\nexports = module.exports = Min;\n\n/**\n * Initialize a new `Min` minimal test reporter (best used with --watch).\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Min(runner) {\n  Base.call(this, runner);\n\n  runner.on('start', function() {\n    // clear screen\n    process.stdout.write('\\u001b[2J');\n    // set cursor position\n    process.stdout.write('\\u001b[1;3H');\n  });\n\n  runner.on('end', this.epilogue.bind(this));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Min, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":39,\"./base\":17,\"_process\":51}],30:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = NyanCat;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction NyanCat(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var width = Base.window.width * .75 | 0;\n  var nyanCatWidth = this.nyanCatWidth = 11;\n\n  this.colorIndex = 0;\n  this.numberOfLines = 4;\n  this.rainbowColors = self.generateColors();\n  this.scoreboardWidth = 5;\n  this.tick = 0;\n  this.trajectories = [[], [], [], []];\n  this.trajectoryWidthMax = (width - nyanCatWidth);\n\n  runner.on('start', function() {\n    Base.cursor.hide();\n    self.draw();\n  });\n\n  runner.on('pending', function() {\n    self.draw();\n  });\n\n  runner.on('pass', function() {\n    self.draw();\n  });\n\n  runner.on('fail', function() {\n    self.draw();\n  });\n\n  runner.on('end', function() {\n    Base.cursor.show();\n    for (var i = 0; i < self.numberOfLines; i++) {\n      write('\\n');\n    }\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(NyanCat, Base);\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\n\nNyanCat.prototype.draw = function() {\n  this.appendRainbow();\n  this.drawScoreboard();\n  this.drawRainbow();\n  this.drawNyanCat();\n  this.tick = !this.tick;\n};\n\n/**\n * Draw the \"scoreboard\" showing the number\n * of passes, failures and pending tests.\n *\n * @api private\n */\n\nNyanCat.prototype.drawScoreboard = function() {\n  var stats = this.stats;\n\n  function draw(type, n) {\n    write(' ');\n    write(Base.color(type, n));\n    write('\\n');\n  }\n\n  draw('green', stats.passes);\n  draw('fail', stats.failures);\n  draw('pending', stats.pending);\n  write('\\n');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Append the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.appendRainbow = function() {\n  var segment = this.tick ? '_' : '-';\n  var rainbowified = this.rainbowify(segment);\n\n  for (var index = 0; index < this.numberOfLines; index++) {\n    var trajectory = this.trajectories[index];\n    if (trajectory.length >= this.trajectoryWidthMax) {\n      trajectory.shift();\n    }\n    trajectory.push(rainbowified);\n  }\n};\n\n/**\n * Draw the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.drawRainbow = function() {\n  var self = this;\n\n  this.trajectories.forEach(function(line) {\n    write('\\u001b[' + self.scoreboardWidth + 'C');\n    write(line.join(''));\n    write('\\n');\n  });\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\nNyanCat.prototype.drawNyanCat = function() {\n  var self = this;\n  var startWidth = this.scoreboardWidth + this.trajectories[0].length;\n  var dist = '\\u001b[' + startWidth + 'C';\n  var padding = '';\n\n  write(dist);\n  write('_,------,');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? '  ' : '   ';\n  write('_|' + padding + '/\\\\_/\\\\ ');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? '_' : '__';\n  var tail = self.tick ? '~' : '^';\n  write(tail + '|' + padding + this.face() + ' ');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? ' ' : '  ';\n  write(padding + '\"\"  \"\" ');\n  write('\\n');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw nyan cat face.\n *\n * @api private\n * @return {string}\n */\n\nNyanCat.prototype.face = function() {\n  var stats = this.stats;\n  if (stats.failures) {\n    return '( x .x)';\n  } else if (stats.pending) {\n    return '( o .o)';\n  } else if (stats.passes) {\n    return '( ^ .^)';\n  }\n  return '( - .-)';\n};\n\n/**\n * Move cursor up `n`.\n *\n * @api private\n * @param {number} n\n */\n\nNyanCat.prototype.cursorUp = function(n) {\n  write('\\u001b[' + n + 'A');\n};\n\n/**\n * Move cursor down `n`.\n *\n * @api private\n * @param {number} n\n */\n\nNyanCat.prototype.cursorDown = function(n) {\n  write('\\u001b[' + n + 'B');\n};\n\n/**\n * Generate rainbow colors.\n *\n * @api private\n * @return {Array}\n */\nNyanCat.prototype.generateColors = function() {\n  var colors = [];\n\n  for (var i = 0; i < (6 * 7); i++) {\n    var pi3 = Math.floor(Math.PI / 3);\n    var n = (i * (1.0 / 6));\n    var r = Math.floor(3 * Math.sin(n) + 3);\n    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);\n    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);\n    colors.push(36 * r + 6 * g + b + 16);\n  }\n\n  return colors;\n};\n\n/**\n * Apply rainbow to the given `str`.\n *\n * @api private\n * @param {string} str\n * @return {string}\n */\nNyanCat.prototype.rainbowify = function(str) {\n  if (!Base.useColors) {\n    return str;\n  }\n  var color = this.rainbowColors[this.colorIndex % this.rainbowColors.length];\n  this.colorIndex += 1;\n  return '\\u001b[38;5;' + color + 'm' + str + '\\u001b[0m';\n};\n\n/**\n * Stdout helper.\n *\n * @param {string} string A message to write to stdout.\n */\nfunction write(string) {\n  process.stdout.write(string);\n}\n\n}).call(this,require('_process'))\n},{\"../utils\":39,\"./base\":17,\"_process\":51}],31:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar color = Base.color;\nvar cursor = Base.cursor;\n\n/**\n * Expose `Progress`.\n */\n\nexports = module.exports = Progress;\n\n/**\n * General progress bar color.\n */\n\nBase.colors.progress = 90;\n\n/**\n * Initialize a new `Progress` bar test reporter.\n *\n * @api public\n * @param {Runner} runner\n * @param {Object} options\n */\nfunction Progress(runner, options) {\n  Base.call(this, runner);\n\n  var self = this;\n  var width = Base.window.width * .50 | 0;\n  var total = runner.total;\n  var complete = 0;\n  var lastN = -1;\n\n  // default chars\n  options = options || {};\n  options.open = options.open || '[';\n  options.complete = options.complete || '▬';\n  options.incomplete = options.incomplete || Base.symbols.dot;\n  options.close = options.close || ']';\n  options.verbose = false;\n\n  // tests started\n  runner.on('start', function() {\n    console.log();\n    cursor.hide();\n  });\n\n  // tests complete\n  runner.on('test end', function() {\n    complete++;\n\n    var percent = complete / total;\n    var n = width * percent | 0;\n    var i = width - n;\n\n    if (n === lastN && !options.verbose) {\n      // Don't re-render the line if it hasn't changed\n      return;\n    }\n    lastN = n;\n\n    cursor.CR();\n    process.stdout.write('\\u001b[J');\n    process.stdout.write(color('progress', '  ' + options.open));\n    process.stdout.write(Array(n).join(options.complete));\n    process.stdout.write(Array(i).join(options.incomplete));\n    process.stdout.write(color('progress', options.close));\n    if (options.verbose) {\n      process.stdout.write(color('progress', ' ' + complete + ' of ' + total));\n    }\n  });\n\n  // tests are complete, output some stats\n  // and the failures if any\n  runner.on('end', function() {\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Progress, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":39,\"./base\":17,\"_process\":51}],32:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar color = Base.color;\nvar cursor = Base.cursor;\n\n/**\n * Expose `Spec`.\n */\n\nexports = module.exports = Spec;\n\n/**\n * Initialize a new `Spec` test reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Spec(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var indents = 0;\n  var n = 0;\n\n  function indent() {\n    return Array(indents).join('  ');\n  }\n\n  runner.on('start', function() {\n    console.log();\n  });\n\n  runner.on('suite', function(suite) {\n    ++indents;\n    console.log(color('suite', '%s%s'), indent(), suite.title);\n  });\n\n  runner.on('suite end', function() {\n    --indents;\n    if (indents === 1) {\n      console.log();\n    }\n  });\n\n  runner.on('pending', function(test) {\n    var fmt = indent() + color('pending', '  - %s');\n    console.log(fmt, test.title);\n  });\n\n  runner.on('pass', function(test) {\n    var fmt;\n    if (test.speed === 'fast') {\n      fmt = indent()\n        + color('checkmark', '  ' + Base.symbols.ok)\n        + color('pass', ' %s');\n      cursor.CR();\n      console.log(fmt, test.title);\n    } else {\n      fmt = indent()\n        + color('checkmark', '  ' + Base.symbols.ok)\n        + color('pass', ' %s')\n        + color(test.speed, ' (%dms)');\n      cursor.CR();\n      console.log(fmt, test.title, test.duration);\n    }\n  });\n\n  runner.on('fail', function(test) {\n    cursor.CR();\n    console.log(indent() + color('fail', '  %d) %s'), ++n, test.title);\n  });\n\n  runner.on('end', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Spec, Base);\n\n},{\"../utils\":39,\"./base\":17}],33:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `TAP`.\n */\n\nexports = module.exports = TAP;\n\n/**\n * Initialize a new `TAP` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction TAP(runner) {\n  Base.call(this, runner);\n\n  var n = 1;\n  var passes = 0;\n  var failures = 0;\n\n  runner.on('start', function() {\n    var total = runner.grepTotal(runner.suite);\n    console.log('%d..%d', 1, total);\n  });\n\n  runner.on('test end', function() {\n    ++n;\n  });\n\n  runner.on('pending', function(test) {\n    console.log('ok %d %s # SKIP -', n, title(test));\n  });\n\n  runner.on('pass', function(test) {\n    passes++;\n    console.log('ok %d %s', n, title(test));\n  });\n\n  runner.on('fail', function(test, err) {\n    failures++;\n    console.log('not ok %d %s', n, title(test));\n    if (err.stack) {\n      console.log(err.stack.replace(/^/gm, '  '));\n    }\n  });\n\n  runner.on('end', function() {\n    console.log('# tests ' + (passes + failures));\n    console.log('# pass ' + passes);\n    console.log('# fail ' + failures);\n  });\n}\n\n/**\n * Return a TAP-safe title of `test`\n *\n * @api private\n * @param {Object} test\n * @return {String}\n */\nfunction title(test) {\n  return test.fullTitle().replace(/#/g, '');\n}\n\n},{\"./base\":17}],34:[function(require,module,exports){\n(function (process,global){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar utils = require('../utils');\nvar inherits = utils.inherits;\nvar fs = require('fs');\nvar escape = utils.escape;\nvar mkdirp = require('mkdirp');\nvar path = require('path');\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\n/* eslint-disable no-unused-vars, no-native-reassign */\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n/* eslint-enable no-unused-vars, no-native-reassign */\n\n/**\n * Expose `XUnit`.\n */\n\nexports = module.exports = XUnit;\n\n/**\n * Initialize a new `XUnit` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction XUnit(runner, options) {\n  Base.call(this, runner);\n\n  var stats = this.stats;\n  var tests = [];\n  var self = this;\n\n  if (options.reporterOptions && options.reporterOptions.output) {\n    if (!fs.createWriteStream) {\n      throw new Error('file output not supported in browser');\n    }\n    mkdirp.sync(path.dirname(options.reporterOptions.output));\n    self.fileStream = fs.createWriteStream(options.reporterOptions.output);\n  }\n\n  runner.on('pending', function(test) {\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test) {\n    tests.push(test);\n  });\n\n  runner.on('fail', function(test) {\n    tests.push(test);\n  });\n\n  runner.on('end', function() {\n    self.write(tag('testsuite', {\n      name: 'Mocha Tests',\n      tests: stats.tests,\n      failures: stats.failures,\n      errors: stats.failures,\n      skipped: stats.tests - stats.failures - stats.passes,\n      timestamp: (new Date()).toUTCString(),\n      time: (stats.duration / 1000) || 0\n    }, false));\n\n    tests.forEach(function(t) {\n      self.test(t);\n    });\n\n    self.write('</testsuite>');\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(XUnit, Base);\n\n/**\n * Override done to close the stream (if it's a file).\n *\n * @param failures\n * @param {Function} fn\n */\nXUnit.prototype.done = function(failures, fn) {\n  if (this.fileStream) {\n    this.fileStream.end(function() {\n      fn(failures);\n    });\n  } else {\n    fn(failures);\n  }\n};\n\n/**\n * Write out the given line.\n *\n * @param {string} line\n */\nXUnit.prototype.write = function(line) {\n  if (this.fileStream) {\n    this.fileStream.write(line + '\\n');\n  } else if (typeof process === 'object' && process.stdout) {\n    process.stdout.write(line + '\\n');\n  } else {\n    console.log(line);\n  }\n};\n\n/**\n * Output tag for the given `test.`\n *\n * @param {Test} test\n */\nXUnit.prototype.test = function(test) {\n  var attrs = {\n    classname: test.parent.fullTitle(),\n    name: test.title,\n    time: (test.duration / 1000) || 0\n  };\n\n  if (test.state === 'failed') {\n    var err = test.err;\n    this.write(tag('testcase', attrs, false, tag('failure', {}, false, cdata(escape(err.message) + '\\n' + err.stack))));\n  } else if (test.pending) {\n    this.write(tag('testcase', attrs, false, tag('skipped', {}, true)));\n  } else {\n    this.write(tag('testcase', attrs, true));\n  }\n};\n\n/**\n * HTML tag helper.\n *\n * @param name\n * @param attrs\n * @param close\n * @param content\n * @return {string}\n */\nfunction tag(name, attrs, close, content) {\n  var end = close ? '/>' : '>';\n  var pairs = [];\n  var tag;\n\n  for (var key in attrs) {\n    if (Object.prototype.hasOwnProperty.call(attrs, key)) {\n      pairs.push(key + '=\"' + escape(attrs[key]) + '\"');\n    }\n  }\n\n  tag = '<' + name + (pairs.length ? ' ' + pairs.join(' ') : '') + end;\n  if (content) {\n    tag += content + '</' + name + end;\n  }\n  return tag;\n}\n\n/**\n * Return cdata escaped CDATA `str`.\n */\n\nfunction cdata(str) {\n  return '<![CDATA[' + escape(str) + ']]>';\n}\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"../utils\":39,\"./base\":17,\"_process\":51,\"fs\":41,\"mkdirp\":70,\"path\":41}],35:[function(require,module,exports){\n(function (global){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('events').EventEmitter;\nvar Pending = require('./pending');\nvar debug = require('debug')('mocha:runnable');\nvar milliseconds = require('./ms');\nvar utils = require('./utils');\nvar inherits = utils.inherits;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\n/* eslint-disable no-unused-vars, no-native-reassign */\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n/* eslint-enable no-unused-vars, no-native-reassign */\n\n/**\n * Object#toString().\n */\n\nvar toString = Object.prototype.toString;\n\n/**\n * Expose `Runnable`.\n */\n\nmodule.exports = Runnable;\n\n/**\n * Initialize a new `Runnable` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n * @param {string} title\n * @param {Function} fn\n */\nfunction Runnable(title, fn) {\n  this.title = title;\n  this.fn = fn;\n  this.async = fn && fn.length;\n  this.sync = !this.async;\n  this._timeout = 2000;\n  this._slow = 75;\n  this._enableTimeouts = true;\n  this.timedOut = false;\n  this._trace = new Error('done() called multiple times');\n  this._retries = -1;\n  this._currentRetry = 0;\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\ninherits(Runnable, EventEmitter);\n\n/**\n * Set & get timeout `ms`.\n *\n * @api private\n * @param {number|string} ms\n * @return {Runnable|number} ms or Runnable instance.\n */\nRunnable.prototype.timeout = function(ms) {\n  if (!arguments.length) {\n    return this._timeout;\n  }\n  if (ms === 0) {\n    this._enableTimeouts = false;\n  }\n  if (typeof ms === 'string') {\n    ms = milliseconds(ms);\n  }\n  debug('timeout %d', ms);\n  this._timeout = ms;\n  if (this.timer) {\n    this.resetTimeout();\n  }\n  return this;\n};\n\n/**\n * Set & get slow `ms`.\n *\n * @api private\n * @param {number|string} ms\n * @return {Runnable|number} ms or Runnable instance.\n */\nRunnable.prototype.slow = function(ms) {\n  if (!arguments.length) {\n    return this._slow;\n  }\n  if (typeof ms === 'string') {\n    ms = milliseconds(ms);\n  }\n  debug('timeout %d', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Set and get whether timeout is `enabled`.\n *\n * @api private\n * @param {boolean} enabled\n * @return {Runnable|boolean} enabled or Runnable instance.\n */\nRunnable.prototype.enableTimeouts = function(enabled) {\n  if (!arguments.length) {\n    return this._enableTimeouts;\n  }\n  debug('enableTimeouts %s', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Halt and mark as pending.\n *\n * @api private\n */\nRunnable.prototype.skip = function() {\n  throw new Pending();\n};\n\n/**\n * Set number of retries.\n *\n * @api private\n */\nRunnable.prototype.retries = function(n) {\n  if (!arguments.length) {\n    return this._retries;\n  }\n  this._retries = n;\n};\n\n/**\n * Get current retry\n *\n * @api private\n */\nRunnable.prototype.currentRetry = function(n) {\n  if (!arguments.length) {\n    return this._currentRetry;\n  }\n  this._currentRetry = n;\n};\n\n/**\n * Return the full title generated by recursively concatenating the parent's\n * full title.\n *\n * @api public\n * @return {string}\n */\nRunnable.prototype.fullTitle = function() {\n  return this.parent.fullTitle() + ' ' + this.title;\n};\n\n/**\n * Clear the timeout.\n *\n * @api private\n */\nRunnable.prototype.clearTimeout = function() {\n  clearTimeout(this.timer);\n};\n\n/**\n * Inspect the runnable void of private properties.\n *\n * @api private\n * @return {string}\n */\nRunnable.prototype.inspect = function() {\n  return JSON.stringify(this, function(key, val) {\n    if (key[0] === '_') {\n      return;\n    }\n    if (key === 'parent') {\n      return '#<Suite>';\n    }\n    if (key === 'ctx') {\n      return '#<Context>';\n    }\n    return val;\n  }, 2);\n};\n\n/**\n * Reset the timeout.\n *\n * @api private\n */\nRunnable.prototype.resetTimeout = function() {\n  var self = this;\n  var ms = this.timeout() || 1e9;\n\n  if (!this._enableTimeouts) {\n    return;\n  }\n  this.clearTimeout();\n  this.timer = setTimeout(function() {\n    if (!self._enableTimeouts) {\n      return;\n    }\n    self.callback(new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.'));\n    self.timedOut = true;\n  }, ms);\n};\n\n/**\n * Whitelist a list of globals for this test run.\n *\n * @api private\n * @param {string[]} globals\n */\nRunnable.prototype.globals = function(globals) {\n  if (!arguments.length) {\n    return this._allowedGlobals;\n  }\n  this._allowedGlobals = globals;\n};\n\n/**\n * Run the test and invoke `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\nRunnable.prototype.run = function(fn) {\n  var self = this;\n  var start = new Date();\n  var ctx = this.ctx;\n  var finished;\n  var emitted;\n\n  // Sometimes the ctx exists, but it is not runnable\n  if (ctx && ctx.runnable) {\n    ctx.runnable(this);\n  }\n\n  // called multiple times\n  function multiple(err) {\n    if (emitted) {\n      return;\n    }\n    emitted = true;\n    self.emit('error', err || new Error('done() called multiple times; stacktrace may be inaccurate'));\n  }\n\n  // finished\n  function done(err) {\n    var ms = self.timeout();\n    if (self.timedOut) {\n      return;\n    }\n    if (finished) {\n      return multiple(err || self._trace);\n    }\n\n    self.clearTimeout();\n    self.duration = new Date() - start;\n    finished = true;\n    if (!err && self.duration > ms && self._enableTimeouts) {\n      err = new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.');\n    }\n    fn(err);\n  }\n\n  // for .resetTimeout()\n  this.callback = done;\n\n  // explicit async with `done` argument\n  if (this.async) {\n    this.resetTimeout();\n\n    if (this.allowUncaught) {\n      return callFnAsync(this.fn);\n    }\n    try {\n      callFnAsync(this.fn);\n    } catch (err) {\n      done(utils.getError(err));\n    }\n    return;\n  }\n\n  if (this.allowUncaught) {\n    callFn(this.fn);\n    done();\n    return;\n  }\n\n  // sync or promise-returning\n  try {\n    if (this.pending) {\n      done();\n    } else {\n      callFn(this.fn);\n    }\n  } catch (err) {\n    done(utils.getError(err));\n  }\n\n  function callFn(fn) {\n    var result = fn.call(ctx);\n    if (result && typeof result.then === 'function') {\n      self.resetTimeout();\n      result\n        .then(function() {\n          done();\n          // Return null so libraries like bluebird do not warn about\n          // subsequently constructed Promises.\n          return null;\n        },\n        function(reason) {\n          done(reason || new Error('Promise rejected with no or falsy reason'));\n        });\n    } else {\n      if (self.asyncOnly) {\n        return done(new Error('--async-only option in use without declaring `done()` or returning a promise'));\n      }\n\n      done();\n    }\n  }\n\n  function callFnAsync(fn) {\n    fn.call(ctx, function(err) {\n      if (err instanceof Error || toString.call(err) === '[object Error]') {\n        return done(err);\n      }\n      if (err) {\n        if (Object.prototype.toString.call(err) === '[object Object]') {\n          return done(new Error('done() invoked with non-Error: '\n            + JSON.stringify(err)));\n        }\n        return done(new Error('done() invoked with non-Error: ' + err));\n      }\n      done();\n    });\n  }\n};\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"./ms\":15,\"./pending\":16,\"./utils\":39,\"debug\":2,\"events\":3}],36:[function(require,module,exports){\n(function (process,global){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('events').EventEmitter;\nvar Pending = require('./pending');\nvar utils = require('./utils');\nvar inherits = utils.inherits;\nvar debug = require('debug')('mocha:runner');\nvar Runnable = require('./runnable');\nvar filter = utils.filter;\nvar indexOf = utils.indexOf;\nvar keys = utils.keys;\nvar stackFilter = utils.stackTraceFilter();\nvar stringify = utils.stringify;\nvar type = utils.type;\nvar undefinedError = utils.undefinedError;\nvar isArray = utils.isArray;\n\n/**\n * Non-enumerable globals.\n */\n\nvar globals = [\n  'setTimeout',\n  'clearTimeout',\n  'setInterval',\n  'clearInterval',\n  'XMLHttpRequest',\n  'Date',\n  'setImmediate',\n  'clearImmediate'\n];\n\n/**\n * Expose `Runner`.\n */\n\nmodule.exports = Runner;\n\n/**\n * Initialize a `Runner` for the given `suite`.\n *\n * Events:\n *\n *   - `start`  execution started\n *   - `end`  execution complete\n *   - `suite`  (suite) test suite execution started\n *   - `suite end`  (suite) all tests (and sub-suites) have finished\n *   - `test`  (test) test execution started\n *   - `test end`  (test) test completed\n *   - `hook`  (hook) hook execution started\n *   - `hook end`  (hook) hook complete\n *   - `pass`  (test) test passed\n *   - `fail`  (test, err) test failed\n *   - `pending`  (test) test pending\n *\n * @api public\n * @param {Suite} suite Root suite\n * @param {boolean} [delay] Whether or not to delay execution of root suite\n * until ready.\n */\nfunction Runner(suite, delay) {\n  var self = this;\n  this._globals = [];\n  this._abort = false;\n  this._delay = delay;\n  this.suite = suite;\n  this.started = false;\n  this.total = suite.total();\n  this.failures = 0;\n  this.on('test end', function(test) {\n    self.checkGlobals(test);\n  });\n  this.on('hook end', function(hook) {\n    self.checkGlobals(hook);\n  });\n  this._defaultGrep = /.*/;\n  this.grep(this._defaultGrep);\n  this.globals(this.globalProps().concat(extraGlobals()));\n}\n\n/**\n * Wrapper for setImmediate, process.nextTick, or browser polyfill.\n *\n * @param {Function} fn\n * @api private\n */\nRunner.immediately = global.setImmediate || process.nextTick;\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\ninherits(Runner, EventEmitter);\n\n/**\n * Run tests with full titles matching `re`. Updates runner.total\n * with number of tests matched.\n *\n * @param {RegExp} re\n * @param {Boolean} invert\n * @return {Runner} for chaining\n * @api public\n * @param {RegExp} re\n * @param {boolean} invert\n * @return {Runner} Runner instance.\n */\nRunner.prototype.grep = function(re, invert) {\n  debug('grep %s', re);\n  this._grep = re;\n  this._invert = invert;\n  this.total = this.grepTotal(this.suite);\n  return this;\n};\n\n/**\n * Returns the number of tests matching the grep search for the\n * given suite.\n *\n * @param {Suite} suite\n * @return {Number}\n * @api public\n * @param {Suite} suite\n * @return {number}\n */\nRunner.prototype.grepTotal = function(suite) {\n  var self = this;\n  var total = 0;\n\n  suite.eachTest(function(test) {\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) {\n      match = !match;\n    }\n    if (match) {\n      total++;\n    }\n  });\n\n  return total;\n};\n\n/**\n * Return a list of global properties.\n *\n * @return {Array}\n * @api private\n */\nRunner.prototype.globalProps = function() {\n  var props = keys(global);\n\n  // non-enumerables\n  for (var i = 0; i < globals.length; ++i) {\n    if (~indexOf(props, globals[i])) {\n      continue;\n    }\n    props.push(globals[i]);\n  }\n\n  return props;\n};\n\n/**\n * Allow the given `arr` of globals.\n *\n * @param {Array} arr\n * @return {Runner} for chaining\n * @api public\n * @param {Array} arr\n * @return {Runner} Runner instance.\n */\nRunner.prototype.globals = function(arr) {\n  if (!arguments.length) {\n    return this._globals;\n  }\n  debug('globals %j', arr);\n  this._globals = this._globals.concat(arr);\n  return this;\n};\n\n/**\n * Check for global variable leaks.\n *\n * @api private\n */\nRunner.prototype.checkGlobals = function(test) {\n  if (this.ignoreLeaks) {\n    return;\n  }\n  var ok = this._globals;\n\n  var globals = this.globalProps();\n  var leaks;\n\n  if (test) {\n    ok = ok.concat(test._allowedGlobals || []);\n  }\n\n  if (this.prevGlobalsLength === globals.length) {\n    return;\n  }\n  this.prevGlobalsLength = globals.length;\n\n  leaks = filterLeaks(ok, globals);\n  this._globals = this._globals.concat(leaks);\n\n  if (leaks.length > 1) {\n    this.fail(test, new Error('global leaks detected: ' + leaks.join(', ') + ''));\n  } else if (leaks.length) {\n    this.fail(test, new Error('global leak detected: ' + leaks[0]));\n  }\n};\n\n/**\n * Fail the given `test`.\n *\n * @api private\n * @param {Test} test\n * @param {Error} err\n */\nRunner.prototype.fail = function(test, err) {\n  ++this.failures;\n  test.state = 'failed';\n\n  if (!(err instanceof Error || err && typeof err.message === 'string')) {\n    err = new Error('the ' + type(err) + ' ' + stringify(err) + ' was thrown, throw an Error :)');\n  }\n\n  err.stack = (this.fullStackTrace || !err.stack)\n    ? err.stack\n    : stackFilter(err.stack);\n\n  this.emit('fail', test, err);\n};\n\n/**\n * Fail the given `hook` with `err`.\n *\n * Hook failures work in the following pattern:\n * - If bail, then exit\n * - Failed `before` hook skips all tests in a suite and subsuites,\n *   but jumps to corresponding `after` hook\n * - Failed `before each` hook skips remaining tests in a\n *   suite and jumps to corresponding `after each` hook,\n *   which is run only once\n * - Failed `after` hook does not alter\n *   execution order\n * - Failed `after each` hook skips remaining tests in a\n *   suite and subsuites, but executes other `after each`\n *   hooks\n *\n * @api private\n * @param {Hook} hook\n * @param {Error} err\n */\nRunner.prototype.failHook = function(hook, err) {\n  if (hook.ctx && hook.ctx.currentTest) {\n    hook.originalTitle = hook.originalTitle || hook.title;\n    hook.title = hook.originalTitle + ' for \"' + hook.ctx.currentTest.title + '\"';\n  }\n\n  this.fail(hook, err);\n  if (this.suite.bail()) {\n    this.emit('end');\n  }\n};\n\n/**\n * Run hook `name` callbacks and then invoke `fn()`.\n *\n * @api private\n * @param {string} name\n * @param {Function} fn\n */\n\nRunner.prototype.hook = function(name, fn) {\n  var suite = this.suite;\n  var hooks = suite['_' + name];\n  var self = this;\n\n  function next(i) {\n    var hook = hooks[i];\n    if (!hook) {\n      return fn();\n    }\n    self.currentRunnable = hook;\n\n    hook.ctx.currentTest = self.test;\n\n    self.emit('hook', hook);\n\n    if (!hook.listeners('error').length) {\n      hook.on('error', function(err) {\n        self.failHook(hook, err);\n      });\n    }\n\n    hook.run(function(err) {\n      var testError = hook.error();\n      if (testError) {\n        self.fail(self.test, testError);\n      }\n      if (err) {\n        if (err instanceof Pending) {\n          suite.pending = true;\n        } else {\n          self.failHook(hook, err);\n\n          // stop executing hooks, notify callee of hook err\n          return fn(err);\n        }\n      }\n      self.emit('hook end', hook);\n      delete hook.ctx.currentTest;\n      next(++i);\n    });\n  }\n\n  Runner.immediately(function() {\n    next(0);\n  });\n};\n\n/**\n * Run hook `name` for the given array of `suites`\n * in order, and callback `fn(err, errSuite)`.\n *\n * @api private\n * @param {string} name\n * @param {Array} suites\n * @param {Function} fn\n */\nRunner.prototype.hooks = function(name, suites, fn) {\n  var self = this;\n  var orig = this.suite;\n\n  function next(suite) {\n    self.suite = suite;\n\n    if (!suite) {\n      self.suite = orig;\n      return fn();\n    }\n\n    self.hook(name, function(err) {\n      if (err) {\n        var errSuite = self.suite;\n        self.suite = orig;\n        return fn(err, errSuite);\n      }\n\n      next(suites.pop());\n    });\n  }\n\n  next(suites.pop());\n};\n\n/**\n * Run hooks from the top level down.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\nRunner.prototype.hookUp = function(name, fn) {\n  var suites = [this.suite].concat(this.parents()).reverse();\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Run hooks from the bottom up.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\nRunner.prototype.hookDown = function(name, fn) {\n  var suites = [this.suite].concat(this.parents());\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Return an array of parent Suites from\n * closest to furthest.\n *\n * @return {Array}\n * @api private\n */\nRunner.prototype.parents = function() {\n  var suite = this.suite;\n  var suites = [];\n  while (suite.parent) {\n    suite = suite.parent;\n    suites.push(suite);\n  }\n  return suites;\n};\n\n/**\n * Run the current test and callback `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\nRunner.prototype.runTest = function(fn) {\n  var self = this;\n  var test = this.test;\n\n  if (this.asyncOnly) {\n    test.asyncOnly = true;\n  }\n\n  if (this.allowUncaught) {\n    test.allowUncaught = true;\n    return test.run(fn);\n  }\n  try {\n    test.on('error', function(err) {\n      self.fail(test, err);\n    });\n    test.run(fn);\n  } catch (err) {\n    fn(err);\n  }\n};\n\n/**\n * Run tests in the given `suite` and invoke the callback `fn()` when complete.\n *\n * @api private\n * @param {Suite} suite\n * @param {Function} fn\n */\nRunner.prototype.runTests = function(suite, fn) {\n  var self = this;\n  var tests = suite.tests.slice();\n  var test;\n\n  function hookErr(_, errSuite, after) {\n    // before/after Each hook for errSuite failed:\n    var orig = self.suite;\n\n    // for failed 'after each' hook start from errSuite parent,\n    // otherwise start from errSuite itself\n    self.suite = after ? errSuite.parent : errSuite;\n\n    if (self.suite) {\n      // call hookUp afterEach\n      self.hookUp('afterEach', function(err2, errSuite2) {\n        self.suite = orig;\n        // some hooks may fail even now\n        if (err2) {\n          return hookErr(err2, errSuite2, true);\n        }\n        // report error suite\n        fn(errSuite);\n      });\n    } else {\n      // there is no need calling other 'after each' hooks\n      self.suite = orig;\n      fn(errSuite);\n    }\n  }\n\n  function next(err, errSuite) {\n    // if we bail after first err\n    if (self.failures && suite._bail) {\n      return fn();\n    }\n\n    if (self._abort) {\n      return fn();\n    }\n\n    if (err) {\n      return hookErr(err, errSuite, true);\n    }\n\n    // next test\n    test = tests.shift();\n\n    // all done\n    if (!test) {\n      return fn();\n    }\n\n    // grep\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) {\n      match = !match;\n    }\n    if (!match) {\n      // Run immediately only if we have defined a grep. When we\n      // define a grep — It can cause maximum callstack error if\n      // the grep is doing a large recursive loop by neglecting\n      // all tests. The run immediately function also comes with\n      // a performance cost. So we don't want to run immediately\n      // if we run the whole test suite, because running the whole\n      // test suite don't do any immediate recursive loops. Thus,\n      // allowing a JS runtime to breathe.\n      if (self._grep !== self._defaultGrep) {\n        Runner.immediately(next);\n      } else {\n        next();\n      }\n      return;\n    }\n\n    function parentPending(suite) {\n      return suite.pending || (suite.parent && parentPending(suite.parent));\n    }\n\n    // pending\n    if (test.pending || parentPending(test.parent)) {\n      self.emit('pending', test);\n      self.emit('test end', test);\n      return next();\n    }\n\n    // execute test and hook(s)\n    self.emit('test', self.test = test);\n    self.hookDown('beforeEach', function(err, errSuite) {\n      if (suite.pending) {\n        self.emit('pending', test);\n        self.emit('test end', test);\n        return next();\n      }\n      if (err) {\n        return hookErr(err, errSuite, false);\n      }\n      self.currentRunnable = self.test;\n      self.runTest(function(err) {\n        test = self.test;\n        if (err) {\n          var retry = test.currentRetry();\n          if (err instanceof Pending) {\n            test.pending = true;\n            self.emit('pending', test);\n          } else if (retry < test.retries()) {\n            var clonedTest = test.clone();\n            clonedTest.currentRetry(retry + 1);\n            tests.unshift(clonedTest);\n\n            // Early return + hook trigger so that it doesn't\n            // increment the count wrong\n            return self.hookUp('afterEach', next);\n          } else {\n            self.fail(test, err);\n          }\n          self.emit('test end', test);\n\n          if (err instanceof Pending) {\n            return next();\n          }\n\n          return self.hookUp('afterEach', next);\n        }\n\n        test.state = 'passed';\n        self.emit('pass', test);\n        self.emit('test end', test);\n        self.hookUp('afterEach', next);\n      });\n    });\n  }\n\n  this.next = next;\n  this.hookErr = hookErr;\n  next();\n};\n\n/**\n * Run the given `suite` and invoke the callback `fn()` when complete.\n *\n * @api private\n * @param {Suite} suite\n * @param {Function} fn\n */\nRunner.prototype.runSuite = function(suite, fn) {\n  var i = 0;\n  var self = this;\n  var total = this.grepTotal(suite);\n  var afterAllHookCalled = false;\n\n  debug('run suite %s', suite.fullTitle());\n\n  if (!total || (self.failures && suite._bail)) {\n    return fn();\n  }\n\n  this.emit('suite', this.suite = suite);\n\n  function next(errSuite) {\n    if (errSuite) {\n      // current suite failed on a hook from errSuite\n      if (errSuite === suite) {\n        // if errSuite is current suite\n        // continue to the next sibling suite\n        return done();\n      }\n      // errSuite is among the parents of current suite\n      // stop execution of errSuite and all sub-suites\n      return done(errSuite);\n    }\n\n    if (self._abort) {\n      return done();\n    }\n\n    var curr = suite.suites[i++];\n    if (!curr) {\n      return done();\n    }\n\n    // Avoid grep neglecting large number of tests causing a\n    // huge recursive loop and thus a maximum call stack error.\n    // See comment in `this.runTests()` for more information.\n    if (self._grep !== self._defaultGrep) {\n      Runner.immediately(function() {\n        self.runSuite(curr, next);\n      });\n    } else {\n      self.runSuite(curr, next);\n    }\n  }\n\n  function done(errSuite) {\n    self.suite = suite;\n    self.nextSuite = next;\n\n    if (afterAllHookCalled) {\n      fn(errSuite);\n    } else {\n      // mark that the afterAll block has been called once\n      // and so can be skipped if there is an error in it.\n      afterAllHookCalled = true;\n\n      // remove reference to test\n      delete self.test;\n\n      self.hook('afterAll', function() {\n        self.emit('suite end', suite);\n        fn(errSuite);\n      });\n    }\n  }\n\n  this.nextSuite = next;\n\n  this.hook('beforeAll', function(err) {\n    if (err) {\n      return done();\n    }\n    self.runTests(suite, next);\n  });\n};\n\n/**\n * Handle uncaught exceptions.\n *\n * @param {Error} err\n * @api private\n */\nRunner.prototype.uncaught = function(err) {\n  if (err) {\n    debug('uncaught exception %s', err !== function() {\n      return this;\n    }.call(err) ? err : (err.message || err));\n  } else {\n    debug('uncaught undefined exception');\n    err = undefinedError();\n  }\n  err.uncaught = true;\n\n  var runnable = this.currentRunnable;\n\n  if (!runnable) {\n    runnable = new Runnable('Uncaught error outside test suite');\n    runnable.parent = this.suite;\n\n    if (this.started) {\n      this.fail(runnable, err);\n    } else {\n      // Can't recover from this failure\n      this.emit('start');\n      this.fail(runnable, err);\n      this.emit('end');\n    }\n\n    return;\n  }\n\n  runnable.clearTimeout();\n\n  // Ignore errors if complete\n  if (runnable.state) {\n    return;\n  }\n  this.fail(runnable, err);\n\n  // recover from test\n  if (runnable.type === 'test') {\n    this.emit('test end', runnable);\n    this.hookUp('afterEach', this.next);\n    return;\n  }\n\n // recover from hooks\n  if (runnable.type === 'hook') {\n    var errSuite = this.suite;\n    // if hook failure is in afterEach block\n    if (runnable.fullTitle().indexOf('after each') > -1) {\n      return this.hookErr(err, errSuite, true);\n    }\n    // if hook failure is in beforeEach block\n    if (runnable.fullTitle().indexOf('before each') > -1) {\n      return this.hookErr(err, errSuite, false);\n    }\n    // if hook failure is in after or before blocks\n    return this.nextSuite(errSuite);\n  }\n\n  // bail\n  this.emit('end');\n};\n\n/**\n * Cleans up the references to all the deferred functions\n * (before/after/beforeEach/afterEach) and tests of a Suite.\n * These must be deleted otherwise a memory leak can happen,\n * as those functions may reference variables from closures,\n * thus those variables can never be garbage collected as long\n * as the deferred functions exist.\n *\n * @param {Suite} suite\n */\nfunction cleanSuiteReferences(suite) {\n  function cleanArrReferences(arr) {\n    for (var i = 0; i < arr.length; i++) {\n      delete arr[i].fn;\n    }\n  }\n\n  if (isArray(suite._beforeAll)) {\n    cleanArrReferences(suite._beforeAll);\n  }\n\n  if (isArray(suite._beforeEach)) {\n    cleanArrReferences(suite._beforeEach);\n  }\n\n  if (isArray(suite._afterAll)) {\n    cleanArrReferences(suite._afterAll);\n  }\n\n  if (isArray(suite._afterEach)) {\n    cleanArrReferences(suite._afterEach);\n  }\n\n  for (var i = 0; i < suite.tests.length; i++) {\n    delete suite.tests[i].fn;\n  }\n}\n\n/**\n * Run the root suite and invoke `fn(failures)`\n * on completion.\n *\n * @param {Function} fn\n * @return {Runner} for chaining\n * @api public\n * @param {Function} fn\n * @return {Runner} Runner instance.\n */\nRunner.prototype.run = function(fn) {\n  var self = this;\n  var rootSuite = this.suite;\n\n  fn = fn || function() {};\n\n  function uncaught(err) {\n    self.uncaught(err);\n  }\n\n  function start() {\n    self.started = true;\n    self.emit('start');\n    self.runSuite(rootSuite, function() {\n      debug('finished running');\n      self.emit('end');\n    });\n  }\n\n  debug('start');\n\n  // references cleanup to avoid memory leaks\n  this.on('suite end', cleanSuiteReferences);\n\n  // callback\n  this.on('end', function() {\n    debug('end');\n    process.removeListener('uncaughtException', uncaught);\n    fn(self.failures);\n  });\n\n  // uncaught exception\n  process.on('uncaughtException', uncaught);\n\n  if (this._delay) {\n    // for reporters, I guess.\n    // might be nice to debounce some dots while we wait.\n    this.emit('waiting', rootSuite);\n    rootSuite.once('run', start);\n  } else {\n    start();\n  }\n\n  return this;\n};\n\n/**\n * Cleanly abort execution.\n *\n * @api public\n * @return {Runner} Runner instance.\n */\nRunner.prototype.abort = function() {\n  debug('aborting');\n  this._abort = true;\n\n  return this;\n};\n\n/**\n * Filter leaks with the given globals flagged as `ok`.\n *\n * @api private\n * @param {Array} ok\n * @param {Array} globals\n * @return {Array}\n */\nfunction filterLeaks(ok, globals) {\n  return filter(globals, function(key) {\n    // Firefox and Chrome exposes iframes as index inside the window object\n    if (/^d+/.test(key)) {\n      return false;\n    }\n\n    // in firefox\n    // if runner runs in an iframe, this iframe's window.getInterface method not init at first\n    // it is assigned in some seconds\n    if (global.navigator && (/^getInterface/).test(key)) {\n      return false;\n    }\n\n    // an iframe could be approached by window[iframeIndex]\n    // in ie6,7,8 and opera, iframeIndex is enumerable, this could cause leak\n    if (global.navigator && (/^\\d+/).test(key)) {\n      return false;\n    }\n\n    // Opera and IE expose global variables for HTML element IDs (issue #243)\n    if (/^mocha-/.test(key)) {\n      return false;\n    }\n\n    var matched = filter(ok, function(ok) {\n      if (~ok.indexOf('*')) {\n        return key.indexOf(ok.split('*')[0]) === 0;\n      }\n      return key === ok;\n    });\n    return !matched.length && (!global.navigator || key !== 'onerror');\n  });\n}\n\n/**\n * Array of globals dependent on the environment.\n *\n * @return {Array}\n * @api private\n */\nfunction extraGlobals() {\n  if (typeof process === 'object' && typeof process.version === 'string') {\n    var parts = process.version.split('.');\n    var nodeVersion = utils.reduce(parts, function(a, v) {\n      return a << 8 | v;\n    });\n\n    // 'errno' was renamed to process._errno in v0.9.11.\n\n    if (nodeVersion < 0x00090B) {\n      return ['errno'];\n    }\n  }\n\n  return [];\n}\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"./pending\":16,\"./runnable\":35,\"./utils\":39,\"_process\":51,\"debug\":2,\"events\":3}],37:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('events').EventEmitter;\nvar Hook = require('./hook');\nvar utils = require('./utils');\nvar inherits = utils.inherits;\nvar debug = require('debug')('mocha:suite');\nvar milliseconds = require('./ms');\n\n/**\n * Expose `Suite`.\n */\n\nexports = module.exports = Suite;\n\n/**\n * Create a new `Suite` with the given `title` and parent `Suite`. When a suite\n * with the same title is already present, that suite is returned to provide\n * nicer reporter and more flexible meta-testing.\n *\n * @api public\n * @param {Suite} parent\n * @param {string} title\n * @return {Suite}\n */\nexports.create = function(parent, title) {\n  var suite = new Suite(title, parent.ctx);\n  suite.parent = parent;\n  if (parent.pending) {\n    suite.pending = true;\n  }\n  title = suite.fullTitle();\n  parent.addSuite(suite);\n  return suite;\n};\n\n/**\n * Initialize a new `Suite` with the given `title` and `ctx`.\n *\n * @api private\n * @param {string} title\n * @param {Context} parentContext\n */\nfunction Suite(title, parentContext) {\n  this.title = title;\n  function Context() {}\n  Context.prototype = parentContext;\n  this.ctx = new Context();\n  this.suites = [];\n  this.tests = [];\n  this.pending = false;\n  this._beforeEach = [];\n  this._beforeAll = [];\n  this._afterEach = [];\n  this._afterAll = [];\n  this.root = !title;\n  this._timeout = 2000;\n  this._enableTimeouts = true;\n  this._slow = 75;\n  this._bail = false;\n  this._retries = -1;\n  this.delayed = false;\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\ninherits(Suite, EventEmitter);\n\n/**\n * Return a clone of this `Suite`.\n *\n * @api private\n * @return {Suite}\n */\nSuite.prototype.clone = function() {\n  var suite = new Suite(this.title);\n  debug('clone');\n  suite.ctx = this.ctx;\n  suite.timeout(this.timeout());\n  suite.retries(this.retries());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  return suite;\n};\n\n/**\n * Set timeout `ms` or short-hand such as \"2s\".\n *\n * @api private\n * @param {number|string} ms\n * @return {Suite|number} for chaining\n */\nSuite.prototype.timeout = function(ms) {\n  if (!arguments.length) {\n    return this._timeout;\n  }\n  if (ms.toString() === '0') {\n    this._enableTimeouts = false;\n  }\n  if (typeof ms === 'string') {\n    ms = milliseconds(ms);\n  }\n  debug('timeout %d', ms);\n  this._timeout = parseInt(ms, 10);\n  return this;\n};\n\n/**\n * Set number of times to retry a failed test.\n *\n * @api private\n * @param {number|string} n\n * @return {Suite|number} for chaining\n */\nSuite.prototype.retries = function(n) {\n  if (!arguments.length) {\n    return this._retries;\n  }\n  debug('retries %d', n);\n  this._retries = parseInt(n, 10) || 0;\n  return this;\n};\n\n/**\n  * Set timeout to `enabled`.\n  *\n  * @api private\n  * @param {boolean} enabled\n  * @return {Suite|boolean} self or enabled\n  */\nSuite.prototype.enableTimeouts = function(enabled) {\n  if (!arguments.length) {\n    return this._enableTimeouts;\n  }\n  debug('enableTimeouts %s', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Set slow `ms` or short-hand such as \"2s\".\n *\n * @api private\n * @param {number|string} ms\n * @return {Suite|number} for chaining\n */\nSuite.prototype.slow = function(ms) {\n  if (!arguments.length) {\n    return this._slow;\n  }\n  if (typeof ms === 'string') {\n    ms = milliseconds(ms);\n  }\n  debug('slow %d', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Sets whether to bail after first error.\n *\n * @api private\n * @param {boolean} bail\n * @return {Suite|number} for chaining\n */\nSuite.prototype.bail = function(bail) {\n  if (!arguments.length) {\n    return this._bail;\n  }\n  debug('bail %s', bail);\n  this._bail = bail;\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` before running tests.\n *\n * @api private\n * @param {string} title\n * @param {Function} fn\n * @return {Suite} for chaining\n */\nSuite.prototype.beforeAll = function(title, fn) {\n  if (this.pending) {\n    return this;\n  }\n  if (typeof title === 'function') {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"before all\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.retries(this.retries());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeAll.push(hook);\n  this.emit('beforeAll', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after running tests.\n *\n * @api private\n * @param {string} title\n * @param {Function} fn\n * @return {Suite} for chaining\n */\nSuite.prototype.afterAll = function(title, fn) {\n  if (this.pending) {\n    return this;\n  }\n  if (typeof title === 'function') {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"after all\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.retries(this.retries());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterAll.push(hook);\n  this.emit('afterAll', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` before each test case.\n *\n * @api private\n * @param {string} title\n * @param {Function} fn\n * @return {Suite} for chaining\n */\nSuite.prototype.beforeEach = function(title, fn) {\n  if (this.pending) {\n    return this;\n  }\n  if (typeof title === 'function') {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"before each\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.retries(this.retries());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeEach.push(hook);\n  this.emit('beforeEach', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after each test case.\n *\n * @api private\n * @param {string} title\n * @param {Function} fn\n * @return {Suite} for chaining\n */\nSuite.prototype.afterEach = function(title, fn) {\n  if (this.pending) {\n    return this;\n  }\n  if (typeof title === 'function') {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"after each\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.retries(this.retries());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterEach.push(hook);\n  this.emit('afterEach', hook);\n  return this;\n};\n\n/**\n * Add a test `suite`.\n *\n * @api private\n * @param {Suite} suite\n * @return {Suite} for chaining\n */\nSuite.prototype.addSuite = function(suite) {\n  suite.parent = this;\n  suite.timeout(this.timeout());\n  suite.retries(this.retries());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  this.suites.push(suite);\n  this.emit('suite', suite);\n  return this;\n};\n\n/**\n * Add a `test` to this suite.\n *\n * @api private\n * @param {Test} test\n * @return {Suite} for chaining\n */\nSuite.prototype.addTest = function(test) {\n  test.parent = this;\n  test.timeout(this.timeout());\n  test.retries(this.retries());\n  test.enableTimeouts(this.enableTimeouts());\n  test.slow(this.slow());\n  test.ctx = this.ctx;\n  this.tests.push(test);\n  this.emit('test', test);\n  return this;\n};\n\n/**\n * Return the full title generated by recursively concatenating the parent's\n * full title.\n *\n * @api public\n * @return {string}\n */\nSuite.prototype.fullTitle = function() {\n  if (this.parent) {\n    var full = this.parent.fullTitle();\n    if (full) {\n      return full + ' ' + this.title;\n    }\n  }\n  return this.title;\n};\n\n/**\n * Return the total number of tests.\n *\n * @api public\n * @return {number}\n */\nSuite.prototype.total = function() {\n  return utils.reduce(this.suites, function(sum, suite) {\n    return sum + suite.total();\n  }, 0) + this.tests.length;\n};\n\n/**\n * Iterates through each suite recursively to find all tests. Applies a\n * function in the format `fn(test)`.\n *\n * @api private\n * @param {Function} fn\n * @return {Suite}\n */\nSuite.prototype.eachTest = function(fn) {\n  utils.forEach(this.tests, fn);\n  utils.forEach(this.suites, function(suite) {\n    suite.eachTest(fn);\n  });\n  return this;\n};\n\n/**\n * This will run the root suite if we happen to be running in delayed mode.\n */\nSuite.prototype.run = function run() {\n  if (this.root) {\n    this.emit('run');\n  }\n};\n\n},{\"./hook\":7,\"./ms\":15,\"./utils\":39,\"debug\":2,\"events\":3}],38:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require('./runnable');\nvar inherits = require('./utils').inherits;\n\n/**\n * Expose `Test`.\n */\n\nmodule.exports = Test;\n\n/**\n * Initialize a new `Test` with the given `title` and callback `fn`.\n *\n * @api private\n * @param {String} title\n * @param {Function} fn\n */\nfunction Test(title, fn) {\n  Runnable.call(this, title, fn);\n  this.pending = !fn;\n  this.type = 'test';\n  this.body = (fn || '').toString();\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\ninherits(Test, Runnable);\n\nTest.prototype.clone = function() {\n  var test = new Test(this.title, this.fn);\n  test.timeout(this.timeout());\n  test.slow(this.slow());\n  test.enableTimeouts(this.enableTimeouts());\n  test.retries(this.retries());\n  test.currentRetry(this.currentRetry());\n  test.globals(this.globals());\n  test.parent = this.parent;\n  test.file = this.file;\n  test.ctx = this.ctx;\n  return test;\n};\n\n},{\"./runnable\":35,\"./utils\":39}],39:[function(require,module,exports){\n(function (process,Buffer){\n/* eslint-env browser */\n\n/**\n * Module dependencies.\n */\n\nvar basename = require('path').basename;\nvar debug = require('debug')('mocha:watch');\nvar exists = require('fs').existsSync || require('path').existsSync;\nvar glob = require('glob');\nvar join = require('path').join;\nvar readdirSync = require('fs').readdirSync;\nvar statSync = require('fs').statSync;\nvar watchFile = require('fs').watchFile;\n\n/**\n * Ignored directories.\n */\n\nvar ignore = ['node_modules', '.git'];\n\nexports.inherits = require('util').inherits;\n\n/**\n * Escape special characters in the given string of html.\n *\n * @api private\n * @param  {string} html\n * @return {string}\n */\nexports.escape = function(html) {\n  return String(html)\n    .replace(/&/g, '&amp;')\n    .replace(/\"/g, '&quot;')\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;');\n};\n\n/**\n * Array#forEach (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Function} fn\n * @param {Object} scope\n */\nexports.forEach = function(arr, fn, scope) {\n  for (var i = 0, l = arr.length; i < l; i++) {\n    fn.call(scope, arr[i], i);\n  }\n};\n\n/**\n * Test if the given obj is type of string.\n *\n * @api private\n * @param {Object} obj\n * @return {boolean}\n */\nexports.isString = function(obj) {\n  return typeof obj === 'string';\n};\n\n/**\n * Array#map (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Function} fn\n * @param {Object} scope\n * @return {Array}\n */\nexports.map = function(arr, fn, scope) {\n  var result = [];\n  for (var i = 0, l = arr.length; i < l; i++) {\n    result.push(fn.call(scope, arr[i], i, arr));\n  }\n  return result;\n};\n\n/**\n * Array#indexOf (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Object} obj to find index of\n * @param {number} start\n * @return {number}\n */\nexports.indexOf = function(arr, obj, start) {\n  for (var i = start || 0, l = arr.length; i < l; i++) {\n    if (arr[i] === obj) {\n      return i;\n    }\n  }\n  return -1;\n};\n\n/**\n * Array#reduce (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Function} fn\n * @param {Object} val Initial value.\n * @return {*}\n */\nexports.reduce = function(arr, fn, val) {\n  var rval = val;\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    rval = fn(rval, arr[i], i, arr);\n  }\n\n  return rval;\n};\n\n/**\n * Array#filter (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Function} fn\n * @return {Array}\n */\nexports.filter = function(arr, fn) {\n  var ret = [];\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    var val = arr[i];\n    if (fn(val, i, arr)) {\n      ret.push(val);\n    }\n  }\n\n  return ret;\n};\n\n/**\n * Object.keys (<=IE8)\n *\n * @api private\n * @param {Object} obj\n * @return {Array} keys\n */\nexports.keys = typeof Object.keys === 'function' ? Object.keys : function(obj) {\n  var keys = [];\n  var has = Object.prototype.hasOwnProperty; // for `window` on <=IE8\n\n  for (var key in obj) {\n    if (has.call(obj, key)) {\n      keys.push(key);\n    }\n  }\n\n  return keys;\n};\n\n/**\n * Watch the given `files` for changes\n * and invoke `fn(file)` on modification.\n *\n * @api private\n * @param {Array} files\n * @param {Function} fn\n */\nexports.watch = function(files, fn) {\n  var options = { interval: 100 };\n  files.forEach(function(file) {\n    debug('file %s', file);\n    watchFile(file, options, function(curr, prev) {\n      if (prev.mtime < curr.mtime) {\n        fn(file);\n      }\n    });\n  });\n};\n\n/**\n * Array.isArray (<=IE8)\n *\n * @api private\n * @param {Object} obj\n * @return {Boolean}\n */\nvar isArray = typeof Array.isArray === 'function' ? Array.isArray : function(obj) {\n  return Object.prototype.toString.call(obj) === '[object Array]';\n};\n\nexports.isArray = isArray;\n\n/**\n * Buffer.prototype.toJSON polyfill.\n *\n * @type {Function}\n */\nif (typeof Buffer !== 'undefined' && Buffer.prototype) {\n  Buffer.prototype.toJSON = Buffer.prototype.toJSON || function() {\n    return Array.prototype.slice.call(this, 0);\n  };\n}\n\n/**\n * Ignored files.\n *\n * @api private\n * @param {string} path\n * @return {boolean}\n */\nfunction ignored(path) {\n  return !~ignore.indexOf(path);\n}\n\n/**\n * Lookup files in the given `dir`.\n *\n * @api private\n * @param {string} dir\n * @param {string[]} [ext=['.js']]\n * @param {Array} [ret=[]]\n * @return {Array}\n */\nexports.files = function(dir, ext, ret) {\n  ret = ret || [];\n  ext = ext || ['js'];\n\n  var re = new RegExp('\\\\.(' + ext.join('|') + ')$');\n\n  readdirSync(dir)\n    .filter(ignored)\n    .forEach(function(path) {\n      path = join(dir, path);\n      if (statSync(path).isDirectory()) {\n        exports.files(path, ext, ret);\n      } else if (path.match(re)) {\n        ret.push(path);\n      }\n    });\n\n  return ret;\n};\n\n/**\n * Compute a slug from the given `str`.\n *\n * @api private\n * @param {string} str\n * @return {string}\n */\nexports.slug = function(str) {\n  return str\n    .toLowerCase()\n    .replace(/ +/g, '-')\n    .replace(/[^-\\w]/g, '');\n};\n\n/**\n * Strip the function definition from `str`, and re-indent for pre whitespace.\n *\n * @param {string} str\n * @return {string}\n */\nexports.clean = function(str) {\n  str = str\n    .replace(/\\r\\n?|[\\n\\u2028\\u2029]/g, '\\n').replace(/^\\uFEFF/, '')\n    .replace(/^function *\\(.*\\)\\s*\\{|\\(.*\\) *=> *\\{?/, '')\n    .replace(/\\s+\\}$/, '');\n\n  var spaces = str.match(/^\\n?( *)/)[1].length;\n  var tabs = str.match(/^\\n?(\\t*)/)[1].length;\n  var re = new RegExp('^\\n?' + (tabs ? '\\t' : ' ') + '{' + (tabs ? tabs : spaces) + '}', 'gm');\n\n  str = str.replace(re, '');\n\n  return exports.trim(str);\n};\n\n/**\n * Trim the given `str`.\n *\n * @api private\n * @param {string} str\n * @return {string}\n */\nexports.trim = function(str) {\n  return str.replace(/^\\s+|\\s+$/g, '');\n};\n\n/**\n * Parse the given `qs`.\n *\n * @api private\n * @param {string} qs\n * @return {Object}\n */\nexports.parseQuery = function(qs) {\n  return exports.reduce(qs.replace('?', '').split('&'), function(obj, pair) {\n    var i = pair.indexOf('=');\n    var key = pair.slice(0, i);\n    var val = pair.slice(++i);\n\n    obj[key] = decodeURIComponent(val);\n    return obj;\n  }, {});\n};\n\n/**\n * Highlight the given string of `js`.\n *\n * @api private\n * @param {string} js\n * @return {string}\n */\nfunction highlight(js) {\n  return js\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;')\n    .replace(/\\/\\/(.*)/gm, '<span class=\"comment\">//$1</span>')\n    .replace(/('.*?')/gm, '<span class=\"string\">$1</span>')\n    .replace(/(\\d+\\.\\d+)/gm, '<span class=\"number\">$1</span>')\n    .replace(/(\\d+)/gm, '<span class=\"number\">$1</span>')\n    .replace(/\\bnew[ \\t]+(\\w+)/gm, '<span class=\"keyword\">new</span> <span class=\"init\">$1</span>')\n    .replace(/\\b(function|new|throw|return|var|if|else)\\b/gm, '<span class=\"keyword\">$1</span>');\n}\n\n/**\n * Highlight the contents of tag `name`.\n *\n * @api private\n * @param {string} name\n */\nexports.highlightTags = function(name) {\n  var code = document.getElementById('mocha').getElementsByTagName(name);\n  for (var i = 0, len = code.length; i < len; ++i) {\n    code[i].innerHTML = highlight(code[i].innerHTML);\n  }\n};\n\n/**\n * If a value could have properties, and has none, this function is called,\n * which returns a string representation of the empty value.\n *\n * Functions w/ no properties return `'[Function]'`\n * Arrays w/ length === 0 return `'[]'`\n * Objects w/ no properties return `'{}'`\n * All else: return result of `value.toString()`\n *\n * @api private\n * @param {*} value The value to inspect.\n * @param {string} [type] The type of the value, if known.\n * @returns {string}\n */\nfunction emptyRepresentation(value, type) {\n  type = type || exports.type(value);\n\n  switch (type) {\n    case 'function':\n      return '[Function]';\n    case 'object':\n      return '{}';\n    case 'array':\n      return '[]';\n    default:\n      return value.toString();\n  }\n}\n\n/**\n * Takes some variable and asks `Object.prototype.toString()` what it thinks it\n * is.\n *\n * @api private\n * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString\n * @param {*} value The value to test.\n * @returns {string}\n * @example\n * type({}) // 'object'\n * type([]) // 'array'\n * type(1) // 'number'\n * type(false) // 'boolean'\n * type(Infinity) // 'number'\n * type(null) // 'null'\n * type(new Date()) // 'date'\n * type(/foo/) // 'regexp'\n * type('type') // 'string'\n * type(global) // 'global'\n */\nexports.type = function type(value) {\n  if (value === undefined) {\n    return 'undefined';\n  } else if (value === null) {\n    return 'null';\n  } else if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {\n    return 'buffer';\n  }\n  return Object.prototype.toString.call(value)\n    .replace(/^\\[.+\\s(.+?)\\]$/, '$1')\n    .toLowerCase();\n};\n\n/**\n * Stringify `value`. Different behavior depending on type of value:\n *\n * - If `value` is undefined or null, return `'[undefined]'` or `'[null]'`, respectively.\n * - If `value` is not an object, function or array, return result of `value.toString()` wrapped in double-quotes.\n * - If `value` is an *empty* object, function, or array, return result of function\n *   {@link emptyRepresentation}.\n * - If `value` has properties, call {@link exports.canonicalize} on it, then return result of\n *   JSON.stringify().\n *\n * @api private\n * @see exports.type\n * @param {*} value\n * @return {string}\n */\nexports.stringify = function(value) {\n  var type = exports.type(value);\n\n  if (!~exports.indexOf(['object', 'array', 'function'], type)) {\n    if (type !== 'buffer') {\n      return jsonStringify(value);\n    }\n    var json = value.toJSON();\n    // Based on the toJSON result\n    return jsonStringify(json.data && json.type ? json.data : json, 2)\n      .replace(/,(\\n|$)/g, '$1');\n  }\n\n  for (var prop in value) {\n    if (Object.prototype.hasOwnProperty.call(value, prop)) {\n      return jsonStringify(exports.canonicalize(value), 2).replace(/,(\\n|$)/g, '$1');\n    }\n  }\n\n  return emptyRepresentation(value, type);\n};\n\n/**\n * like JSON.stringify but more sense.\n *\n * @api private\n * @param {Object}  object\n * @param {number=} spaces\n * @param {number=} depth\n * @returns {*}\n */\nfunction jsonStringify(object, spaces, depth) {\n  if (typeof spaces === 'undefined') {\n    // primitive types\n    return _stringify(object);\n  }\n\n  depth = depth || 1;\n  var space = spaces * depth;\n  var str = isArray(object) ? '[' : '{';\n  var end = isArray(object) ? ']' : '}';\n  var length = object.length || exports.keys(object).length;\n  // `.repeat()` polyfill\n  function repeat(s, n) {\n    return new Array(n).join(s);\n  }\n\n  function _stringify(val) {\n    switch (exports.type(val)) {\n      case 'null':\n      case 'undefined':\n        val = '[' + val + ']';\n        break;\n      case 'array':\n      case 'object':\n        val = jsonStringify(val, spaces, depth + 1);\n        break;\n      case 'boolean':\n      case 'regexp':\n      case 'number':\n        val = val === 0 && (1 / val) === -Infinity // `-0`\n          ? '-0'\n          : val.toString();\n        break;\n      case 'date':\n        var sDate = isNaN(val.getTime())        // Invalid date\n          ? val.toString()\n          : val.toISOString();\n        val = '[Date: ' + sDate + ']';\n        break;\n      case 'buffer':\n        var json = val.toJSON();\n        // Based on the toJSON result\n        json = json.data && json.type ? json.data : json;\n        val = '[Buffer: ' + jsonStringify(json, 2, depth + 1) + ']';\n        break;\n      default:\n        val = (val === '[Function]' || val === '[Circular]')\n          ? val\n          : JSON.stringify(val); // string\n    }\n    return val;\n  }\n\n  for (var i in object) {\n    if (!object.hasOwnProperty(i)) {\n      continue; // not my business\n    }\n    --length;\n    str += '\\n ' + repeat(' ', space)\n      + (isArray(object) ? '' : '\"' + i + '\": ') // key\n      + _stringify(object[i])                     // value\n      + (length ? ',' : '');                     // comma\n  }\n\n  return str\n    // [], {}\n    + (str.length !== 1 ? '\\n' + repeat(' ', --space) + end : end);\n}\n\n/**\n * Test if a value is a buffer.\n *\n * @api private\n * @param {*} value The value to test.\n * @return {boolean} True if `value` is a buffer, otherwise false\n */\nexports.isBuffer = function(value) {\n  return typeof Buffer !== 'undefined' && Buffer.isBuffer(value);\n};\n\n/**\n * Return a new Thing that has the keys in sorted order. Recursive.\n *\n * If the Thing...\n * - has already been seen, return string `'[Circular]'`\n * - is `undefined`, return string `'[undefined]'`\n * - is `null`, return value `null`\n * - is some other primitive, return the value\n * - is not a primitive or an `Array`, `Object`, or `Function`, return the value of the Thing's `toString()` method\n * - is a non-empty `Array`, `Object`, or `Function`, return the result of calling this function again.\n * - is an empty `Array`, `Object`, or `Function`, return the result of calling `emptyRepresentation()`\n *\n * @api private\n * @see {@link exports.stringify}\n * @param {*} value Thing to inspect.  May or may not have properties.\n * @param {Array} [stack=[]] Stack of seen values\n * @return {(Object|Array|Function|string|undefined)}\n */\nexports.canonicalize = function(value, stack) {\n  var canonicalizedObj;\n  /* eslint-disable no-unused-vars */\n  var prop;\n  /* eslint-enable no-unused-vars */\n  var type = exports.type(value);\n  function withStack(value, fn) {\n    stack.push(value);\n    fn();\n    stack.pop();\n  }\n\n  stack = stack || [];\n\n  if (exports.indexOf(stack, value) !== -1) {\n    return '[Circular]';\n  }\n\n  switch (type) {\n    case 'undefined':\n    case 'buffer':\n    case 'null':\n      canonicalizedObj = value;\n      break;\n    case 'array':\n      withStack(value, function() {\n        canonicalizedObj = exports.map(value, function(item) {\n          return exports.canonicalize(item, stack);\n        });\n      });\n      break;\n    case 'function':\n      /* eslint-disable guard-for-in */\n      for (prop in value) {\n        canonicalizedObj = {};\n        break;\n      }\n      /* eslint-enable guard-for-in */\n      if (!canonicalizedObj) {\n        canonicalizedObj = emptyRepresentation(value, type);\n        break;\n      }\n    /* falls through */\n    case 'object':\n      canonicalizedObj = canonicalizedObj || {};\n      withStack(value, function() {\n        exports.forEach(exports.keys(value).sort(), function(key) {\n          canonicalizedObj[key] = exports.canonicalize(value[key], stack);\n        });\n      });\n      break;\n    case 'date':\n    case 'number':\n    case 'regexp':\n    case 'boolean':\n      canonicalizedObj = value;\n      break;\n    default:\n      canonicalizedObj = value + '';\n  }\n\n  return canonicalizedObj;\n};\n\n/**\n * Lookup file names at the given `path`.\n *\n * @api public\n * @param {string} path Base path to start searching from.\n * @param {string[]} extensions File extensions to look for.\n * @param {boolean} recursive Whether or not to recurse into subdirectories.\n * @return {string[]} An array of paths.\n */\nexports.lookupFiles = function lookupFiles(path, extensions, recursive) {\n  var files = [];\n  var re = new RegExp('\\\\.(' + extensions.join('|') + ')$');\n\n  if (!exists(path)) {\n    if (exists(path + '.js')) {\n      path += '.js';\n    } else {\n      files = glob.sync(path);\n      if (!files.length) {\n        throw new Error(\"cannot resolve path (or pattern) '\" + path + \"'\");\n      }\n      return files;\n    }\n  }\n\n  try {\n    var stat = statSync(path);\n    if (stat.isFile()) {\n      return path;\n    }\n  } catch (err) {\n    // ignore error\n    return;\n  }\n\n  readdirSync(path).forEach(function(file) {\n    file = join(path, file);\n    try {\n      var stat = statSync(file);\n      if (stat.isDirectory()) {\n        if (recursive) {\n          files = files.concat(lookupFiles(file, extensions, recursive));\n        }\n        return;\n      }\n    } catch (err) {\n      // ignore error\n      return;\n    }\n    if (!stat.isFile() || !re.test(file) || basename(file)[0] === '.') {\n      return;\n    }\n    files.push(file);\n  });\n\n  return files;\n};\n\n/**\n * Generate an undefined error with a message warning the user.\n *\n * @return {Error}\n */\n\nexports.undefinedError = function() {\n  return new Error('Caught undefined error, did you throw without specifying what?');\n};\n\n/**\n * Generate an undefined error if `err` is not defined.\n *\n * @param {Error} err\n * @return {Error}\n */\n\nexports.getError = function(err) {\n  return err || exports.undefinedError();\n};\n\n/**\n * @summary\n * This Filter based on `mocha-clean` module.(see: `github.com/rstacruz/mocha-clean`)\n * @description\n * When invoking this function you get a filter function that get the Error.stack as an input,\n * and return a prettify output.\n * (i.e: strip Mocha and internal node functions from stack trace).\n * @returns {Function}\n */\nexports.stackTraceFilter = function() {\n  // TODO: Replace with `process.browser`\n  var slash = '/';\n  var is = typeof document === 'undefined' ? { node: true } : { browser: true };\n  var cwd = is.node\n      ? process.cwd() + slash\n      : (typeof location === 'undefined' ? window.location : location).href.replace(/\\/[^\\/]*$/, '/');\n\n  function isMochaInternal(line) {\n    return (~line.indexOf('node_modules' + slash + 'mocha' + slash))\n      || (~line.indexOf('components' + slash + 'mochajs' + slash))\n      || (~line.indexOf('components' + slash + 'mocha' + slash))\n      || (~line.indexOf(slash + 'mocha.js'));\n  }\n\n  function isNodeInternal(line) {\n    return (~line.indexOf('(timers.js:'))\n      || (~line.indexOf('(events.js:'))\n      || (~line.indexOf('(node.js:'))\n      || (~line.indexOf('(module.js:'))\n      || (~line.indexOf('GeneratorFunctionPrototype.next (native)'))\n      || false;\n  }\n\n  return function(stack) {\n    stack = stack.split('\\n');\n\n    stack = exports.reduce(stack, function(list, line) {\n      if (isMochaInternal(line)) {\n        return list;\n      }\n\n      if (is.node && isNodeInternal(line)) {\n        return list;\n      }\n\n      // Clean up cwd(absolute)\n      list.push(line.replace(cwd, ''));\n      return list;\n    }, []);\n\n    return stack.join('\\n');\n  };\n};\n\n}).call(this,require('_process'),require(\"buffer\").Buffer)\n},{\"_process\":51,\"buffer\":43,\"debug\":2,\"fs\":41,\"glob\":41,\"path\":41,\"util\":66}],40:[function(require,module,exports){\n(function (process){\nvar WritableStream = require('stream').Writable\nvar inherits = require('util').inherits\n\nmodule.exports = BrowserStdout\n\n\ninherits(BrowserStdout, WritableStream)\n\nfunction BrowserStdout(opts) {\n  if (!(this instanceof BrowserStdout)) return new BrowserStdout(opts)\n\n  opts = opts || {}\n  WritableStream.call(this, opts)\n  this.label = (opts.label !== undefined) ? opts.label : 'stdout'\n}\n\nBrowserStdout.prototype._write = function(chunks, encoding, cb) {\n  var output = chunks.toString ? chunks.toString() : chunks\n  if (this.label === false) {\n    console.log(output)\n  } else {\n    console.log(this.label+':', output)\n  }\n  process.nextTick(cb)\n}\n\n}).call(this,require('_process'))\n},{\"_process\":51,\"stream\":63,\"util\":66}],41:[function(require,module,exports){\n\n},{}],42:[function(require,module,exports){\narguments[4][41][0].apply(exports,arguments)\n},{\"dup\":41}],43:[function(require,module,exports){\n/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n * @license  MIT\n */\n\nvar base64 = require('base64-js')\nvar ieee754 = require('ieee754')\nvar isArray = require('is-array')\n\nexports.Buffer = Buffer\nexports.SlowBuffer = SlowBuffer\nexports.INSPECT_MAX_BYTES = 50\nBuffer.poolSize = 8192 // not used by this implementation\n\nvar rootParent = {}\n\n/**\n * If `Buffer.TYPED_ARRAY_SUPPORT`:\n *   === true    Use Uint8Array implementation (fastest)\n *   === false   Use Object implementation (most compatible, even IE6)\n *\n * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,\n * Opera 11.6+, iOS 4.2+.\n *\n * Due to various browser bugs, sometimes the Object implementation will be used even\n * when the browser supports typed arrays.\n *\n * Note:\n *\n *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,\n *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.\n *\n *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property\n *     on objects.\n *\n *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.\n *\n *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of\n *     incorrect length in some situations.\n\n * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they\n * get the Object implementation, which is slower but behaves correctly.\n */\nBuffer.TYPED_ARRAY_SUPPORT = (function () {\n  function Bar () {}\n  try {\n    var arr = new Uint8Array(1)\n    arr.foo = function () { return 42 }\n    arr.constructor = Bar\n    return arr.foo() === 42 && // typed array instances can be augmented\n        arr.constructor === Bar && // constructor can be set\n        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`\n        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`\n  } catch (e) {\n    return false\n  }\n})()\n\nfunction kMaxLength () {\n  return Buffer.TYPED_ARRAY_SUPPORT\n    ? 0x7fffffff\n    : 0x3fffffff\n}\n\n/**\n * Class: Buffer\n * =============\n *\n * The Buffer constructor returns instances of `Uint8Array` that are augmented\n * with function properties for all the node `Buffer` API functions. We use\n * `Uint8Array` so that square bracket notation works as expected -- it returns\n * a single octet.\n *\n * By augmenting the instances, we can avoid modifying the `Uint8Array`\n * prototype.\n */\nfunction Buffer (arg) {\n  if (!(this instanceof Buffer)) {\n    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.\n    if (arguments.length > 1) return new Buffer(arg, arguments[1])\n    return new Buffer(arg)\n  }\n\n  this.length = 0\n  this.parent = undefined\n\n  // Common case.\n  if (typeof arg === 'number') {\n    return fromNumber(this, arg)\n  }\n\n  // Slightly less common case.\n  if (typeof arg === 'string') {\n    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')\n  }\n\n  // Unusual.\n  return fromObject(this, arg)\n}\n\nfunction fromNumber (that, length) {\n  that = allocate(that, length < 0 ? 0 : checked(length) | 0)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) {\n    for (var i = 0; i < length; i++) {\n      that[i] = 0\n    }\n  }\n  return that\n}\n\nfunction fromString (that, string, encoding) {\n  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'\n\n  // Assumption: byteLength() return value is always < kMaxLength.\n  var length = byteLength(string, encoding) | 0\n  that = allocate(that, length)\n\n  that.write(string, encoding)\n  return that\n}\n\nfunction fromObject (that, object) {\n  if (Buffer.isBuffer(object)) return fromBuffer(that, object)\n\n  if (isArray(object)) return fromArray(that, object)\n\n  if (object == null) {\n    throw new TypeError('must start with number, buffer, array or string')\n  }\n\n  if (typeof ArrayBuffer !== 'undefined') {\n    if (object.buffer instanceof ArrayBuffer) {\n      return fromTypedArray(that, object)\n    }\n    if (object instanceof ArrayBuffer) {\n      return fromArrayBuffer(that, object)\n    }\n  }\n\n  if (object.length) return fromArrayLike(that, object)\n\n  return fromJsonObject(that, object)\n}\n\nfunction fromBuffer (that, buffer) {\n  var length = checked(buffer.length) | 0\n  that = allocate(that, length)\n  buffer.copy(that, 0, 0, length)\n  return that\n}\n\nfunction fromArray (that, array) {\n  var length = checked(array.length) | 0\n  that = allocate(that, length)\n  for (var i = 0; i < length; i += 1) {\n    that[i] = array[i] & 255\n  }\n  return that\n}\n\n// Duplicate of fromArray() to keep fromArray() monomorphic.\nfunction fromTypedArray (that, array) {\n  var length = checked(array.length) | 0\n  that = allocate(that, length)\n  // Truncating the elements is probably not what people expect from typed\n  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior\n  // of the old Buffer constructor.\n  for (var i = 0; i < length; i += 1) {\n    that[i] = array[i] & 255\n  }\n  return that\n}\n\nfunction fromArrayBuffer (that, array) {\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    // Return an augmented `Uint8Array` instance, for best performance\n    array.byteLength\n    that = Buffer._augment(new Uint8Array(array))\n  } else {\n    // Fallback: Return an object instance of the Buffer class\n    that = fromTypedArray(that, new Uint8Array(array))\n  }\n  return that\n}\n\nfunction fromArrayLike (that, array) {\n  var length = checked(array.length) | 0\n  that = allocate(that, length)\n  for (var i = 0; i < length; i += 1) {\n    that[i] = array[i] & 255\n  }\n  return that\n}\n\n// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.\n// Returns a zero-length buffer for inputs that don't conform to the spec.\nfunction fromJsonObject (that, object) {\n  var array\n  var length = 0\n\n  if (object.type === 'Buffer' && isArray(object.data)) {\n    array = object.data\n    length = checked(array.length) | 0\n  }\n  that = allocate(that, length)\n\n  for (var i = 0; i < length; i += 1) {\n    that[i] = array[i] & 255\n  }\n  return that\n}\n\nfunction allocate (that, length) {\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    // Return an augmented `Uint8Array` instance, for best performance\n    that = Buffer._augment(new Uint8Array(length))\n  } else {\n    // Fallback: Return an object instance of the Buffer class\n    that.length = length\n    that._isBuffer = true\n  }\n\n  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1\n  if (fromPool) that.parent = rootParent\n\n  return that\n}\n\nfunction checked (length) {\n  // Note: cannot use `length < kMaxLength` here because that fails when\n  // length is NaN (which is otherwise coerced to zero.)\n  if (length >= kMaxLength()) {\n    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +\n                         'size: 0x' + kMaxLength().toString(16) + ' bytes')\n  }\n  return length | 0\n}\n\nfunction SlowBuffer (subject, encoding) {\n  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)\n\n  var buf = new Buffer(subject, encoding)\n  delete buf.parent\n  return buf\n}\n\nBuffer.isBuffer = function isBuffer (b) {\n  return !!(b != null && b._isBuffer)\n}\n\nBuffer.compare = function compare (a, b) {\n  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\n    throw new TypeError('Arguments must be Buffers')\n  }\n\n  if (a === b) return 0\n\n  var x = a.length\n  var y = b.length\n\n  var i = 0\n  var len = Math.min(x, y)\n  while (i < len) {\n    if (a[i] !== b[i]) break\n\n    ++i\n  }\n\n  if (i !== len) {\n    x = a[i]\n    y = b[i]\n  }\n\n  if (x < y) return -1\n  if (y < x) return 1\n  return 0\n}\n\nBuffer.isEncoding = function isEncoding (encoding) {\n  switch (String(encoding).toLowerCase()) {\n    case 'hex':\n    case 'utf8':\n    case 'utf-8':\n    case 'ascii':\n    case 'binary':\n    case 'base64':\n    case 'raw':\n    case 'ucs2':\n    case 'ucs-2':\n    case 'utf16le':\n    case 'utf-16le':\n      return true\n    default:\n      return false\n  }\n}\n\nBuffer.concat = function concat (list, length) {\n  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')\n\n  if (list.length === 0) {\n    return new Buffer(0)\n  }\n\n  var i\n  if (length === undefined) {\n    length = 0\n    for (i = 0; i < list.length; i++) {\n      length += list[i].length\n    }\n  }\n\n  var buf = new Buffer(length)\n  var pos = 0\n  for (i = 0; i < list.length; i++) {\n    var item = list[i]\n    item.copy(buf, pos)\n    pos += item.length\n  }\n  return buf\n}\n\nfunction byteLength (string, encoding) {\n  if (typeof string !== 'string') string = '' + string\n\n  var len = string.length\n  if (len === 0) return 0\n\n  // Use a for loop to avoid recursion\n  var loweredCase = false\n  for (;;) {\n    switch (encoding) {\n      case 'ascii':\n      case 'binary':\n      // Deprecated\n      case 'raw':\n      case 'raws':\n        return len\n      case 'utf8':\n      case 'utf-8':\n        return utf8ToBytes(string).length\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return len * 2\n      case 'hex':\n        return len >>> 1\n      case 'base64':\n        return base64ToBytes(string).length\n      default:\n        if (loweredCase) return utf8ToBytes(string).length // assume utf8\n        encoding = ('' + encoding).toLowerCase()\n        loweredCase = true\n    }\n  }\n}\nBuffer.byteLength = byteLength\n\n// pre-set for values that may exist in the future\nBuffer.prototype.length = undefined\nBuffer.prototype.parent = undefined\n\nfunction slowToString (encoding, start, end) {\n  var loweredCase = false\n\n  start = start | 0\n  end = end === undefined || end === Infinity ? this.length : end | 0\n\n  if (!encoding) encoding = 'utf8'\n  if (start < 0) start = 0\n  if (end > this.length) end = this.length\n  if (end <= start) return ''\n\n  while (true) {\n    switch (encoding) {\n      case 'hex':\n        return hexSlice(this, start, end)\n\n      case 'utf8':\n      case 'utf-8':\n        return utf8Slice(this, start, end)\n\n      case 'ascii':\n        return asciiSlice(this, start, end)\n\n      case 'binary':\n        return binarySlice(this, start, end)\n\n      case 'base64':\n        return base64Slice(this, start, end)\n\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return utf16leSlice(this, start, end)\n\n      default:\n        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)\n        encoding = (encoding + '').toLowerCase()\n        loweredCase = true\n    }\n  }\n}\n\nBuffer.prototype.toString = function toString () {\n  var length = this.length | 0\n  if (length === 0) return ''\n  if (arguments.length === 0) return utf8Slice(this, 0, length)\n  return slowToString.apply(this, arguments)\n}\n\nBuffer.prototype.equals = function equals (b) {\n  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')\n  if (this === b) return true\n  return Buffer.compare(this, b) === 0\n}\n\nBuffer.prototype.inspect = function inspect () {\n  var str = ''\n  var max = exports.INSPECT_MAX_BYTES\n  if (this.length > 0) {\n    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')\n    if (this.length > max) str += ' ... '\n  }\n  return '<Buffer ' + str + '>'\n}\n\nBuffer.prototype.compare = function compare (b) {\n  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')\n  if (this === b) return 0\n  return Buffer.compare(this, b)\n}\n\nBuffer.prototype.indexOf = function indexOf (val, byteOffset) {\n  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff\n  else if (byteOffset < -0x80000000) byteOffset = -0x80000000\n  byteOffset >>= 0\n\n  if (this.length === 0) return -1\n  if (byteOffset >= this.length) return -1\n\n  // Negative offsets start from the end of the buffer\n  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)\n\n  if (typeof val === 'string') {\n    if (val.length === 0) return -1 // special case: looking for empty string always fails\n    return String.prototype.indexOf.call(this, val, byteOffset)\n  }\n  if (Buffer.isBuffer(val)) {\n    return arrayIndexOf(this, val, byteOffset)\n  }\n  if (typeof val === 'number') {\n    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {\n      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)\n    }\n    return arrayIndexOf(this, [ val ], byteOffset)\n  }\n\n  function arrayIndexOf (arr, val, byteOffset) {\n    var foundIndex = -1\n    for (var i = 0; byteOffset + i < arr.length; i++) {\n      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {\n        if (foundIndex === -1) foundIndex = i\n        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex\n      } else {\n        foundIndex = -1\n      }\n    }\n    return -1\n  }\n\n  throw new TypeError('val must be string, number or Buffer')\n}\n\n// `get` is deprecated\nBuffer.prototype.get = function get (offset) {\n  console.log('.get() is deprecated. Access using array indexes instead.')\n  return this.readUInt8(offset)\n}\n\n// `set` is deprecated\nBuffer.prototype.set = function set (v, offset) {\n  console.log('.set() is deprecated. Access using array indexes instead.')\n  return this.writeUInt8(v, offset)\n}\n\nfunction hexWrite (buf, string, offset, length) {\n  offset = Number(offset) || 0\n  var remaining = buf.length - offset\n  if (!length) {\n    length = remaining\n  } else {\n    length = Number(length)\n    if (length > remaining) {\n      length = remaining\n    }\n  }\n\n  // must be an even number of digits\n  var strLen = string.length\n  if (strLen % 2 !== 0) throw new Error('Invalid hex string')\n\n  if (length > strLen / 2) {\n    length = strLen / 2\n  }\n  for (var i = 0; i < length; i++) {\n    var parsed = parseInt(string.substr(i * 2, 2), 16)\n    if (isNaN(parsed)) throw new Error('Invalid hex string')\n    buf[offset + i] = parsed\n  }\n  return i\n}\n\nfunction utf8Write (buf, string, offset, length) {\n  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)\n}\n\nfunction asciiWrite (buf, string, offset, length) {\n  return blitBuffer(asciiToBytes(string), buf, offset, length)\n}\n\nfunction binaryWrite (buf, string, offset, length) {\n  return asciiWrite(buf, string, offset, length)\n}\n\nfunction base64Write (buf, string, offset, length) {\n  return blitBuffer(base64ToBytes(string), buf, offset, length)\n}\n\nfunction ucs2Write (buf, string, offset, length) {\n  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)\n}\n\nBuffer.prototype.write = function write (string, offset, length, encoding) {\n  // Buffer#write(string)\n  if (offset === undefined) {\n    encoding = 'utf8'\n    length = this.length\n    offset = 0\n  // Buffer#write(string, encoding)\n  } else if (length === undefined && typeof offset === 'string') {\n    encoding = offset\n    length = this.length\n    offset = 0\n  // Buffer#write(string, offset[, length][, encoding])\n  } else if (isFinite(offset)) {\n    offset = offset | 0\n    if (isFinite(length)) {\n      length = length | 0\n      if (encoding === undefined) encoding = 'utf8'\n    } else {\n      encoding = length\n      length = undefined\n    }\n  // legacy write(string, encoding, offset, length) - remove in v0.13\n  } else {\n    var swap = encoding\n    encoding = offset\n    offset = length | 0\n    length = swap\n  }\n\n  var remaining = this.length - offset\n  if (length === undefined || length > remaining) length = remaining\n\n  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {\n    throw new RangeError('attempt to write outside buffer bounds')\n  }\n\n  if (!encoding) encoding = 'utf8'\n\n  var loweredCase = false\n  for (;;) {\n    switch (encoding) {\n      case 'hex':\n        return hexWrite(this, string, offset, length)\n\n      case 'utf8':\n      case 'utf-8':\n        return utf8Write(this, string, offset, length)\n\n      case 'ascii':\n        return asciiWrite(this, string, offset, length)\n\n      case 'binary':\n        return binaryWrite(this, string, offset, length)\n\n      case 'base64':\n        // Warning: maxLength not taken into account in base64Write\n        return base64Write(this, string, offset, length)\n\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return ucs2Write(this, string, offset, length)\n\n      default:\n        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)\n        encoding = ('' + encoding).toLowerCase()\n        loweredCase = true\n    }\n  }\n}\n\nBuffer.prototype.toJSON = function toJSON () {\n  return {\n    type: 'Buffer',\n    data: Array.prototype.slice.call(this._arr || this, 0)\n  }\n}\n\nfunction base64Slice (buf, start, end) {\n  if (start === 0 && end === buf.length) {\n    return base64.fromByteArray(buf)\n  } else {\n    return base64.fromByteArray(buf.slice(start, end))\n  }\n}\n\nfunction utf8Slice (buf, start, end) {\n  end = Math.min(buf.length, end)\n  var res = []\n\n  var i = start\n  while (i < end) {\n    var firstByte = buf[i]\n    var codePoint = null\n    var bytesPerSequence = (firstByte > 0xEF) ? 4\n      : (firstByte > 0xDF) ? 3\n      : (firstByte > 0xBF) ? 2\n      : 1\n\n    if (i + bytesPerSequence <= end) {\n      var secondByte, thirdByte, fourthByte, tempCodePoint\n\n      switch (bytesPerSequence) {\n        case 1:\n          if (firstByte < 0x80) {\n            codePoint = firstByte\n          }\n          break\n        case 2:\n          secondByte = buf[i + 1]\n          if ((secondByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)\n            if (tempCodePoint > 0x7F) {\n              codePoint = tempCodePoint\n            }\n          }\n          break\n        case 3:\n          secondByte = buf[i + 1]\n          thirdByte = buf[i + 2]\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)\n            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {\n              codePoint = tempCodePoint\n            }\n          }\n          break\n        case 4:\n          secondByte = buf[i + 1]\n          thirdByte = buf[i + 2]\n          fourthByte = buf[i + 3]\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)\n            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {\n              codePoint = tempCodePoint\n            }\n          }\n      }\n    }\n\n    if (codePoint === null) {\n      // we did not generate a valid codePoint so insert a\n      // replacement char (U+FFFD) and advance only 1 byte\n      codePoint = 0xFFFD\n      bytesPerSequence = 1\n    } else if (codePoint > 0xFFFF) {\n      // encode to utf16 (surrogate pair dance)\n      codePoint -= 0x10000\n      res.push(codePoint >>> 10 & 0x3FF | 0xD800)\n      codePoint = 0xDC00 | codePoint & 0x3FF\n    }\n\n    res.push(codePoint)\n    i += bytesPerSequence\n  }\n\n  return decodeCodePointsArray(res)\n}\n\n// Based on http://stackoverflow.com/a/22747272/680742, the browser with\n// the lowest limit is Chrome, with 0x10000 args.\n// We go 1 magnitude less, for safety\nvar MAX_ARGUMENTS_LENGTH = 0x1000\n\nfunction decodeCodePointsArray (codePoints) {\n  var len = codePoints.length\n  if (len <= MAX_ARGUMENTS_LENGTH) {\n    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()\n  }\n\n  // Decode in chunks to avoid \"call stack size exceeded\".\n  var res = ''\n  var i = 0\n  while (i < len) {\n    res += String.fromCharCode.apply(\n      String,\n      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)\n    )\n  }\n  return res\n}\n\nfunction asciiSlice (buf, start, end) {\n  var ret = ''\n  end = Math.min(buf.length, end)\n\n  for (var i = start; i < end; i++) {\n    ret += String.fromCharCode(buf[i] & 0x7F)\n  }\n  return ret\n}\n\nfunction binarySlice (buf, start, end) {\n  var ret = ''\n  end = Math.min(buf.length, end)\n\n  for (var i = start; i < end; i++) {\n    ret += String.fromCharCode(buf[i])\n  }\n  return ret\n}\n\nfunction hexSlice (buf, start, end) {\n  var len = buf.length\n\n  if (!start || start < 0) start = 0\n  if (!end || end < 0 || end > len) end = len\n\n  var out = ''\n  for (var i = start; i < end; i++) {\n    out += toHex(buf[i])\n  }\n  return out\n}\n\nfunction utf16leSlice (buf, start, end) {\n  var bytes = buf.slice(start, end)\n  var res = ''\n  for (var i = 0; i < bytes.length; i += 2) {\n    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)\n  }\n  return res\n}\n\nBuffer.prototype.slice = function slice (start, end) {\n  var len = this.length\n  start = ~~start\n  end = end === undefined ? len : ~~end\n\n  if (start < 0) {\n    start += len\n    if (start < 0) start = 0\n  } else if (start > len) {\n    start = len\n  }\n\n  if (end < 0) {\n    end += len\n    if (end < 0) end = 0\n  } else if (end > len) {\n    end = len\n  }\n\n  if (end < start) end = start\n\n  var newBuf\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    newBuf = Buffer._augment(this.subarray(start, end))\n  } else {\n    var sliceLen = end - start\n    newBuf = new Buffer(sliceLen, undefined)\n    for (var i = 0; i < sliceLen; i++) {\n      newBuf[i] = this[i + start]\n    }\n  }\n\n  if (newBuf.length) newBuf.parent = this.parent || this\n\n  return newBuf\n}\n\n/*\n * Need to make sure that buffer isn't trying to write out of bounds.\n */\nfunction checkOffset (offset, ext, length) {\n  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')\n  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')\n}\n\nBuffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var val = this[offset]\n  var mul = 1\n  var i = 0\n  while (++i < byteLength && (mul *= 0x100)) {\n    val += this[offset + i] * mul\n  }\n\n  return val\n}\n\nBuffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    checkOffset(offset, byteLength, this.length)\n  }\n\n  var val = this[offset + --byteLength]\n  var mul = 1\n  while (byteLength > 0 && (mul *= 0x100)) {\n    val += this[offset + --byteLength] * mul\n  }\n\n  return val\n}\n\nBuffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 1, this.length)\n  return this[offset]\n}\n\nBuffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  return this[offset] | (this[offset + 1] << 8)\n}\n\nBuffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  return (this[offset] << 8) | this[offset + 1]\n}\n\nBuffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return ((this[offset]) |\n      (this[offset + 1] << 8) |\n      (this[offset + 2] << 16)) +\n      (this[offset + 3] * 0x1000000)\n}\n\nBuffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset] * 0x1000000) +\n    ((this[offset + 1] << 16) |\n    (this[offset + 2] << 8) |\n    this[offset + 3])\n}\n\nBuffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var val = this[offset]\n  var mul = 1\n  var i = 0\n  while (++i < byteLength && (mul *= 0x100)) {\n    val += this[offset + i] * mul\n  }\n  mul *= 0x80\n\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\n\n  return val\n}\n\nBuffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var i = byteLength\n  var mul = 1\n  var val = this[offset + --i]\n  while (i > 0 && (mul *= 0x100)) {\n    val += this[offset + --i] * mul\n  }\n  mul *= 0x80\n\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\n\n  return val\n}\n\nBuffer.prototype.readInt8 = function readInt8 (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 1, this.length)\n  if (!(this[offset] & 0x80)) return (this[offset])\n  return ((0xff - this[offset] + 1) * -1)\n}\n\nBuffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  var val = this[offset] | (this[offset + 1] << 8)\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\n}\n\nBuffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  var val = this[offset + 1] | (this[offset] << 8)\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\n}\n\nBuffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset]) |\n    (this[offset + 1] << 8) |\n    (this[offset + 2] << 16) |\n    (this[offset + 3] << 24)\n}\n\nBuffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset] << 24) |\n    (this[offset + 1] << 16) |\n    (this[offset + 2] << 8) |\n    (this[offset + 3])\n}\n\nBuffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n  return ieee754.read(this, offset, true, 23, 4)\n}\n\nBuffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n  return ieee754.read(this, offset, false, 23, 4)\n}\n\nBuffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 8, this.length)\n  return ieee754.read(this, offset, true, 52, 8)\n}\n\nBuffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 8, this.length)\n  return ieee754.read(this, offset, false, 52, 8)\n}\n\nfunction checkInt (buf, value, offset, ext, max, min) {\n  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')\n  if (value > max || value < min) throw new RangeError('value is out of bounds')\n  if (offset + ext > buf.length) throw new RangeError('index out of range')\n}\n\nBuffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)\n\n  var mul = 1\n  var i = 0\n  this[offset] = value & 0xFF\n  while (++i < byteLength && (mul *= 0x100)) {\n    this[offset + i] = (value / mul) & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)\n\n  var i = byteLength - 1\n  var mul = 1\n  this[offset + i] = value & 0xFF\n  while (--i >= 0 && (mul *= 0x100)) {\n    this[offset + i] = (value / mul) & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\n  this[offset] = value\n  return offset + 1\n}\n\nfunction objectWriteUInt16 (buf, value, offset, littleEndian) {\n  if (value < 0) value = 0xffff + value + 1\n  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {\n    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>\n      (littleEndian ? i : 1 - i) * 8\n  }\n}\n\nBuffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = value\n    this[offset + 1] = (value >>> 8)\n  } else {\n    objectWriteUInt16(this, value, offset, true)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 8)\n    this[offset + 1] = value\n  } else {\n    objectWriteUInt16(this, value, offset, false)\n  }\n  return offset + 2\n}\n\nfunction objectWriteUInt32 (buf, value, offset, littleEndian) {\n  if (value < 0) value = 0xffffffff + value + 1\n  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {\n    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff\n  }\n}\n\nBuffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset + 3] = (value >>> 24)\n    this[offset + 2] = (value >>> 16)\n    this[offset + 1] = (value >>> 8)\n    this[offset] = value\n  } else {\n    objectWriteUInt32(this, value, offset, true)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 24)\n    this[offset + 1] = (value >>> 16)\n    this[offset + 2] = (value >>> 8)\n    this[offset + 3] = value\n  } else {\n    objectWriteUInt32(this, value, offset, false)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) {\n    var limit = Math.pow(2, 8 * byteLength - 1)\n\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\n  }\n\n  var i = 0\n  var mul = 1\n  var sub = value < 0 ? 1 : 0\n  this[offset] = value & 0xFF\n  while (++i < byteLength && (mul *= 0x100)) {\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) {\n    var limit = Math.pow(2, 8 * byteLength - 1)\n\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\n  }\n\n  var i = byteLength - 1\n  var mul = 1\n  var sub = value < 0 ? 1 : 0\n  this[offset + i] = value & 0xFF\n  while (--i >= 0 && (mul *= 0x100)) {\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\n  if (value < 0) value = 0xff + value + 1\n  this[offset] = value\n  return offset + 1\n}\n\nBuffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = value\n    this[offset + 1] = (value >>> 8)\n  } else {\n    objectWriteUInt16(this, value, offset, true)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 8)\n    this[offset + 1] = value\n  } else {\n    objectWriteUInt16(this, value, offset, false)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = value\n    this[offset + 1] = (value >>> 8)\n    this[offset + 2] = (value >>> 16)\n    this[offset + 3] = (value >>> 24)\n  } else {\n    objectWriteUInt32(this, value, offset, true)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\n  if (value < 0) value = 0xffffffff + value + 1\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 24)\n    this[offset + 1] = (value >>> 16)\n    this[offset + 2] = (value >>> 8)\n    this[offset + 3] = value\n  } else {\n    objectWriteUInt32(this, value, offset, false)\n  }\n  return offset + 4\n}\n\nfunction checkIEEE754 (buf, value, offset, ext, max, min) {\n  if (value > max || value < min) throw new RangeError('value is out of bounds')\n  if (offset + ext > buf.length) throw new RangeError('index out of range')\n  if (offset < 0) throw new RangeError('index out of range')\n}\n\nfunction writeFloat (buf, value, offset, littleEndian, noAssert) {\n  if (!noAssert) {\n    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)\n  }\n  ieee754.write(buf, value, offset, littleEndian, 23, 4)\n  return offset + 4\n}\n\nBuffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {\n  return writeFloat(this, value, offset, true, noAssert)\n}\n\nBuffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {\n  return writeFloat(this, value, offset, false, noAssert)\n}\n\nfunction writeDouble (buf, value, offset, littleEndian, noAssert) {\n  if (!noAssert) {\n    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)\n  }\n  ieee754.write(buf, value, offset, littleEndian, 52, 8)\n  return offset + 8\n}\n\nBuffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {\n  return writeDouble(this, value, offset, true, noAssert)\n}\n\nBuffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {\n  return writeDouble(this, value, offset, false, noAssert)\n}\n\n// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)\nBuffer.prototype.copy = function copy (target, targetStart, start, end) {\n  if (!start) start = 0\n  if (!end && end !== 0) end = this.length\n  if (targetStart >= target.length) targetStart = target.length\n  if (!targetStart) targetStart = 0\n  if (end > 0 && end < start) end = start\n\n  // Copy 0 bytes; we're done\n  if (end === start) return 0\n  if (target.length === 0 || this.length === 0) return 0\n\n  // Fatal error conditions\n  if (targetStart < 0) {\n    throw new RangeError('targetStart out of bounds')\n  }\n  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')\n  if (end < 0) throw new RangeError('sourceEnd out of bounds')\n\n  // Are we oob?\n  if (end > this.length) end = this.length\n  if (target.length - targetStart < end - start) {\n    end = target.length - targetStart + start\n  }\n\n  var len = end - start\n  var i\n\n  if (this === target && start < targetStart && targetStart < end) {\n    // descending copy from end\n    for (i = len - 1; i >= 0; i--) {\n      target[i + targetStart] = this[i + start]\n    }\n  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {\n    // ascending copy from start\n    for (i = 0; i < len; i++) {\n      target[i + targetStart] = this[i + start]\n    }\n  } else {\n    target._set(this.subarray(start, start + len), targetStart)\n  }\n\n  return len\n}\n\n// fill(value, start=0, end=buffer.length)\nBuffer.prototype.fill = function fill (value, start, end) {\n  if (!value) value = 0\n  if (!start) start = 0\n  if (!end) end = this.length\n\n  if (end < start) throw new RangeError('end < start')\n\n  // Fill 0 bytes; we're done\n  if (end === start) return\n  if (this.length === 0) return\n\n  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')\n  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')\n\n  var i\n  if (typeof value === 'number') {\n    for (i = start; i < end; i++) {\n      this[i] = value\n    }\n  } else {\n    var bytes = utf8ToBytes(value.toString())\n    var len = bytes.length\n    for (i = start; i < end; i++) {\n      this[i] = bytes[i % len]\n    }\n  }\n\n  return this\n}\n\n/**\n * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.\n * Added in Node 0.12. Only available in browsers that support ArrayBuffer.\n */\nBuffer.prototype.toArrayBuffer = function toArrayBuffer () {\n  if (typeof Uint8Array !== 'undefined') {\n    if (Buffer.TYPED_ARRAY_SUPPORT) {\n      return (new Buffer(this)).buffer\n    } else {\n      var buf = new Uint8Array(this.length)\n      for (var i = 0, len = buf.length; i < len; i += 1) {\n        buf[i] = this[i]\n      }\n      return buf.buffer\n    }\n  } else {\n    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')\n  }\n}\n\n// HELPER FUNCTIONS\n// ================\n\nvar BP = Buffer.prototype\n\n/**\n * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods\n */\nBuffer._augment = function _augment (arr) {\n  arr.constructor = Buffer\n  arr._isBuffer = true\n\n  // save reference to original Uint8Array set method before overwriting\n  arr._set = arr.set\n\n  // deprecated\n  arr.get = BP.get\n  arr.set = BP.set\n\n  arr.write = BP.write\n  arr.toString = BP.toString\n  arr.toLocaleString = BP.toString\n  arr.toJSON = BP.toJSON\n  arr.equals = BP.equals\n  arr.compare = BP.compare\n  arr.indexOf = BP.indexOf\n  arr.copy = BP.copy\n  arr.slice = BP.slice\n  arr.readUIntLE = BP.readUIntLE\n  arr.readUIntBE = BP.readUIntBE\n  arr.readUInt8 = BP.readUInt8\n  arr.readUInt16LE = BP.readUInt16LE\n  arr.readUInt16BE = BP.readUInt16BE\n  arr.readUInt32LE = BP.readUInt32LE\n  arr.readUInt32BE = BP.readUInt32BE\n  arr.readIntLE = BP.readIntLE\n  arr.readIntBE = BP.readIntBE\n  arr.readInt8 = BP.readInt8\n  arr.readInt16LE = BP.readInt16LE\n  arr.readInt16BE = BP.readInt16BE\n  arr.readInt32LE = BP.readInt32LE\n  arr.readInt32BE = BP.readInt32BE\n  arr.readFloatLE = BP.readFloatLE\n  arr.readFloatBE = BP.readFloatBE\n  arr.readDoubleLE = BP.readDoubleLE\n  arr.readDoubleBE = BP.readDoubleBE\n  arr.writeUInt8 = BP.writeUInt8\n  arr.writeUIntLE = BP.writeUIntLE\n  arr.writeUIntBE = BP.writeUIntBE\n  arr.writeUInt16LE = BP.writeUInt16LE\n  arr.writeUInt16BE = BP.writeUInt16BE\n  arr.writeUInt32LE = BP.writeUInt32LE\n  arr.writeUInt32BE = BP.writeUInt32BE\n  arr.writeIntLE = BP.writeIntLE\n  arr.writeIntBE = BP.writeIntBE\n  arr.writeInt8 = BP.writeInt8\n  arr.writeInt16LE = BP.writeInt16LE\n  arr.writeInt16BE = BP.writeInt16BE\n  arr.writeInt32LE = BP.writeInt32LE\n  arr.writeInt32BE = BP.writeInt32BE\n  arr.writeFloatLE = BP.writeFloatLE\n  arr.writeFloatBE = BP.writeFloatBE\n  arr.writeDoubleLE = BP.writeDoubleLE\n  arr.writeDoubleBE = BP.writeDoubleBE\n  arr.fill = BP.fill\n  arr.inspect = BP.inspect\n  arr.toArrayBuffer = BP.toArrayBuffer\n\n  return arr\n}\n\nvar INVALID_BASE64_RE = /[^+\\/0-9A-Za-z-_]/g\n\nfunction base64clean (str) {\n  // Node strips out invalid characters like \\n and \\t from the string, base64-js does not\n  str = stringtrim(str).replace(INVALID_BASE64_RE, '')\n  // Node converts strings with length < 2 to ''\n  if (str.length < 2) return ''\n  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not\n  while (str.length % 4 !== 0) {\n    str = str + '='\n  }\n  return str\n}\n\nfunction stringtrim (str) {\n  if (str.trim) return str.trim()\n  return str.replace(/^\\s+|\\s+$/g, '')\n}\n\nfunction toHex (n) {\n  if (n < 16) return '0' + n.toString(16)\n  return n.toString(16)\n}\n\nfunction utf8ToBytes (string, units) {\n  units = units || Infinity\n  var codePoint\n  var length = string.length\n  var leadSurrogate = null\n  var bytes = []\n\n  for (var i = 0; i < length; i++) {\n    codePoint = string.charCodeAt(i)\n\n    // is surrogate component\n    if (codePoint > 0xD7FF && codePoint < 0xE000) {\n      // last char was a lead\n      if (!leadSurrogate) {\n        // no lead yet\n        if (codePoint > 0xDBFF) {\n          // unexpected trail\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n          continue\n        } else if (i + 1 === length) {\n          // unpaired lead\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n          continue\n        }\n\n        // valid lead\n        leadSurrogate = codePoint\n\n        continue\n      }\n\n      // 2 leads in a row\n      if (codePoint < 0xDC00) {\n        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n        leadSurrogate = codePoint\n        continue\n      }\n\n      // valid surrogate pair\n      codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000\n    } else if (leadSurrogate) {\n      // valid bmp char, but last char was a lead\n      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n    }\n\n    leadSurrogate = null\n\n    // encode utf8\n    if (codePoint < 0x80) {\n      if ((units -= 1) < 0) break\n      bytes.push(codePoint)\n    } else if (codePoint < 0x800) {\n      if ((units -= 2) < 0) break\n      bytes.push(\n        codePoint >> 0x6 | 0xC0,\n        codePoint & 0x3F | 0x80\n      )\n    } else if (codePoint < 0x10000) {\n      if ((units -= 3) < 0) break\n      bytes.push(\n        codePoint >> 0xC | 0xE0,\n        codePoint >> 0x6 & 0x3F | 0x80,\n        codePoint & 0x3F | 0x80\n      )\n    } else if (codePoint < 0x110000) {\n      if ((units -= 4) < 0) break\n      bytes.push(\n        codePoint >> 0x12 | 0xF0,\n        codePoint >> 0xC & 0x3F | 0x80,\n        codePoint >> 0x6 & 0x3F | 0x80,\n        codePoint & 0x3F | 0x80\n      )\n    } else {\n      throw new Error('Invalid code point')\n    }\n  }\n\n  return bytes\n}\n\nfunction asciiToBytes (str) {\n  var byteArray = []\n  for (var i = 0; i < str.length; i++) {\n    // Node's code seems to be doing this and not & 0x7F..\n    byteArray.push(str.charCodeAt(i) & 0xFF)\n  }\n  return byteArray\n}\n\nfunction utf16leToBytes (str, units) {\n  var c, hi, lo\n  var byteArray = []\n  for (var i = 0; i < str.length; i++) {\n    if ((units -= 2) < 0) break\n\n    c = str.charCodeAt(i)\n    hi = c >> 8\n    lo = c % 256\n    byteArray.push(lo)\n    byteArray.push(hi)\n  }\n\n  return byteArray\n}\n\nfunction base64ToBytes (str) {\n  return base64.toByteArray(base64clean(str))\n}\n\nfunction blitBuffer (src, dst, offset, length) {\n  for (var i = 0; i < length; i++) {\n    if ((i + offset >= dst.length) || (i >= src.length)) break\n    dst[i + offset] = src[i]\n  }\n  return i\n}\n\n},{\"base64-js\":44,\"ieee754\":45,\"is-array\":46}],44:[function(require,module,exports){\nvar lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\n\n;(function (exports) {\n\t'use strict';\n\n  var Arr = (typeof Uint8Array !== 'undefined')\n    ? Uint8Array\n    : Array\n\n\tvar PLUS   = '+'.charCodeAt(0)\n\tvar SLASH  = '/'.charCodeAt(0)\n\tvar NUMBER = '0'.charCodeAt(0)\n\tvar LOWER  = 'a'.charCodeAt(0)\n\tvar UPPER  = 'A'.charCodeAt(0)\n\tvar PLUS_URL_SAFE = '-'.charCodeAt(0)\n\tvar SLASH_URL_SAFE = '_'.charCodeAt(0)\n\n\tfunction decode (elt) {\n\t\tvar code = elt.charCodeAt(0)\n\t\tif (code === PLUS ||\n\t\t    code === PLUS_URL_SAFE)\n\t\t\treturn 62 // '+'\n\t\tif (code === SLASH ||\n\t\t    code === SLASH_URL_SAFE)\n\t\t\treturn 63 // '/'\n\t\tif (code < NUMBER)\n\t\t\treturn -1 //no match\n\t\tif (code < NUMBER + 10)\n\t\t\treturn code - NUMBER + 26 + 26\n\t\tif (code < UPPER + 26)\n\t\t\treturn code - UPPER\n\t\tif (code < LOWER + 26)\n\t\t\treturn code - LOWER + 26\n\t}\n\n\tfunction b64ToByteArray (b64) {\n\t\tvar i, j, l, tmp, placeHolders, arr\n\n\t\tif (b64.length % 4 > 0) {\n\t\t\tthrow new Error('Invalid string. Length must be a multiple of 4')\n\t\t}\n\n\t\t// the number of equal signs (place holders)\n\t\t// if there are two placeholders, than the two characters before it\n\t\t// represent one byte\n\t\t// if there is only one, then the three characters before it represent 2 bytes\n\t\t// this is just a cheap hack to not do indexOf twice\n\t\tvar len = b64.length\n\t\tplaceHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0\n\n\t\t// base64 is 4/3 + up to two characters of the original data\n\t\tarr = new Arr(b64.length * 3 / 4 - placeHolders)\n\n\t\t// if there are placeholders, only get up to the last complete 4 chars\n\t\tl = placeHolders > 0 ? b64.length - 4 : b64.length\n\n\t\tvar L = 0\n\n\t\tfunction push (v) {\n\t\t\tarr[L++] = v\n\t\t}\n\n\t\tfor (i = 0, j = 0; i < l; i += 4, j += 3) {\n\t\t\ttmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))\n\t\t\tpush((tmp & 0xFF0000) >> 16)\n\t\t\tpush((tmp & 0xFF00) >> 8)\n\t\t\tpush(tmp & 0xFF)\n\t\t}\n\n\t\tif (placeHolders === 2) {\n\t\t\ttmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)\n\t\t\tpush(tmp & 0xFF)\n\t\t} else if (placeHolders === 1) {\n\t\t\ttmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)\n\t\t\tpush((tmp >> 8) & 0xFF)\n\t\t\tpush(tmp & 0xFF)\n\t\t}\n\n\t\treturn arr\n\t}\n\n\tfunction uint8ToBase64 (uint8) {\n\t\tvar i,\n\t\t\textraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes\n\t\t\toutput = \"\",\n\t\t\ttemp, length\n\n\t\tfunction encode (num) {\n\t\t\treturn lookup.charAt(num)\n\t\t}\n\n\t\tfunction tripletToBase64 (num) {\n\t\t\treturn encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)\n\t\t}\n\n\t\t// go through the array every three bytes, we'll deal with trailing stuff later\n\t\tfor (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {\n\t\t\ttemp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])\n\t\t\toutput += tripletToBase64(temp)\n\t\t}\n\n\t\t// pad the end with zeros, but make sure to not forget the extra bytes\n\t\tswitch (extraBytes) {\n\t\t\tcase 1:\n\t\t\t\ttemp = uint8[uint8.length - 1]\n\t\t\t\toutput += encode(temp >> 2)\n\t\t\t\toutput += encode((temp << 4) & 0x3F)\n\t\t\t\toutput += '=='\n\t\t\t\tbreak\n\t\t\tcase 2:\n\t\t\t\ttemp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])\n\t\t\t\toutput += encode(temp >> 10)\n\t\t\t\toutput += encode((temp >> 4) & 0x3F)\n\t\t\t\toutput += encode((temp << 2) & 0x3F)\n\t\t\t\toutput += '='\n\t\t\t\tbreak\n\t\t}\n\n\t\treturn output\n\t}\n\n\texports.toByteArray = b64ToByteArray\n\texports.fromByteArray = uint8ToBase64\n}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))\n\n},{}],45:[function(require,module,exports){\nexports.read = function (buffer, offset, isLE, mLen, nBytes) {\n  var e, m\n  var eLen = nBytes * 8 - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var nBits = -7\n  var i = isLE ? (nBytes - 1) : 0\n  var d = isLE ? -1 : 1\n  var s = buffer[offset + i]\n\n  i += d\n\n  e = s & ((1 << (-nBits)) - 1)\n  s >>= (-nBits)\n  nBits += eLen\n  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}\n\n  m = e & ((1 << (-nBits)) - 1)\n  e >>= (-nBits)\n  nBits += mLen\n  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}\n\n  if (e === 0) {\n    e = 1 - eBias\n  } else if (e === eMax) {\n    return m ? NaN : ((s ? -1 : 1) * Infinity)\n  } else {\n    m = m + Math.pow(2, mLen)\n    e = e - eBias\n  }\n  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)\n}\n\nexports.write = function (buffer, value, offset, isLE, mLen, nBytes) {\n  var e, m, c\n  var eLen = nBytes * 8 - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)\n  var i = isLE ? 0 : (nBytes - 1)\n  var d = isLE ? 1 : -1\n  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0\n\n  value = Math.abs(value)\n\n  if (isNaN(value) || value === Infinity) {\n    m = isNaN(value) ? 1 : 0\n    e = eMax\n  } else {\n    e = Math.floor(Math.log(value) / Math.LN2)\n    if (value * (c = Math.pow(2, -e)) < 1) {\n      e--\n      c *= 2\n    }\n    if (e + eBias >= 1) {\n      value += rt / c\n    } else {\n      value += rt * Math.pow(2, 1 - eBias)\n    }\n    if (value * c >= 2) {\n      e++\n      c /= 2\n    }\n\n    if (e + eBias >= eMax) {\n      m = 0\n      e = eMax\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * Math.pow(2, mLen)\n      e = e + eBias\n    } else {\n      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)\n      e = 0\n    }\n  }\n\n  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}\n\n  e = (e << mLen) | m\n  eLen += mLen\n  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}\n\n  buffer[offset + i - d] |= s * 128\n}\n\n},{}],46:[function(require,module,exports){\n\n/**\n * isArray\n */\n\nvar isArray = Array.isArray;\n\n/**\n * toString\n */\n\nvar str = Object.prototype.toString;\n\n/**\n * Whether or not the given `val`\n * is an array.\n *\n * example:\n *\n *        isArray([]);\n *        // > true\n *        isArray(arguments);\n *        // > false\n *        isArray('');\n *        // > false\n *\n * @param {mixed} val\n * @return {bool}\n */\n\nmodule.exports = isArray || function (val) {\n  return !! val && '[object Array]' == str.call(val);\n};\n\n},{}],47:[function(require,module,exports){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nfunction EventEmitter() {\n  this._events = this._events || {};\n  this._maxListeners = this._maxListeners || undefined;\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nEventEmitter.defaultMaxListeners = 10;\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function(n) {\n  if (!isNumber(n) || n < 0 || isNaN(n))\n    throw TypeError('n must be a positive number');\n  this._maxListeners = n;\n  return this;\n};\n\nEventEmitter.prototype.emit = function(type) {\n  var er, handler, len, args, i, listeners;\n\n  if (!this._events)\n    this._events = {};\n\n  // If there is no 'error' event listener then throw.\n  if (type === 'error') {\n    if (!this._events.error ||\n        (isObject(this._events.error) && !this._events.error.length)) {\n      er = arguments[1];\n      if (er instanceof Error) {\n        throw er; // Unhandled 'error' event\n      }\n      throw TypeError('Uncaught, unspecified \"error\" event.');\n    }\n  }\n\n  handler = this._events[type];\n\n  if (isUndefined(handler))\n    return false;\n\n  if (isFunction(handler)) {\n    switch (arguments.length) {\n      // fast cases\n      case 1:\n        handler.call(this);\n        break;\n      case 2:\n        handler.call(this, arguments[1]);\n        break;\n      case 3:\n        handler.call(this, arguments[1], arguments[2]);\n        break;\n      // slower\n      default:\n        len = arguments.length;\n        args = new Array(len - 1);\n        for (i = 1; i < len; i++)\n          args[i - 1] = arguments[i];\n        handler.apply(this, args);\n    }\n  } else if (isObject(handler)) {\n    len = arguments.length;\n    args = new Array(len - 1);\n    for (i = 1; i < len; i++)\n      args[i - 1] = arguments[i];\n\n    listeners = handler.slice();\n    len = listeners.length;\n    for (i = 0; i < len; i++)\n      listeners[i].apply(this, args);\n  }\n\n  return true;\n};\n\nEventEmitter.prototype.addListener = function(type, listener) {\n  var m;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events)\n    this._events = {};\n\n  // To avoid recursion in the case that type === \"newListener\"! Before\n  // adding it to the listeners, first emit \"newListener\".\n  if (this._events.newListener)\n    this.emit('newListener', type,\n              isFunction(listener.listener) ?\n              listener.listener : listener);\n\n  if (!this._events[type])\n    // Optimize the case of one listener. Don't need the extra array object.\n    this._events[type] = listener;\n  else if (isObject(this._events[type]))\n    // If we've already got an array, just append.\n    this._events[type].push(listener);\n  else\n    // Adding the second element, need to change to array.\n    this._events[type] = [this._events[type], listener];\n\n  // Check for listener leak\n  if (isObject(this._events[type]) && !this._events[type].warned) {\n    var m;\n    if (!isUndefined(this._maxListeners)) {\n      m = this._maxListeners;\n    } else {\n      m = EventEmitter.defaultMaxListeners;\n    }\n\n    if (m && m > 0 && this._events[type].length > m) {\n      this._events[type].warned = true;\n      console.error('(node) warning: possible EventEmitter memory ' +\n                    'leak detected. %d listeners added. ' +\n                    'Use emitter.setMaxListeners() to increase limit.',\n                    this._events[type].length);\n      if (typeof console.trace === 'function') {\n        // not supported in IE 10\n        console.trace();\n      }\n    }\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.once = function(type, listener) {\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  var fired = false;\n\n  function g() {\n    this.removeListener(type, g);\n\n    if (!fired) {\n      fired = true;\n      listener.apply(this, arguments);\n    }\n  }\n\n  g.listener = listener;\n  this.on(type, g);\n\n  return this;\n};\n\n// emits a 'removeListener' event iff the listener was removed\nEventEmitter.prototype.removeListener = function(type, listener) {\n  var list, position, length, i;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events || !this._events[type])\n    return this;\n\n  list = this._events[type];\n  length = list.length;\n  position = -1;\n\n  if (list === listener ||\n      (isFunction(list.listener) && list.listener === listener)) {\n    delete this._events[type];\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n\n  } else if (isObject(list)) {\n    for (i = length; i-- > 0;) {\n      if (list[i] === listener ||\n          (list[i].listener && list[i].listener === listener)) {\n        position = i;\n        break;\n      }\n    }\n\n    if (position < 0)\n      return this;\n\n    if (list.length === 1) {\n      list.length = 0;\n      delete this._events[type];\n    } else {\n      list.splice(position, 1);\n    }\n\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.removeAllListeners = function(type) {\n  var key, listeners;\n\n  if (!this._events)\n    return this;\n\n  // not listening for removeListener, no need to emit\n  if (!this._events.removeListener) {\n    if (arguments.length === 0)\n      this._events = {};\n    else if (this._events[type])\n      delete this._events[type];\n    return this;\n  }\n\n  // emit removeListener for all listeners on all events\n  if (arguments.length === 0) {\n    for (key in this._events) {\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n    this.removeAllListeners('removeListener');\n    this._events = {};\n    return this;\n  }\n\n  listeners = this._events[type];\n\n  if (isFunction(listeners)) {\n    this.removeListener(type, listeners);\n  } else {\n    // LIFO order\n    while (listeners.length)\n      this.removeListener(type, listeners[listeners.length - 1]);\n  }\n  delete this._events[type];\n\n  return this;\n};\n\nEventEmitter.prototype.listeners = function(type) {\n  var ret;\n  if (!this._events || !this._events[type])\n    ret = [];\n  else if (isFunction(this._events[type]))\n    ret = [this._events[type]];\n  else\n    ret = this._events[type].slice();\n  return ret;\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  var ret;\n  if (!emitter._events || !emitter._events[type])\n    ret = 0;\n  else if (isFunction(emitter._events[type]))\n    ret = 1;\n  else\n    ret = emitter._events[type].length;\n  return ret;\n};\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\n\n},{}],48:[function(require,module,exports){\nif (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    var TempCtor = function () {}\n    TempCtor.prototype = superCtor.prototype\n    ctor.prototype = new TempCtor()\n    ctor.prototype.constructor = ctor\n  }\n}\n\n},{}],49:[function(require,module,exports){\nmodule.exports = Array.isArray || function (arr) {\n  return Object.prototype.toString.call(arr) == '[object Array]';\n};\n\n},{}],50:[function(require,module,exports){\nexports.endianness = function () { return 'LE' };\n\nexports.hostname = function () {\n    if (typeof location !== 'undefined') {\n        return location.hostname\n    }\n    else return '';\n};\n\nexports.loadavg = function () { return [] };\n\nexports.uptime = function () { return 0 };\n\nexports.freemem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.totalmem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.cpus = function () { return [] };\n\nexports.type = function () { return 'Browser' };\n\nexports.release = function () {\n    if (typeof navigator !== 'undefined') {\n        return navigator.appVersion;\n    }\n    return '';\n};\n\nexports.networkInterfaces\n= exports.getNetworkInterfaces\n= function () { return {} };\n\nexports.arch = function () { return 'javascript' };\n\nexports.platform = function () { return 'browser' };\n\nexports.tmpdir = exports.tmpDir = function () {\n    return '/tmp';\n};\n\nexports.EOL = '\\n';\n\n},{}],51:[function(require,module,exports){\n// shim for using process in browser\n\nvar process = module.exports = {};\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = setTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    clearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        setTimeout(drainQueue, 0);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n},{}],52:[function(require,module,exports){\nmodule.exports = require(\"./lib/_stream_duplex.js\")\n\n},{\"./lib/_stream_duplex.js\":53}],53:[function(require,module,exports){\n(function (process){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// a duplex stream is just a stream that is both readable and writable.\n// Since JS doesn't have multiple prototypal inheritance, this class\n// prototypally inherits from Readable, and then parasitically from\n// Writable.\n\nmodule.exports = Duplex;\n\n/*<replacement>*/\nvar objectKeys = Object.keys || function (obj) {\n  var keys = [];\n  for (var key in obj) keys.push(key);\n  return keys;\n}\n/*</replacement>*/\n\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\nvar Readable = require('./_stream_readable');\nvar Writable = require('./_stream_writable');\n\nutil.inherits(Duplex, Readable);\n\nforEach(objectKeys(Writable.prototype), function(method) {\n  if (!Duplex.prototype[method])\n    Duplex.prototype[method] = Writable.prototype[method];\n});\n\nfunction Duplex(options) {\n  if (!(this instanceof Duplex))\n    return new Duplex(options);\n\n  Readable.call(this, options);\n  Writable.call(this, options);\n\n  if (options && options.readable === false)\n    this.readable = false;\n\n  if (options && options.writable === false)\n    this.writable = false;\n\n  this.allowHalfOpen = true;\n  if (options && options.allowHalfOpen === false)\n    this.allowHalfOpen = false;\n\n  this.once('end', onend);\n}\n\n// the no-half-open enforcer\nfunction onend() {\n  // if we allow half-open state, or if the writable side ended,\n  // then we're ok.\n  if (this.allowHalfOpen || this._writableState.ended)\n    return;\n\n  // no more data can be written.\n  // But allow more writes to happen in this tick.\n  process.nextTick(this.end.bind(this));\n}\n\nfunction forEach (xs, f) {\n  for (var i = 0, l = xs.length; i < l; i++) {\n    f(xs[i], i);\n  }\n}\n\n}).call(this,require('_process'))\n},{\"./_stream_readable\":55,\"./_stream_writable\":57,\"_process\":51,\"core-util-is\":58,\"inherits\":48}],54:[function(require,module,exports){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// a passthrough stream.\n// basically just the most minimal sort of Transform stream.\n// Every written chunk gets output as-is.\n\nmodule.exports = PassThrough;\n\nvar Transform = require('./_stream_transform');\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\nutil.inherits(PassThrough, Transform);\n\nfunction PassThrough(options) {\n  if (!(this instanceof PassThrough))\n    return new PassThrough(options);\n\n  Transform.call(this, options);\n}\n\nPassThrough.prototype._transform = function(chunk, encoding, cb) {\n  cb(null, chunk);\n};\n\n},{\"./_stream_transform\":56,\"core-util-is\":58,\"inherits\":48}],55:[function(require,module,exports){\n(function (process){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nmodule.exports = Readable;\n\n/*<replacement>*/\nvar isArray = require('isarray');\n/*</replacement>*/\n\n\n/*<replacement>*/\nvar Buffer = require('buffer').Buffer;\n/*</replacement>*/\n\nReadable.ReadableState = ReadableState;\n\nvar EE = require('events').EventEmitter;\n\n/*<replacement>*/\nif (!EE.listenerCount) EE.listenerCount = function(emitter, type) {\n  return emitter.listeners(type).length;\n};\n/*</replacement>*/\n\nvar Stream = require('stream');\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\nvar StringDecoder;\n\n\n/*<replacement>*/\nvar debug = require('util');\nif (debug && debug.debuglog) {\n  debug = debug.debuglog('stream');\n} else {\n  debug = function () {};\n}\n/*</replacement>*/\n\n\nutil.inherits(Readable, Stream);\n\nfunction ReadableState(options, stream) {\n  var Duplex = require('./_stream_duplex');\n\n  options = options || {};\n\n  // the point at which it stops calling _read() to fill the buffer\n  // Note: 0 is a valid value, means \"don't call _read preemptively ever\"\n  var hwm = options.highWaterMark;\n  var defaultHwm = options.objectMode ? 16 : 16 * 1024;\n  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;\n\n  // cast to ints.\n  this.highWaterMark = ~~this.highWaterMark;\n\n  this.buffer = [];\n  this.length = 0;\n  this.pipes = null;\n  this.pipesCount = 0;\n  this.flowing = null;\n  this.ended = false;\n  this.endEmitted = false;\n  this.reading = false;\n\n  // a flag to be able to tell if the onwrite cb is called immediately,\n  // or on a later tick.  We set this to true at first, because any\n  // actions that shouldn't happen until \"later\" should generally also\n  // not happen before the first write call.\n  this.sync = true;\n\n  // whenever we return null, then we set a flag to say\n  // that we're awaiting a 'readable' event emission.\n  this.needReadable = false;\n  this.emittedReadable = false;\n  this.readableListening = false;\n\n\n  // object stream flag. Used to make read(n) ignore n and to\n  // make all the buffer merging and length checks go away\n  this.objectMode = !!options.objectMode;\n\n  if (stream instanceof Duplex)\n    this.objectMode = this.objectMode || !!options.readableObjectMode;\n\n  // Crypto is kind of old and crusty.  Historically, its default string\n  // encoding is 'binary' so we have to make this configurable.\n  // Everything else in the universe uses 'utf8', though.\n  this.defaultEncoding = options.defaultEncoding || 'utf8';\n\n  // when piping, we only care about 'readable' events that happen\n  // after read()ing all the bytes and not getting any pushback.\n  this.ranOut = false;\n\n  // the number of writers that are awaiting a drain event in .pipe()s\n  this.awaitDrain = 0;\n\n  // if true, a maybeReadMore has been scheduled\n  this.readingMore = false;\n\n  this.decoder = null;\n  this.encoding = null;\n  if (options.encoding) {\n    if (!StringDecoder)\n      StringDecoder = require('string_decoder/').StringDecoder;\n    this.decoder = new StringDecoder(options.encoding);\n    this.encoding = options.encoding;\n  }\n}\n\nfunction Readable(options) {\n  var Duplex = require('./_stream_duplex');\n\n  if (!(this instanceof Readable))\n    return new Readable(options);\n\n  this._readableState = new ReadableState(options, this);\n\n  // legacy\n  this.readable = true;\n\n  Stream.call(this);\n}\n\n// Manually shove something into the read() buffer.\n// This returns true if the highWaterMark has not been hit yet,\n// similar to how Writable.write() returns true if you should\n// write() some more.\nReadable.prototype.push = function(chunk, encoding) {\n  var state = this._readableState;\n\n  if (util.isString(chunk) && !state.objectMode) {\n    encoding = encoding || state.defaultEncoding;\n    if (encoding !== state.encoding) {\n      chunk = new Buffer(chunk, encoding);\n      encoding = '';\n    }\n  }\n\n  return readableAddChunk(this, state, chunk, encoding, false);\n};\n\n// Unshift should *always* be something directly out of read()\nReadable.prototype.unshift = function(chunk) {\n  var state = this._readableState;\n  return readableAddChunk(this, state, chunk, '', true);\n};\n\nfunction readableAddChunk(stream, state, chunk, encoding, addToFront) {\n  var er = chunkInvalid(state, chunk);\n  if (er) {\n    stream.emit('error', er);\n  } else if (util.isNullOrUndefined(chunk)) {\n    state.reading = false;\n    if (!state.ended)\n      onEofChunk(stream, state);\n  } else if (state.objectMode || chunk && chunk.length > 0) {\n    if (state.ended && !addToFront) {\n      var e = new Error('stream.push() after EOF');\n      stream.emit('error', e);\n    } else if (state.endEmitted && addToFront) {\n      var e = new Error('stream.unshift() after end event');\n      stream.emit('error', e);\n    } else {\n      if (state.decoder && !addToFront && !encoding)\n        chunk = state.decoder.write(chunk);\n\n      if (!addToFront)\n        state.reading = false;\n\n      // if we want the data now, just emit it.\n      if (state.flowing && state.length === 0 && !state.sync) {\n        stream.emit('data', chunk);\n        stream.read(0);\n      } else {\n        // update the buffer info.\n        state.length += state.objectMode ? 1 : chunk.length;\n        if (addToFront)\n          state.buffer.unshift(chunk);\n        else\n          state.buffer.push(chunk);\n\n        if (state.needReadable)\n          emitReadable(stream);\n      }\n\n      maybeReadMore(stream, state);\n    }\n  } else if (!addToFront) {\n    state.reading = false;\n  }\n\n  return needMoreData(state);\n}\n\n\n\n// if it's past the high water mark, we can push in some more.\n// Also, if we have no data yet, we can stand some\n// more bytes.  This is to work around cases where hwm=0,\n// such as the repl.  Also, if the push() triggered a\n// readable event, and the user called read(largeNumber) such that\n// needReadable was set, then we ought to push more, so that another\n// 'readable' event will be triggered.\nfunction needMoreData(state) {\n  return !state.ended &&\n         (state.needReadable ||\n          state.length < state.highWaterMark ||\n          state.length === 0);\n}\n\n// backwards compatibility.\nReadable.prototype.setEncoding = function(enc) {\n  if (!StringDecoder)\n    StringDecoder = require('string_decoder/').StringDecoder;\n  this._readableState.decoder = new StringDecoder(enc);\n  this._readableState.encoding = enc;\n  return this;\n};\n\n// Don't raise the hwm > 128MB\nvar MAX_HWM = 0x800000;\nfunction roundUpToNextPowerOf2(n) {\n  if (n >= MAX_HWM) {\n    n = MAX_HWM;\n  } else {\n    // Get the next highest power of 2\n    n--;\n    for (var p = 1; p < 32; p <<= 1) n |= n >> p;\n    n++;\n  }\n  return n;\n}\n\nfunction howMuchToRead(n, state) {\n  if (state.length === 0 && state.ended)\n    return 0;\n\n  if (state.objectMode)\n    return n === 0 ? 0 : 1;\n\n  if (isNaN(n) || util.isNull(n)) {\n    // only flow one buffer at a time\n    if (state.flowing && state.buffer.length)\n      return state.buffer[0].length;\n    else\n      return state.length;\n  }\n\n  if (n <= 0)\n    return 0;\n\n  // If we're asking for more than the target buffer level,\n  // then raise the water mark.  Bump up to the next highest\n  // power of 2, to prevent increasing it excessively in tiny\n  // amounts.\n  if (n > state.highWaterMark)\n    state.highWaterMark = roundUpToNextPowerOf2(n);\n\n  // don't have that much.  return null, unless we've ended.\n  if (n > state.length) {\n    if (!state.ended) {\n      state.needReadable = true;\n      return 0;\n    } else\n      return state.length;\n  }\n\n  return n;\n}\n\n// you can override either this method, or the async _read(n) below.\nReadable.prototype.read = function(n) {\n  debug('read', n);\n  var state = this._readableState;\n  var nOrig = n;\n\n  if (!util.isNumber(n) || n > 0)\n    state.emittedReadable = false;\n\n  // if we're doing read(0) to trigger a readable event, but we\n  // already have a bunch of data in the buffer, then just trigger\n  // the 'readable' event and move on.\n  if (n === 0 &&\n      state.needReadable &&\n      (state.length >= state.highWaterMark || state.ended)) {\n    debug('read: emitReadable', state.length, state.ended);\n    if (state.length === 0 && state.ended)\n      endReadable(this);\n    else\n      emitReadable(this);\n    return null;\n  }\n\n  n = howMuchToRead(n, state);\n\n  // if we've ended, and we're now clear, then finish it up.\n  if (n === 0 && state.ended) {\n    if (state.length === 0)\n      endReadable(this);\n    return null;\n  }\n\n  // All the actual chunk generation logic needs to be\n  // *below* the call to _read.  The reason is that in certain\n  // synthetic stream cases, such as passthrough streams, _read\n  // may be a completely synchronous operation which may change\n  // the state of the read buffer, providing enough data when\n  // before there was *not* enough.\n  //\n  // So, the steps are:\n  // 1. Figure out what the state of things will be after we do\n  // a read from the buffer.\n  //\n  // 2. If that resulting state will trigger a _read, then call _read.\n  // Note that this may be asynchronous, or synchronous.  Yes, it is\n  // deeply ugly to write APIs this way, but that still doesn't mean\n  // that the Readable class should behave improperly, as streams are\n  // designed to be sync/async agnostic.\n  // Take note if the _read call is sync or async (ie, if the read call\n  // has returned yet), so that we know whether or not it's safe to emit\n  // 'readable' etc.\n  //\n  // 3. Actually pull the requested chunks out of the buffer and return.\n\n  // if we need a readable event, then we need to do some reading.\n  var doRead = state.needReadable;\n  debug('need readable', doRead);\n\n  // if we currently have less than the highWaterMark, then also read some\n  if (state.length === 0 || state.length - n < state.highWaterMark) {\n    doRead = true;\n    debug('length less than watermark', doRead);\n  }\n\n  // however, if we've ended, then there's no point, and if we're already\n  // reading, then it's unnecessary.\n  if (state.ended || state.reading) {\n    doRead = false;\n    debug('reading or ended', doRead);\n  }\n\n  if (doRead) {\n    debug('do read');\n    state.reading = true;\n    state.sync = true;\n    // if the length is currently zero, then we *need* a readable event.\n    if (state.length === 0)\n      state.needReadable = true;\n    // call internal read method\n    this._read(state.highWaterMark);\n    state.sync = false;\n  }\n\n  // If _read pushed data synchronously, then `reading` will be false,\n  // and we need to re-evaluate how much data we can return to the user.\n  if (doRead && !state.reading)\n    n = howMuchToRead(nOrig, state);\n\n  var ret;\n  if (n > 0)\n    ret = fromList(n, state);\n  else\n    ret = null;\n\n  if (util.isNull(ret)) {\n    state.needReadable = true;\n    n = 0;\n  }\n\n  state.length -= n;\n\n  // If we have nothing in the buffer, then we want to know\n  // as soon as we *do* get something into the buffer.\n  if (state.length === 0 && !state.ended)\n    state.needReadable = true;\n\n  // If we tried to read() past the EOF, then emit end on the next tick.\n  if (nOrig !== n && state.ended && state.length === 0)\n    endReadable(this);\n\n  if (!util.isNull(ret))\n    this.emit('data', ret);\n\n  return ret;\n};\n\nfunction chunkInvalid(state, chunk) {\n  var er = null;\n  if (!util.isBuffer(chunk) &&\n      !util.isString(chunk) &&\n      !util.isNullOrUndefined(chunk) &&\n      !state.objectMode) {\n    er = new TypeError('Invalid non-string/buffer chunk');\n  }\n  return er;\n}\n\n\nfunction onEofChunk(stream, state) {\n  if (state.decoder && !state.ended) {\n    var chunk = state.decoder.end();\n    if (chunk && chunk.length) {\n      state.buffer.push(chunk);\n      state.length += state.objectMode ? 1 : chunk.length;\n    }\n  }\n  state.ended = true;\n\n  // emit 'readable' now to make sure it gets picked up.\n  emitReadable(stream);\n}\n\n// Don't emit readable right away in sync mode, because this can trigger\n// another read() call => stack overflow.  This way, it might trigger\n// a nextTick recursion warning, but that's not so bad.\nfunction emitReadable(stream) {\n  var state = stream._readableState;\n  state.needReadable = false;\n  if (!state.emittedReadable) {\n    debug('emitReadable', state.flowing);\n    state.emittedReadable = true;\n    if (state.sync)\n      process.nextTick(function() {\n        emitReadable_(stream);\n      });\n    else\n      emitReadable_(stream);\n  }\n}\n\nfunction emitReadable_(stream) {\n  debug('emit readable');\n  stream.emit('readable');\n  flow(stream);\n}\n\n\n// at this point, the user has presumably seen the 'readable' event,\n// and called read() to consume some data.  that may have triggered\n// in turn another _read(n) call, in which case reading = true if\n// it's in progress.\n// However, if we're not ended, or reading, and the length < hwm,\n// then go ahead and try to read some more preemptively.\nfunction maybeReadMore(stream, state) {\n  if (!state.readingMore) {\n    state.readingMore = true;\n    process.nextTick(function() {\n      maybeReadMore_(stream, state);\n    });\n  }\n}\n\nfunction maybeReadMore_(stream, state) {\n  var len = state.length;\n  while (!state.reading && !state.flowing && !state.ended &&\n         state.length < state.highWaterMark) {\n    debug('maybeReadMore read 0');\n    stream.read(0);\n    if (len === state.length)\n      // didn't get any data, stop spinning.\n      break;\n    else\n      len = state.length;\n  }\n  state.readingMore = false;\n}\n\n// abstract method.  to be overridden in specific implementation classes.\n// call cb(er, data) where data is <= n in length.\n// for virtual (non-string, non-buffer) streams, \"length\" is somewhat\n// arbitrary, and perhaps not very meaningful.\nReadable.prototype._read = function(n) {\n  this.emit('error', new Error('not implemented'));\n};\n\nReadable.prototype.pipe = function(dest, pipeOpts) {\n  var src = this;\n  var state = this._readableState;\n\n  switch (state.pipesCount) {\n    case 0:\n      state.pipes = dest;\n      break;\n    case 1:\n      state.pipes = [state.pipes, dest];\n      break;\n    default:\n      state.pipes.push(dest);\n      break;\n  }\n  state.pipesCount += 1;\n  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);\n\n  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&\n              dest !== process.stdout &&\n              dest !== process.stderr;\n\n  var endFn = doEnd ? onend : cleanup;\n  if (state.endEmitted)\n    process.nextTick(endFn);\n  else\n    src.once('end', endFn);\n\n  dest.on('unpipe', onunpipe);\n  function onunpipe(readable) {\n    debug('onunpipe');\n    if (readable === src) {\n      cleanup();\n    }\n  }\n\n  function onend() {\n    debug('onend');\n    dest.end();\n  }\n\n  // when the dest drains, it reduces the awaitDrain counter\n  // on the source.  This would be more elegant with a .once()\n  // handler in flow(), but adding and removing repeatedly is\n  // too slow.\n  var ondrain = pipeOnDrain(src);\n  dest.on('drain', ondrain);\n\n  function cleanup() {\n    debug('cleanup');\n    // cleanup event handlers once the pipe is broken\n    dest.removeListener('close', onclose);\n    dest.removeListener('finish', onfinish);\n    dest.removeListener('drain', ondrain);\n    dest.removeListener('error', onerror);\n    dest.removeListener('unpipe', onunpipe);\n    src.removeListener('end', onend);\n    src.removeListener('end', cleanup);\n    src.removeListener('data', ondata);\n\n    // if the reader is waiting for a drain event from this\n    // specific writer, then it would cause it to never start\n    // flowing again.\n    // So, if this is awaiting a drain, then we just call it now.\n    // If we don't know, then assume that we are waiting for one.\n    if (state.awaitDrain &&\n        (!dest._writableState || dest._writableState.needDrain))\n      ondrain();\n  }\n\n  src.on('data', ondata);\n  function ondata(chunk) {\n    debug('ondata');\n    var ret = dest.write(chunk);\n    if (false === ret) {\n      debug('false write response, pause',\n            src._readableState.awaitDrain);\n      src._readableState.awaitDrain++;\n      src.pause();\n    }\n  }\n\n  // if the dest has an error, then stop piping into it.\n  // however, don't suppress the throwing behavior for this.\n  function onerror(er) {\n    debug('onerror', er);\n    unpipe();\n    dest.removeListener('error', onerror);\n    if (EE.listenerCount(dest, 'error') === 0)\n      dest.emit('error', er);\n  }\n  // This is a brutally ugly hack to make sure that our error handler\n  // is attached before any userland ones.  NEVER DO THIS.\n  if (!dest._events || !dest._events.error)\n    dest.on('error', onerror);\n  else if (isArray(dest._events.error))\n    dest._events.error.unshift(onerror);\n  else\n    dest._events.error = [onerror, dest._events.error];\n\n\n\n  // Both close and finish should trigger unpipe, but only once.\n  function onclose() {\n    dest.removeListener('finish', onfinish);\n    unpipe();\n  }\n  dest.once('close', onclose);\n  function onfinish() {\n    debug('onfinish');\n    dest.removeListener('close', onclose);\n    unpipe();\n  }\n  dest.once('finish', onfinish);\n\n  function unpipe() {\n    debug('unpipe');\n    src.unpipe(dest);\n  }\n\n  // tell the dest that it's being piped to\n  dest.emit('pipe', src);\n\n  // start the flow if it hasn't been started already.\n  if (!state.flowing) {\n    debug('pipe resume');\n    src.resume();\n  }\n\n  return dest;\n};\n\nfunction pipeOnDrain(src) {\n  return function() {\n    var state = src._readableState;\n    debug('pipeOnDrain', state.awaitDrain);\n    if (state.awaitDrain)\n      state.awaitDrain--;\n    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {\n      state.flowing = true;\n      flow(src);\n    }\n  };\n}\n\n\nReadable.prototype.unpipe = function(dest) {\n  var state = this._readableState;\n\n  // if we're not piping anywhere, then do nothing.\n  if (state.pipesCount === 0)\n    return this;\n\n  // just one destination.  most common case.\n  if (state.pipesCount === 1) {\n    // passed in one, but it's not the right one.\n    if (dest && dest !== state.pipes)\n      return this;\n\n    if (!dest)\n      dest = state.pipes;\n\n    // got a match.\n    state.pipes = null;\n    state.pipesCount = 0;\n    state.flowing = false;\n    if (dest)\n      dest.emit('unpipe', this);\n    return this;\n  }\n\n  // slow case. multiple pipe destinations.\n\n  if (!dest) {\n    // remove all.\n    var dests = state.pipes;\n    var len = state.pipesCount;\n    state.pipes = null;\n    state.pipesCount = 0;\n    state.flowing = false;\n\n    for (var i = 0; i < len; i++)\n      dests[i].emit('unpipe', this);\n    return this;\n  }\n\n  // try to find the right one.\n  var i = indexOf(state.pipes, dest);\n  if (i === -1)\n    return this;\n\n  state.pipes.splice(i, 1);\n  state.pipesCount -= 1;\n  if (state.pipesCount === 1)\n    state.pipes = state.pipes[0];\n\n  dest.emit('unpipe', this);\n\n  return this;\n};\n\n// set up data events if they are asked for\n// Ensure readable listeners eventually get something\nReadable.prototype.on = function(ev, fn) {\n  var res = Stream.prototype.on.call(this, ev, fn);\n\n  // If listening to data, and it has not explicitly been paused,\n  // then call resume to start the flow of data on the next tick.\n  if (ev === 'data' && false !== this._readableState.flowing) {\n    this.resume();\n  }\n\n  if (ev === 'readable' && this.readable) {\n    var state = this._readableState;\n    if (!state.readableListening) {\n      state.readableListening = true;\n      state.emittedReadable = false;\n      state.needReadable = true;\n      if (!state.reading) {\n        var self = this;\n        process.nextTick(function() {\n          debug('readable nexttick read 0');\n          self.read(0);\n        });\n      } else if (state.length) {\n        emitReadable(this, state);\n      }\n    }\n  }\n\n  return res;\n};\nReadable.prototype.addListener = Readable.prototype.on;\n\n// pause() and resume() are remnants of the legacy readable stream API\n// If the user uses them, then switch into old mode.\nReadable.prototype.resume = function() {\n  var state = this._readableState;\n  if (!state.flowing) {\n    debug('resume');\n    state.flowing = true;\n    if (!state.reading) {\n      debug('resume read 0');\n      this.read(0);\n    }\n    resume(this, state);\n  }\n  return this;\n};\n\nfunction resume(stream, state) {\n  if (!state.resumeScheduled) {\n    state.resumeScheduled = true;\n    process.nextTick(function() {\n      resume_(stream, state);\n    });\n  }\n}\n\nfunction resume_(stream, state) {\n  state.resumeScheduled = false;\n  stream.emit('resume');\n  flow(stream);\n  if (state.flowing && !state.reading)\n    stream.read(0);\n}\n\nReadable.prototype.pause = function() {\n  debug('call pause flowing=%j', this._readableState.flowing);\n  if (false !== this._readableState.flowing) {\n    debug('pause');\n    this._readableState.flowing = false;\n    this.emit('pause');\n  }\n  return this;\n};\n\nfunction flow(stream) {\n  var state = stream._readableState;\n  debug('flow', state.flowing);\n  if (state.flowing) {\n    do {\n      var chunk = stream.read();\n    } while (null !== chunk && state.flowing);\n  }\n}\n\n// wrap an old-style stream as the async data source.\n// This is *not* part of the readable stream interface.\n// It is an ugly unfortunate mess of history.\nReadable.prototype.wrap = function(stream) {\n  var state = this._readableState;\n  var paused = false;\n\n  var self = this;\n  stream.on('end', function() {\n    debug('wrapped end');\n    if (state.decoder && !state.ended) {\n      var chunk = state.decoder.end();\n      if (chunk && chunk.length)\n        self.push(chunk);\n    }\n\n    self.push(null);\n  });\n\n  stream.on('data', function(chunk) {\n    debug('wrapped data');\n    if (state.decoder)\n      chunk = state.decoder.write(chunk);\n    if (!chunk || !state.objectMode && !chunk.length)\n      return;\n\n    var ret = self.push(chunk);\n    if (!ret) {\n      paused = true;\n      stream.pause();\n    }\n  });\n\n  // proxy all the other methods.\n  // important when wrapping filters and duplexes.\n  for (var i in stream) {\n    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {\n      this[i] = function(method) { return function() {\n        return stream[method].apply(stream, arguments);\n      }}(i);\n    }\n  }\n\n  // proxy certain important events.\n  var events = ['error', 'close', 'destroy', 'pause', 'resume'];\n  forEach(events, function(ev) {\n    stream.on(ev, self.emit.bind(self, ev));\n  });\n\n  // when we try to consume some more bytes, simply unpause the\n  // underlying stream.\n  self._read = function(n) {\n    debug('wrapped _read', n);\n    if (paused) {\n      paused = false;\n      stream.resume();\n    }\n  };\n\n  return self;\n};\n\n\n\n// exposed for testing purposes only.\nReadable._fromList = fromList;\n\n// Pluck off n bytes from an array of buffers.\n// Length is the combined lengths of all the buffers in the list.\nfunction fromList(n, state) {\n  var list = state.buffer;\n  var length = state.length;\n  var stringMode = !!state.decoder;\n  var objectMode = !!state.objectMode;\n  var ret;\n\n  // nothing in the list, definitely empty.\n  if (list.length === 0)\n    return null;\n\n  if (length === 0)\n    ret = null;\n  else if (objectMode)\n    ret = list.shift();\n  else if (!n || n >= length) {\n    // read it all, truncate the array.\n    if (stringMode)\n      ret = list.join('');\n    else\n      ret = Buffer.concat(list, length);\n    list.length = 0;\n  } else {\n    // read just some of it.\n    if (n < list[0].length) {\n      // just take a part of the first list item.\n      // slice is the same for buffers and strings.\n      var buf = list[0];\n      ret = buf.slice(0, n);\n      list[0] = buf.slice(n);\n    } else if (n === list[0].length) {\n      // first list is a perfect match\n      ret = list.shift();\n    } else {\n      // complex case.\n      // we have enough to cover it, but it spans past the first buffer.\n      if (stringMode)\n        ret = '';\n      else\n        ret = new Buffer(n);\n\n      var c = 0;\n      for (var i = 0, l = list.length; i < l && c < n; i++) {\n        var buf = list[0];\n        var cpy = Math.min(n - c, buf.length);\n\n        if (stringMode)\n          ret += buf.slice(0, cpy);\n        else\n          buf.copy(ret, c, 0, cpy);\n\n        if (cpy < buf.length)\n          list[0] = buf.slice(cpy);\n        else\n          list.shift();\n\n        c += cpy;\n      }\n    }\n  }\n\n  return ret;\n}\n\nfunction endReadable(stream) {\n  var state = stream._readableState;\n\n  // If we get here before consuming all the bytes, then that is a\n  // bug in node.  Should never happen.\n  if (state.length > 0)\n    throw new Error('endReadable called on non-empty stream');\n\n  if (!state.endEmitted) {\n    state.ended = true;\n    process.nextTick(function() {\n      // Check that we didn't get one last unshift.\n      if (!state.endEmitted && state.length === 0) {\n        state.endEmitted = true;\n        stream.readable = false;\n        stream.emit('end');\n      }\n    });\n  }\n}\n\nfunction forEach (xs, f) {\n  for (var i = 0, l = xs.length; i < l; i++) {\n    f(xs[i], i);\n  }\n}\n\nfunction indexOf (xs, x) {\n  for (var i = 0, l = xs.length; i < l; i++) {\n    if (xs[i] === x) return i;\n  }\n  return -1;\n}\n\n}).call(this,require('_process'))\n},{\"./_stream_duplex\":53,\"_process\":51,\"buffer\":43,\"core-util-is\":58,\"events\":47,\"inherits\":48,\"isarray\":49,\"stream\":63,\"string_decoder/\":64,\"util\":42}],56:[function(require,module,exports){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n// a transform stream is a readable/writable stream where you do\n// something with the data.  Sometimes it's called a \"filter\",\n// but that's not a great name for it, since that implies a thing where\n// some bits pass through, and others are simply ignored.  (That would\n// be a valid example of a transform, of course.)\n//\n// While the output is causally related to the input, it's not a\n// necessarily symmetric or synchronous transformation.  For example,\n// a zlib stream might take multiple plain-text writes(), and then\n// emit a single compressed chunk some time in the future.\n//\n// Here's how this works:\n//\n// The Transform stream has all the aspects of the readable and writable\n// stream classes.  When you write(chunk), that calls _write(chunk,cb)\n// internally, and returns false if there's a lot of pending writes\n// buffered up.  When you call read(), that calls _read(n) until\n// there's enough pending readable data buffered up.\n//\n// In a transform stream, the written data is placed in a buffer.  When\n// _read(n) is called, it transforms the queued up data, calling the\n// buffered _write cb's as it consumes chunks.  If consuming a single\n// written chunk would result in multiple output chunks, then the first\n// outputted bit calls the readcb, and subsequent chunks just go into\n// the read buffer, and will cause it to emit 'readable' if necessary.\n//\n// This way, back-pressure is actually determined by the reading side,\n// since _read has to be called to start processing a new chunk.  However,\n// a pathological inflate type of transform can cause excessive buffering\n// here.  For example, imagine a stream where every byte of input is\n// interpreted as an integer from 0-255, and then results in that many\n// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in\n// 1kb of data being output.  In this case, you could write a very small\n// amount of input, and end up with a very large amount of output.  In\n// such a pathological inflating mechanism, there'd be no way to tell\n// the system to stop doing the transform.  A single 4MB write could\n// cause the system to run out of memory.\n//\n// However, even in such a pathological case, only a single written chunk\n// would be consumed, and then the rest would wait (un-transformed) until\n// the results of the previous transformed chunk were consumed.\n\nmodule.exports = Transform;\n\nvar Duplex = require('./_stream_duplex');\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\nutil.inherits(Transform, Duplex);\n\n\nfunction TransformState(options, stream) {\n  this.afterTransform = function(er, data) {\n    return afterTransform(stream, er, data);\n  };\n\n  this.needTransform = false;\n  this.transforming = false;\n  this.writecb = null;\n  this.writechunk = null;\n}\n\nfunction afterTransform(stream, er, data) {\n  var ts = stream._transformState;\n  ts.transforming = false;\n\n  var cb = ts.writecb;\n\n  if (!cb)\n    return stream.emit('error', new Error('no writecb in Transform class'));\n\n  ts.writechunk = null;\n  ts.writecb = null;\n\n  if (!util.isNullOrUndefined(data))\n    stream.push(data);\n\n  if (cb)\n    cb(er);\n\n  var rs = stream._readableState;\n  rs.reading = false;\n  if (rs.needReadable || rs.length < rs.highWaterMark) {\n    stream._read(rs.highWaterMark);\n  }\n}\n\n\nfunction Transform(options) {\n  if (!(this instanceof Transform))\n    return new Transform(options);\n\n  Duplex.call(this, options);\n\n  this._transformState = new TransformState(options, this);\n\n  // when the writable side finishes, then flush out anything remaining.\n  var stream = this;\n\n  // start out asking for a readable event once data is transformed.\n  this._readableState.needReadable = true;\n\n  // we have implemented the _read method, and done the other things\n  // that Readable wants before the first _read call, so unset the\n  // sync guard flag.\n  this._readableState.sync = false;\n\n  this.once('prefinish', function() {\n    if (util.isFunction(this._flush))\n      this._flush(function(er) {\n        done(stream, er);\n      });\n    else\n      done(stream);\n  });\n}\n\nTransform.prototype.push = function(chunk, encoding) {\n  this._transformState.needTransform = false;\n  return Duplex.prototype.push.call(this, chunk, encoding);\n};\n\n// This is the part where you do stuff!\n// override this function in implementation classes.\n// 'chunk' is an input chunk.\n//\n// Call `push(newChunk)` to pass along transformed output\n// to the readable side.  You may call 'push' zero or more times.\n//\n// Call `cb(err)` when you are done with this chunk.  If you pass\n// an error, then that'll put the hurt on the whole operation.  If you\n// never call cb(), then you'll never get another chunk.\nTransform.prototype._transform = function(chunk, encoding, cb) {\n  throw new Error('not implemented');\n};\n\nTransform.prototype._write = function(chunk, encoding, cb) {\n  var ts = this._transformState;\n  ts.writecb = cb;\n  ts.writechunk = chunk;\n  ts.writeencoding = encoding;\n  if (!ts.transforming) {\n    var rs = this._readableState;\n    if (ts.needTransform ||\n        rs.needReadable ||\n        rs.length < rs.highWaterMark)\n      this._read(rs.highWaterMark);\n  }\n};\n\n// Doesn't matter what the args are here.\n// _transform does all the work.\n// That we got here means that the readable side wants more data.\nTransform.prototype._read = function(n) {\n  var ts = this._transformState;\n\n  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {\n    ts.transforming = true;\n    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);\n  } else {\n    // mark that we need a transform, so that any data that comes in\n    // will get processed, now that we've asked for it.\n    ts.needTransform = true;\n  }\n};\n\n\nfunction done(stream, er) {\n  if (er)\n    return stream.emit('error', er);\n\n  // if there's nothing in the write buffer, then that means\n  // that nothing more will ever be provided\n  var ws = stream._writableState;\n  var ts = stream._transformState;\n\n  if (ws.length)\n    throw new Error('calling transform done when ws.length != 0');\n\n  if (ts.transforming)\n    throw new Error('calling transform done when still transforming');\n\n  return stream.push(null);\n}\n\n},{\"./_stream_duplex\":53,\"core-util-is\":58,\"inherits\":48}],57:[function(require,module,exports){\n(function (process){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// A bit simpler than readable streams.\n// Implement an async ._write(chunk, cb), and it'll handle all\n// the drain event emission and buffering.\n\nmodule.exports = Writable;\n\n/*<replacement>*/\nvar Buffer = require('buffer').Buffer;\n/*</replacement>*/\n\nWritable.WritableState = WritableState;\n\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\nvar Stream = require('stream');\n\nutil.inherits(Writable, Stream);\n\nfunction WriteReq(chunk, encoding, cb) {\n  this.chunk = chunk;\n  this.encoding = encoding;\n  this.callback = cb;\n}\n\nfunction WritableState(options, stream) {\n  var Duplex = require('./_stream_duplex');\n\n  options = options || {};\n\n  // the point at which write() starts returning false\n  // Note: 0 is a valid value, means that we always return false if\n  // the entire buffer is not flushed immediately on write()\n  var hwm = options.highWaterMark;\n  var defaultHwm = options.objectMode ? 16 : 16 * 1024;\n  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;\n\n  // object stream flag to indicate whether or not this stream\n  // contains buffers or objects.\n  this.objectMode = !!options.objectMode;\n\n  if (stream instanceof Duplex)\n    this.objectMode = this.objectMode || !!options.writableObjectMode;\n\n  // cast to ints.\n  this.highWaterMark = ~~this.highWaterMark;\n\n  this.needDrain = false;\n  // at the start of calling end()\n  this.ending = false;\n  // when end() has been called, and returned\n  this.ended = false;\n  // when 'finish' is emitted\n  this.finished = false;\n\n  // should we decode strings into buffers before passing to _write?\n  // this is here so that some node-core streams can optimize string\n  // handling at a lower level.\n  var noDecode = options.decodeStrings === false;\n  this.decodeStrings = !noDecode;\n\n  // Crypto is kind of old and crusty.  Historically, its default string\n  // encoding is 'binary' so we have to make this configurable.\n  // Everything else in the universe uses 'utf8', though.\n  this.defaultEncoding = options.defaultEncoding || 'utf8';\n\n  // not an actual buffer we keep track of, but a measurement\n  // of how much we're waiting to get pushed to some underlying\n  // socket or file.\n  this.length = 0;\n\n  // a flag to see when we're in the middle of a write.\n  this.writing = false;\n\n  // when true all writes will be buffered until .uncork() call\n  this.corked = 0;\n\n  // a flag to be able to tell if the onwrite cb is called immediately,\n  // or on a later tick.  We set this to true at first, because any\n  // actions that shouldn't happen until \"later\" should generally also\n  // not happen before the first write call.\n  this.sync = true;\n\n  // a flag to know if we're processing previously buffered items, which\n  // may call the _write() callback in the same tick, so that we don't\n  // end up in an overlapped onwrite situation.\n  this.bufferProcessing = false;\n\n  // the callback that's passed to _write(chunk,cb)\n  this.onwrite = function(er) {\n    onwrite(stream, er);\n  };\n\n  // the callback that the user supplies to write(chunk,encoding,cb)\n  this.writecb = null;\n\n  // the amount that is being written when _write is called.\n  this.writelen = 0;\n\n  this.buffer = [];\n\n  // number of pending user-supplied write callbacks\n  // this must be 0 before 'finish' can be emitted\n  this.pendingcb = 0;\n\n  // emit prefinish if the only thing we're waiting for is _write cbs\n  // This is relevant for synchronous Transform streams\n  this.prefinished = false;\n\n  // True if the error was already emitted and should not be thrown again\n  this.errorEmitted = false;\n}\n\nfunction Writable(options) {\n  var Duplex = require('./_stream_duplex');\n\n  // Writable ctor is applied to Duplexes, though they're not\n  // instanceof Writable, they're instanceof Readable.\n  if (!(this instanceof Writable) && !(this instanceof Duplex))\n    return new Writable(options);\n\n  this._writableState = new WritableState(options, this);\n\n  // legacy.\n  this.writable = true;\n\n  Stream.call(this);\n}\n\n// Otherwise people can pipe Writable streams, which is just wrong.\nWritable.prototype.pipe = function() {\n  this.emit('error', new Error('Cannot pipe. Not readable.'));\n};\n\n\nfunction writeAfterEnd(stream, state, cb) {\n  var er = new Error('write after end');\n  // TODO: defer error events consistently everywhere, not just the cb\n  stream.emit('error', er);\n  process.nextTick(function() {\n    cb(er);\n  });\n}\n\n// If we get something that is not a buffer, string, null, or undefined,\n// and we're not in objectMode, then that's an error.\n// Otherwise stream chunks are all considered to be of length=1, and the\n// watermarks determine how many objects to keep in the buffer, rather than\n// how many bytes or characters.\nfunction validChunk(stream, state, chunk, cb) {\n  var valid = true;\n  if (!util.isBuffer(chunk) &&\n      !util.isString(chunk) &&\n      !util.isNullOrUndefined(chunk) &&\n      !state.objectMode) {\n    var er = new TypeError('Invalid non-string/buffer chunk');\n    stream.emit('error', er);\n    process.nextTick(function() {\n      cb(er);\n    });\n    valid = false;\n  }\n  return valid;\n}\n\nWritable.prototype.write = function(chunk, encoding, cb) {\n  var state = this._writableState;\n  var ret = false;\n\n  if (util.isFunction(encoding)) {\n    cb = encoding;\n    encoding = null;\n  }\n\n  if (util.isBuffer(chunk))\n    encoding = 'buffer';\n  else if (!encoding)\n    encoding = state.defaultEncoding;\n\n  if (!util.isFunction(cb))\n    cb = function() {};\n\n  if (state.ended)\n    writeAfterEnd(this, state, cb);\n  else if (validChunk(this, state, chunk, cb)) {\n    state.pendingcb++;\n    ret = writeOrBuffer(this, state, chunk, encoding, cb);\n  }\n\n  return ret;\n};\n\nWritable.prototype.cork = function() {\n  var state = this._writableState;\n\n  state.corked++;\n};\n\nWritable.prototype.uncork = function() {\n  var state = this._writableState;\n\n  if (state.corked) {\n    state.corked--;\n\n    if (!state.writing &&\n        !state.corked &&\n        !state.finished &&\n        !state.bufferProcessing &&\n        state.buffer.length)\n      clearBuffer(this, state);\n  }\n};\n\nfunction decodeChunk(state, chunk, encoding) {\n  if (!state.objectMode &&\n      state.decodeStrings !== false &&\n      util.isString(chunk)) {\n    chunk = new Buffer(chunk, encoding);\n  }\n  return chunk;\n}\n\n// if we're already writing something, then just put this\n// in the queue, and wait our turn.  Otherwise, call _write\n// If we return false, then we need a drain event, so set that flag.\nfunction writeOrBuffer(stream, state, chunk, encoding, cb) {\n  chunk = decodeChunk(state, chunk, encoding);\n  if (util.isBuffer(chunk))\n    encoding = 'buffer';\n  var len = state.objectMode ? 1 : chunk.length;\n\n  state.length += len;\n\n  var ret = state.length < state.highWaterMark;\n  // we must ensure that previous needDrain will not be reset to false.\n  if (!ret)\n    state.needDrain = true;\n\n  if (state.writing || state.corked)\n    state.buffer.push(new WriteReq(chunk, encoding, cb));\n  else\n    doWrite(stream, state, false, len, chunk, encoding, cb);\n\n  return ret;\n}\n\nfunction doWrite(stream, state, writev, len, chunk, encoding, cb) {\n  state.writelen = len;\n  state.writecb = cb;\n  state.writing = true;\n  state.sync = true;\n  if (writev)\n    stream._writev(chunk, state.onwrite);\n  else\n    stream._write(chunk, encoding, state.onwrite);\n  state.sync = false;\n}\n\nfunction onwriteError(stream, state, sync, er, cb) {\n  if (sync)\n    process.nextTick(function() {\n      state.pendingcb--;\n      cb(er);\n    });\n  else {\n    state.pendingcb--;\n    cb(er);\n  }\n\n  stream._writableState.errorEmitted = true;\n  stream.emit('error', er);\n}\n\nfunction onwriteStateUpdate(state) {\n  state.writing = false;\n  state.writecb = null;\n  state.length -= state.writelen;\n  state.writelen = 0;\n}\n\nfunction onwrite(stream, er) {\n  var state = stream._writableState;\n  var sync = state.sync;\n  var cb = state.writecb;\n\n  onwriteStateUpdate(state);\n\n  if (er)\n    onwriteError(stream, state, sync, er, cb);\n  else {\n    // Check if we're actually ready to finish, but don't emit yet\n    var finished = needFinish(stream, state);\n\n    if (!finished &&\n        !state.corked &&\n        !state.bufferProcessing &&\n        state.buffer.length) {\n      clearBuffer(stream, state);\n    }\n\n    if (sync) {\n      process.nextTick(function() {\n        afterWrite(stream, state, finished, cb);\n      });\n    } else {\n      afterWrite(stream, state, finished, cb);\n    }\n  }\n}\n\nfunction afterWrite(stream, state, finished, cb) {\n  if (!finished)\n    onwriteDrain(stream, state);\n  state.pendingcb--;\n  cb();\n  finishMaybe(stream, state);\n}\n\n// Must force callback to be called on nextTick, so that we don't\n// emit 'drain' before the write() consumer gets the 'false' return\n// value, and has a chance to attach a 'drain' listener.\nfunction onwriteDrain(stream, state) {\n  if (state.length === 0 && state.needDrain) {\n    state.needDrain = false;\n    stream.emit('drain');\n  }\n}\n\n\n// if there's something in the buffer waiting, then process it\nfunction clearBuffer(stream, state) {\n  state.bufferProcessing = true;\n\n  if (stream._writev && state.buffer.length > 1) {\n    // Fast case, write everything using _writev()\n    var cbs = [];\n    for (var c = 0; c < state.buffer.length; c++)\n      cbs.push(state.buffer[c].callback);\n\n    // count the one we are adding, as well.\n    // TODO(isaacs) clean this up\n    state.pendingcb++;\n    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {\n      for (var i = 0; i < cbs.length; i++) {\n        state.pendingcb--;\n        cbs[i](err);\n      }\n    });\n\n    // Clear buffer\n    state.buffer = [];\n  } else {\n    // Slow case, write chunks one-by-one\n    for (var c = 0; c < state.buffer.length; c++) {\n      var entry = state.buffer[c];\n      var chunk = entry.chunk;\n      var encoding = entry.encoding;\n      var cb = entry.callback;\n      var len = state.objectMode ? 1 : chunk.length;\n\n      doWrite(stream, state, false, len, chunk, encoding, cb);\n\n      // if we didn't call the onwrite immediately, then\n      // it means that we need to wait until it does.\n      // also, that means that the chunk and cb are currently\n      // being processed, so move the buffer counter past them.\n      if (state.writing) {\n        c++;\n        break;\n      }\n    }\n\n    if (c < state.buffer.length)\n      state.buffer = state.buffer.slice(c);\n    else\n      state.buffer.length = 0;\n  }\n\n  state.bufferProcessing = false;\n}\n\nWritable.prototype._write = function(chunk, encoding, cb) {\n  cb(new Error('not implemented'));\n\n};\n\nWritable.prototype._writev = null;\n\nWritable.prototype.end = function(chunk, encoding, cb) {\n  var state = this._writableState;\n\n  if (util.isFunction(chunk)) {\n    cb = chunk;\n    chunk = null;\n    encoding = null;\n  } else if (util.isFunction(encoding)) {\n    cb = encoding;\n    encoding = null;\n  }\n\n  if (!util.isNullOrUndefined(chunk))\n    this.write(chunk, encoding);\n\n  // .end() fully uncorks\n  if (state.corked) {\n    state.corked = 1;\n    this.uncork();\n  }\n\n  // ignore unnecessary end() calls.\n  if (!state.ending && !state.finished)\n    endWritable(this, state, cb);\n};\n\n\nfunction needFinish(stream, state) {\n  return (state.ending &&\n          state.length === 0 &&\n          !state.finished &&\n          !state.writing);\n}\n\nfunction prefinish(stream, state) {\n  if (!state.prefinished) {\n    state.prefinished = true;\n    stream.emit('prefinish');\n  }\n}\n\nfunction finishMaybe(stream, state) {\n  var need = needFinish(stream, state);\n  if (need) {\n    if (state.pendingcb === 0) {\n      prefinish(stream, state);\n      state.finished = true;\n      stream.emit('finish');\n    } else\n      prefinish(stream, state);\n  }\n  return need;\n}\n\nfunction endWritable(stream, state, cb) {\n  state.ending = true;\n  finishMaybe(stream, state);\n  if (cb) {\n    if (state.finished)\n      process.nextTick(cb);\n    else\n      stream.once('finish', cb);\n  }\n  state.ended = true;\n}\n\n}).call(this,require('_process'))\n},{\"./_stream_duplex\":53,\"_process\":51,\"buffer\":43,\"core-util-is\":58,\"inherits\":48,\"stream\":63}],58:[function(require,module,exports){\n(function (Buffer){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(ar) {\n  return Array.isArray(ar);\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return isObject(re) && objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return isObject(d) && objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return isObject(e) &&\n      (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nfunction isBuffer(arg) {\n  return Buffer.isBuffer(arg);\n}\nexports.isBuffer = isBuffer;\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n}).call(this,require(\"buffer\").Buffer)\n},{\"buffer\":43}],59:[function(require,module,exports){\nmodule.exports = require(\"./lib/_stream_passthrough.js\")\n\n},{\"./lib/_stream_passthrough.js\":54}],60:[function(require,module,exports){\nexports = module.exports = require('./lib/_stream_readable.js');\nexports.Stream = require('stream');\nexports.Readable = exports;\nexports.Writable = require('./lib/_stream_writable.js');\nexports.Duplex = require('./lib/_stream_duplex.js');\nexports.Transform = require('./lib/_stream_transform.js');\nexports.PassThrough = require('./lib/_stream_passthrough.js');\n\n},{\"./lib/_stream_duplex.js\":53,\"./lib/_stream_passthrough.js\":54,\"./lib/_stream_readable.js\":55,\"./lib/_stream_transform.js\":56,\"./lib/_stream_writable.js\":57,\"stream\":63}],61:[function(require,module,exports){\nmodule.exports = require(\"./lib/_stream_transform.js\")\n\n},{\"./lib/_stream_transform.js\":56}],62:[function(require,module,exports){\nmodule.exports = require(\"./lib/_stream_writable.js\")\n\n},{\"./lib/_stream_writable.js\":57}],63:[function(require,module,exports){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nmodule.exports = Stream;\n\nvar EE = require('events').EventEmitter;\nvar inherits = require('inherits');\n\ninherits(Stream, EE);\nStream.Readable = require('readable-stream/readable.js');\nStream.Writable = require('readable-stream/writable.js');\nStream.Duplex = require('readable-stream/duplex.js');\nStream.Transform = require('readable-stream/transform.js');\nStream.PassThrough = require('readable-stream/passthrough.js');\n\n// Backwards-compat with node 0.4.x\nStream.Stream = Stream;\n\n\n\n// old-style streams.  Note that the pipe method (the only relevant\n// part of this class) is overridden in the Readable class.\n\nfunction Stream() {\n  EE.call(this);\n}\n\nStream.prototype.pipe = function(dest, options) {\n  var source = this;\n\n  function ondata(chunk) {\n    if (dest.writable) {\n      if (false === dest.write(chunk) && source.pause) {\n        source.pause();\n      }\n    }\n  }\n\n  source.on('data', ondata);\n\n  function ondrain() {\n    if (source.readable && source.resume) {\n      source.resume();\n    }\n  }\n\n  dest.on('drain', ondrain);\n\n  // If the 'end' option is not supplied, dest.end() will be called when\n  // source gets the 'end' or 'close' events.  Only dest.end() once.\n  if (!dest._isStdio && (!options || options.end !== false)) {\n    source.on('end', onend);\n    source.on('close', onclose);\n  }\n\n  var didOnEnd = false;\n  function onend() {\n    if (didOnEnd) return;\n    didOnEnd = true;\n\n    dest.end();\n  }\n\n\n  function onclose() {\n    if (didOnEnd) return;\n    didOnEnd = true;\n\n    if (typeof dest.destroy === 'function') dest.destroy();\n  }\n\n  // don't leave dangling pipes when there are errors.\n  function onerror(er) {\n    cleanup();\n    if (EE.listenerCount(this, 'error') === 0) {\n      throw er; // Unhandled stream error in pipe.\n    }\n  }\n\n  source.on('error', onerror);\n  dest.on('error', onerror);\n\n  // remove all the event listeners that were added.\n  function cleanup() {\n    source.removeListener('data', ondata);\n    dest.removeListener('drain', ondrain);\n\n    source.removeListener('end', onend);\n    source.removeListener('close', onclose);\n\n    source.removeListener('error', onerror);\n    dest.removeListener('error', onerror);\n\n    source.removeListener('end', cleanup);\n    source.removeListener('close', cleanup);\n\n    dest.removeListener('close', cleanup);\n  }\n\n  source.on('end', cleanup);\n  source.on('close', cleanup);\n\n  dest.on('close', cleanup);\n\n  dest.emit('pipe', source);\n\n  // Allow for unix-like usage: A.pipe(B).pipe(C)\n  return dest;\n};\n\n},{\"events\":47,\"inherits\":48,\"readable-stream/duplex.js\":52,\"readable-stream/passthrough.js\":59,\"readable-stream/readable.js\":60,\"readable-stream/transform.js\":61,\"readable-stream/writable.js\":62}],64:[function(require,module,exports){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar Buffer = require('buffer').Buffer;\n\nvar isBufferEncoding = Buffer.isEncoding\n  || function(encoding) {\n       switch (encoding && encoding.toLowerCase()) {\n         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;\n         default: return false;\n       }\n     }\n\n\nfunction assertEncoding(encoding) {\n  if (encoding && !isBufferEncoding(encoding)) {\n    throw new Error('Unknown encoding: ' + encoding);\n  }\n}\n\n// StringDecoder provides an interface for efficiently splitting a series of\n// buffers into a series of JS strings without breaking apart multi-byte\n// characters. CESU-8 is handled as part of the UTF-8 encoding.\n//\n// @TODO Handling all encodings inside a single object makes it very difficult\n// to reason about this code, so it should be split up in the future.\n// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code\n// points as used by CESU-8.\nvar StringDecoder = exports.StringDecoder = function(encoding) {\n  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');\n  assertEncoding(encoding);\n  switch (this.encoding) {\n    case 'utf8':\n      // CESU-8 represents each of Surrogate Pair by 3-bytes\n      this.surrogateSize = 3;\n      break;\n    case 'ucs2':\n    case 'utf16le':\n      // UTF-16 represents each of Surrogate Pair by 2-bytes\n      this.surrogateSize = 2;\n      this.detectIncompleteChar = utf16DetectIncompleteChar;\n      break;\n    case 'base64':\n      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.\n      this.surrogateSize = 3;\n      this.detectIncompleteChar = base64DetectIncompleteChar;\n      break;\n    default:\n      this.write = passThroughWrite;\n      return;\n  }\n\n  // Enough space to store all bytes of a single character. UTF-8 needs 4\n  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).\n  this.charBuffer = new Buffer(6);\n  // Number of bytes received for the current incomplete multi-byte character.\n  this.charReceived = 0;\n  // Number of bytes expected for the current incomplete multi-byte character.\n  this.charLength = 0;\n};\n\n\n// write decodes the given buffer and returns it as JS string that is\n// guaranteed to not contain any partial multi-byte characters. Any partial\n// character found at the end of the buffer is buffered up, and will be\n// returned when calling write again with the remaining bytes.\n//\n// Note: Converting a Buffer containing an orphan surrogate to a String\n// currently works, but converting a String to a Buffer (via `new Buffer`, or\n// Buffer#write) will replace incomplete surrogates with the unicode\n// replacement character. See https://codereview.chromium.org/121173009/ .\nStringDecoder.prototype.write = function(buffer) {\n  var charStr = '';\n  // if our last write ended with an incomplete multibyte character\n  while (this.charLength) {\n    // determine how many remaining bytes this buffer has to offer for this char\n    var available = (buffer.length >= this.charLength - this.charReceived) ?\n        this.charLength - this.charReceived :\n        buffer.length;\n\n    // add the new bytes to the char buffer\n    buffer.copy(this.charBuffer, this.charReceived, 0, available);\n    this.charReceived += available;\n\n    if (this.charReceived < this.charLength) {\n      // still not enough chars in this buffer? wait for more ...\n      return '';\n    }\n\n    // remove bytes belonging to the current character from the buffer\n    buffer = buffer.slice(available, buffer.length);\n\n    // get the character that was split\n    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);\n\n    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character\n    var charCode = charStr.charCodeAt(charStr.length - 1);\n    if (charCode >= 0xD800 && charCode <= 0xDBFF) {\n      this.charLength += this.surrogateSize;\n      charStr = '';\n      continue;\n    }\n    this.charReceived = this.charLength = 0;\n\n    // if there are no more bytes in this buffer, just emit our char\n    if (buffer.length === 0) {\n      return charStr;\n    }\n    break;\n  }\n\n  // determine and set charLength / charReceived\n  this.detectIncompleteChar(buffer);\n\n  var end = buffer.length;\n  if (this.charLength) {\n    // buffer the incomplete character bytes we got\n    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);\n    end -= this.charReceived;\n  }\n\n  charStr += buffer.toString(this.encoding, 0, end);\n\n  var end = charStr.length - 1;\n  var charCode = charStr.charCodeAt(end);\n  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character\n  if (charCode >= 0xD800 && charCode <= 0xDBFF) {\n    var size = this.surrogateSize;\n    this.charLength += size;\n    this.charReceived += size;\n    this.charBuffer.copy(this.charBuffer, size, 0, size);\n    buffer.copy(this.charBuffer, 0, 0, size);\n    return charStr.substring(0, end);\n  }\n\n  // or just emit the charStr\n  return charStr;\n};\n\n// detectIncompleteChar determines if there is an incomplete UTF-8 character at\n// the end of the given buffer. If so, it sets this.charLength to the byte\n// length that character, and sets this.charReceived to the number of bytes\n// that are available for this character.\nStringDecoder.prototype.detectIncompleteChar = function(buffer) {\n  // determine how many bytes we have to check at the end of this buffer\n  var i = (buffer.length >= 3) ? 3 : buffer.length;\n\n  // Figure out if one of the last i bytes of our buffer announces an\n  // incomplete char.\n  for (; i > 0; i--) {\n    var c = buffer[buffer.length - i];\n\n    // See http://en.wikipedia.org/wiki/UTF-8#Description\n\n    // 110XXXXX\n    if (i == 1 && c >> 5 == 0x06) {\n      this.charLength = 2;\n      break;\n    }\n\n    // 1110XXXX\n    if (i <= 2 && c >> 4 == 0x0E) {\n      this.charLength = 3;\n      break;\n    }\n\n    // 11110XXX\n    if (i <= 3 && c >> 3 == 0x1E) {\n      this.charLength = 4;\n      break;\n    }\n  }\n  this.charReceived = i;\n};\n\nStringDecoder.prototype.end = function(buffer) {\n  var res = '';\n  if (buffer && buffer.length)\n    res = this.write(buffer);\n\n  if (this.charReceived) {\n    var cr = this.charReceived;\n    var buf = this.charBuffer;\n    var enc = this.encoding;\n    res += buf.slice(0, cr).toString(enc);\n  }\n\n  return res;\n};\n\nfunction passThroughWrite(buffer) {\n  return buffer.toString(this.encoding);\n}\n\nfunction utf16DetectIncompleteChar(buffer) {\n  this.charReceived = buffer.length % 2;\n  this.charLength = this.charReceived ? 2 : 0;\n}\n\nfunction base64DetectIncompleteChar(buffer) {\n  this.charReceived = buffer.length % 3;\n  this.charLength = this.charReceived ? 3 : 0;\n}\n\n},{\"buffer\":43}],65:[function(require,module,exports){\nmodule.exports = function isBuffer(arg) {\n  return arg && typeof arg === 'object'\n    && typeof arg.copy === 'function'\n    && typeof arg.fill === 'function'\n    && typeof arg.readUInt8 === 'function';\n}\n},{}],66:[function(require,module,exports){\n(function (process,global){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar formatRegExp = /%[sdj%]/g;\nexports.format = function(f) {\n  if (!isString(f)) {\n    var objects = [];\n    for (var i = 0; i < arguments.length; i++) {\n      objects.push(inspect(arguments[i]));\n    }\n    return objects.join(' ');\n  }\n\n  var i = 1;\n  var args = arguments;\n  var len = args.length;\n  var str = String(f).replace(formatRegExp, function(x) {\n    if (x === '%%') return '%';\n    if (i >= len) return x;\n    switch (x) {\n      case '%s': return String(args[i++]);\n      case '%d': return Number(args[i++]);\n      case '%j':\n        try {\n          return JSON.stringify(args[i++]);\n        } catch (_) {\n          return '[Circular]';\n        }\n      default:\n        return x;\n    }\n  });\n  for (var x = args[i]; i < len; x = args[++i]) {\n    if (isNull(x) || !isObject(x)) {\n      str += ' ' + x;\n    } else {\n      str += ' ' + inspect(x);\n    }\n  }\n  return str;\n};\n\n\n// Mark that a method should not be used.\n// Returns a modified function which warns once by default.\n// If --no-deprecation is set, then it is a no-op.\nexports.deprecate = function(fn, msg) {\n  // Allow for deprecating things in the process of starting up.\n  if (isUndefined(global.process)) {\n    return function() {\n      return exports.deprecate(fn, msg).apply(this, arguments);\n    };\n  }\n\n  if (process.noDeprecation === true) {\n    return fn;\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (process.throwDeprecation) {\n        throw new Error(msg);\n      } else if (process.traceDeprecation) {\n        console.trace(msg);\n      } else {\n        console.error(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n};\n\n\nvar debugs = {};\nvar debugEnviron;\nexports.debuglog = function(set) {\n  if (isUndefined(debugEnviron))\n    debugEnviron = process.env.NODE_DEBUG || '';\n  set = set.toUpperCase();\n  if (!debugs[set]) {\n    if (new RegExp('\\\\b' + set + '\\\\b', 'i').test(debugEnviron)) {\n      var pid = process.pid;\n      debugs[set] = function() {\n        var msg = exports.format.apply(exports, arguments);\n        console.error('%s %d: %s', set, pid, msg);\n      };\n    } else {\n      debugs[set] = function() {};\n    }\n  }\n  return debugs[set];\n};\n\n\n/**\n * Echos the value of a value. Trys to print the value out\n * in the best way possible given the different types.\n *\n * @param {Object} obj The object to print out.\n * @param {Object} opts Optional options object that alters the output.\n */\n/* legacy: obj, showHidden, depth, colors*/\nfunction inspect(obj, opts) {\n  // default options\n  var ctx = {\n    seen: [],\n    stylize: stylizeNoColor\n  };\n  // legacy...\n  if (arguments.length >= 3) ctx.depth = arguments[2];\n  if (arguments.length >= 4) ctx.colors = arguments[3];\n  if (isBoolean(opts)) {\n    // legacy...\n    ctx.showHidden = opts;\n  } else if (opts) {\n    // got an \"options\" object\n    exports._extend(ctx, opts);\n  }\n  // set default options\n  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;\n  if (isUndefined(ctx.depth)) ctx.depth = 2;\n  if (isUndefined(ctx.colors)) ctx.colors = false;\n  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;\n  if (ctx.colors) ctx.stylize = stylizeWithColor;\n  return formatValue(ctx, obj, ctx.depth);\n}\nexports.inspect = inspect;\n\n\n// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics\ninspect.colors = {\n  'bold' : [1, 22],\n  'italic' : [3, 23],\n  'underline' : [4, 24],\n  'inverse' : [7, 27],\n  'white' : [37, 39],\n  'grey' : [90, 39],\n  'black' : [30, 39],\n  'blue' : [34, 39],\n  'cyan' : [36, 39],\n  'green' : [32, 39],\n  'magenta' : [35, 39],\n  'red' : [31, 39],\n  'yellow' : [33, 39]\n};\n\n// Don't use 'blue' not visible on cmd.exe\ninspect.styles = {\n  'special': 'cyan',\n  'number': 'yellow',\n  'boolean': 'yellow',\n  'undefined': 'grey',\n  'null': 'bold',\n  'string': 'green',\n  'date': 'magenta',\n  // \"name\": intentionally not styling\n  'regexp': 'red'\n};\n\n\nfunction stylizeWithColor(str, styleType) {\n  var style = inspect.styles[styleType];\n\n  if (style) {\n    return '\\u001b[' + inspect.colors[style][0] + 'm' + str +\n           '\\u001b[' + inspect.colors[style][1] + 'm';\n  } else {\n    return str;\n  }\n}\n\n\nfunction stylizeNoColor(str, styleType) {\n  return str;\n}\n\n\nfunction arrayToHash(array) {\n  var hash = {};\n\n  array.forEach(function(val, idx) {\n    hash[val] = true;\n  });\n\n  return hash;\n}\n\n\nfunction formatValue(ctx, value, recurseTimes) {\n  // Provide a hook for user-specified inspect functions.\n  // Check that value is an object with an inspect function on it\n  if (ctx.customInspect &&\n      value &&\n      isFunction(value.inspect) &&\n      // Filter out the util module, it's inspect function is special\n      value.inspect !== exports.inspect &&\n      // Also filter out any prototype objects using the circular check.\n      !(value.constructor && value.constructor.prototype === value)) {\n    var ret = value.inspect(recurseTimes, ctx);\n    if (!isString(ret)) {\n      ret = formatValue(ctx, ret, recurseTimes);\n    }\n    return ret;\n  }\n\n  // Primitive types cannot have properties\n  var primitive = formatPrimitive(ctx, value);\n  if (primitive) {\n    return primitive;\n  }\n\n  // Look up the keys of the object.\n  var keys = Object.keys(value);\n  var visibleKeys = arrayToHash(keys);\n\n  if (ctx.showHidden) {\n    keys = Object.getOwnPropertyNames(value);\n  }\n\n  // IE doesn't make error fields non-enumerable\n  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx\n  if (isError(value)\n      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {\n    return formatError(value);\n  }\n\n  // Some type of object without properties can be shortcutted.\n  if (keys.length === 0) {\n    if (isFunction(value)) {\n      var name = value.name ? ': ' + value.name : '';\n      return ctx.stylize('[Function' + name + ']', 'special');\n    }\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    }\n    if (isDate(value)) {\n      return ctx.stylize(Date.prototype.toString.call(value), 'date');\n    }\n    if (isError(value)) {\n      return formatError(value);\n    }\n  }\n\n  var base = '', array = false, braces = ['{', '}'];\n\n  // Make Array say that they are Array\n  if (isArray(value)) {\n    array = true;\n    braces = ['[', ']'];\n  }\n\n  // Make functions say that they are functions\n  if (isFunction(value)) {\n    var n = value.name ? ': ' + value.name : '';\n    base = ' [Function' + n + ']';\n  }\n\n  // Make RegExps say that they are RegExps\n  if (isRegExp(value)) {\n    base = ' ' + RegExp.prototype.toString.call(value);\n  }\n\n  // Make dates with properties first say the date\n  if (isDate(value)) {\n    base = ' ' + Date.prototype.toUTCString.call(value);\n  }\n\n  // Make error with message first say the error\n  if (isError(value)) {\n    base = ' ' + formatError(value);\n  }\n\n  if (keys.length === 0 && (!array || value.length == 0)) {\n    return braces[0] + base + braces[1];\n  }\n\n  if (recurseTimes < 0) {\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    } else {\n      return ctx.stylize('[Object]', 'special');\n    }\n  }\n\n  ctx.seen.push(value);\n\n  var output;\n  if (array) {\n    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);\n  } else {\n    output = keys.map(function(key) {\n      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);\n    });\n  }\n\n  ctx.seen.pop();\n\n  return reduceToSingleString(output, base, braces);\n}\n\n\nfunction formatPrimitive(ctx, value) {\n  if (isUndefined(value))\n    return ctx.stylize('undefined', 'undefined');\n  if (isString(value)) {\n    var simple = '\\'' + JSON.stringify(value).replace(/^\"|\"$/g, '')\n                                             .replace(/'/g, \"\\\\'\")\n                                             .replace(/\\\\\"/g, '\"') + '\\'';\n    return ctx.stylize(simple, 'string');\n  }\n  if (isNumber(value))\n    return ctx.stylize('' + value, 'number');\n  if (isBoolean(value))\n    return ctx.stylize('' + value, 'boolean');\n  // For some reason typeof null is \"object\", so special case here.\n  if (isNull(value))\n    return ctx.stylize('null', 'null');\n}\n\n\nfunction formatError(value) {\n  return '[' + Error.prototype.toString.call(value) + ']';\n}\n\n\nfunction formatArray(ctx, value, recurseTimes, visibleKeys, keys) {\n  var output = [];\n  for (var i = 0, l = value.length; i < l; ++i) {\n    if (hasOwnProperty(value, String(i))) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          String(i), true));\n    } else {\n      output.push('');\n    }\n  }\n  keys.forEach(function(key) {\n    if (!key.match(/^\\d+$/)) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          key, true));\n    }\n  });\n  return output;\n}\n\n\nfunction formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {\n  var name, str, desc;\n  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };\n  if (desc.get) {\n    if (desc.set) {\n      str = ctx.stylize('[Getter/Setter]', 'special');\n    } else {\n      str = ctx.stylize('[Getter]', 'special');\n    }\n  } else {\n    if (desc.set) {\n      str = ctx.stylize('[Setter]', 'special');\n    }\n  }\n  if (!hasOwnProperty(visibleKeys, key)) {\n    name = '[' + key + ']';\n  }\n  if (!str) {\n    if (ctx.seen.indexOf(desc.value) < 0) {\n      if (isNull(recurseTimes)) {\n        str = formatValue(ctx, desc.value, null);\n      } else {\n        str = formatValue(ctx, desc.value, recurseTimes - 1);\n      }\n      if (str.indexOf('\\n') > -1) {\n        if (array) {\n          str = str.split('\\n').map(function(line) {\n            return '  ' + line;\n          }).join('\\n').substr(2);\n        } else {\n          str = '\\n' + str.split('\\n').map(function(line) {\n            return '   ' + line;\n          }).join('\\n');\n        }\n      }\n    } else {\n      str = ctx.stylize('[Circular]', 'special');\n    }\n  }\n  if (isUndefined(name)) {\n    if (array && key.match(/^\\d+$/)) {\n      return str;\n    }\n    name = JSON.stringify('' + key);\n    if (name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)) {\n      name = name.substr(1, name.length - 2);\n      name = ctx.stylize(name, 'name');\n    } else {\n      name = name.replace(/'/g, \"\\\\'\")\n                 .replace(/\\\\\"/g, '\"')\n                 .replace(/(^\"|\"$)/g, \"'\");\n      name = ctx.stylize(name, 'string');\n    }\n  }\n\n  return name + ': ' + str;\n}\n\n\nfunction reduceToSingleString(output, base, braces) {\n  var numLinesEst = 0;\n  var length = output.reduce(function(prev, cur) {\n    numLinesEst++;\n    if (cur.indexOf('\\n') >= 0) numLinesEst++;\n    return prev + cur.replace(/\\u001b\\[\\d\\d?m/g, '').length + 1;\n  }, 0);\n\n  if (length > 60) {\n    return braces[0] +\n           (base === '' ? '' : base + '\\n ') +\n           ' ' +\n           output.join(',\\n  ') +\n           ' ' +\n           braces[1];\n  }\n\n  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];\n}\n\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(ar) {\n  return Array.isArray(ar);\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return isObject(re) && objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return isObject(d) && objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return isObject(e) &&\n      (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nexports.isBuffer = require('./support/isBuffer');\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n\n\nfunction pad(n) {\n  return n < 10 ? '0' + n.toString(10) : n.toString(10);\n}\n\n\nvar months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',\n              'Oct', 'Nov', 'Dec'];\n\n// 26 Feb 16:19:34\nfunction timestamp() {\n  var d = new Date();\n  var time = [pad(d.getHours()),\n              pad(d.getMinutes()),\n              pad(d.getSeconds())].join(':');\n  return [d.getDate(), months[d.getMonth()], time].join(' ');\n}\n\n\n// log is just a thin wrapper to console.log that prepends a timestamp\nexports.log = function() {\n  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));\n};\n\n\n/**\n * Inherit the prototype methods from one constructor into another.\n *\n * The Function.prototype.inherits from lang.js rewritten as a standalone\n * function (not on Function.prototype). NOTE: If this file is to be loaded\n * during bootstrapping this function needs to be rewritten using some native\n * functions as prototype setup using normal JavaScript does not work as\n * expected during bootstrapping (see mirror.js in r114903).\n *\n * @param {function} ctor Constructor function which needs to inherit the\n *     prototype.\n * @param {function} superCtor Constructor function to inherit prototype from.\n */\nexports.inherits = require('inherits');\n\nexports._extend = function(origin, add) {\n  // Don't do anything if add isn't an object\n  if (!add || !isObject(add)) return origin;\n\n  var keys = Object.keys(add);\n  var i = keys.length;\n  while (i--) {\n    origin[keys[i]] = add[keys[i]];\n  }\n  return origin;\n};\n\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"./support/isBuffer\":65,\"_process\":51,\"inherits\":48}],67:[function(require,module,exports){\n/* See LICENSE file for terms of use */\n\n/*\n * Text diff implementation.\n *\n * This library supports the following APIS:\n * JsDiff.diffChars: Character by character diff\n * JsDiff.diffWords: Word (as defined by \\b regex) diff which ignores whitespace\n * JsDiff.diffLines: Line based diff\n *\n * JsDiff.diffCss: Diff targeted at CSS content\n *\n * These methods are based on the implementation proposed in\n * \"An O(ND) Difference Algorithm and its Variations\" (Myers, 1986).\n * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927\n */\n(function(global, undefined) {\n  var objectPrototypeToString = Object.prototype.toString;\n\n  /*istanbul ignore next*/\n  function map(arr, mapper, that) {\n    if (Array.prototype.map) {\n      return Array.prototype.map.call(arr, mapper, that);\n    }\n\n    var other = new Array(arr.length);\n\n    for (var i = 0, n = arr.length; i < n; i++) {\n      other[i] = mapper.call(that, arr[i], i, arr);\n    }\n    return other;\n  }\n  function clonePath(path) {\n    return { newPos: path.newPos, components: path.components.slice(0) };\n  }\n  function removeEmpty(array) {\n    var ret = [];\n    for (var i = 0; i < array.length; i++) {\n      if (array[i]) {\n        ret.push(array[i]);\n      }\n    }\n    return ret;\n  }\n  function escapeHTML(s) {\n    var n = s;\n    n = n.replace(/&/g, '&amp;');\n    n = n.replace(/</g, '&lt;');\n    n = n.replace(/>/g, '&gt;');\n    n = n.replace(/\"/g, '&quot;');\n\n    return n;\n  }\n\n  // This function handles the presence of circular references by bailing out when encountering an\n  // object that is already on the \"stack\" of items being processed.\n  function canonicalize(obj, stack, replacementStack) {\n    stack = stack || [];\n    replacementStack = replacementStack || [];\n\n    var i;\n\n    for (i = 0; i < stack.length; i += 1) {\n      if (stack[i] === obj) {\n        return replacementStack[i];\n      }\n    }\n\n    var canonicalizedObj;\n\n    if ('[object Array]' === objectPrototypeToString.call(obj)) {\n      stack.push(obj);\n      canonicalizedObj = new Array(obj.length);\n      replacementStack.push(canonicalizedObj);\n      for (i = 0; i < obj.length; i += 1) {\n        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);\n      }\n      stack.pop();\n      replacementStack.pop();\n    } else if (typeof obj === 'object' && obj !== null) {\n      stack.push(obj);\n      canonicalizedObj = {};\n      replacementStack.push(canonicalizedObj);\n      var sortedKeys = [],\n          key;\n      for (key in obj) {\n        sortedKeys.push(key);\n      }\n      sortedKeys.sort();\n      for (i = 0; i < sortedKeys.length; i += 1) {\n        key = sortedKeys[i];\n        canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);\n      }\n      stack.pop();\n      replacementStack.pop();\n    } else {\n      canonicalizedObj = obj;\n    }\n    return canonicalizedObj;\n  }\n\n  function buildValues(components, newString, oldString, useLongestToken) {\n    var componentPos = 0,\n        componentLen = components.length,\n        newPos = 0,\n        oldPos = 0;\n\n    for (; componentPos < componentLen; componentPos++) {\n      var component = components[componentPos];\n      if (!component.removed) {\n        if (!component.added && useLongestToken) {\n          var value = newString.slice(newPos, newPos + component.count);\n          value = map(value, function(value, i) {\n            var oldValue = oldString[oldPos + i];\n            return oldValue.length > value.length ? oldValue : value;\n          });\n\n          component.value = value.join('');\n        } else {\n          component.value = newString.slice(newPos, newPos + component.count).join('');\n        }\n        newPos += component.count;\n\n        // Common case\n        if (!component.added) {\n          oldPos += component.count;\n        }\n      } else {\n        component.value = oldString.slice(oldPos, oldPos + component.count).join('');\n        oldPos += component.count;\n\n        // Reverse add and remove so removes are output first to match common convention\n        // The diffing algorithm is tied to add then remove output and this is the simplest\n        // route to get the desired output with minimal overhead.\n        if (componentPos && components[componentPos - 1].added) {\n          var tmp = components[componentPos - 1];\n          components[componentPos - 1] = components[componentPos];\n          components[componentPos] = tmp;\n        }\n      }\n    }\n\n    return components;\n  }\n\n  function Diff(ignoreWhitespace) {\n    this.ignoreWhitespace = ignoreWhitespace;\n  }\n  Diff.prototype = {\n    diff: function(oldString, newString, callback) {\n      var self = this;\n\n      function done(value) {\n        if (callback) {\n          setTimeout(function() { callback(undefined, value); }, 0);\n          return true;\n        } else {\n          return value;\n        }\n      }\n\n      // Handle the identity case (this is due to unrolling editLength == 0\n      if (newString === oldString) {\n        return done([{ value: newString }]);\n      }\n      if (!newString) {\n        return done([{ value: oldString, removed: true }]);\n      }\n      if (!oldString) {\n        return done([{ value: newString, added: true }]);\n      }\n\n      newString = this.tokenize(newString);\n      oldString = this.tokenize(oldString);\n\n      var newLen = newString.length, oldLen = oldString.length;\n      var editLength = 1;\n      var maxEditLength = newLen + oldLen;\n      var bestPath = [{ newPos: -1, components: [] }];\n\n      // Seed editLength = 0, i.e. the content starts with the same values\n      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);\n      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {\n        // Identity per the equality and tokenizer\n        return done([{value: newString.join('')}]);\n      }\n\n      // Main worker method. checks all permutations of a given edit length for acceptance.\n      function execEditLength() {\n        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {\n          var basePath;\n          var addPath = bestPath[diagonalPath - 1],\n              removePath = bestPath[diagonalPath + 1],\n              oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;\n          if (addPath) {\n            // No one else is going to attempt to use this value, clear it\n            bestPath[diagonalPath - 1] = undefined;\n          }\n\n          var canAdd = addPath && addPath.newPos + 1 < newLen,\n              canRemove = removePath && 0 <= oldPos && oldPos < oldLen;\n          if (!canAdd && !canRemove) {\n            // If this path is a terminal then prune\n            bestPath[diagonalPath] = undefined;\n            continue;\n          }\n\n          // Select the diagonal that we want to branch from. We select the prior\n          // path whose position in the new string is the farthest from the origin\n          // and does not pass the bounds of the diff graph\n          if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {\n            basePath = clonePath(removePath);\n            self.pushComponent(basePath.components, undefined, true);\n          } else {\n            basePath = addPath;   // No need to clone, we've pulled it from the list\n            basePath.newPos++;\n            self.pushComponent(basePath.components, true, undefined);\n          }\n\n          oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);\n\n          // If we have hit the end of both strings, then we are done\n          if (basePath.newPos + 1 >= newLen && oldPos + 1 >= oldLen) {\n            return done(buildValues(basePath.components, newString, oldString, self.useLongestToken));\n          } else {\n            // Otherwise track this path as a potential candidate and continue.\n            bestPath[diagonalPath] = basePath;\n          }\n        }\n\n        editLength++;\n      }\n\n      // Performs the length of edit iteration. Is a bit fugly as this has to support the\n      // sync and async mode which is never fun. Loops over execEditLength until a value\n      // is produced.\n      if (callback) {\n        (function exec() {\n          setTimeout(function() {\n            // This should not happen, but we want to be safe.\n            /*istanbul ignore next */\n            if (editLength > maxEditLength) {\n              return callback();\n            }\n\n            if (!execEditLength()) {\n              exec();\n            }\n          }, 0);\n        }());\n      } else {\n        while (editLength <= maxEditLength) {\n          var ret = execEditLength();\n          if (ret) {\n            return ret;\n          }\n        }\n      }\n    },\n\n    pushComponent: function(components, added, removed) {\n      var last = components[components.length - 1];\n      if (last && last.added === added && last.removed === removed) {\n        // We need to clone here as the component clone operation is just\n        // as shallow array clone\n        components[components.length - 1] = {count: last.count + 1, added: added, removed: removed };\n      } else {\n        components.push({count: 1, added: added, removed: removed });\n      }\n    },\n    extractCommon: function(basePath, newString, oldString, diagonalPath) {\n      var newLen = newString.length,\n          oldLen = oldString.length,\n          newPos = basePath.newPos,\n          oldPos = newPos - diagonalPath,\n\n          commonCount = 0;\n      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {\n        newPos++;\n        oldPos++;\n        commonCount++;\n      }\n\n      if (commonCount) {\n        basePath.components.push({count: commonCount});\n      }\n\n      basePath.newPos = newPos;\n      return oldPos;\n    },\n\n    equals: function(left, right) {\n      var reWhitespace = /\\S/;\n      return left === right || (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right));\n    },\n    tokenize: function(value) {\n      return value.split('');\n    }\n  };\n\n  var CharDiff = new Diff();\n\n  var WordDiff = new Diff(true);\n  var WordWithSpaceDiff = new Diff();\n  WordDiff.tokenize = WordWithSpaceDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/(\\s+|\\b)/));\n  };\n\n  var CssDiff = new Diff(true);\n  CssDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/([{}:;,]|\\s+)/));\n  };\n\n  var LineDiff = new Diff();\n\n  var TrimmedLineDiff = new Diff();\n  TrimmedLineDiff.ignoreTrim = true;\n\n  LineDiff.tokenize = TrimmedLineDiff.tokenize = function(value) {\n    var retLines = [],\n        lines = value.split(/^/m);\n    for (var i = 0; i < lines.length; i++) {\n      var line = lines[i],\n          lastLine = lines[i - 1],\n          lastLineLastChar = lastLine && lastLine[lastLine.length - 1];\n\n      // Merge lines that may contain windows new lines\n      if (line === '\\n' && lastLineLastChar === '\\r') {\n          retLines[retLines.length - 1] = retLines[retLines.length - 1].slice(0, -1) + '\\r\\n';\n      } else {\n        if (this.ignoreTrim) {\n          line = line.trim();\n          // add a newline unless this is the last line.\n          if (i < lines.length - 1) {\n            line += '\\n';\n          }\n        }\n        retLines.push(line);\n      }\n    }\n\n    return retLines;\n  };\n\n  var PatchDiff = new Diff();\n  PatchDiff.tokenize = function(value) {\n    var ret = [],\n        linesAndNewlines = value.split(/(\\n|\\r\\n)/);\n\n    // Ignore the final empty token that occurs if the string ends with a new line\n    if (!linesAndNewlines[linesAndNewlines.length - 1]) {\n      linesAndNewlines.pop();\n    }\n\n    // Merge the content and line separators into single tokens\n    for (var i = 0; i < linesAndNewlines.length; i++) {\n      var line = linesAndNewlines[i];\n\n      if (i % 2) {\n        ret[ret.length - 1] += line;\n      } else {\n        ret.push(line);\n      }\n    }\n    return ret;\n  };\n\n  var SentenceDiff = new Diff();\n  SentenceDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/(\\S.+?[.!?])(?=\\s+|$)/));\n  };\n\n  var JsonDiff = new Diff();\n  // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a\n  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:\n  JsonDiff.useLongestToken = true;\n  JsonDiff.tokenize = LineDiff.tokenize;\n  JsonDiff.equals = function(left, right) {\n    return LineDiff.equals(left.replace(/,([\\r\\n])/g, '$1'), right.replace(/,([\\r\\n])/g, '$1'));\n  };\n\n  var JsDiff = {\n    Diff: Diff,\n\n    diffChars: function(oldStr, newStr, callback) { return CharDiff.diff(oldStr, newStr, callback); },\n    diffWords: function(oldStr, newStr, callback) { return WordDiff.diff(oldStr, newStr, callback); },\n    diffWordsWithSpace: function(oldStr, newStr, callback) { return WordWithSpaceDiff.diff(oldStr, newStr, callback); },\n    diffLines: function(oldStr, newStr, callback) { return LineDiff.diff(oldStr, newStr, callback); },\n    diffTrimmedLines: function(oldStr, newStr, callback) { return TrimmedLineDiff.diff(oldStr, newStr, callback); },\n\n    diffSentences: function(oldStr, newStr, callback) { return SentenceDiff.diff(oldStr, newStr, callback); },\n\n    diffCss: function(oldStr, newStr, callback) { return CssDiff.diff(oldStr, newStr, callback); },\n    diffJson: function(oldObj, newObj, callback) {\n      return JsonDiff.diff(\n        typeof oldObj === 'string' ? oldObj : JSON.stringify(canonicalize(oldObj), undefined, '  '),\n        typeof newObj === 'string' ? newObj : JSON.stringify(canonicalize(newObj), undefined, '  '),\n        callback\n      );\n    },\n\n    createTwoFilesPatch: function(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader) {\n      var ret = [];\n\n      if (oldFileName == newFileName) {\n        ret.push('Index: ' + oldFileName);\n      }\n      ret.push('===================================================================');\n      ret.push('--- ' + oldFileName + (typeof oldHeader === 'undefined' ? '' : '\\t' + oldHeader));\n      ret.push('+++ ' + newFileName + (typeof newHeader === 'undefined' ? '' : '\\t' + newHeader));\n\n      var diff = PatchDiff.diff(oldStr, newStr);\n      diff.push({value: '', lines: []});   // Append an empty value to make cleanup easier\n\n      // Formats a given set of lines for printing as context lines in a patch\n      function contextLines(lines) {\n        return map(lines, function(entry) { return ' ' + entry; });\n      }\n\n      // Outputs the no newline at end of file warning if needed\n      function eofNL(curRange, i, current) {\n        var last = diff[diff.length - 2],\n            isLast = i === diff.length - 2,\n            isLastOfType = i === diff.length - 3 && current.added !== last.added;\n\n        // Figure out if this is the last line for the given file and missing NL\n        if (!(/\\n$/.test(current.value)) && (isLast || isLastOfType)) {\n          curRange.push('\\\\ No newline at end of file');\n        }\n      }\n\n      var oldRangeStart = 0, newRangeStart = 0, curRange = [],\n          oldLine = 1, newLine = 1;\n      for (var i = 0; i < diff.length; i++) {\n        var current = diff[i],\n            lines = current.lines || current.value.replace(/\\n$/, '').split('\\n');\n        current.lines = lines;\n\n        if (current.added || current.removed) {\n          // If we have previous context, start with that\n          if (!oldRangeStart) {\n            var prev = diff[i - 1];\n            oldRangeStart = oldLine;\n            newRangeStart = newLine;\n\n            if (prev) {\n              curRange = contextLines(prev.lines.slice(-4));\n              oldRangeStart -= curRange.length;\n              newRangeStart -= curRange.length;\n            }\n          }\n\n          // Output our changes\n          curRange.push.apply(curRange, map(lines, function(entry) {\n            return (current.added ? '+' : '-') + entry;\n          }));\n          eofNL(curRange, i, current);\n\n          // Track the updated file position\n          if (current.added) {\n            newLine += lines.length;\n          } else {\n            oldLine += lines.length;\n          }\n        } else {\n          // Identical context lines. Track line changes\n          if (oldRangeStart) {\n            // Close out any changes that have been output (or join overlapping)\n            if (lines.length <= 8 && i < diff.length - 2) {\n              // Overlapping\n              curRange.push.apply(curRange, contextLines(lines));\n            } else {\n              // end the range and output\n              var contextSize = Math.min(lines.length, 4);\n              ret.push(\n                  '@@ -' + oldRangeStart + ',' + (oldLine - oldRangeStart + contextSize)\n                  + ' +' + newRangeStart + ',' + (newLine - newRangeStart + contextSize)\n                  + ' @@');\n              ret.push.apply(ret, curRange);\n              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));\n              if (lines.length <= 4) {\n                eofNL(ret, i, current);\n              }\n\n              oldRangeStart = 0;\n              newRangeStart = 0;\n              curRange = [];\n            }\n          }\n          oldLine += lines.length;\n          newLine += lines.length;\n        }\n      }\n\n      return ret.join('\\n') + '\\n';\n    },\n\n    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {\n      return JsDiff.createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader);\n    },\n\n    applyPatch: function(oldStr, uniDiff) {\n      var diffstr = uniDiff.split('\\n'),\n          hunks = [],\n          i = 0,\n          remEOFNL = false,\n          addEOFNL = false;\n\n      // Skip to the first change hunk\n      while (i < diffstr.length && !(/^@@/.test(diffstr[i]))) {\n        i++;\n      }\n\n      // Parse the unified diff\n      for (; i < diffstr.length; i++) {\n        if (diffstr[i][0] === '@') {\n          var chnukHeader = diffstr[i].split(/@@ -(\\d+),(\\d+) \\+(\\d+),(\\d+) @@/);\n          hunks.unshift({\n            start: chnukHeader[3],\n            oldlength: +chnukHeader[2],\n            removed: [],\n            newlength: chnukHeader[4],\n            added: []\n          });\n        } else if (diffstr[i][0] === '+') {\n          hunks[0].added.push(diffstr[i].substr(1));\n        } else if (diffstr[i][0] === '-') {\n          hunks[0].removed.push(diffstr[i].substr(1));\n        } else if (diffstr[i][0] === ' ') {\n          hunks[0].added.push(diffstr[i].substr(1));\n          hunks[0].removed.push(diffstr[i].substr(1));\n        } else if (diffstr[i][0] === '\\\\') {\n          if (diffstr[i - 1][0] === '+') {\n            remEOFNL = true;\n          } else if (diffstr[i - 1][0] === '-') {\n            addEOFNL = true;\n          }\n        }\n      }\n\n      // Apply the diff to the input\n      var lines = oldStr.split('\\n');\n      for (i = hunks.length - 1; i >= 0; i--) {\n        var hunk = hunks[i];\n        // Sanity check the input string. Bail if we don't match.\n        for (var j = 0; j < hunk.oldlength; j++) {\n          if (lines[hunk.start - 1 + j] !== hunk.removed[j]) {\n            return false;\n          }\n        }\n        Array.prototype.splice.apply(lines, [hunk.start - 1, hunk.oldlength].concat(hunk.added));\n      }\n\n      // Handle EOFNL insertion/removal\n      if (remEOFNL) {\n        while (!lines[lines.length - 1]) {\n          lines.pop();\n        }\n      } else if (addEOFNL) {\n        lines.push('');\n      }\n      return lines.join('\\n');\n    },\n\n    convertChangesToXML: function(changes) {\n      var ret = [];\n      for (var i = 0; i < changes.length; i++) {\n        var change = changes[i];\n        if (change.added) {\n          ret.push('<ins>');\n        } else if (change.removed) {\n          ret.push('<del>');\n        }\n\n        ret.push(escapeHTML(change.value));\n\n        if (change.added) {\n          ret.push('</ins>');\n        } else if (change.removed) {\n          ret.push('</del>');\n        }\n      }\n      return ret.join('');\n    },\n\n    // See: http://code.google.com/p/google-diff-match-patch/wiki/API\n    convertChangesToDMP: function(changes) {\n      var ret = [],\n          change,\n          operation;\n      for (var i = 0; i < changes.length; i++) {\n        change = changes[i];\n        if (change.added) {\n          operation = 1;\n        } else if (change.removed) {\n          operation = -1;\n        } else {\n          operation = 0;\n        }\n\n        ret.push([operation, change.value]);\n      }\n      return ret;\n    },\n\n    canonicalize: canonicalize\n  };\n\n  /*istanbul ignore next */\n  /*global module */\n  if (typeof module !== 'undefined' && module.exports) {\n    module.exports = JsDiff;\n  } else if (typeof define === 'function' && define.amd) {\n    /*global define */\n    define([], function() { return JsDiff; });\n  } else if (typeof global.JsDiff === 'undefined') {\n    global.JsDiff = JsDiff;\n  }\n}(this));\n\n},{}],68:[function(require,module,exports){\n'use strict';\n\nvar matchOperatorsRe = /[|\\\\{}()[\\]^$+*?.]/g;\n\nmodule.exports = function (str) {\n\tif (typeof str !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\treturn str.replace(matchOperatorsRe,  '\\\\$&');\n};\n\n},{}],69:[function(require,module,exports){\n(function (process){\n// Growl - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)\n\n/**\n * Module dependencies.\n */\n\nvar exec = require('child_process').exec\n  , fs = require('fs')\n  , path = require('path')\n  , exists = fs.existsSync || path.existsSync\n  , os = require('os')\n  , quote = JSON.stringify\n  , cmd;\n\nfunction which(name) {\n  var paths = process.env.PATH.split(':');\n  var loc;\n  \n  for (var i = 0, len = paths.length; i < len; ++i) {\n    loc = path.join(paths[i], name);\n    if (exists(loc)) return loc;\n  }\n}\n\nswitch(os.type()) {\n  case 'Darwin':\n    if (which('terminal-notifier')) {\n      cmd = {\n          type: \"Darwin-NotificationCenter\"\n        , pkg: \"terminal-notifier\"\n        , msg: '-message'\n        , title: '-title'\n        , subtitle: '-subtitle'\n        , priority: {\n              cmd: '-execute'\n            , range: []\n          }\n      };\n    } else {\n      cmd = {\n          type: \"Darwin-Growl\"\n        , pkg: \"growlnotify\"\n        , msg: '-m'\n        , sticky: '--sticky'\n        , priority: {\n              cmd: '--priority'\n            , range: [\n                -2\n              , -1\n              , 0\n              , 1\n              , 2\n              , \"Very Low\"\n              , \"Moderate\"\n              , \"Normal\"\n              , \"High\"\n              , \"Emergency\"\n            ]\n          }\n      };\n    }\n    break;\n  case 'Linux':\n    cmd = {\n        type: \"Linux\"\n      , pkg: \"notify-send\"\n      , msg: ''\n      , sticky: '-t 0'\n      , icon: '-i'\n      , priority: {\n          cmd: '-u'\n        , range: [\n            \"low\"\n          , \"normal\"\n          , \"critical\"\n        ]\n      }\n    };\n    break;\n  case 'Windows_NT':\n    cmd = {\n        type: \"Windows\"\n      , pkg: \"growlnotify\"\n      , msg: ''\n      , sticky: '/s:true'\n      , title: '/t:'\n      , icon: '/i:'\n      , priority: {\n            cmd: '/p:'\n          , range: [\n              -2\n            , -1\n            , 0\n            , 1\n            , 2\n          ]\n        }\n    };\n    break;\n}\n\n/**\n * Expose `growl`.\n */\n\nexports = module.exports = growl;\n\n/**\n * Node-growl version.\n */\n\nexports.version = '1.4.1'\n\n/**\n * Send growl notification _msg_ with _options_.\n *\n * Options:\n *\n *  - title   Notification title\n *  - sticky  Make the notification stick (defaults to false)\n *  - priority  Specify an int or named key (default is 0)\n *  - name    Application name (defaults to growlnotify)\n *  - image\n *    - path to an icon sets --iconpath\n *    - path to an image sets --image\n *    - capitalized word sets --appIcon\n *    - filename uses extname as --icon\n *    - otherwise treated as --icon\n *\n * Examples:\n *\n *   growl('New email')\n *   growl('5 new emails', { title: 'Thunderbird' })\n *   growl('Email sent', function(){\n *     // ... notification sent\n *   })\n *\n * @param {string} msg\n * @param {object} options\n * @param {function} fn\n * @api public\n */\n\nfunction growl(msg, options, fn) {\n  var image\n    , args\n    , options = options || {}\n    , fn = fn || function(){};\n\n  // noop\n  if (!cmd) return fn(new Error('growl not supported on this platform'));\n  args = [cmd.pkg];\n\n  // image\n  if (image = options.image) {\n    switch(cmd.type) {\n      case 'Darwin-Growl':\n        var flag, ext = path.extname(image).substr(1)\n        flag = flag || ext == 'icns' && 'iconpath'\n        flag = flag || /^[A-Z]/.test(image) && 'appIcon'\n        flag = flag || /^png|gif|jpe?g$/.test(ext) && 'image'\n        flag = flag || ext && (image = ext) && 'icon'\n        flag = flag || 'icon'\n        args.push('--' + flag, quote(image))\n        break;\n      case 'Linux':\n        args.push(cmd.icon, quote(image));\n        // libnotify defaults to sticky, set a hint for transient notifications\n        if (!options.sticky) args.push('--hint=int:transient:1');\n        break;\n      case 'Windows':\n        args.push(cmd.icon + quote(image));\n        break;\n    }\n  }\n\n  // sticky\n  if (options.sticky) args.push(cmd.sticky);\n\n  // priority\n  if (options.priority) {\n    var priority = options.priority + '';\n    var checkindexOf = cmd.priority.range.indexOf(priority);\n    if (~cmd.priority.range.indexOf(priority)) {\n      args.push(cmd.priority, options.priority);\n    }\n  }\n\n  // name\n  if (options.name && cmd.type === \"Darwin-Growl\") {\n    args.push('--name', options.name);\n  }\n\n  switch(cmd.type) {\n    case 'Darwin-Growl':\n      args.push(cmd.msg);\n      args.push(quote(msg));\n      if (options.title) args.push(quote(options.title));\n      break;\n    case 'Darwin-NotificationCenter':\n      args.push(cmd.msg);\n      args.push(quote(msg));\n      if (options.title) {\n        args.push(cmd.title);\n        args.push(quote(options.title));\n      }\n      if (options.subtitle) {\n        args.push(cmd.subtitle);\n        args.push(quote(options.subtitle));\n      }\n      break;\n    case 'Darwin-Growl':\n      args.push(cmd.msg);\n      args.push(quote(msg));\n      if (options.title) args.push(quote(options.title));\n      break;\n    case 'Linux':\n      if (options.title) {\n        args.push(quote(options.title));\n        args.push(cmd.msg);\n        args.push(quote(msg));\n      } else {\n        args.push(quote(msg));\n      }\n      break;\n    case 'Windows':\n      args.push(quote(msg));\n      if (options.title) args.push(cmd.title + quote(options.title));\n      break;\n  }\n\n  // execute\n  exec(args.join(' '), fn);\n};\n\n}).call(this,require('_process'))\n},{\"_process\":51,\"child_process\":41,\"fs\":41,\"os\":50,\"path\":41}],70:[function(require,module,exports){\n(function (process){\nvar path = require('path');\nvar fs = require('fs');\nvar _0777 = parseInt('0777', 8);\n\nmodule.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;\n\nfunction mkdirP (p, opts, f, made) {\n    if (typeof opts === 'function') {\n        f = opts;\n        opts = {};\n    }\n    else if (!opts || typeof opts !== 'object') {\n        opts = { mode: opts };\n    }\n    \n    var mode = opts.mode;\n    var xfs = opts.fs || fs;\n    \n    if (mode === undefined) {\n        mode = _0777 & (~process.umask());\n    }\n    if (!made) made = null;\n    \n    var cb = f || function () {};\n    p = path.resolve(p);\n    \n    xfs.mkdir(p, mode, function (er) {\n        if (!er) {\n            made = made || p;\n            return cb(null, made);\n        }\n        switch (er.code) {\n            case 'ENOENT':\n                mkdirP(path.dirname(p), opts, function (er, made) {\n                    if (er) cb(er, made);\n                    else mkdirP(p, opts, cb, made);\n                });\n                break;\n\n            // In the case of any other error, just see if there's a dir\n            // there already.  If so, then hooray!  If not, then something\n            // is borked.\n            default:\n                xfs.stat(p, function (er2, stat) {\n                    // if the stat fails, then that's super weird.\n                    // let the original error be the failure reason.\n                    if (er2 || !stat.isDirectory()) cb(er, made)\n                    else cb(null, made);\n                });\n                break;\n        }\n    });\n}\n\nmkdirP.sync = function sync (p, opts, made) {\n    if (!opts || typeof opts !== 'object') {\n        opts = { mode: opts };\n    }\n    \n    var mode = opts.mode;\n    var xfs = opts.fs || fs;\n    \n    if (mode === undefined) {\n        mode = _0777 & (~process.umask());\n    }\n    if (!made) made = null;\n\n    p = path.resolve(p);\n\n    try {\n        xfs.mkdirSync(p, mode);\n        made = made || p;\n    }\n    catch (err0) {\n        switch (err0.code) {\n            case 'ENOENT' :\n                made = sync(path.dirname(p), opts, made);\n                sync(p, opts, made);\n                break;\n\n            // In the case of any other error, just see if there's a dir\n            // there already.  If so, then hooray!  If not, then something\n            // is borked.\n            default:\n                var stat;\n                try {\n                    stat = xfs.statSync(p);\n                }\n                catch (err1) {\n                    throw err0;\n                }\n                if (!stat.isDirectory()) throw err0;\n                break;\n        }\n    }\n\n    return made;\n};\n\n}).call(this,require('_process'))\n},{\"_process\":51,\"fs\":41,\"path\":41}],71:[function(require,module,exports){\n(function (process,global){\n/**\n * Shim process.stdout.\n */\n\nprocess.stdout = require('browser-stdout')();\n\nvar Mocha = require('../');\n\n/**\n * Create a Mocha instance.\n *\n * @return {undefined}\n */\n\nvar mocha = new Mocha({ reporter: 'html' });\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n\nvar uncaughtExceptionHandlers = [];\n\nvar originalOnerrorHandler = global.onerror;\n\n/**\n * Remove uncaughtException listener.\n * Revert to original onerror handler if previously defined.\n */\n\nprocess.removeListener = function(e, fn){\n  if ('uncaughtException' == e) {\n    if (originalOnerrorHandler) {\n      global.onerror = originalOnerrorHandler;\n    } else {\n      global.onerror = function() {};\n    }\n    var i = Mocha.utils.indexOf(uncaughtExceptionHandlers, fn);\n    if (i != -1) { uncaughtExceptionHandlers.splice(i, 1); }\n  }\n};\n\n/**\n * Implements uncaughtException listener.\n */\n\nprocess.on = function(e, fn){\n  if ('uncaughtException' == e) {\n    global.onerror = function(err, url, line){\n      fn(new Error(err + ' (' + url + ':' + line + ')'));\n      return !mocha.allowUncaught;\n    };\n    uncaughtExceptionHandlers.push(fn);\n  }\n};\n\n// The BDD UI is registered by default, but no UI will be functional in the\n// browser without an explicit call to the overridden `mocha.ui` (see below).\n// Ensure that this default UI does not expose its methods to the global scope.\nmocha.suite.removeAllListeners('pre-require');\n\nvar immediateQueue = []\n  , immediateTimeout;\n\nfunction timeslice() {\n  var immediateStart = new Date().getTime();\n  while (immediateQueue.length && (new Date().getTime() - immediateStart) < 100) {\n    immediateQueue.shift()();\n  }\n  if (immediateQueue.length) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  } else {\n    immediateTimeout = null;\n  }\n}\n\n/**\n * High-performance override of Runner.immediately.\n */\n\nMocha.Runner.immediately = function(callback) {\n  immediateQueue.push(callback);\n  if (!immediateTimeout) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  }\n};\n\n/**\n * Function to allow assertion libraries to throw errors directly into mocha.\n * This is useful when running tests in a browser because window.onerror will\n * only receive the 'message' attribute of the Error.\n */\nmocha.throwError = function(err) {\n  Mocha.utils.forEach(uncaughtExceptionHandlers, function (fn) {\n    fn(err);\n  });\n  throw err;\n};\n\n/**\n * Override ui to ensure that the ui functions are initialized.\n * Normally this would happen in Mocha.prototype.loadFiles.\n */\n\nmocha.ui = function(ui){\n  Mocha.prototype.ui.call(this, ui);\n  this.suite.emit('pre-require', global, null, this);\n  return this;\n};\n\n/**\n * Setup mocha with the given setting options.\n */\n\nmocha.setup = function(opts){\n  if ('string' == typeof opts) opts = { ui: opts };\n  for (var opt in opts) this[opt](opts[opt]);\n  return this;\n};\n\n/**\n * Run mocha, returning the Runner.\n */\n\nmocha.run = function(fn){\n  var options = mocha.options;\n  mocha.globals('location');\n\n  var query = Mocha.utils.parseQuery(global.location.search || '');\n  if (query.grep) mocha.grep(new RegExp(query.grep));\n  if (query.fgrep) mocha.grep(query.fgrep);\n  if (query.invert) mocha.invert();\n\n  return Mocha.prototype.run.call(mocha, function(err){\n    // The DOM Document is not available in Web Workers.\n    var document = global.document;\n    if (document && document.getElementById('mocha') && options.noHighlighting !== true) {\n      Mocha.utils.highlightTags('code');\n    }\n    if (fn) fn(err);\n  });\n};\n\n/**\n * Expose the process shim.\n * https://github.com/mochajs/mocha/pull/916\n */\n\nMocha.process = process;\n\n/**\n * Expose mocha.\n */\n\nglobal.Mocha = Mocha;\nglobal.mocha = mocha;\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"../\":1,\"_process\":51,\"browser-stdout\":40}]},{},[71]);\n"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(17));
		else if(typeof define === 'function' && define.amd)
			define(["jquery"], factory);
		else {
			var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jquery"]);
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function(__WEBPACK_EXTERNAL_MODULE_17__) {
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

		mcoreApp.Template = __webpack_require__(16);

		mcoreApp.Component = __webpack_require__(18);

		mcoreApp.App = __webpack_require__(19);

		mcoreApp.Route = __webpack_require__(20);

		mcoreApp.BaseClass = __webpack_require__(23);

		mcoreApp.View = __webpack_require__(24);

		mcoreApp.http = __webpack_require__(25);

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

			  Template.prototype._render = function(done) {
			    var patches, scope, virtualDom;
			    scope = extend(true, this.scope);
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
			  el.innerHTML = value != null ? value : '';
			  return el._element._noDiffChild = true;
			};

			exports['no-diff-child'] = function(el, value) {
			  return el._element._noDiffChild = value && true || false;
			};

			exports['selected'] = {
			  rendered: function(el, value) {
			    return el.value = value;
			  }
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
		var each, util,
		  slice = [].slice;

		util = __webpack_require__(14).util;

		each = util.each;

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
		          if (key) {
		            if (util.isArray(v) && v.length === 3 && v[2].promise) {
		              v = v[0];
		            }
		            return vData[key] = v;
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

		$ = __webpack_require__(17);

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

		  Template.prototype.addEventListener = function(event) {
		    var $refs;
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
		      $refs = $(this.refs);
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
		        return $refs.on(event, 'input, textarea', (function(_this) {
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
	/* 17 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

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

		$ = __webpack_require__(17);

		mcore = __webpack_require__(14);

		Template = __webpack_require__(16);

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

		$ = __webpack_require__(17);

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
		    this._onLoadViw = false;
		    this._middlewares = [];
		    return;
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
		        _this.curView.instantiate.afterRun();
		        return _this._onLoadViw = false;
		      };
		    })(this));
		  };

		  App.prototype.runView = function(View, route, args) {
		    var viewName;
		    if (this._onLoadViw) {
		      return;
		    }
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
		    this._onLoadViw = true;
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

		Template = __webpack_require__(16);

		$ = __webpack_require__(17);

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
		    return util.extend(true, value);
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

		$ = __webpack_require__(17);

		View = (function(superClass) {
		  extend(View, superClass);

		  function View($el, app) {
		    this.$el = $el;
		    this.app = app;
		    View.__super__.constructor.call(this);
		    this._plus();
		    this.el = this.$el[0];
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

		  View.prototype.run = function() {};

		  View.prototype.afterRun = function() {};

		  return View;

		})(__webpack_require__(23));

		module.exports = View;


	/***/ },
	/* 25 */
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

		$ = __webpack_require__(17);

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
		    options = {
		      cache: false,
		      data: http.sendDataFormat(data || {}),
		      dataType: 'json',
		      type: type || 'GET',
		      timeout: timeout,
		      headers: http.buildHeaders()
		    };
		    if (type === 'jsonp') {
		      options.type = 'GET';
		      options.dataType = 'jsonp';
		    }
		    xhr = $.ajax(url, options);
		    xhr.sendData = options.data;
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *
	 * test App
	 * @author vfasky <vfasky@gmail.com>
	 */
	'use strict';
	var $vd, RouteChange, TestApp, mcoreapp,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	mcoreapp = __webpack_require__(33);

	RouteChange = __webpack_require__(35);

	$vd = $('<div/>');

	TestApp = (function(superClass) {
	  extend(TestApp, superClass);

	  function TestApp($el, options) {
	    if ($el == null) {
	      $el = $vd;
	    }
	    if (options == null) {
	      options = {};
	    }
	    this.routeChange = new RouteChange();
	    options.routeChange = this.routeChange.init;
	    TestApp.__super__.constructor.call(this, $el, options);
	  }

	  TestApp.prototype.goUrl = function(url, runViewCallback) {
	    this.off('runView');
	    this.on('runView', function(view) {
	      return view.instantiate.on('rendered', function() {
	        return runViewCallback(view.instantiate);
	      });
	    });
	    return this.router.match(url);
	  };

	  TestApp.prototype.run = function() {
	    if (mocha) {
	      return mocha.run();
	    }
	  };

	  return TestApp;

	})(mcoreapp.App);

	module.exports = TestApp;


/***/ },
/* 35 */
/***/ function(module, exports) {

	
	/**
	 *
	 * 跳由跳转，用于测试
	 * @author vfasky <vfasky@gmail.com>
	 */
	'use strict';
	var RouteChange;

	RouteChange = (function() {
	  function RouteChange() {}

	  RouteChange.prototype.init = function(callback) {
	    var hashChanged;
	    this.callback = callback;
	    hashChanged = (function(_this) {
	      return function() {
	        return _this.callback(window.location.hash.substring(1));
	      };
	    })(this);
	    if (window.addEventListener) {
	      window.addEventListener('hashchange', hashChanged, false);
	    } else {
	      window.attachEvent('onhashchange', hashChanged);
	    }
	    return hashChanged();
	  };

	  return RouteChange;

	})();

	module.exports = RouteChange;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var used = []
	  , exports = module.exports = {};

	/*!
	 * Chai version
	 */

	exports.version = '3.5.0';

	/*!
	 * Assertion Error
	 */

	exports.AssertionError = __webpack_require__(38);

	/*!
	 * Utils for plugins (not exported)
	 */

	var util = __webpack_require__(39);

	/**
	 * # .use(function)
	 *
	 * Provides a way to extend the internals of Chai
	 *
	 * @param {Function}
	 * @returns {this} for chaining
	 * @api public
	 */

	exports.use = function (fn) {
	  if (!~used.indexOf(fn)) {
	    fn(this, util);
	    used.push(fn);
	  }

	  return this;
	};

	/*!
	 * Utility Functions
	 */

	exports.util = util;

	/*!
	 * Configuration
	 */

	var config = __webpack_require__(52);
	exports.config = config;

	/*!
	 * Primary `Assertion` prototype
	 */

	var assertion = __webpack_require__(71);
	exports.use(assertion);

	/*!
	 * Core Assertions
	 */

	var core = __webpack_require__(72);
	exports.use(core);

	/*!
	 * Expect interface
	 */

	var expect = __webpack_require__(73);
	exports.use(expect);

	/*!
	 * Should interface
	 */

	var should = __webpack_require__(74);
	exports.use(should);

	/*!
	 * Assert interface
	 */

	var assert = __webpack_require__(75);
	exports.use(assert);


/***/ },
/* 38 */
/***/ function(module, exports) {

	/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */

	/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */

	function exclude () {
	  var excludes = [].slice.call(arguments);

	  function excludeProps (res, obj) {
	    Object.keys(obj).forEach(function (key) {
	      if (!~excludes.indexOf(key)) res[key] = obj[key];
	    });
	  }

	  return function extendExclude () {
	    var args = [].slice.call(arguments)
	      , i = 0
	      , res = {};

	    for (; i < args.length; i++) {
	      excludeProps(res, args[i]);
	    }

	    return res;
	  };
	};

	/*!
	 * Primary Exports
	 */

	module.exports = AssertionError;

	/**
	 * ### AssertionError
	 *
	 * An extension of the JavaScript `Error` constructor for
	 * assertion and validation scenarios.
	 *
	 * @param {String} message
	 * @param {Object} properties to include (optional)
	 * @param {callee} start stack function (optional)
	 */

	function AssertionError (message, _props, ssf) {
	  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
	    , props = extend(_props || {});

	  // default values
	  this.message = message || 'Unspecified AssertionError';
	  this.showDiff = false;

	  // copy from properties
	  for (var key in props) {
	    this[key] = props[key];
	  }

	  // capture stack trace
	  ssf = ssf || arguments.callee;
	  if (ssf && Error.captureStackTrace) {
	    Error.captureStackTrace(this, ssf);
	  } else {
	    this.stack = new Error().stack;
	  }
	}

	/*!
	 * Inherit from Error.prototype
	 */

	AssertionError.prototype = Object.create(Error.prototype);

	/*!
	 * Statically set name
	 */

	AssertionError.prototype.name = 'AssertionError';

	/*!
	 * Ensure correct constructor
	 */

	AssertionError.prototype.constructor = AssertionError;

	/**
	 * Allow errors to be converted to JSON for static transfer.
	 *
	 * @param {Boolean} include stack (default: `true`)
	 * @return {Object} object that can be `JSON.stringify`
	 */

	AssertionError.prototype.toJSON = function (stack) {
	  var extend = exclude('constructor', 'toJSON', 'stack')
	    , props = extend({ name: this.name }, this);

	  // include stack if exists and not turned off
	  if (false !== stack && this.stack) {
	    props.stack = this.stack;
	  }

	  return props;
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Main exports
	 */

	var exports = module.exports = {};

	/*!
	 * test utility
	 */

	exports.test = __webpack_require__(40);

	/*!
	 * type utility
	 */

	exports.type = __webpack_require__(42);

	/*!
	 * expectTypes utility
	 */
	exports.expectTypes = __webpack_require__(44);

	/*!
	 * message utility
	 */

	exports.getMessage = __webpack_require__(45);

	/*!
	 * actual utility
	 */

	exports.getActual = __webpack_require__(46);

	/*!
	 * Inspect util
	 */

	exports.inspect = __webpack_require__(47);

	/*!
	 * Object Display util
	 */

	exports.objDisplay = __webpack_require__(51);

	/*!
	 * Flag utility
	 */

	exports.flag = __webpack_require__(41);

	/*!
	 * Flag transferring utility
	 */

	exports.transferFlags = __webpack_require__(53);

	/*!
	 * Deep equal utility
	 */

	exports.eql = __webpack_require__(54);

	/*!
	 * Deep path value
	 */

	exports.getPathValue = __webpack_require__(62);

	/*!
	 * Deep path info
	 */

	exports.getPathInfo = __webpack_require__(63);

	/*!
	 * Check if a property exists
	 */

	exports.hasProperty = __webpack_require__(64);

	/*!
	 * Function name
	 */

	exports.getName = __webpack_require__(48);

	/*!
	 * add Property
	 */

	exports.addProperty = __webpack_require__(65);

	/*!
	 * add Method
	 */

	exports.addMethod = __webpack_require__(66);

	/*!
	 * overwrite Property
	 */

	exports.overwriteProperty = __webpack_require__(67);

	/*!
	 * overwrite Method
	 */

	exports.overwriteMethod = __webpack_require__(68);

	/*!
	 * Add a chainable method
	 */

	exports.addChainableMethod = __webpack_require__(69);

	/*!
	 * Overwrite chainable method
	 */

	exports.overwriteChainableMethod = __webpack_require__(70);


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(41);

	/**
	 * # test(object, expression)
	 *
	 * Test and object for expression.
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name test
	 */

	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , expr = args[0];
	  return negate ? !expr : expr;
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### flag(object, key, [value])
	 *
	 * Get or set a flag value on an object. If a
	 * value is provided it will be set, else it will
	 * return the currently set value or `undefined` if
	 * the value is not set.
	 *
	 *     utils.flag(this, 'foo', 'bar'); // setter
	 *     utils.flag(this, 'foo'); // getter, returns `bar`
	 *
	 * @param {Object} object constructed Assertion
	 * @param {String} key
	 * @param {Mixed} value (optional)
	 * @namespace Utils
	 * @name flag
	 * @api private
	 */

	module.exports = function (obj, key, value) {
	  var flags = obj.__flags || (obj.__flags = Object.create(null));
	  if (arguments.length === 3) {
	    flags[key] = value;
	  } else {
	    return flags[key];
	  }
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43);


/***/ },
/* 43 */
/***/ function(module, exports) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Primary Exports
	 */

	var exports = module.exports = getType;

	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */
	var objectTypeRegexp = /^\[object (.*)\]$/;

	function getType(obj) {
	  var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
	  // Let "new String('')" return 'object'
	  if (typeof Promise === 'function' && obj instanceof Promise) return 'promise';
	  // PhantomJS has type "DOMWindow" for null
	  if (obj === null) return 'null';
	  // PhantomJS has type "DOMWindow" for undefined
	  if (obj === undefined) return 'undefined';
	  return type;
	}

	exports.Library = Library;

	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */

	function Library() {
	  if (!(this instanceof Library)) return new Library();
	  this.tests = {};
	}

	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */

	Library.prototype.of = getType;

	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */

	Library.prototype.define = function(type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};

	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */

	Library.prototype.test = function(obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];

	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - expectTypes utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### expectTypes(obj, types)
	 *
	 * Ensures that the object being tested against is of a valid type.
	 *
	 *     utils.expectTypes(this, ['array', 'object', 'string']);
	 *
	 * @param {Mixed} obj constructed Assertion
	 * @param {Array} type A list of allowed types for this assertion
	 * @namespace Utils
	 * @name expectTypes
	 * @api public
	 */

	var AssertionError = __webpack_require__(38);
	var flag = __webpack_require__(41);
	var type = __webpack_require__(42);

	module.exports = function (obj, types) {
	  var obj = flag(obj, 'object');
	  types = types.map(function (t) { return t.toLowerCase(); });
	  types.sort();

	  // Transforms ['lorem', 'ipsum'] into 'a lirum, or an ipsum'
	  var str = types.map(function (t, index) {
	    var art = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(t.charAt(0)) ? 'an' : 'a';
	    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
	    return or + art + ' ' + t;
	  }).join(', ');

	  if (!types.some(function (expected) { return type(obj) === expected; })) {
	    throw new AssertionError(
	      'object tested must be ' + str + ', but ' + type(obj) + ' given'
	    );
	  }
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(41)
	  , getActual = __webpack_require__(46)
	  , inspect = __webpack_require__(47)
	  , objDisplay = __webpack_require__(51);

	/**
	 * ### .getMessage(object, message, negateMessage)
	 *
	 * Construct the error message based on flags
	 * and template tags. Template tags will return
	 * a stringified inspection of the object referenced.
	 *
	 * Message template tags:
	 * - `#{this}` current asserted object
	 * - `#{act}` actual value
	 * - `#{exp}` expected value
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getMessage
	 * @api public
	 */

	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , val = flag(obj, 'object')
	    , expected = args[3]
	    , actual = getActual(obj, args)
	    , msg = negate ? args[2] : args[1]
	    , flagMsg = flag(obj, 'message');

	  if(typeof msg === "function") msg = msg();
	  msg = msg || '';
	  msg = msg
	    .replace(/#\{this\}/g, function () { return objDisplay(val); })
	    .replace(/#\{act\}/g, function () { return objDisplay(actual); })
	    .replace(/#\{exp\}/g, function () { return objDisplay(expected); });

	  return flagMsg ? flagMsg + ': ' + msg : msg;
	};


/***/ },
/* 46 */
/***/ function(module, exports) {

	/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * # getActual(object, [actual])
	 *
	 * Returns the `actual` value for an Assertion
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getActual
	 */

	module.exports = function (obj, args) {
	  return args.length > 4 ? args[4] : obj._obj;
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// This is (almost) directly from Node.js utils
	// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

	var getName = __webpack_require__(48);
	var getProperties = __webpack_require__(49);
	var getEnumerableProperties = __webpack_require__(50);

	module.exports = inspect;

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
	 *    properties of objects.
	 * @param {Number} depth Depth in which to descend in object. Default is 2.
	 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
	 *    output. Default is false (no coloring).
	 * @namespace Utils
	 * @name inspect
	 */
	function inspect(obj, showHidden, depth, colors) {
	  var ctx = {
	    showHidden: showHidden,
	    seen: [],
	    stylize: function (str) { return str; }
	  };
	  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
	}

	// Returns true if object is a DOM element.
	var isDOMElement = function (object) {
	  if (typeof HTMLElement === 'object') {
	    return object instanceof HTMLElement;
	  } else {
	    return object &&
	      typeof object === 'object' &&
	      object.nodeType === 1 &&
	      typeof object.nodeName === 'string';
	  }
	};

	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (value && typeof value.inspect === 'function' &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes);
	    if (typeof ret !== 'string') {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // If this is a DOM element, try to get the outer HTML.
	  if (isDOMElement(value)) {
	    if ('outerHTML' in value) {
	      return value.outerHTML;
	      // This value does not have an outerHTML attribute,
	      //   it could still be an XML element
	    } else {
	      // Attempt to serialize it
	      try {
	        if (document.xmlVersion) {
	          var xmlSerializer = new XMLSerializer();
	          return xmlSerializer.serializeToString(value);
	        } else {
	          // Firefox 11- do not support outerHTML
	          //   It does, however, support innerHTML
	          //   Use the following to render the element
	          var ns = "http://www.w3.org/1999/xhtml";
	          var container = document.createElementNS(ns, '_');

	          container.appendChild(value.cloneNode(false));
	          html = container.innerHTML
	            .replace('><', '>' + value.innerHTML + '<');
	          container.innerHTML = '';
	          return html;
	        }
	      } catch (err) {
	        // This could be a non-native DOM implementation,
	        //   continue with the normal flow:
	        //   printing the element as if it is an object.
	      }
	    }
	  }

	  // Look up the keys of the object.
	  var visibleKeys = getEnumerableProperties(value);
	  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

	  // Some type of object without properties can be shortcutted.
	  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
	  // a `stack` plus `description` property; ignore those for consistency.
	  if (keys.length === 0 || (isError(value) && (
	      (keys.length === 1 && keys[0] === 'stack') ||
	      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
	     ))) {
	    if (typeof value === 'function') {
	      var name = getName(value);
	      var nameSuffix = name ? ': ' + name : '';
	      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (typeof value === 'function') {
	    var name = getName(value);
	    var nameSuffix = name ? ': ' + name : '';
	    base = ' [Function' + nameSuffix + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    return formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  switch (typeof value) {
	    case 'undefined':
	      return ctx.stylize('undefined', 'undefined');

	    case 'string':
	      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                               .replace(/'/g, "\\'")
	                                               .replace(/\\"/g, '"') + '\'';
	      return ctx.stylize(simple, 'string');

	    case 'number':
	      if (value === 0 && (1/value) === -Infinity) {
	        return ctx.stylize('-0', 'number');
	      }
	      return ctx.stylize('' + value, 'number');

	    case 'boolean':
	      return ctx.stylize('' + value, 'boolean');
	  }
	  // For some reason typeof null is "object", so special case here.
	  if (value === null) {
	    return ctx.stylize('null', 'null');
	  }
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str;
	  if (value.__lookupGetter__) {
	    if (value.__lookupGetter__(key)) {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Getter/Setter]', 'special');
	      } else {
	        str = ctx.stylize('[Getter]', 'special');
	      }
	    } else {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Setter]', 'special');
	      }
	    }
	  }
	  if (visibleKeys.indexOf(key) < 0) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(value[key]) < 0) {
	      if (recurseTimes === null) {
	        str = formatValue(ctx, value[key], null);
	      } else {
	        str = formatValue(ctx, value[key], recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (typeof name === 'undefined') {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}

	function isArray(ar) {
	  return Array.isArray(ar) ||
	         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
	}

	function isRegExp(re) {
	  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	}

	function isDate(d) {
	  return typeof d === 'object' && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return typeof e === 'object' && objectToString(e) === '[object Error]';
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


/***/ },
/* 48 */
/***/ function(module, exports) {

	/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * # getName(func)
	 *
	 * Gets the name of a function, in a cross-browser way.
	 *
	 * @param {Function} a function (usually a constructor)
	 * @namespace Utils
	 * @name getName
	 */

	module.exports = function (func) {
	  if (func.name) return func.name;

	  var match = /^\s?function ([^(]*)\(/.exec(func);
	  return match && match[1] ? match[1] : "";
	};


/***/ },
/* 49 */
/***/ function(module, exports) {

	/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### .getProperties(object)
	 *
	 * This allows the retrieval of property names of an object, enumerable or not,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getProperties
	 * @api public
	 */

	module.exports = function getProperties(object) {
	  var result = Object.getOwnPropertyNames(object);

	  function addProperty(property) {
	    if (result.indexOf(property) === -1) {
	      result.push(property);
	    }
	  }

	  var proto = Object.getPrototypeOf(object);
	  while (proto !== null) {
	    Object.getOwnPropertyNames(proto).forEach(addProperty);
	    proto = Object.getPrototypeOf(proto);
	  }

	  return result;
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### .getEnumerableProperties(object)
	 *
	 * This allows the retrieval of enumerable property names of an object,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getEnumerableProperties
	 * @api public
	 */

	module.exports = function getEnumerableProperties(object) {
	  var result = [];
	  for (var name in object) {
	    result.push(name);
	  }
	  return result;
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var inspect = __webpack_require__(47);
	var config = __webpack_require__(52);

	/**
	 * ### .objDisplay (object)
	 *
	 * Determines if an object or an array matches
	 * criteria to be inspected in-line for error
	 * messages or should be truncated.
	 *
	 * @param {Mixed} javascript object to inspect
	 * @name objDisplay
	 * @namespace Utils
	 * @api public
	 */

	module.exports = function (obj) {
	  var str = inspect(obj)
	    , type = Object.prototype.toString.call(obj);

	  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
	    if (type === '[object Function]') {
	      return !obj.name || obj.name === ''
	        ? '[Function]'
	        : '[Function: ' + obj.name + ']';
	    } else if (type === '[object Array]') {
	      return '[ Array(' + obj.length + ') ]';
	    } else if (type === '[object Object]') {
	      var keys = Object.keys(obj)
	        , kstr = keys.length > 2
	          ? keys.splice(0, 2).join(', ') + ', ...'
	          : keys.join(', ');
	      return '{ Object (' + kstr + ') }';
	    } else {
	      return str;
	    }
	  } else {
	    return str;
	  }
	};


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = {

	  /**
	   * ### config.includeStack
	   *
	   * User configurable property, influences whether stack trace
	   * is included in Assertion error message. Default of false
	   * suppresses stack trace in the error message.
	   *
	   *     chai.config.includeStack = true;  // enable stack on error
	   *
	   * @param {Boolean}
	   * @api public
	   */

	   includeStack: false,

	  /**
	   * ### config.showDiff
	   *
	   * User configurable property, influences whether or not
	   * the `showDiff` flag should be included in the thrown
	   * AssertionErrors. `false` will always be `false`; `true`
	   * will be true when the assertion has requested a diff
	   * be shown.
	   *
	   * @param {Boolean}
	   * @api public
	   */

	  showDiff: true,

	  /**
	   * ### config.truncateThreshold
	   *
	   * User configurable property, sets length threshold for actual and
	   * expected values in assertion errors. If this threshold is exceeded, for
	   * example for large data structures, the value is replaced with something
	   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
	   *
	   * Set it to zero if you want to disable truncating altogether.
	   *
	   * This is especially userful when doing assertions on arrays: having this
	   * set to a reasonable large value makes the failure messages readily
	   * inspectable.
	   *
	   *     chai.config.truncateThreshold = 0;  // disable truncating
	   *
	   * @param {Number}
	   * @api public
	   */

	  truncateThreshold: 40

	};


/***/ },
/* 53 */
/***/ function(module, exports) {

	/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### transferFlags(assertion, object, includeAll = true)
	 *
	 * Transfer all the flags for `assertion` to `object`. If
	 * `includeAll` is set to `false`, then the base Chai
	 * assertion flags (namely `object`, `ssfi`, and `message`)
	 * will not be transferred.
	 *
	 *
	 *     var newAssertion = new Assertion();
	 *     utils.transferFlags(assertion, newAssertion);
	 *
	 *     var anotherAsseriton = new Assertion(myObj);
	 *     utils.transferFlags(assertion, anotherAssertion, false);
	 *
	 * @param {Assertion} assertion the assertion to transfer the flags from
	 * @param {Object} object the object to transfer the flags to; usually a new assertion
	 * @param {Boolean} includeAll
	 * @namespace Utils
	 * @name transferFlags
	 * @api private
	 */

	module.exports = function (assertion, object, includeAll) {
	  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

	  if (!object.__flags) {
	    object.__flags = Object.create(null);
	  }

	  includeAll = arguments.length === 3 ? includeAll : true;

	  for (var flag in flags) {
	    if (includeAll ||
	        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
	      object.__flags[flag] = flags[flag];
	    }
	  }
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(55);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var type = __webpack_require__(56);

	/*!
	 * Buffer.isBuffer browser shim
	 */

	var Buffer;
	try { Buffer = __webpack_require__(58).Buffer; }
	catch(ex) {
	  Buffer = {};
	  Buffer.isBuffer = function() { return false; }
	}

	/*!
	 * Primary Export
	 */

	module.exports = deepEqual;

	/**
	 * Assert super-strict (egal) equality between
	 * two objects of any type.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @param {Array} memoised (optional)
	 * @return {Boolean} equal match
	 */

	function deepEqual(a, b, m) {
	  if (sameValue(a, b)) {
	    return true;
	  } else if ('date' === type(a)) {
	    return dateEqual(a, b);
	  } else if ('regexp' === type(a)) {
	    return regexpEqual(a, b);
	  } else if (Buffer.isBuffer(a)) {
	    return bufferEqual(a, b);
	  } else if ('arguments' === type(a)) {
	    return argumentsEqual(a, b, m);
	  } else if (!typeEqual(a, b)) {
	    return false;
	  } else if (('object' !== type(a) && 'object' !== type(b))
	  && ('array' !== type(a) && 'array' !== type(b))) {
	    return sameValue(a, b);
	  } else {
	    return objectEqual(a, b, m);
	  }
	}

	/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */

	function sameValue(a, b) {
	  if (a === b) return a !== 0 || 1 / a === 1 / b;
	  return a !== a && b !== b;
	}

	/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function typeEqual(a, b) {
	  return type(a) === type(b);
	}

	/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */

	function dateEqual(a, b) {
	  if ('date' !== type(b)) return false;
	  return sameValue(a.getTime(), b.getTime());
	}

	/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */

	function regexpEqual(a, b) {
	  if ('regexp' !== type(b)) return false;
	  return sameValue(a.toString(), b.toString());
	}

	/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */

	function argumentsEqual(a, b, m) {
	  if ('arguments' !== type(b)) return false;
	  a = [].slice.call(a);
	  b = [].slice.call(b);
	  return deepEqual(a, b, m);
	}

	/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */

	function enumerable(a) {
	  var res = [];
	  for (var key in a) res.push(key);
	  return res;
	}

	/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */

	function iterableEqual(a, b) {
	  if (a.length !==  b.length) return false;

	  var i = 0;
	  var match = true;

	  for (; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      match = false;
	      break;
	    }
	  }

	  return match;
	}

	/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function bufferEqual(a, b) {
	  if (!Buffer.isBuffer(b)) return false;
	  return iterableEqual(a, b);
	}

	/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */

	function isValue(a) {
	  return a !== null && a !== undefined;
	}

	/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function objectEqual(a, b, m) {
	  if (!isValue(a) || !isValue(b)) {
	    return false;
	  }

	  if (a.prototype !== b.prototype) {
	    return false;
	  }

	  var i;
	  if (m) {
	    for (i = 0; i < m.length; i++) {
	      if ((m[i][0] === a && m[i][1] === b)
	      ||  (m[i][0] === b && m[i][1] === a)) {
	        return true;
	      }
	    }
	  } else {
	    m = [];
	  }

	  try {
	    var ka = enumerable(a);
	    var kb = enumerable(b);
	  } catch (ex) {
	    return false;
	  }

	  ka.sort();
	  kb.sort();

	  if (!iterableEqual(ka, kb)) {
	    return false;
	  }

	  m.push([ a, b ]);

	  var key;
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], m)) {
	      return false;
	    }
	  }

	  return true;
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(57);


/***/ },
/* 57 */
/***/ function(module, exports) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Primary Exports
	 */

	var exports = module.exports = getType;

	/*!
	 * Detectable javascript natives
	 */

	var natives = {
	    '[object Array]': 'array'
	  , '[object RegExp]': 'regexp'
	  , '[object Function]': 'function'
	  , '[object Arguments]': 'arguments'
	  , '[object Date]': 'date'
	};

	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */

	function getType (obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	}

	exports.Library = Library;

	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */

	function Library () {
	  this.tests = {};
	}

	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */

	Library.prototype.of = getType;

	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */

	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};

	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */

	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];

	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(59)
	var ieee754 = __webpack_require__(60)
	var isArray = __webpack_require__(61)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58).Buffer, (function() { return this; }())))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 60 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 61 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */

	var getPathInfo = __webpack_require__(63);

	/**
	 * ### .getPathValue(path, object)
	 *
	 * This allows the retrieval of values in an
	 * object given a string path.
	 *
	 *     var obj = {
	 *         prop1: {
	 *             arr: ['a', 'b', 'c']
	 *           , str: 'Hello'
	 *         }
	 *       , prop2: {
	 *             arr: [ { nested: 'Universe' } ]
	 *           , str: 'Hello again!'
	 *         }
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     getPathValue('prop1.str', obj); // Hello
	 *     getPathValue('prop1.att[2]', obj); // b
	 *     getPathValue('prop2.arr[0].nested', obj); // Universe
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} value or `undefined`
	 * @namespace Utils
	 * @name getPathValue
	 * @api public
	 */
	module.exports = function(path, obj) {
	  var info = getPathInfo(path, obj);
	  return info.value;
	};


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathInfo utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var hasProperty = __webpack_require__(64);

	/**
	 * ### .getPathInfo(path, object)
	 *
	 * This allows the retrieval of property info in an
	 * object given a string path.
	 *
	 * The path info consists of an object with the
	 * following properties:
	 *
	 * * parent - The parent object of the property referenced by `path`
	 * * name - The name of the final property, a number if it was an array indexer
	 * * value - The value of the property, if it exists, otherwise `undefined`
	 * * exists - Whether the property exists or not
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} info
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */

	module.exports = function getPathInfo(path, obj) {
	  var parsed = parsePath(path),
	      last = parsed[parsed.length - 1];

	  var info = {
	    parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
	    name: last.p || last.i,
	    value: _getPathValue(parsed, obj)
	  };
	  info.exists = hasProperty(info.name, info.parent);

	  return info;
	};


	/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */

	function parsePath (path) {
	  var str = path.replace(/([^\\])\[/g, '$1.[')
	    , parts = str.match(/(\\\.|[^.]+?)+/g);
	  return parts.map(function (value) {
	    var re = /^\[(\d+)\]$/
	      , mArr = re.exec(value);
	    if (mArr) return { i: parseFloat(mArr[1]) };
	    else return { p: value.replace(/\\([.\[\]])/g, '$1') };
	  });
	}


	/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @param {Number} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */

	function _getPathValue (parsed, obj, index) {
	  var tmp = obj
	    , res;

	  index = (index === undefined ? parsed.length : index);

	  for (var i = 0, l = index; i < l; i++) {
	    var part = parsed[i];
	    if (tmp) {
	      if ('undefined' !== typeof part.p)
	        tmp = tmp[part.p];
	      else if ('undefined' !== typeof part.i)
	        tmp = tmp[part.i];
	      if (i == (l - 1)) res = tmp;
	    } else {
	      res = undefined;
	    }
	  }
	  return res;
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - hasProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var type = __webpack_require__(42);

	/**
	 * ### .hasProperty(object, name)
	 *
	 * This allows checking whether an object has
	 * named property or numeric array index.
	 *
	 * Basically does the same thing as the `in`
	 * operator but works properly with natives
	 * and null/undefined values.
	 *
	 *     var obj = {
	 *         arr: ['a', 'b', 'c']
	 *       , str: 'Hello'
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     hasProperty('str', obj);  // true
	 *     hasProperty('constructor', obj);  // true
	 *     hasProperty('bar', obj);  // false
	 *
	 *     hasProperty('length', obj.str); // true
	 *     hasProperty(1, obj.str);  // true
	 *     hasProperty(5, obj.str);  // false
	 *
	 *     hasProperty('length', obj.arr);  // true
	 *     hasProperty(2, obj.arr);  // true
	 *     hasProperty(3, obj.arr);  // false
	 *
	 * @param {Objuect} object
	 * @param {String|Number} name
	 * @returns {Boolean} whether it exists
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */

	var literals = {
	    'number': Number
	  , 'string': String
	};

	module.exports = function hasProperty(name, obj) {
	  var ot = type(obj);

	  // Bad Object, obviously no props at all
	  if(ot === 'null' || ot === 'undefined')
	    return false;

	  // The `in` operator does not work with certain literals
	  // box these before the check
	  if(literals[ot] && typeof obj !== 'object')
	    obj = new literals[ot](obj);

	  return name in obj;
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(52);
	var flag = __webpack_require__(41);

	/**
	 * ### addProperty (ctx, name, getter)
	 *
	 * Adds a property to the prototype of an object.
	 *
	 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.instanceof(Foo);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.foo;
	 *
	 * @param {Object} ctx object to which the property is added
	 * @param {String} name of property to add
	 * @param {Function} getter function to be used for name
	 * @namespace Utils
	 * @name addProperty
	 * @api public
	 */

	module.exports = function (ctx, name, getter) {
	  Object.defineProperty(ctx, name,
	    { get: function addProperty() {
	        var old_ssfi = flag(this, 'ssfi');
	        if (old_ssfi && config.includeStack === false)
	          flag(this, 'ssfi', addProperty);

	        var result = getter.call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(52);

	/**
	 * ### .addMethod (ctx, name, method)
	 *
	 * Adds a method to the prototype of an object.
	 *
	 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for name
	 * @namespace Utils
	 * @name addMethod
	 * @api public
	 */
	var flag = __webpack_require__(41);

	module.exports = function (ctx, name, method) {
	  ctx[name] = function () {
	    var old_ssfi = flag(this, 'ssfi');
	    if (old_ssfi && config.includeStack === false)
	      flag(this, 'ssfi', ctx[name]);
	    var result = method.apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 67 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteProperty (ctx, name, fn)
	 *
	 * Overwites an already existing property getter and provides
	 * access to previous value. Must return function to use as getter.
	 *
	 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
	 *       return function () {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.name).to.equal('bar');
	 *         } else {
	 *           _super.call(this);
	 *         }
	 *       }
	 *     });
	 *
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.ok;
	 *
	 * @param {Object} ctx object whose property is to be overwritten
	 * @param {String} name of property to overwrite
	 * @param {Function} getter function that returns a getter function to be used for name
	 * @namespace Utils
	 * @name overwriteProperty
	 * @api public
	 */

	module.exports = function (ctx, name, getter) {
	  var _get = Object.getOwnPropertyDescriptor(ctx, name)
	    , _super = function () {};

	  if (_get && 'function' === typeof _get.get)
	    _super = _get.get

	  Object.defineProperty(ctx, name,
	    { get: function () {
	        var result = getter(_super).call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 68 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteMethod (ctx, name, fn)
	 *
	 * Overwites an already existing method and provides
	 * access to previous function. Must return function
	 * to be used for name.
	 *
	 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
	 *       return function (str) {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.value).to.equal(str);
	 *         } else {
	 *           _super.apply(this, arguments);
	 *         }
	 *       }
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.equal('bar');
	 *
	 * @param {Object} ctx object whose method is to be overwritten
	 * @param {String} name of method to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @namespace Utils
	 * @name overwriteMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method) {
	  var _method = ctx[name]
	    , _super = function () { return this; };

	  if (_method && 'function' === typeof _method)
	    _super = _method;

	  ctx[name] = function () {
	    var result = method(_super).apply(this, arguments);
	    return result === undefined ? this : result;
	  }
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var transferFlags = __webpack_require__(53);
	var flag = __webpack_require__(41);
	var config = __webpack_require__(52);

	/*!
	 * Module variables
	 */

	// Check whether `__proto__` is supported
	var hasProtoSupport = '__proto__' in Object;

	// Without `__proto__` support, this module will need to add properties to a function.
	// However, some Function.prototype methods cannot be overwritten,
	// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
	var excludeNames = /^(?:length|name|arguments|caller)$/;

	// Cache `Function` properties
	var call  = Function.prototype.call,
	    apply = Function.prototype.apply;

	/**
	 * ### addChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Adds a method to an object, such that the method can also be chained.
	 *
	 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
	 *
	 * The result can then be used as both a method assertion, executing both `method` and
	 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *     expect(fooStr).to.be.foo.equal('foo');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for `name`, when called
	 * @param {Function} chainingBehavior function to be called every time the property is accessed
	 * @namespace Utils
	 * @name addChainableMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method, chainingBehavior) {
	  if (typeof chainingBehavior !== 'function') {
	    chainingBehavior = function () { };
	  }

	  var chainableBehavior = {
	      method: method
	    , chainingBehavior: chainingBehavior
	  };

	  // save the methods so we can overwrite them later, if we need to.
	  if (!ctx.__methods) {
	    ctx.__methods = {};
	  }
	  ctx.__methods[name] = chainableBehavior;

	  Object.defineProperty(ctx, name,
	    { get: function () {
	        chainableBehavior.chainingBehavior.call(this);

	        var assert = function assert() {
	          var old_ssfi = flag(this, 'ssfi');
	          if (old_ssfi && config.includeStack === false)
	            flag(this, 'ssfi', assert);
	          var result = chainableBehavior.method.apply(this, arguments);
	          return result === undefined ? this : result;
	        };

	        // Use `__proto__` if available
	        if (hasProtoSupport) {
	          // Inherit all properties from the object by replacing the `Function` prototype
	          var prototype = assert.__proto__ = Object.create(this);
	          // Restore the `call` and `apply` methods from `Function`
	          prototype.call = call;
	          prototype.apply = apply;
	        }
	        // Otherwise, redefine all properties (slow!)
	        else {
	          var asserterNames = Object.getOwnPropertyNames(ctx);
	          asserterNames.forEach(function (asserterName) {
	            if (!excludeNames.test(asserterName)) {
	              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
	              Object.defineProperty(assert, asserterName, pd);
	            }
	          });
	        }

	        transferFlags(this, assert);
	        return assert;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 70 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Overwites an already existing chainable method
	 * and provides access to the previous function or
	 * property.  Must return functions to be used for
	 * name.
	 *
	 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
	 *       function (_super) {
	 *       }
	 *     , function (_super) {
	 *       }
	 *     );
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.have.length(3);
	 *     expect(myFoo).to.have.length.above(3);
	 *
	 * @param {Object} ctx object whose method / property is to be overwritten
	 * @param {String} name of method / property to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @param {Function} chainingBehavior function that returns a function to be used for property
	 * @namespace Utils
	 * @name overwriteChainableMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method, chainingBehavior) {
	  var chainableBehavior = ctx.__methods[name];

	  var _chainingBehavior = chainableBehavior.chainingBehavior;
	  chainableBehavior.chainingBehavior = function () {
	    var result = chainingBehavior(_chainingBehavior).call(this);
	    return result === undefined ? this : result;
	  };

	  var _method = chainableBehavior.method;
	  chainableBehavior.method = function () {
	    var result = method(_method).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(52);

	module.exports = function (_chai, util) {
	  /*!
	   * Module dependencies.
	   */

	  var AssertionError = _chai.AssertionError
	    , flag = util.flag;

	  /*!
	   * Module export.
	   */

	  _chai.Assertion = Assertion;

	  /*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */

	  function Assertion (obj, msg, stack) {
	    flag(this, 'ssfi', stack || arguments.callee);
	    flag(this, 'object', obj);
	    flag(this, 'message', msg);
	  }

	  Object.defineProperty(Assertion, 'includeStack', {
	    get: function() {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      return config.includeStack;
	    },
	    set: function(value) {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      config.includeStack = value;
	    }
	  });

	  Object.defineProperty(Assertion, 'showDiff', {
	    get: function() {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      return config.showDiff;
	    },
	    set: function(value) {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      config.showDiff = value;
	    }
	  });

	  Assertion.addProperty = function (name, fn) {
	    util.addProperty(this.prototype, name, fn);
	  };

	  Assertion.addMethod = function (name, fn) {
	    util.addMethod(this.prototype, name, fn);
	  };

	  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
	    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };

	  Assertion.overwriteProperty = function (name, fn) {
	    util.overwriteProperty(this.prototype, name, fn);
	  };

	  Assertion.overwriteMethod = function (name, fn) {
	    util.overwriteMethod(this.prototype, name, fn);
	  };

	  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
	    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };

	  /**
	   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
	   *
	   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
	   *
	   * @name assert
	   * @param {Philosophical} expression to be tested
	   * @param {String|Function} message or function that returns message to display if expression fails
	   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
	   * @param {Mixed} expected value (remember to check for negation)
	   * @param {Mixed} actual (optional) will default to `this.obj`
	   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
	   * @api private
	   */

	  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
	    var ok = util.test(this, arguments);
	    if (true !== showDiff) showDiff = false;
	    if (true !== config.showDiff) showDiff = false;

	    if (!ok) {
	      var msg = util.getMessage(this, arguments)
	        , actual = util.getActual(this, arguments);
	      throw new AssertionError(msg, {
	          actual: actual
	        , expected: expected
	        , showDiff: showDiff
	      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
	    }
	  };

	  /*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */

	  Object.defineProperty(Assertion.prototype, '_obj',
	    { get: function () {
	        return flag(this, 'object');
	      }
	    , set: function (val) {
	        flag(this, 'object', val);
	      }
	  });
	};


/***/ },
/* 72 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, _) {
	  var Assertion = chai.Assertion
	    , toString = Object.prototype.toString
	    , flag = _.flag;

	  /**
	   * ### Language Chains
	   *
	   * The following are provided as chainable getters to
	   * improve the readability of your assertions. They
	   * do not provide testing capabilities unless they
	   * have been overwritten by a plugin.
	   *
	   * **Chains**
	   *
	   * - to
	   * - be
	   * - been
	   * - is
	   * - that
	   * - which
	   * - and
	   * - has
	   * - have
	   * - with
	   * - at
	   * - of
	   * - same
	   *
	   * @name language chains
	   * @namespace BDD
	   * @api public
	   */

	  [ 'to', 'be', 'been'
	  , 'is', 'and', 'has', 'have'
	  , 'with', 'that', 'which', 'at'
	  , 'of', 'same' ].forEach(function (chain) {
	    Assertion.addProperty(chain, function () {
	      return this;
	    });
	  });

	  /**
	   * ### .not
	   *
	   * Negates any of assertions following in the chain.
	   *
	   *     expect(foo).to.not.equal('bar');
	   *     expect(goodFn).to.not.throw(Error);
	   *     expect({ foo: 'baz' }).to.have.property('foo')
	   *       .and.not.equal('bar');
	   *
	   * @name not
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('not', function () {
	    flag(this, 'negate', true);
	  });

	  /**
	   * ### .deep
	   *
	   * Sets the `deep` flag, later used by the `equal` and
	   * `property` assertions.
	   *
	   *     expect(foo).to.deep.equal({ bar: 'baz' });
	   *     expect({ foo: { bar: { baz: 'quux' } } })
	   *       .to.have.deep.property('foo.bar.baz', 'quux');
	   *
	   * `.deep.property` special characters can be escaped
	   * by adding two slashes before the `.` or `[]`.
	   *
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name deep
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('deep', function () {
	    flag(this, 'deep', true);
	  });

	  /**
	   * ### .any
	   *
	   * Sets the `any` flag, (opposite of the `all` flag)
	   * later used in the `keys` assertion.
	   *
	   *     expect(foo).to.have.any.keys('bar', 'baz');
	   *
	   * @name any
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('any', function () {
	    flag(this, 'any', true);
	    flag(this, 'all', false)
	  });


	  /**
	   * ### .all
	   *
	   * Sets the `all` flag (opposite of the `any` flag)
	   * later used by the `keys` assertion.
	   *
	   *     expect(foo).to.have.all.keys('bar', 'baz');
	   *
	   * @name all
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('all', function () {
	    flag(this, 'all', true);
	    flag(this, 'any', false);
	  });

	  /**
	   * ### .a(type)
	   *
	   * The `a` and `an` assertions are aliases that can be
	   * used either as language chains or to assert a value's
	   * type.
	   *
	   *     // typeof
	   *     expect('test').to.be.a('string');
	   *     expect({ foo: 'bar' }).to.be.an('object');
	   *     expect(null).to.be.a('null');
	   *     expect(undefined).to.be.an('undefined');
	   *     expect(new Error).to.be.an('error');
	   *     expect(new Promise).to.be.a('promise');
	   *     expect(new Float32Array()).to.be.a('float32array');
	   *     expect(Symbol()).to.be.a('symbol');
	   *
	   *     // es6 overrides
	   *     expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');
	   *
	   *     // language chain
	   *     expect(foo).to.be.an.instanceof(Foo);
	   *
	   * @name a
	   * @alias an
	   * @param {String} type
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function an (type, msg) {
	    if (msg) flag(this, 'message', msg);
	    type = type.toLowerCase();
	    var obj = flag(this, 'object')
	      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

	    this.assert(
	        type === _.type(obj)
	      , 'expected #{this} to be ' + article + type
	      , 'expected #{this} not to be ' + article + type
	    );
	  }

	  Assertion.addChainableMethod('an', an);
	  Assertion.addChainableMethod('a', an);

	  /**
	   * ### .include(value)
	   *
	   * The `include` and `contain` assertions can be used as either property
	   * based language chains or as methods to assert the inclusion of an object
	   * in an array or a substring in a string. When used as language chains,
	   * they toggle the `contains` flag for the `keys` assertion.
	   *
	   *     expect([1,2,3]).to.include(2);
	   *     expect('foobar').to.contain('foo');
	   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
	   *
	   * @name include
	   * @alias contain
	   * @alias includes
	   * @alias contains
	   * @param {Object|String|Number} obj
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function includeChainingBehavior () {
	    flag(this, 'contains', true);
	  }

	  function include (val, msg) {
	    _.expectTypes(this, ['array', 'object', 'string']);

	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var expected = false;

	    if (_.type(obj) === 'array' && _.type(val) === 'object') {
	      for (var i in obj) {
	        if (_.eql(obj[i], val)) {
	          expected = true;
	          break;
	        }
	      }
	    } else if (_.type(val) === 'object') {
	      if (!flag(this, 'negate')) {
	        for (var k in val) new Assertion(obj).property(k, val[k]);
	        return;
	      }
	      var subset = {};
	      for (var k in val) subset[k] = obj[k];
	      expected = _.eql(subset, val);
	    } else {
	      expected = (obj != undefined) && ~obj.indexOf(val);
	    }
	    this.assert(
	        expected
	      , 'expected #{this} to include ' + _.inspect(val)
	      , 'expected #{this} to not include ' + _.inspect(val));
	  }

	  Assertion.addChainableMethod('include', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
	  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

	  /**
	   * ### .ok
	   *
	   * Asserts that the target is truthy.
	   *
	   *     expect('everything').to.be.ok;
	   *     expect(1).to.be.ok;
	   *     expect(false).to.not.be.ok;
	   *     expect(undefined).to.not.be.ok;
	   *     expect(null).to.not.be.ok;
	   *
	   * @name ok
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('ok', function () {
	    this.assert(
	        flag(this, 'object')
	      , 'expected #{this} to be truthy'
	      , 'expected #{this} to be falsy');
	  });

	  /**
	   * ### .true
	   *
	   * Asserts that the target is `true`.
	   *
	   *     expect(true).to.be.true;
	   *     expect(1).to.not.be.true;
	   *
	   * @name true
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('true', function () {
	    this.assert(
	        true === flag(this, 'object')
	      , 'expected #{this} to be true'
	      , 'expected #{this} to be false'
	      , this.negate ? false : true
	    );
	  });

	  /**
	   * ### .false
	   *
	   * Asserts that the target is `false`.
	   *
	   *     expect(false).to.be.false;
	   *     expect(0).to.not.be.false;
	   *
	   * @name false
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('false', function () {
	    this.assert(
	        false === flag(this, 'object')
	      , 'expected #{this} to be false'
	      , 'expected #{this} to be true'
	      , this.negate ? true : false
	    );
	  });

	  /**
	   * ### .null
	   *
	   * Asserts that the target is `null`.
	   *
	   *     expect(null).to.be.null;
	   *     expect(undefined).to.not.be.null;
	   *
	   * @name null
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('null', function () {
	    this.assert(
	        null === flag(this, 'object')
	      , 'expected #{this} to be null'
	      , 'expected #{this} not to be null'
	    );
	  });

	  /**
	   * ### .undefined
	   *
	   * Asserts that the target is `undefined`.
	   *
	   *     expect(undefined).to.be.undefined;
	   *     expect(null).to.not.be.undefined;
	   *
	   * @name undefined
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('undefined', function () {
	    this.assert(
	        undefined === flag(this, 'object')
	      , 'expected #{this} to be undefined'
	      , 'expected #{this} not to be undefined'
	    );
	  });

	  /**
	   * ### .NaN
	   * Asserts that the target is `NaN`.
	   *
	   *     expect('foo').to.be.NaN;
	   *     expect(4).not.to.be.NaN;
	   *
	   * @name NaN
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('NaN', function () {
	    this.assert(
	        isNaN(flag(this, 'object'))
	        , 'expected #{this} to be NaN'
	        , 'expected #{this} not to be NaN'
	    );
	  });

	  /**
	   * ### .exist
	   *
	   * Asserts that the target is neither `null` nor `undefined`.
	   *
	   *     var foo = 'hi'
	   *       , bar = null
	   *       , baz;
	   *
	   *     expect(foo).to.exist;
	   *     expect(bar).to.not.exist;
	   *     expect(baz).to.not.exist;
	   *
	   * @name exist
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('exist', function () {
	    this.assert(
	        null != flag(this, 'object')
	      , 'expected #{this} to exist'
	      , 'expected #{this} to not exist'
	    );
	  });


	  /**
	   * ### .empty
	   *
	   * Asserts that the target's length is `0`. For arrays and strings, it checks
	   * the `length` property. For objects, it gets the count of
	   * enumerable keys.
	   *
	   *     expect([]).to.be.empty;
	   *     expect('').to.be.empty;
	   *     expect({}).to.be.empty;
	   *
	   * @name empty
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('empty', function () {
	    var obj = flag(this, 'object')
	      , expected = obj;

	    if (Array.isArray(obj) || 'string' === typeof object) {
	      expected = obj.length;
	    } else if (typeof obj === 'object') {
	      expected = Object.keys(obj).length;
	    }

	    this.assert(
	        !expected
	      , 'expected #{this} to be empty'
	      , 'expected #{this} not to be empty'
	    );
	  });

	  /**
	   * ### .arguments
	   *
	   * Asserts that the target is an arguments object.
	   *
	   *     function test () {
	   *       expect(arguments).to.be.arguments;
	   *     }
	   *
	   * @name arguments
	   * @alias Arguments
	   * @namespace BDD
	   * @api public
	   */

	  function checkArguments () {
	    var obj = flag(this, 'object')
	      , type = Object.prototype.toString.call(obj);
	    this.assert(
	        '[object Arguments]' === type
	      , 'expected #{this} to be arguments but got ' + type
	      , 'expected #{this} to not be arguments'
	    );
	  }

	  Assertion.addProperty('arguments', checkArguments);
	  Assertion.addProperty('Arguments', checkArguments);

	  /**
	   * ### .equal(value)
	   *
	   * Asserts that the target is strictly equal (`===`) to `value`.
	   * Alternately, if the `deep` flag is set, asserts that
	   * the target is deeply equal to `value`.
	   *
	   *     expect('hello').to.equal('hello');
	   *     expect(42).to.equal(42);
	   *     expect(1).to.not.equal(true);
	   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
	   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
	   *
	   * @name equal
	   * @alias equals
	   * @alias eq
	   * @alias deep.equal
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertEqual (val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'deep')) {
	      return this.eql(val);
	    } else {
	      this.assert(
	          val === obj
	        , 'expected #{this} to equal #{exp}'
	        , 'expected #{this} to not equal #{exp}'
	        , val
	        , this._obj
	        , true
	      );
	    }
	  }

	  Assertion.addMethod('equal', assertEqual);
	  Assertion.addMethod('equals', assertEqual);
	  Assertion.addMethod('eq', assertEqual);

	  /**
	   * ### .eql(value)
	   *
	   * Asserts that the target is deeply equal to `value`.
	   *
	   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
	   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
	   *
	   * @name eql
	   * @alias eqls
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertEql(obj, msg) {
	    if (msg) flag(this, 'message', msg);
	    this.assert(
	        _.eql(obj, flag(this, 'object'))
	      , 'expected #{this} to deeply equal #{exp}'
	      , 'expected #{this} to not deeply equal #{exp}'
	      , obj
	      , this._obj
	      , true
	    );
	  }

	  Assertion.addMethod('eql', assertEql);
	  Assertion.addMethod('eqls', assertEql);

	  /**
	   * ### .above(value)
	   *
	   * Asserts that the target is greater than `value`.
	   *
	   *     expect(10).to.be.above(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *
	   * @name above
	   * @alias gt
	   * @alias greaterThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertAbove (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len > n
	        , 'expected #{this} to have a length above #{exp} but got #{act}'
	        , 'expected #{this} to not have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj > n
	        , 'expected #{this} to be above ' + n
	        , 'expected #{this} to be at most ' + n
	      );
	    }
	  }

	  Assertion.addMethod('above', assertAbove);
	  Assertion.addMethod('gt', assertAbove);
	  Assertion.addMethod('greaterThan', assertAbove);

	  /**
	   * ### .least(value)
	   *
	   * Asserts that the target is greater than or equal to `value`.
	   *
	   *     expect(10).to.be.at.least(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.least(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
	   *
	   * @name least
	   * @alias gte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertLeast (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= n
	        , 'expected #{this} to have a length at least #{exp} but got #{act}'
	        , 'expected #{this} to have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj >= n
	        , 'expected #{this} to be at least ' + n
	        , 'expected #{this} to be below ' + n
	      );
	    }
	  }

	  Assertion.addMethod('least', assertLeast);
	  Assertion.addMethod('gte', assertLeast);

	  /**
	   * ### .below(value)
	   *
	   * Asserts that the target is less than `value`.
	   *
	   *     expect(5).to.be.below(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *
	   * @name below
	   * @alias lt
	   * @alias lessThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertBelow (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len < n
	        , 'expected #{this} to have a length below #{exp} but got #{act}'
	        , 'expected #{this} to not have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj < n
	        , 'expected #{this} to be below ' + n
	        , 'expected #{this} to be at least ' + n
	      );
	    }
	  }

	  Assertion.addMethod('below', assertBelow);
	  Assertion.addMethod('lt', assertBelow);
	  Assertion.addMethod('lessThan', assertBelow);

	  /**
	   * ### .most(value)
	   *
	   * Asserts that the target is less than or equal to `value`.
	   *
	   *     expect(5).to.be.at.most(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.most(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
	   *
	   * @name most
	   * @alias lte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertMost (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len <= n
	        , 'expected #{this} to have a length at most #{exp} but got #{act}'
	        , 'expected #{this} to have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj <= n
	        , 'expected #{this} to be at most ' + n
	        , 'expected #{this} to be above ' + n
	      );
	    }
	  }

	  Assertion.addMethod('most', assertMost);
	  Assertion.addMethod('lte', assertMost);

	  /**
	   * ### .within(start, finish)
	   *
	   * Asserts that the target is within a range.
	   *
	   *     expect(7).to.be.within(5,10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a length range. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name within
	   * @param {Number} start lowerbound inclusive
	   * @param {Number} finish upperbound inclusive
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('within', function (start, finish, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , range = start + '..' + finish;
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= start && len <= finish
	        , 'expected #{this} to have a length within ' + range
	        , 'expected #{this} to not have a length within ' + range
	      );
	    } else {
	      this.assert(
	          obj >= start && obj <= finish
	        , 'expected #{this} to be within ' + range
	        , 'expected #{this} to not be within ' + range
	      );
	    }
	  });

	  /**
	   * ### .instanceof(constructor)
	   *
	   * Asserts that the target is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , Chai = new Tea('chai');
	   *
	   *     expect(Chai).to.be.an.instanceof(Tea);
	   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
	   *
	   * @name instanceof
	   * @param {Constructor} constructor
	   * @param {String} message _optional_
	   * @alias instanceOf
	   * @namespace BDD
	   * @api public
	   */

	  function assertInstanceOf (constructor, msg) {
	    if (msg) flag(this, 'message', msg);
	    var name = _.getName(constructor);
	    this.assert(
	        flag(this, 'object') instanceof constructor
	      , 'expected #{this} to be an instance of ' + name
	      , 'expected #{this} to not be an instance of ' + name
	    );
	  };

	  Assertion.addMethod('instanceof', assertInstanceOf);
	  Assertion.addMethod('instanceOf', assertInstanceOf);

	  /**
	   * ### .property(name, [value])
	   *
	   * Asserts that the target has a property `name`, optionally asserting that
	   * the value of that property is strictly equal to  `value`.
	   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
	   * references into objects and arrays.
	   *
	   *     // simple referencing
	   *     var obj = { foo: 'bar' };
	   *     expect(obj).to.have.property('foo');
	   *     expect(obj).to.have.property('foo', 'bar');
	   *
	   *     // deep referencing
	   *     var deepObj = {
	   *         green: { tea: 'matcha' }
	   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
	   *     };
	   *
	   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
	   *
	   * You can also use an array as the starting point of a `deep.property`
	   * assertion, or traverse nested arrays.
	   *
	   *     var arr = [
	   *         [ 'chai', 'matcha', 'konacha' ]
	   *       , [ { tea: 'chai' }
	   *         , { tea: 'matcha' }
	   *         , { tea: 'konacha' } ]
	   *     ];
	   *
	   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
	   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
	   *
	   * Furthermore, `property` changes the subject of the assertion
	   * to be the value of that property from the original object. This
	   * permits for further chainable assertions on that property.
	   *
	   *     expect(obj).to.have.property('foo')
	   *       .that.is.a('string');
	   *     expect(deepObj).to.have.property('green')
	   *       .that.is.an('object')
	   *       .that.deep.equals({ tea: 'matcha' });
	   *     expect(deepObj).to.have.property('teas')
	   *       .that.is.an('array')
	   *       .with.deep.property('[2]')
	   *         .that.deep.equals({ tea: 'konacha' });
	   *
	   * Note that dots and bracket in `name` must be backslash-escaped when
	   * the `deep` flag is set, while they must NOT be escaped when the `deep`
	   * flag is not set.
	   *
	   *     // simple referencing
	   *     var css = { '.link[target]': 42 };
	   *     expect(css).to.have.property('.link[target]', 42);
	   *
	   *     // deep referencing
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name property
	   * @alias deep.property
	   * @param {String} name
	   * @param {Mixed} value (optional)
	   * @param {String} message _optional_
	   * @returns value of property for chaining
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('property', function (name, val, msg) {
	    if (msg) flag(this, 'message', msg);

	    var isDeep = !!flag(this, 'deep')
	      , descriptor = isDeep ? 'deep property ' : 'property '
	      , negate = flag(this, 'negate')
	      , obj = flag(this, 'object')
	      , pathInfo = isDeep ? _.getPathInfo(name, obj) : null
	      , hasProperty = isDeep
	        ? pathInfo.exists
	        : _.hasProperty(name, obj)
	      , value = isDeep
	        ? pathInfo.value
	        : obj[name];

	    if (negate && arguments.length > 1) {
	      if (undefined === value) {
	        msg = (msg != null) ? msg + ': ' : '';
	        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
	      }
	    } else {
	      this.assert(
	          hasProperty
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
	        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
	    }

	    if (arguments.length > 1) {
	      this.assert(
	          val === value
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
	        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
	        , val
	        , value
	      );
	    }

	    flag(this, 'object', value);
	  });


	  /**
	   * ### .ownProperty(name)
	   *
	   * Asserts that the target has an own property `name`.
	   *
	   *     expect('test').to.have.ownProperty('length');
	   *
	   * @name ownProperty
	   * @alias haveOwnProperty
	   * @param {String} name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertOwnProperty (name, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        obj.hasOwnProperty(name)
	      , 'expected #{this} to have own property ' + _.inspect(name)
	      , 'expected #{this} to not have own property ' + _.inspect(name)
	    );
	  }

	  Assertion.addMethod('ownProperty', assertOwnProperty);
	  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

	  /**
	   * ### .ownPropertyDescriptor(name[, descriptor[, message]])
	   *
	   * Asserts that the target has an own property descriptor `name`, that optionally matches `descriptor`.
	   *
	   *     expect('test').to.have.ownPropertyDescriptor('length');
	   *     expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
	   *     expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
	   *     expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
	   *     expect('test').ownPropertyDescriptor('length').to.have.keys('value');
	   *
	   * @name ownPropertyDescriptor
	   * @alias haveOwnPropertyDescriptor
	   * @param {String} name
	   * @param {Object} descriptor _optional_
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertOwnPropertyDescriptor (name, descriptor, msg) {
	    if (typeof descriptor === 'string') {
	      msg = descriptor;
	      descriptor = null;
	    }
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
	    if (actualDescriptor && descriptor) {
	      this.assert(
	          _.eql(descriptor, actualDescriptor)
	        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor)
	        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor)
	        , descriptor
	        , actualDescriptor
	        , true
	      );
	    } else {
	      this.assert(
	          actualDescriptor
	        , 'expected #{this} to have an own property descriptor for ' + _.inspect(name)
	        , 'expected #{this} to not have an own property descriptor for ' + _.inspect(name)
	      );
	    }
	    flag(this, 'object', actualDescriptor);
	  }

	  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
	  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

	  /**
	   * ### .length
	   *
	   * Sets the `doLength` flag later used as a chain precursor to a value
	   * comparison for the `length` property.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * *Deprecation notice:* Using `length` as an assertion will be deprecated
	   * in version 2.4.0 and removed in 3.0.0. Code using the old style of
	   * asserting for `length` property value using `length(value)` should be
	   * switched to use `lengthOf(value)` instead.
	   *
	   * @name length
	   * @namespace BDD
	   * @api public
	   */

	  /**
	   * ### .lengthOf(value[, message])
	   *
	   * Asserts that the target's `length` property has
	   * the expected value.
	   *
	   *     expect([ 1, 2, 3]).to.have.lengthOf(3);
	   *     expect('foobar').to.have.lengthOf(6);
	   *
	   * @name lengthOf
	   * @param {Number} length
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertLengthChain () {
	    flag(this, 'doLength', true);
	  }

	  function assertLength (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).to.have.property('length');
	    var len = obj.length;

	    this.assert(
	        len == n
	      , 'expected #{this} to have a length of #{exp} but got #{act}'
	      , 'expected #{this} to not have a length of #{act}'
	      , n
	      , len
	    );
	  }

	  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
	  Assertion.addMethod('lengthOf', assertLength);

	  /**
	   * ### .match(regexp)
	   *
	   * Asserts that the target matches a regular expression.
	   *
	   *     expect('foobar').to.match(/^foo/);
	   *
	   * @name match
	   * @alias matches
	   * @param {RegExp} RegularExpression
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	  function assertMatch(re, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        re.exec(obj)
	      , 'expected #{this} to match ' + re
	      , 'expected #{this} not to match ' + re
	    );
	  }

	  Assertion.addMethod('match', assertMatch);
	  Assertion.addMethod('matches', assertMatch);

	  /**
	   * ### .string(string)
	   *
	   * Asserts that the string target contains another string.
	   *
	   *     expect('foobar').to.have.string('bar');
	   *
	   * @name string
	   * @param {String} string
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('string', function (str, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('string');

	    this.assert(
	        ~obj.indexOf(str)
	      , 'expected #{this} to contain ' + _.inspect(str)
	      , 'expected #{this} to not contain ' + _.inspect(str)
	    );
	  });


	  /**
	   * ### .keys(key1, [key2], [...])
	   *
	   * Asserts that the target contains any or all of the passed-in keys.
	   * Use in combination with `any`, `all`, `contains`, or `have` will affect
	   * what will pass.
	   *
	   * When used in conjunction with `any`, at least one key that is passed
	   * in must exist in the target object. This is regardless whether or not
	   * the `have` or `contain` qualifiers are used. Note, either `any` or `all`
	   * should be used in the assertion. If neither are used, the assertion is
	   * defaulted to `all`.
	   *
	   * When both `all` and `contain` are used, the target object must have at
	   * least all of the passed-in keys but may have more keys not listed.
	   *
	   * When both `all` and `have` are used, the target object must both contain
	   * all of the passed-in keys AND the number of keys in the target object must
	   * match the number of keys passed in (in other words, a target object must
	   * have all and only all of the passed-in keys).
	   *
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys({'bar': 6});
	   *
	   *
	   * @name keys
	   * @alias key
	   * @param {...String|Array|Object} keys
	   * @namespace BDD
	   * @api public
	   */

	  function assertKeys (keys) {
	    var obj = flag(this, 'object')
	      , str
	      , ok = true
	      , mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';

	    switch (_.type(keys)) {
	      case "array":
	        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
	        break;
	      case "object":
	        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
	        keys = Object.keys(keys);
	        break;
	      default:
	        keys = Array.prototype.slice.call(arguments);
	    }

	    if (!keys.length) throw new Error('keys required');

	    var actual = Object.keys(obj)
	      , expected = keys
	      , len = keys.length
	      , any = flag(this, 'any')
	      , all = flag(this, 'all');

	    if (!any && !all) {
	      all = true;
	    }

	    // Has any
	    if (any) {
	      var intersection = expected.filter(function(key) {
	        return ~actual.indexOf(key);
	      });
	      ok = intersection.length > 0;
	    }

	    // Has all
	    if (all) {
	      ok = keys.every(function(key){
	        return ~actual.indexOf(key);
	      });
	      if (!flag(this, 'negate') && !flag(this, 'contains')) {
	        ok = ok && keys.length == actual.length;
	      }
	    }

	    // Key string
	    if (len > 1) {
	      keys = keys.map(function(key){
	        return _.inspect(key);
	      });
	      var last = keys.pop();
	      if (all) {
	        str = keys.join(', ') + ', and ' + last;
	      }
	      if (any) {
	        str = keys.join(', ') + ', or ' + last;
	      }
	    } else {
	      str = _.inspect(keys[0]);
	    }

	    // Form
	    str = (len > 1 ? 'keys ' : 'key ') + str;

	    // Have / include
	    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

	    // Assertion
	    this.assert(
	        ok
	      , 'expected #{this} to ' + str
	      , 'expected #{this} to not ' + str
	      , expected.slice(0).sort()
	      , actual.sort()
	      , true
	    );
	  }

	  Assertion.addMethod('keys', assertKeys);
	  Assertion.addMethod('key', assertKeys);

	  /**
	   * ### .throw(constructor)
	   *
	   * Asserts that the function target will throw a specific error, or specific type of error
	   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
	   * for the error's message.
	   *
	   *     var err = new ReferenceError('This is a bad function.');
	   *     var fn = function () { throw err; }
	   *     expect(fn).to.throw(ReferenceError);
	   *     expect(fn).to.throw(Error);
	   *     expect(fn).to.throw(/bad function/);
	   *     expect(fn).to.not.throw('good function');
	   *     expect(fn).to.throw(ReferenceError, /bad function/);
	   *     expect(fn).to.throw(err);
	   *
	   * Please note that when a throw expectation is negated, it will check each
	   * parameter independently, starting with error constructor type. The appropriate way
	   * to check for the existence of a type of error but for a message that does not match
	   * is to use `and`.
	   *
	   *     expect(fn).to.throw(ReferenceError)
	   *        .and.not.throw(/good function/);
	   *
	   * @name throw
	   * @alias throws
	   * @alias Throw
	   * @param {ErrorConstructor} constructor
	   * @param {String|RegExp} expected error message
	   * @param {String} message _optional_
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @returns error for chaining (null if no error)
	   * @namespace BDD
	   * @api public
	   */

	  function assertThrows (constructor, errMsg, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('function');

	    var thrown = false
	      , desiredError = null
	      , name = null
	      , thrownError = null;

	    if (arguments.length === 0) {
	      errMsg = null;
	      constructor = null;
	    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
	      errMsg = constructor;
	      constructor = null;
	    } else if (constructor && constructor instanceof Error) {
	      desiredError = constructor;
	      constructor = null;
	      errMsg = null;
	    } else if (typeof constructor === 'function') {
	      name = constructor.prototype.name;
	      if (!name || (name === 'Error' && constructor !== Error)) {
	        name = constructor.name || (new constructor()).name;
	      }
	    } else {
	      constructor = null;
	    }

	    try {
	      obj();
	    } catch (err) {
	      // first, check desired error
	      if (desiredError) {
	        this.assert(
	            err === desiredError
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp}'
	          , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	          , (err instanceof Error ? err.toString() : err)
	        );

	        flag(this, 'object', err);
	        return this;
	      }

	      // next, check constructor
	      if (constructor) {
	        this.assert(
	            err instanceof constructor
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp} but #{act} was thrown'
	          , name
	          , (err instanceof Error ? err.toString() : err)
	        );

	        if (!errMsg) {
	          flag(this, 'object', err);
	          return this;
	        }
	      }

	      // next, check message
	      var message = 'error' === _.type(err) && "message" in err
	        ? err.message
	        : '' + err;

	      if ((message != null) && errMsg && errMsg instanceof RegExp) {
	        this.assert(
	            errMsg.exec(message)
	          , 'expected #{this} to throw error matching #{exp} but got #{act}'
	          , 'expected #{this} to throw error not matching #{exp}'
	          , errMsg
	          , message
	        );

	        flag(this, 'object', err);
	        return this;
	      } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
	        this.assert(
	            ~message.indexOf(errMsg)
	          , 'expected #{this} to throw error including #{exp} but got #{act}'
	          , 'expected #{this} to throw error not including #{act}'
	          , errMsg
	          , message
	        );

	        flag(this, 'object', err);
	        return this;
	      } else {
	        thrown = true;
	        thrownError = err;
	      }
	    }

	    var actuallyGot = ''
	      , expectedThrown = name !== null
	        ? name
	        : desiredError
	          ? '#{exp}' //_.inspect(desiredError)
	          : 'an error';

	    if (thrown) {
	      actuallyGot = ' but #{act} was thrown'
	    }

	    this.assert(
	        thrown === true
	      , 'expected #{this} to throw ' + expectedThrown + actuallyGot
	      , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
	      , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	      , (thrownError instanceof Error ? thrownError.toString() : thrownError)
	    );

	    flag(this, 'object', thrownError);
	  };

	  Assertion.addMethod('throw', assertThrows);
	  Assertion.addMethod('throws', assertThrows);
	  Assertion.addMethod('Throw', assertThrows);

	  /**
	   * ### .respondTo(method)
	   *
	   * Asserts that the object or class target will respond to a method.
	   *
	   *     Klass.prototype.bar = function(){};
	   *     expect(Klass).to.respondTo('bar');
	   *     expect(obj).to.respondTo('bar');
	   *
	   * To check if a constructor will respond to a static function,
	   * set the `itself` flag.
	   *
	   *     Klass.baz = function(){};
	   *     expect(Klass).itself.to.respondTo('baz');
	   *
	   * @name respondTo
	   * @alias respondsTo
	   * @param {String} method
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function respondTo (method, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , itself = flag(this, 'itself')
	      , context = ('function' === _.type(obj) && !itself)
	        ? obj.prototype[method]
	        : obj[method];

	    this.assert(
	        'function' === typeof context
	      , 'expected #{this} to respond to ' + _.inspect(method)
	      , 'expected #{this} to not respond to ' + _.inspect(method)
	    );
	  }

	  Assertion.addMethod('respondTo', respondTo);
	  Assertion.addMethod('respondsTo', respondTo);

	  /**
	   * ### .itself
	   *
	   * Sets the `itself` flag, later used by the `respondTo` assertion.
	   *
	   *     function Foo() {}
	   *     Foo.bar = function() {}
	   *     Foo.prototype.baz = function() {}
	   *
	   *     expect(Foo).itself.to.respondTo('bar');
	   *     expect(Foo).itself.not.to.respondTo('baz');
	   *
	   * @name itself
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('itself', function () {
	    flag(this, 'itself', true);
	  });

	  /**
	   * ### .satisfy(method)
	   *
	   * Asserts that the target passes a given truth test.
	   *
	   *     expect(1).to.satisfy(function(num) { return num > 0; });
	   *
	   * @name satisfy
	   * @alias satisfies
	   * @param {Function} matcher
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function satisfy (matcher, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var result = matcher(obj);
	    this.assert(
	        result
	      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
	      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
	      , this.negate ? false : true
	      , result
	    );
	  }

	  Assertion.addMethod('satisfy', satisfy);
	  Assertion.addMethod('satisfies', satisfy);

	  /**
	   * ### .closeTo(expected, delta)
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     expect(1.5).to.be.closeTo(1, 0.5);
	   *
	   * @name closeTo
	   * @alias approximately
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function closeTo(expected, delta, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');

	    new Assertion(obj, msg).is.a('number');
	    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
	      throw new Error('the arguments to closeTo or approximately must be numbers');
	    }

	    this.assert(
	        Math.abs(obj - expected) <= delta
	      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
	      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
	    );
	  }

	  Assertion.addMethod('closeTo', closeTo);
	  Assertion.addMethod('approximately', closeTo);

	  function isSubsetOf(subset, superset, cmp) {
	    return subset.every(function(elem) {
	      if (!cmp) return superset.indexOf(elem) !== -1;

	      return superset.some(function(elem2) {
	        return cmp(elem, elem2);
	      });
	    })
	  }

	  /**
	   * ### .members(set)
	   *
	   * Asserts that the target is a superset of `set`,
	   * or that the target and `set` have the same strictly-equal (===) members.
	   * Alternately, if the `deep` flag is set, set members are compared for deep
	   * equality.
	   *
	   *     expect([1, 2, 3]).to.include.members([3, 2]);
	   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
	   *
	   *     expect([4, 2]).to.have.members([2, 4]);
	   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
	   *
	   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
	   *
	   * @name members
	   * @param {Array} set
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('members', function (subset, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');

	    new Assertion(obj).to.be.an('array');
	    new Assertion(subset).to.be.an('array');

	    var cmp = flag(this, 'deep') ? _.eql : undefined;

	    if (flag(this, 'contains')) {
	      return this.assert(
	          isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to be a superset of #{act}'
	        , 'expected #{this} to not be a superset of #{act}'
	        , obj
	        , subset
	      );
	    }

	    this.assert(
	        isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to have the same members as #{act}'
	        , 'expected #{this} to not have the same members as #{act}'
	        , obj
	        , subset
	    );
	  });

	  /**
	   * ### .oneOf(list)
	   *
	   * Assert that a value appears somewhere in the top level of array `list`.
	   *
	   *     expect('a').to.be.oneOf(['a', 'b', 'c']);
	   *     expect(9).to.not.be.oneOf(['z']);
	   *     expect([3]).to.not.be.oneOf([1, 2, [3]]);
	   *
	   *     var three = [3];
	   *     // for object-types, contents are not compared
	   *     expect(three).to.not.be.oneOf([1, 2, [3]]);
	   *     // comparing references works
	   *     expect(three).to.be.oneOf([1, 2, three]);
	   *
	   * @name oneOf
	   * @param {Array<*>} list
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function oneOf (list, msg) {
	    if (msg) flag(this, 'message', msg);
	    var expected = flag(this, 'object');
	    new Assertion(list).to.be.an('array');

	    this.assert(
	        list.indexOf(expected) > -1
	      , 'expected #{this} to be one of #{exp}'
	      , 'expected #{this} to not be one of #{exp}'
	      , list
	      , expected
	    );
	  }

	  Assertion.addMethod('oneOf', oneOf);


	  /**
	   * ### .change(function)
	   *
	   * Asserts that a function changes an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val += 3 };
	   *     var noChangeFn = function() { return 'foo' + 'bar'; }
	   *     expect(fn).to.change(obj, 'val');
	   *     expect(noChangeFn).to.not.change(obj, 'val')
	   *
	   * @name change
	   * @alias changes
	   * @alias Change
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertChanges (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(
	      initial !== object[prop]
	      , 'expected .' + prop + ' to change'
	      , 'expected .' + prop + ' to not change'
	    );
	  }

	  Assertion.addChainableMethod('change', assertChanges);
	  Assertion.addChainableMethod('changes', assertChanges);

	  /**
	   * ### .increase(function)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     expect(fn).to.increase(obj, 'val');
	   *
	   * @name increase
	   * @alias increases
	   * @alias Increase
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertIncreases (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(
	      object[prop] - initial > 0
	      , 'expected .' + prop + ' to increase'
	      , 'expected .' + prop + ' to not increase'
	    );
	  }

	  Assertion.addChainableMethod('increase', assertIncreases);
	  Assertion.addChainableMethod('increases', assertIncreases);

	  /**
	   * ### .decrease(function)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     expect(fn).to.decrease(obj, 'val');
	   *
	   * @name decrease
	   * @alias decreases
	   * @alias Decrease
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertDecreases (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(
	      object[prop] - initial < 0
	      , 'expected .' + prop + ' to decrease'
	      , 'expected .' + prop + ' to not decrease'
	    );
	  }

	  Assertion.addChainableMethod('decrease', assertDecreases);
	  Assertion.addChainableMethod('decreases', assertDecreases);

	  /**
	   * ### .extensible
	   *
	   * Asserts that the target is extensible (can have new properties added to
	   * it).
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect({}).to.be.extensible;
	   *     expect(nonExtensibleObject).to.not.be.extensible;
	   *     expect(sealedObject).to.not.be.extensible;
	   *     expect(frozenObject).to.not.be.extensible;
	   *
	   * @name extensible
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('extensible', function() {
	    var obj = flag(this, 'object');

	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.

	    var isExtensible;

	    try {
	      isExtensible = Object.isExtensible(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isExtensible = false;
	      else throw err;
	    }

	    this.assert(
	      isExtensible
	      , 'expected #{this} to be extensible'
	      , 'expected #{this} to not be extensible'
	    );
	  });

	  /**
	   * ### .sealed
	   *
	   * Asserts that the target is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(sealedObject).to.be.sealed;
	   *     expect(frozenObject).to.be.sealed;
	   *     expect({}).to.not.be.sealed;
	   *
	   * @name sealed
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('sealed', function() {
	    var obj = flag(this, 'object');

	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.

	    var isSealed;

	    try {
	      isSealed = Object.isSealed(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isSealed = true;
	      else throw err;
	    }

	    this.assert(
	      isSealed
	      , 'expected #{this} to be sealed'
	      , 'expected #{this} to not be sealed'
	    );
	  });

	  /**
	   * ### .frozen
	   *
	   * Asserts that the target is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(frozenObject).to.be.frozen;
	   *     expect({}).to.not.be.frozen;
	   *
	   * @name frozen
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('frozen', function() {
	    var obj = flag(this, 'object');

	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.

	    var isFrozen;

	    try {
	      isFrozen = Object.isFrozen(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isFrozen = true;
	      else throw err;
	    }

	    this.assert(
	      isFrozen
	      , 'expected #{this} to be frozen'
	      , 'expected #{this} to not be frozen'
	    );
	  });
	};


/***/ },
/* 73 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {
	  chai.expect = function (val, message) {
	    return new chai.Assertion(val, message);
	  };

	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Expect
	   * @api public
	   */

	  chai.expect.fail = function (actual, expected, message, operator) {
	    message = message || 'expect.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, chai.expect.fail);
	  };
	};


/***/ },
/* 74 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {
	  var Assertion = chai.Assertion;

	  function loadShould () {
	    // explicitly define this method as function as to have it's name to include as `ssfi`
	    function shouldGetter() {
	      if (this instanceof String || this instanceof Number || this instanceof Boolean ) {
	        return new Assertion(this.valueOf(), null, shouldGetter);
	      }
	      return new Assertion(this, null, shouldGetter);
	    }
	    function shouldSetter(value) {
	      // See https://github.com/chaijs/chai/issues/86: this makes
	      // `whatever.should = someValue` actually set `someValue`, which is
	      // especially useful for `global.should = require('chai').should()`.
	      //
	      // Note that we have to use [[DefineProperty]] instead of [[Put]]
	      // since otherwise we would trigger this very setter!
	      Object.defineProperty(this, 'should', {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    }
	    // modify Object.prototype to have `should`
	    Object.defineProperty(Object.prototype, 'should', {
	      set: shouldSetter
	      , get: shouldGetter
	      , configurable: true
	    });

	    var should = {};

	    /**
	     * ### .fail(actual, expected, [message], [operator])
	     *
	     * Throw a failure.
	     *
	     * @name fail
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @param {String} operator
	     * @namespace Should
	     * @api public
	     */

	    should.fail = function (actual, expected, message, operator) {
	      message = message || 'should.fail()';
	      throw new chai.AssertionError(message, {
	          actual: actual
	        , expected: expected
	        , operator: operator
	      }, should.fail);
	    };

	    /**
	     * ### .equal(actual, expected, [message])
	     *
	     * Asserts non-strict equality (`==`) of `actual` and `expected`.
	     *
	     *     should.equal(3, '3', '== coerces values to strings');
	     *
	     * @name equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */

	    should.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.equal(val2);
	    };

	    /**
	     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
	     *
	     * Asserts that `function` will throw an error that is an instance of
	     * `constructor`, or alternately that it will throw an error with message
	     * matching `regexp`.
	     *
	     *     should.throw(fn, 'function throws a reference error');
	     *     should.throw(fn, /function throws a reference error/);
	     *     should.throw(fn, ReferenceError);
	     *     should.throw(fn, ReferenceError, 'function throws a reference error');
	     *     should.throw(fn, ReferenceError, /function throws a reference error/);
	     *
	     * @name throw
	     * @alias Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */

	    should.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.Throw(errt, errs);
	    };

	    /**
	     * ### .exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var foo = 'hi';
	     *
	     *     should.exist(foo, 'foo exists');
	     *
	     * @name exist
	     * @namespace Should
	     * @api public
	     */

	    should.exist = function (val, msg) {
	      new Assertion(val, msg).to.exist;
	    }

	    // negation
	    should.not = {}

	    /**
	     * ### .not.equal(actual, expected, [message])
	     *
	     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	     *
	     *     should.not.equal(3, 4, 'these numbers are not equal');
	     *
	     * @name not.equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */

	    should.not.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.not.equal(val2);
	    };

	    /**
	     * ### .throw(function, [constructor/regexp], [message])
	     *
	     * Asserts that `function` will _not_ throw an error that is an instance of
	     * `constructor`, or alternately that it will not throw an error with message
	     * matching `regexp`.
	     *
	     *     should.not.throw(fn, Error, 'function does not throw');
	     *
	     * @name not.throw
	     * @alias not.Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */

	    should.not.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.not.Throw(errt, errs);
	    };

	    /**
	     * ### .not.exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var bar = null;
	     *
	     *     should.not.exist(bar, 'bar does not exist');
	     *
	     * @name not.exist
	     * @namespace Should
	     * @api public
	     */

	    should.not.exist = function (val, msg) {
	      new Assertion(val, msg).to.not.exist;
	    }

	    should['throw'] = should['Throw'];
	    should.not['throw'] = should.not['Throw'];

	    return should;
	  };

	  chai.should = loadShould;
	  chai.Should = loadShould;
	};


/***/ },
/* 75 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */


	module.exports = function (chai, util) {

	  /*!
	   * Chai dependencies.
	   */

	  var Assertion = chai.Assertion
	    , flag = util.flag;

	  /*!
	   * Module export.
	   */

	  /**
	   * ### assert(expression, message)
	   *
	   * Write your own test expressions.
	   *
	   *     assert('foo' !== 'bar', 'foo is not bar');
	   *     assert(Array.isArray([]), 'empty arrays are arrays');
	   *
	   * @param {Mixed} expression to test for truthiness
	   * @param {String} message to display on error
	   * @name assert
	   * @namespace Assert
	   * @api public
	   */

	  var assert = chai.assert = function (express, errmsg) {
	    var test = new Assertion(null, null, chai.assert);
	    test.assert(
	        express
	      , errmsg
	      , '[ negation message unavailable ]'
	    );
	  };

	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure. Node.js `assert` module-compatible.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Assert
	   * @api public
	   */

	  assert.fail = function (actual, expected, message, operator) {
	    message = message || 'assert.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, assert.fail);
	  };

	  /**
	   * ### .isOk(object, [message])
	   *
	   * Asserts that `object` is truthy.
	   *
	   *     assert.isOk('everything', 'everything is ok');
	   *     assert.isOk(false, 'this will fail');
	   *
	   * @name isOk
	   * @alias ok
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isOk = function (val, msg) {
	    new Assertion(val, msg).is.ok;
	  };

	  /**
	   * ### .isNotOk(object, [message])
	   *
	   * Asserts that `object` is falsy.
	   *
	   *     assert.isNotOk('everything', 'this will fail');
	   *     assert.isNotOk(false, 'this will pass');
	   *
	   * @name isNotOk
	   * @alias notOk
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotOk = function (val, msg) {
	    new Assertion(val, msg).is.not.ok;
	  };

	  /**
	   * ### .equal(actual, expected, [message])
	   *
	   * Asserts non-strict equality (`==`) of `actual` and `expected`.
	   *
	   *     assert.equal(3, '3', '== coerces values to strings');
	   *
	   * @name equal
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.equal = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.equal);

	    test.assert(
	        exp == flag(test, 'object')
	      , 'expected #{this} to equal #{exp}'
	      , 'expected #{this} to not equal #{act}'
	      , exp
	      , act
	    );
	  };

	  /**
	   * ### .notEqual(actual, expected, [message])
	   *
	   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	   *
	   *     assert.notEqual(3, 4, 'these numbers are not equal');
	   *
	   * @name notEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notEqual = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.notEqual);

	    test.assert(
	        exp != flag(test, 'object')
	      , 'expected #{this} to not equal #{exp}'
	      , 'expected #{this} to equal #{act}'
	      , exp
	      , act
	    );
	  };

	  /**
	   * ### .strictEqual(actual, expected, [message])
	   *
	   * Asserts strict equality (`===`) of `actual` and `expected`.
	   *
	   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
	   *
	   * @name strictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.strictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.equal(exp);
	  };

	  /**
	   * ### .notStrictEqual(actual, expected, [message])
	   *
	   * Asserts strict inequality (`!==`) of `actual` and `expected`.
	   *
	   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
	   *
	   * @name notStrictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notStrictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.equal(exp);
	  };

	  /**
	   * ### .deepEqual(actual, expected, [message])
	   *
	   * Asserts that `actual` is deeply equal to `expected`.
	   *
	   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
	   *
	   * @name deepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.eql(exp);
	  };

	  /**
	   * ### .notDeepEqual(actual, expected, [message])
	   *
	   * Assert that `actual` is not deeply equal to `expected`.
	   *
	   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
	   *
	   * @name notDeepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notDeepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.eql(exp);
	  };

	   /**
	   * ### .isAbove(valueToCheck, valueToBeAbove, [message])
	   *
	   * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`
	   *
	   *     assert.isAbove(5, 2, '5 is strictly greater than 2');
	   *
	   * @name isAbove
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAbove
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isAbove = function (val, abv, msg) {
	    new Assertion(val, msg).to.be.above(abv);
	  };

	   /**
	   * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
	   *
	   * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`
	   *
	   *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
	   *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
	   *
	   * @name isAtLeast
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAtLeast
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isAtLeast = function (val, atlst, msg) {
	    new Assertion(val, msg).to.be.least(atlst);
	  };

	   /**
	   * ### .isBelow(valueToCheck, valueToBeBelow, [message])
	   *
	   * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`
	   *
	   *     assert.isBelow(3, 6, '3 is strictly less than 6');
	   *
	   * @name isBelow
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeBelow
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isBelow = function (val, blw, msg) {
	    new Assertion(val, msg).to.be.below(blw);
	  };

	   /**
	   * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
	   *
	   * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`
	   *
	   *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
	   *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
	   *
	   * @name isAtMost
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAtMost
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isAtMost = function (val, atmst, msg) {
	    new Assertion(val, msg).to.be.most(atmst);
	  };

	  /**
	   * ### .isTrue(value, [message])
	   *
	   * Asserts that `value` is true.
	   *
	   *     var teaServed = true;
	   *     assert.isTrue(teaServed, 'the tea has been served');
	   *
	   * @name isTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isTrue = function (val, msg) {
	    new Assertion(val, msg).is['true'];
	  };

	  /**
	   * ### .isNotTrue(value, [message])
	   *
	   * Asserts that `value` is not true.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotTrue(tea, 'great, time for tea!');
	   *
	   * @name isNotTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotTrue = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(true);
	  };

	  /**
	   * ### .isFalse(value, [message])
	   *
	   * Asserts that `value` is false.
	   *
	   *     var teaServed = false;
	   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
	   *
	   * @name isFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isFalse = function (val, msg) {
	    new Assertion(val, msg).is['false'];
	  };

	  /**
	   * ### .isNotFalse(value, [message])
	   *
	   * Asserts that `value` is not false.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotFalse(tea, 'great, time for tea!');
	   *
	   * @name isNotFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotFalse = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(false);
	  };

	  /**
	   * ### .isNull(value, [message])
	   *
	   * Asserts that `value` is null.
	   *
	   *     assert.isNull(err, 'there was no error');
	   *
	   * @name isNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNull = function (val, msg) {
	    new Assertion(val, msg).to.equal(null);
	  };

	  /**
	   * ### .isNotNull(value, [message])
	   *
	   * Asserts that `value` is not null.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotNull(tea, 'great, time for tea!');
	   *
	   * @name isNotNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotNull = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(null);
	  };

	  /**
	   * ### .isNaN
	   * Asserts that value is NaN
	   *
	   *    assert.isNaN('foo', 'foo is NaN');
	   *
	   * @name isNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNaN = function (val, msg) {
	    new Assertion(val, msg).to.be.NaN;
	  };

	  /**
	   * ### .isNotNaN
	   * Asserts that value is not NaN
	   *
	   *    assert.isNotNaN(4, '4 is not NaN');
	   *
	   * @name isNotNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	  assert.isNotNaN = function (val, msg) {
	    new Assertion(val, msg).not.to.be.NaN;
	  };

	  /**
	   * ### .isUndefined(value, [message])
	   *
	   * Asserts that `value` is `undefined`.
	   *
	   *     var tea;
	   *     assert.isUndefined(tea, 'no tea defined');
	   *
	   * @name isUndefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isUndefined = function (val, msg) {
	    new Assertion(val, msg).to.equal(undefined);
	  };

	  /**
	   * ### .isDefined(value, [message])
	   *
	   * Asserts that `value` is not `undefined`.
	   *
	   *     var tea = 'cup of chai';
	   *     assert.isDefined(tea, 'tea has been defined');
	   *
	   * @name isDefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isDefined = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(undefined);
	  };

	  /**
	   * ### .isFunction(value, [message])
	   *
	   * Asserts that `value` is a function.
	   *
	   *     function serveTea() { return 'cup of tea'; };
	   *     assert.isFunction(serveTea, 'great, we can have tea now');
	   *
	   * @name isFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isFunction = function (val, msg) {
	    new Assertion(val, msg).to.be.a('function');
	  };

	  /**
	   * ### .isNotFunction(value, [message])
	   *
	   * Asserts that `value` is _not_ a function.
	   *
	   *     var serveTea = [ 'heat', 'pour', 'sip' ];
	   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
	   *
	   * @name isNotFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotFunction = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('function');
	  };

	  /**
	   * ### .isObject(value, [message])
	   *
	   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   * _The assertion does not match subclassed objects._
	   *
	   *     var selection = { name: 'Chai', serve: 'with spices' };
	   *     assert.isObject(selection, 'tea selection is an object');
	   *
	   * @name isObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isObject = function (val, msg) {
	    new Assertion(val, msg).to.be.a('object');
	  };

	  /**
	   * ### .isNotObject(value, [message])
	   *
	   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   *
	   *     var selection = 'chai'
	   *     assert.isNotObject(selection, 'tea selection is not an object');
	   *     assert.isNotObject(null, 'null is not an object');
	   *
	   * @name isNotObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotObject = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('object');
	  };

	  /**
	   * ### .isArray(value, [message])
	   *
	   * Asserts that `value` is an array.
	   *
	   *     var menu = [ 'green', 'chai', 'oolong' ];
	   *     assert.isArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isArray = function (val, msg) {
	    new Assertion(val, msg).to.be.an('array');
	  };

	  /**
	   * ### .isNotArray(value, [message])
	   *
	   * Asserts that `value` is _not_ an array.
	   *
	   *     var menu = 'green|chai|oolong';
	   *     assert.isNotArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isNotArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotArray = function (val, msg) {
	    new Assertion(val, msg).to.not.be.an('array');
	  };

	  /**
	   * ### .isString(value, [message])
	   *
	   * Asserts that `value` is a string.
	   *
	   *     var teaOrder = 'chai';
	   *     assert.isString(teaOrder, 'order placed');
	   *
	   * @name isString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isString = function (val, msg) {
	    new Assertion(val, msg).to.be.a('string');
	  };

	  /**
	   * ### .isNotString(value, [message])
	   *
	   * Asserts that `value` is _not_ a string.
	   *
	   *     var teaOrder = 4;
	   *     assert.isNotString(teaOrder, 'order placed');
	   *
	   * @name isNotString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotString = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('string');
	  };

	  /**
	   * ### .isNumber(value, [message])
	   *
	   * Asserts that `value` is a number.
	   *
	   *     var cups = 2;
	   *     assert.isNumber(cups, 'how many cups');
	   *
	   * @name isNumber
	   * @param {Number} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNumber = function (val, msg) {
	    new Assertion(val, msg).to.be.a('number');
	  };

	  /**
	   * ### .isNotNumber(value, [message])
	   *
	   * Asserts that `value` is _not_ a number.
	   *
	   *     var cups = '2 cups please';
	   *     assert.isNotNumber(cups, 'how many cups');
	   *
	   * @name isNotNumber
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotNumber = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('number');
	  };

	  /**
	   * ### .isBoolean(value, [message])
	   *
	   * Asserts that `value` is a boolean.
	   *
	   *     var teaReady = true
	   *       , teaServed = false;
	   *
	   *     assert.isBoolean(teaReady, 'is the tea ready');
	   *     assert.isBoolean(teaServed, 'has tea been served');
	   *
	   * @name isBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isBoolean = function (val, msg) {
	    new Assertion(val, msg).to.be.a('boolean');
	  };

	  /**
	   * ### .isNotBoolean(value, [message])
	   *
	   * Asserts that `value` is _not_ a boolean.
	   *
	   *     var teaReady = 'yep'
	   *       , teaServed = 'nope';
	   *
	   *     assert.isNotBoolean(teaReady, 'is the tea ready');
	   *     assert.isNotBoolean(teaServed, 'has tea been served');
	   *
	   * @name isNotBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotBoolean = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('boolean');
	  };

	  /**
	   * ### .typeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
	   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
	   *     assert.typeOf('tea', 'string', 'we have a string');
	   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
	   *     assert.typeOf(null, 'null', 'we have a null');
	   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
	   *
	   * @name typeOf
	   * @param {Mixed} value
	   * @param {String} name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.typeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.a(type);
	  };

	  /**
	   * ### .notTypeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is _not_ `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
	   *
	   * @name notTypeOf
	   * @param {Mixed} value
	   * @param {String} typeof name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notTypeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.a(type);
	  };

	  /**
	   * ### .instanceOf(object, constructor, [message])
	   *
	   * Asserts that `value` is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new Tea('chai');
	   *
	   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
	   *
	   * @name instanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.instanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.instanceOf(type);
	  };

	  /**
	   * ### .notInstanceOf(object, constructor, [message])
	   *
	   * Asserts `value` is not an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new String('chai');
	   *
	   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
	   *
	   * @name notInstanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notInstanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.instanceOf(type);
	  };

	  /**
	   * ### .include(haystack, needle, [message])
	   *
	   * Asserts that `haystack` includes `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
	   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
	   *
	   * @name include
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.include = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.include).include(inc);
	  };

	  /**
	   * ### .notInclude(haystack, needle, [message])
	   *
	   * Asserts that `haystack` does not include `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.notInclude('foobar', 'baz', 'string not include substring');
	   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
	   *
	   * @name notInclude
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notInclude = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.notInclude).not.include(inc);
	  };

	  /**
	   * ### .match(value, regexp, [message])
	   *
	   * Asserts that `value` matches the regular expression `regexp`.
	   *
	   *     assert.match('foobar', /^foo/, 'regexp matches');
	   *
	   * @name match
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.match = function (exp, re, msg) {
	    new Assertion(exp, msg).to.match(re);
	  };

	  /**
	   * ### .notMatch(value, regexp, [message])
	   *
	   * Asserts that `value` does not match the regular expression `regexp`.
	   *
	   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
	   *
	   * @name notMatch
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notMatch = function (exp, re, msg) {
	    new Assertion(exp, msg).to.not.match(re);
	  };

	  /**
	   * ### .property(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`.
	   *
	   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
	   *
	   * @name property
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.property = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.property(prop);
	  };

	  /**
	   * ### .notProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`.
	   *
	   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
	   *
	   * @name notProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop);
	  };

	  /**
	   * ### .deepProperty(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`, which can be a
	   * string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
	   *
	   * @name deepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop);
	  };

	  /**
	   * ### .notDeepProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`, which
	   * can be a string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
	   *
	   * @name notDeepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notDeepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop);
	  };

	  /**
	   * ### .propertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`.
	   *
	   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
	   *
	   * @name propertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.propertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.property(prop, val);
	  };

	  /**
	   * ### .propertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`.
	   *
	   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
	   *
	   * @name propertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.propertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop, val);
	  };

	  /**
	   * ### .deepPropertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`. `property` can use dot- and bracket-notation for deep
	   * reference.
	   *
	   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
	   *
	   * @name deepPropertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepPropertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop, val);
	  };

	  /**
	   * ### .deepPropertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`. `property` can use dot- and
	   * bracket-notation for deep reference.
	   *
	   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
	   *
	   * @name deepPropertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
	  };

	  /**
	   * ### .lengthOf(object, length, [message])
	   *
	   * Asserts that `object` has a `length` property with the expected value.
	   *
	   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
	   *     assert.lengthOf('foobar', 6, 'string has length of 6');
	   *
	   * @name lengthOf
	   * @param {Mixed} object
	   * @param {Number} length
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.lengthOf = function (exp, len, msg) {
	    new Assertion(exp, msg).to.have.length(len);
	  };

	  /**
	   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
	   *
	   * Asserts that `function` will throw an error that is an instance of
	   * `constructor`, or alternately that it will throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.throws(fn, 'function throws a reference error');
	   *     assert.throws(fn, /function throws a reference error/);
	   *     assert.throws(fn, ReferenceError);
	   *     assert.throws(fn, ReferenceError, 'function throws a reference error');
	   *     assert.throws(fn, ReferenceError, /function throws a reference error/);
	   *
	   * @name throws
	   * @alias throw
	   * @alias Throw
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */

	  assert.throws = function (fn, errt, errs, msg) {
	    if ('string' === typeof errt || errt instanceof RegExp) {
	      errs = errt;
	      errt = null;
	    }

	    var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
	    return flag(assertErr, 'object');
	  };

	  /**
	   * ### .doesNotThrow(function, [constructor/regexp], [message])
	   *
	   * Asserts that `function` will _not_ throw an error that is an instance of
	   * `constructor`, or alternately that it will not throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.doesNotThrow(fn, Error, 'function does not throw');
	   *
	   * @name doesNotThrow
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */

	  assert.doesNotThrow = function (fn, type, msg) {
	    if ('string' === typeof type) {
	      msg = type;
	      type = null;
	    }

	    new Assertion(fn, msg).to.not.Throw(type);
	  };

	  /**
	   * ### .operator(val1, operator, val2, [message])
	   *
	   * Compares two values using `operator`.
	   *
	   *     assert.operator(1, '<', 2, 'everything is ok');
	   *     assert.operator(1, '>', 2, 'this will fail');
	   *
	   * @name operator
	   * @param {Mixed} val1
	   * @param {String} operator
	   * @param {Mixed} val2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.operator = function (val, operator, val2, msg) {
	    var ok;
	    switch(operator) {
	      case '==':
	        ok = val == val2;
	        break;
	      case '===':
	        ok = val === val2;
	        break;
	      case '>':
	        ok = val > val2;
	        break;
	      case '>=':
	        ok = val >= val2;
	        break;
	      case '<':
	        ok = val < val2;
	        break;
	      case '<=':
	        ok = val <= val2;
	        break;
	      case '!=':
	        ok = val != val2;
	        break;
	      case '!==':
	        ok = val !== val2;
	        break;
	      default:
	        throw new Error('Invalid operator "' + operator + '"');
	    }
	    var test = new Assertion(ok, msg);
	    test.assert(
	        true === flag(test, 'object')
	      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
	      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
	  };

	  /**
	   * ### .closeTo(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name closeTo
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.closeTo = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.closeTo(exp, delta);
	  };

	  /**
	   * ### .approximately(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name approximately
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.approximately = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.approximately(exp, delta);
	  };

	  /**
	   * ### .sameMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members.
	   * Order is not taken into account.
	   *
	   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
	   *
	   * @name sameMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.sameMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.members(set2);
	  }

	  /**
	   * ### .sameDeepMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members - using a deep equality checking.
	   * Order is not taken into account.
	   *
	   *     assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');
	   *
	   * @name sameDeepMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.sameDeepMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.deep.members(set2);
	  }

	  /**
	   * ### .includeMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset`.
	   * Order is not taken into account.
	   *
	   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
	   *
	   * @name includeMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.includeMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.members(subset);
	  }

	  /**
	   * ### .includeDeepMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset` - using deep equality checking.
	   * Order is not taken into account.
	   * Duplicates are ignored.
	   *
	   *     assert.includeDeepMembers([ {a: 1}, {b: 2}, {c: 3} ], [ {b: 2}, {a: 1}, {b: 2} ], 'include deep members');
	   *
	   * @name includeDeepMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.includeDeepMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.deep.members(subset);
	  }

	  /**
	   * ### .oneOf(inList, list, [message])
	   *
	   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
	   *
	   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
	   *
	   * @name oneOf
	   * @param {*} inList
	   * @param {Array<*>} list
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.oneOf = function (inList, list, msg) {
	    new Assertion(inList, msg).to.be.oneOf(list);
	  }

	   /**
	   * ### .changes(function, object, property)
	   *
	   * Asserts that a function changes the value of a property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 22 };
	   *     assert.changes(fn, obj, 'val');
	   *
	   * @name changes
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.changes = function (fn, obj, prop) {
	    new Assertion(fn).to.change(obj, prop);
	  }

	   /**
	   * ### .doesNotChange(function, object, property)
	   *
	   * Asserts that a function does not changes the value of a property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { console.log('foo'); };
	   *     assert.doesNotChange(fn, obj, 'val');
	   *
	   * @name doesNotChange
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.doesNotChange = function (fn, obj, prop) {
	    new Assertion(fn).to.not.change(obj, prop);
	  }

	   /**
	   * ### .increases(function, object, property)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 13 };
	   *     assert.increases(fn, obj, 'val');
	   *
	   * @name increases
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.increases = function (fn, obj, prop) {
	    new Assertion(fn).to.increase(obj, prop);
	  }

	   /**
	   * ### .doesNotIncrease(function, object, property)
	   *
	   * Asserts that a function does not increase object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 8 };
	   *     assert.doesNotIncrease(fn, obj, 'val');
	   *
	   * @name doesNotIncrease
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.doesNotIncrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.increase(obj, prop);
	  }

	   /**
	   * ### .decreases(function, object, property)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     assert.decreases(fn, obj, 'val');
	   *
	   * @name decreases
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.decreases = function (fn, obj, prop) {
	    new Assertion(fn).to.decrease(obj, prop);
	  }

	   /**
	   * ### .doesNotDecrease(function, object, property)
	   *
	   * Asserts that a function does not decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     assert.doesNotDecrease(fn, obj, 'val');
	   *
	   * @name doesNotDecrease
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.doesNotDecrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.decrease(obj, prop);
	  }

	  /*!
	   * ### .ifError(object)
	   *
	   * Asserts if value is not a false value, and throws if it is a true value.
	   * This is added to allow for chai to be a drop-in replacement for Node's
	   * assert class.
	   *
	   *     var err = new Error('I am a custom error');
	   *     assert.ifError(err); // Rethrows err!
	   *
	   * @name ifError
	   * @param {Object} object
	   * @namespace Assert
	   * @api public
	   */

	  assert.ifError = function (val) {
	    if (val) {
	      throw(val);
	    }
	  };

	  /**
	   * ### .isExtensible(object)
	   *
	   * Asserts that `object` is extensible (can have new properties added to it).
	   *
	   *     assert.isExtensible({});
	   *
	   * @name isExtensible
	   * @alias extensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.be.extensible;
	  };

	  /**
	   * ### .isNotExtensible(object)
	   *
	   * Asserts that `object` is _not_ extensible.
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freese({});
	   *
	   *     assert.isNotExtensible(nonExtensibleObject);
	   *     assert.isNotExtensible(sealedObject);
	   *     assert.isNotExtensible(frozenObject);
	   *
	   * @name isNotExtensible
	   * @alias notExtensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.extensible;
	  };

	  /**
	   * ### .isSealed(object)
	   *
	   * Asserts that `object` is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.seal({});
	   *
	   *     assert.isSealed(sealedObject);
	   *     assert.isSealed(frozenObject);
	   *
	   * @name isSealed
	   * @alias sealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.be.sealed;
	  };

	  /**
	   * ### .isNotSealed(object)
	   *
	   * Asserts that `object` is _not_ sealed.
	   *
	   *     assert.isNotSealed({});
	   *
	   * @name isNotSealed
	   * @alias notSealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.sealed;
	  };

	  /**
	   * ### .isFrozen(object)
	   *
	   * Asserts that `object` is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *     assert.frozen(frozenObject);
	   *
	   * @name isFrozen
	   * @alias frozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.be.frozen;
	  };

	  /**
	   * ### .isNotFrozen(object)
	   *
	   * Asserts that `object` is _not_ frozen.
	   *
	   *     assert.isNotFrozen({});
	   *
	   * @name isNotFrozen
	   * @alias notFrozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.frozen;
	  };

	  /*!
	   * Aliases.
	   */

	  (function alias(name, as){
	    assert[as] = assert[name];
	    return alias;
	  })
	  ('isOk', 'ok')
	  ('isNotOk', 'notOk')
	  ('throws', 'throw')
	  ('throws', 'Throw')
	  ('isExtensible', 'extensible')
	  ('isNotExtensible', 'notExtensible')
	  ('isSealed', 'sealed')
	  ('isNotSealed', 'notSealed')
	  ('isFrozen', 'frozen')
	  ('isNotFrozen', 'notFrozen');
	};


/***/ }
/******/ ])
});
;