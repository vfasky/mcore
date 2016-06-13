(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
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
	 * mcoreApp Test Tool
	 * @author vfasky <vfasky@gmail.com>
	 */
	'use strict';
	var mcoreapp;

	if (!document.getElementById('mocha')) {
	  document.write('<div id="mocha"></div>');
	}

	__webpack_require__(27);

	__webpack_require__(31);

	window.mocha.setup('bdd');

	mcoreapp = __webpack_require__(38);

	mcoreapp.TestApp = __webpack_require__(39);

	mcoreapp.expect = __webpack_require__(41).expect;

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
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n\nbody {\n  margin:0;\n}\n\n#mocha {\n  font: 20px/1.5 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 60px 50px;\n}\n\n#mocha ul,\n#mocha li {\n  margin: 0;\n  padding: 0;\n}\n\n#mocha ul {\n  list-style: none;\n}\n\n#mocha h1,\n#mocha h2 {\n  margin: 0;\n}\n\n#mocha h1 {\n  margin-top: 15px;\n  font-size: 1em;\n  font-weight: 200;\n}\n\n#mocha h1 a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha h1 a:hover {\n  text-decoration: underline;\n}\n\n#mocha .suite .suite h1 {\n  margin-top: 0;\n  font-size: .8em;\n}\n\n#mocha .hidden {\n  display: none;\n}\n\n#mocha h2 {\n  font-size: 12px;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n#mocha .suite {\n  margin-left: 15px;\n}\n\n#mocha .test {\n  margin-left: 15px;\n  overflow: hidden;\n}\n\n#mocha .test.pending:hover h2::after {\n  content: '(pending)';\n  font-family: arial, sans-serif;\n}\n\n#mocha .test.pass.medium .duration {\n  background: #c09853;\n}\n\n#mocha .test.pass.slow .duration {\n  background: #b94a48;\n}\n\n#mocha .test.pass::before {\n  content: '\\2713';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #00d6b2;\n}\n\n#mocha .test.pass .duration {\n  font-size: 9px;\n  margin-left: 5px;\n  padding: 2px 5px;\n  color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n  border-radius: 5px;\n}\n\n#mocha .test.pass.fast .duration {\n  display: none;\n}\n\n#mocha .test.pending {\n  color: #0b97c4;\n}\n\n#mocha .test.pending::before {\n  content: '\\25E6';\n  color: #0b97c4;\n}\n\n#mocha .test.fail {\n  color: #c00;\n}\n\n#mocha .test.fail pre {\n  color: black;\n}\n\n#mocha .test.fail::before {\n  content: '\\2716';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #c00;\n}\n\n#mocha .test pre.error {\n  color: #c00;\n  max-height: 300px;\n  overflow: auto;\n}\n\n#mocha .test .html-error {\n  overflow: auto;\n  color: black;\n  line-height: 1.5;\n  display: block;\n  float: left;\n  clear: left;\n  font: 12px/1.5 monaco, monospace;\n  margin: 5px;\n  padding: 15px;\n  border: 1px solid #eee;\n  max-width: 85%; /*(1)*/\n  max-width: calc(100% - 42px); /*(2)*/\n  max-height: 300px;\n  word-wrap: break-word;\n  border-bottom-color: #ddd;\n  -webkit-border-radius: 3px;\n  -webkit-box-shadow: 0 1px 3px #eee;\n  -moz-border-radius: 3px;\n  -moz-box-shadow: 0 1px 3px #eee;\n  border-radius: 3px;\n}\n\n#mocha .test .html-error pre.error {\n  border: none;\n  -webkit-border-radius: none;\n  -webkit-box-shadow: none;\n  -moz-border-radius: none;\n  -moz-box-shadow: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 18px;\n  max-height: none;\n}\n\n/**\n * (1): approximate for browsers not supporting calc\n * (2): 42 = 2*15 + 2*10 + 2*1 (padding + margin + border)\n *      ^^ seriously\n */\n#mocha .test pre {\n  display: block;\n  float: left;\n  clear: left;\n  font: 12px/1.5 monaco, monospace;\n  margin: 5px;\n  padding: 15px;\n  border: 1px solid #eee;\n  max-width: 85%; /*(1)*/\n  max-width: calc(100% - 42px); /*(2)*/\n  word-wrap: break-word;\n  border-bottom-color: #ddd;\n  -webkit-border-radius: 3px;\n  -webkit-box-shadow: 0 1px 3px #eee;\n  -moz-border-radius: 3px;\n  -moz-box-shadow: 0 1px 3px #eee;\n  border-radius: 3px;\n}\n\n#mocha .test h2 {\n  position: relative;\n}\n\n#mocha .test a.replay {\n  position: absolute;\n  top: 3px;\n  right: 0;\n  text-decoration: none;\n  vertical-align: middle;\n  display: block;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  text-align: center;\n  background: #eee;\n  font-size: 15px;\n  -moz-border-radius: 15px;\n  border-radius: 15px;\n  -webkit-transition: opacity 200ms;\n  -moz-transition: opacity 200ms;\n  transition: opacity 200ms;\n  opacity: 0.3;\n  color: #888;\n}\n\n#mocha .test:hover a.replay {\n  opacity: 1;\n}\n\n#mocha-report.pass .test.fail {\n  display: none;\n}\n\n#mocha-report.fail .test.pass {\n  display: none;\n}\n\n#mocha-report.pending .test.pass,\n#mocha-report.pending .test.fail {\n  display: none;\n}\n#mocha-report.pending .test.pass.pending {\n  display: block;\n}\n\n#mocha-error {\n  color: #c00;\n  font-size: 1.5em;\n  font-weight: 100;\n  letter-spacing: 1px;\n}\n\n#mocha-stats {\n  position: fixed;\n  top: 15px;\n  right: 10px;\n  font-size: 12px;\n  margin: 0;\n  color: #888;\n  z-index: 1;\n}\n\n#mocha-stats .progress {\n  float: right;\n  padding-top: 0;\n  \n  /**\n   * Set safe initial values, so mochas .progress does not inherit these\n   * properties from Bootstrap .progress (which causes .progress height to\n   * equal line height set in Bootstrap).\n   */\n  height: auto;\n  box-shadow: none;\n  background-color: initial;\n}\n\n#mocha-stats em {\n  color: black;\n}\n\n#mocha-stats a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha-stats a:hover {\n  border-bottom: 1px solid #eee;\n}\n\n#mocha-stats li {\n  display: inline-block;\n  margin: 0 5px;\n  list-style: none;\n  padding-top: 11px;\n}\n\n#mocha-stats canvas {\n  width: 40px;\n  height: 40px;\n}\n\n#mocha code .comment { color: #ddd; }\n#mocha code .init { color: #2f6fad; }\n#mocha code .string { color: #5890ad; }\n#mocha code .keyword { color: #8a6343; }\n#mocha code .number { color: #2f6fad; }\n\n@media screen and (max-device-width: 480px) {\n  #mocha {\n    margin: 60px 0px;\n  }\n\n  #mocha #stats {\n    position: absolute;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, Buffer, setImmediate) {(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	(function (process,global){
	/**
	 * Shim process.stdout.
	 */

	process.stdout = require('browser-stdout')();

	var Mocha = require('./lib/mocha');

	/**
	 * Create a Mocha instance.
	 *
	 * @return {undefined}
	 */

	var mocha = new Mocha({ reporter: 'html' });

	/**
	 * Save timer references to avoid Sinon interfering (see GH-237).
	 */

	var Date = global.Date;
	var setTimeout = global.setTimeout;
	var setInterval = global.setInterval;
	var clearTimeout = global.clearTimeout;
	var clearInterval = global.clearInterval;

	var uncaughtExceptionHandlers = [];

	var originalOnerrorHandler = global.onerror;

	/**
	 * Remove uncaughtException listener.
	 * Revert to original onerror handler if previously defined.
	 */

	process.removeListener = function(e, fn){
	  if ('uncaughtException' == e) {
	    if (originalOnerrorHandler) {
	      global.onerror = originalOnerrorHandler;
	    } else {
	      global.onerror = function() {};
	    }
	    var i = Mocha.utils.indexOf(uncaughtExceptionHandlers, fn);
	    if (i != -1) { uncaughtExceptionHandlers.splice(i, 1); }
	  }
	};

	/**
	 * Implements uncaughtException listener.
	 */

	process.on = function(e, fn){
	  if ('uncaughtException' == e) {
	    global.onerror = function(err, url, line){
	      fn(new Error(err + ' (' + url + ':' + line + ')'));
	      return !mocha.allowUncaught;
	    };
	    uncaughtExceptionHandlers.push(fn);
	  }
	};

	// The BDD UI is registered by default, but no UI will be functional in the
	// browser without an explicit call to the overridden `mocha.ui` (see below).
	// Ensure that this default UI does not expose its methods to the global scope.
	mocha.suite.removeAllListeners('pre-require');

	var immediateQueue = []
	  , immediateTimeout;

	function timeslice() {
	  var immediateStart = new Date().getTime();
	  while (immediateQueue.length && (new Date().getTime() - immediateStart) < 100) {
	    immediateQueue.shift()();
	  }
	  if (immediateQueue.length) {
	    immediateTimeout = setTimeout(timeslice, 0);
	  } else {
	    immediateTimeout = null;
	  }
	}

	/**
	 * High-performance override of Runner.immediately.
	 */

	Mocha.Runner.immediately = function(callback) {
	  immediateQueue.push(callback);
	  if (!immediateTimeout) {
	    immediateTimeout = setTimeout(timeslice, 0);
	  }
	};

	/**
	 * Function to allow assertion libraries to throw errors directly into mocha.
	 * This is useful when running tests in a browser because window.onerror will
	 * only receive the 'message' attribute of the Error.
	 */
	mocha.throwError = function(err) {
	  Mocha.utils.forEach(uncaughtExceptionHandlers, function (fn) {
	    fn(err);
	  });
	  throw err;
	};

	/**
	 * Override ui to ensure that the ui functions are initialized.
	 * Normally this would happen in Mocha.prototype.loadFiles.
	 */

	mocha.ui = function(ui){
	  Mocha.prototype.ui.call(this, ui);
	  this.suite.emit('pre-require', global, null, this);
	  return this;
	};

	/**
	 * Setup mocha with the given setting options.
	 */

	mocha.setup = function(opts){
	  if ('string' == typeof opts) opts = { ui: opts };
	  for (var opt in opts) this[opt](opts[opt]);
	  return this;
	};

	/**
	 * Run mocha, returning the Runner.
	 */

	mocha.run = function(fn){
	  var options = mocha.options;
	  mocha.globals('location');

	  var query = Mocha.utils.parseQuery(global.location.search || '');
	  if (query.grep) mocha.grep(new RegExp(query.grep));
	  if (query.fgrep) mocha.grep(query.fgrep);
	  if (query.invert) mocha.invert();

	  return Mocha.prototype.run.call(mocha, function(err){
	    // The DOM Document is not available in Web Workers.
	    var document = global.document;
	    if (document && document.getElementById('mocha') && options.noHighlighting !== true) {
	      Mocha.utils.highlightTags('code');
	    }
	    if (fn) fn(err);
	  });
	};

	/**
	 * Expose the process shim.
	 * https://github.com/mochajs/mocha/pull/916
	 */

	Mocha.process = process;

	/**
	 * Expose mocha.
	 */

	global.Mocha = Mocha;
	global.mocha = mocha;

	// this allows test/acceptance/required-tokens.js to pass; thus,
	// you can now do `const describe = require('mocha').describe` in a
	// browser context (assuming browserification).  should fix #880
	module.exports = global;

	}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./lib/mocha":14,"_process":58,"browser-stdout":42}],2:[function(require,module,exports){
	/* eslint-disable no-unused-vars */
	module.exports = function(type) {
	  return function() {};
	};

	},{}],3:[function(require,module,exports){
	/**
	 * Module exports.
	 */

	exports.EventEmitter = EventEmitter;

	/**
	 * Object#toString reference.
	 */
	var objToString = Object.prototype.toString;

	/**
	 * Check if a value is an array.
	 *
	 * @api private
	 * @param {*} val The value to test.
	 * @return {boolean} true if the value is an array, otherwise false.
	 */
	function isArray(val) {
	  return objToString.call(val) === '[object Array]';
	}

	/**
	 * Event emitter constructor.
	 *
	 * @api public
	 */
	function EventEmitter() {}

	/**
	 * Add a listener.
	 *
	 * @api public
	 * @param {string} name Event name.
	 * @param {Function} fn Event handler.
	 * @return {EventEmitter} Emitter instance.
	 */
	EventEmitter.prototype.on = function(name, fn) {
	  if (!this.$events) {
	    this.$events = {};
	  }

	  if (!this.$events[name]) {
	    this.$events[name] = fn;
	  } else if (isArray(this.$events[name])) {
	    this.$events[name].push(fn);
	  } else {
	    this.$events[name] = [this.$events[name], fn];
	  }

	  return this;
	};

	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	/**
	 * Adds a volatile listener.
	 *
	 * @api public
	 * @param {string} name Event name.
	 * @param {Function} fn Event handler.
	 * @return {EventEmitter} Emitter instance.
	 */
	EventEmitter.prototype.once = function(name, fn) {
	  var self = this;

	  function on() {
	    self.removeListener(name, on);
	    fn.apply(this, arguments);
	  }

	  on.listener = fn;
	  this.on(name, on);

	  return this;
	};

	/**
	 * Remove a listener.
	 *
	 * @api public
	 * @param {string} name Event name.
	 * @param {Function} fn Event handler.
	 * @return {EventEmitter} Emitter instance.
	 */
	EventEmitter.prototype.removeListener = function(name, fn) {
	  if (this.$events && this.$events[name]) {
	    var list = this.$events[name];

	    if (isArray(list)) {
	      var pos = -1;

	      for (var i = 0, l = list.length; i < l; i++) {
	        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
	          pos = i;
	          break;
	        }
	      }

	      if (pos < 0) {
	        return this;
	      }

	      list.splice(pos, 1);

	      if (!list.length) {
	        delete this.$events[name];
	      }
	    } else if (list === fn || (list.listener && list.listener === fn)) {
	      delete this.$events[name];
	    }
	  }

	  return this;
	};

	/**
	 * Remove all listeners for an event.
	 *
	 * @api public
	 * @param {string} name Event name.
	 * @return {EventEmitter} Emitter instance.
	 */
	EventEmitter.prototype.removeAllListeners = function(name) {
	  if (name === undefined) {
	    this.$events = {};
	    return this;
	  }

	  if (this.$events && this.$events[name]) {
	    this.$events[name] = null;
	  }

	  return this;
	};

	/**
	 * Get all listeners for a given event.
	 *
	 * @api public
	 * @param {string} name Event name.
	 * @return {EventEmitter} Emitter instance.
	 */
	EventEmitter.prototype.listeners = function(name) {
	  if (!this.$events) {
	    this.$events = {};
	  }

	  if (!this.$events[name]) {
	    this.$events[name] = [];
	  }

	  if (!isArray(this.$events[name])) {
	    this.$events[name] = [this.$events[name]];
	  }

	  return this.$events[name];
	};

	/**
	 * Emit an event.
	 *
	 * @api public
	 * @param {string} name Event name.
	 * @return {boolean} true if at least one handler was invoked, else false.
	 */
	EventEmitter.prototype.emit = function(name) {
	  if (!this.$events) {
	    return false;
	  }

	  var handler = this.$events[name];

	  if (!handler) {
	    return false;
	  }

	  var args = Array.prototype.slice.call(arguments, 1);

	  if (typeof handler === 'function') {
	    handler.apply(this, args);
	  } else if (isArray(handler)) {
	    var listeners = handler.slice();

	    for (var i = 0, l = listeners.length; i < l; i++) {
	      listeners[i].apply(this, args);
	    }
	  } else {
	    return false;
	  }

	  return true;
	};

	},{}],4:[function(require,module,exports){
	/**
	 * Expose `Progress`.
	 */

	module.exports = Progress;

	/**
	 * Initialize a new `Progress` indicator.
	 */
	function Progress() {
	  this.percent = 0;
	  this.size(0);
	  this.fontSize(11);
	  this.font('helvetica, arial, sans-serif');
	}

	/**
	 * Set progress size to `size`.
	 *
	 * @api public
	 * @param {number} size
	 * @return {Progress} Progress instance.
	 */
	Progress.prototype.size = function(size) {
	  this._size = size;
	  return this;
	};

	/**
	 * Set text to `text`.
	 *
	 * @api public
	 * @param {string} text
	 * @return {Progress} Progress instance.
	 */
	Progress.prototype.text = function(text) {
	  this._text = text;
	  return this;
	};

	/**
	 * Set font size to `size`.
	 *
	 * @api public
	 * @param {number} size
	 * @return {Progress} Progress instance.
	 */
	Progress.prototype.fontSize = function(size) {
	  this._fontSize = size;
	  return this;
	};

	/**
	 * Set font to `family`.
	 *
	 * @param {string} family
	 * @return {Progress} Progress instance.
	 */
	Progress.prototype.font = function(family) {
	  this._font = family;
	  return this;
	};

	/**
	 * Update percentage to `n`.
	 *
	 * @param {number} n
	 * @return {Progress} Progress instance.
	 */
	Progress.prototype.update = function(n) {
	  this.percent = n;
	  return this;
	};

	/**
	 * Draw on `ctx`.
	 *
	 * @param {CanvasRenderingContext2d} ctx
	 * @return {Progress} Progress instance.
	 */
	Progress.prototype.draw = function(ctx) {
	  try {
	    var percent = Math.min(this.percent, 100);
	    var size = this._size;
	    var half = size / 2;
	    var x = half;
	    var y = half;
	    var rad = half - 1;
	    var fontSize = this._fontSize;

	    ctx.font = fontSize + 'px ' + this._font;

	    var angle = Math.PI * 2 * (percent / 100);
	    ctx.clearRect(0, 0, size, size);

	    // outer circle
	    ctx.strokeStyle = '#9f9f9f';
	    ctx.beginPath();
	    ctx.arc(x, y, rad, 0, angle, false);
	    ctx.stroke();

	    // inner circle
	    ctx.strokeStyle = '#eee';
	    ctx.beginPath();
	    ctx.arc(x, y, rad - 1, 0, angle, true);
	    ctx.stroke();

	    // text
	    var text = this._text || (percent | 0) + '%';
	    var w = ctx.measureText(text).width;

	    ctx.fillText(text, x - w / 2 + 1, y + fontSize / 2 - 1);
	  } catch (err) {
	    // don't fail if we can't render progress
	  }
	  return this;
	};

	},{}],5:[function(require,module,exports){
	(function (global){
	exports.isatty = function isatty() {
	  return true;
	};

	exports.getWindowSize = function getWindowSize() {
	  if ('innerHeight' in global) {
	    return [global.innerHeight, global.innerWidth];
	  }
	  // In a Web Worker, the DOM Window is not available.
	  return [640, 480];
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],6:[function(require,module,exports){
	/**
	 * Expose `Context`.
	 */

	module.exports = Context;

	/**
	 * Initialize a new `Context`.
	 *
	 * @api private
	 */
	function Context() {}

	/**
	 * Set or get the context `Runnable` to `runnable`.
	 *
	 * @api private
	 * @param {Runnable} runnable
	 * @return {Context}
	 */
	Context.prototype.runnable = function(runnable) {
	  if (!arguments.length) {
	    return this._runnable;
	  }
	  this.test = this._runnable = runnable;
	  return this;
	};

	/**
	 * Set test timeout `ms`.
	 *
	 * @api private
	 * @param {number} ms
	 * @return {Context} self
	 */
	Context.prototype.timeout = function(ms) {
	  if (!arguments.length) {
	    return this.runnable().timeout();
	  }
	  this.runnable().timeout(ms);
	  return this;
	};

	/**
	 * Set test timeout `enabled`.
	 *
	 * @api private
	 * @param {boolean} enabled
	 * @return {Context} self
	 */
	Context.prototype.enableTimeouts = function(enabled) {
	  this.runnable().enableTimeouts(enabled);
	  return this;
	};

	/**
	 * Set test slowness threshold `ms`.
	 *
	 * @api private
	 * @param {number} ms
	 * @return {Context} self
	 */
	Context.prototype.slow = function(ms) {
	  this.runnable().slow(ms);
	  return this;
	};

	/**
	 * Mark a test as skipped.
	 *
	 * @api private
	 * @return {Context} self
	 */
	Context.prototype.skip = function() {
	  this.runnable().skip();
	  return this;
	};

	/**
	 * Allow a number of retries on failed tests
	 *
	 * @api private
	 * @param {number} n
	 * @return {Context} self
	 */
	Context.prototype.retries = function(n) {
	  if (!arguments.length) {
	    return this.runnable().retries();
	  }
	  this.runnable().retries(n);
	  return this;
	};

	/**
	 * Inspect the context void of `._runnable`.
	 *
	 * @api private
	 * @return {string}
	 */
	Context.prototype.inspect = function() {
	  return JSON.stringify(this, function(key, val) {
	    return key === 'runnable' || key === 'test' ? undefined : val;
	  }, 2);
	};

	},{}],7:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var Runnable = require('./runnable');
	var inherits = require('./utils').inherits;

	/**
	 * Expose `Hook`.
	 */

	module.exports = Hook;

	/**
	 * Initialize a new `Hook` with the given `title` and callback `fn`.
	 *
	 * @param {String} title
	 * @param {Function} fn
	 * @api private
	 */
	function Hook(title, fn) {
	  Runnable.call(this, title, fn);
	  this.type = 'hook';
	}

	/**
	 * Inherit from `Runnable.prototype`.
	 */
	inherits(Hook, Runnable);

	/**
	 * Get or set the test `err`.
	 *
	 * @param {Error} err
	 * @return {Error}
	 * @api public
	 */
	Hook.prototype.error = function(err) {
	  if (!arguments.length) {
	    err = this._error;
	    this._error = null;
	    return err;
	  }

	  this._error = err;
	};

	},{"./runnable":35,"./utils":39}],8:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var Suite = require('../suite');
	var Test = require('../test');
	var escapeRe = require('escape-string-regexp');

	/**
	 * BDD-style interface:
	 *
	 *      describe('Array', function() {
	 *        describe('#indexOf()', function() {
	 *          it('should return -1 when not present', function() {
	 *            // ...
	 *          });
	 *
	 *          it('should return the index when present', function() {
	 *            // ...
	 *          });
	 *        });
	 *      });
	 *
	 * @param {Suite} suite Root suite.
	 */
	module.exports = function(suite) {
	  var suites = [suite];

	  suite.on('pre-require', function(context, file, mocha) {
	    var common = require('./common')(suites, context);

	    context.before = common.before;
	    context.after = common.after;
	    context.beforeEach = common.beforeEach;
	    context.afterEach = common.afterEach;
	    context.run = mocha.options.delay && common.runWithSuite(suite);
	    /**
	     * Describe a "suite" with the given `title`
	     * and callback `fn` containing nested suites
	     * and/or tests.
	     */

	    context.describe = context.context = function(title, fn) {
	      var suite = Suite.create(suites[0], title);
	      suite.file = file;
	      suites.unshift(suite);
	      fn.call(suite);
	      suites.shift();
	      return suite;
	    };

	    /**
	     * Pending describe.
	     */

	    context.xdescribe = context.xcontext = context.describe.skip = function(title, fn) {
	      var suite = Suite.create(suites[0], title);
	      suite.pending = true;
	      suites.unshift(suite);
	      fn.call(suite);
	      suites.shift();
	    };

	    /**
	     * Exclusive suite.
	     */

	    context.describe.only = function(title, fn) {
	      var suite = context.describe(title, fn);
	      mocha.grep(suite.fullTitle());
	      return suite;
	    };

	    /**
	     * Describe a specification or test-case
	     * with the given `title` and callback `fn`
	     * acting as a thunk.
	     */

	    var it = context.it = context.specify = function(title, fn) {
	      var suite = suites[0];
	      if (suite.isPending()) {
	        fn = null;
	      }
	      var test = new Test(title, fn);
	      test.file = file;
	      suite.addTest(test);
	      return test;
	    };

	    /**
	     * Exclusive test-case.
	     */

	    context.it.only = function(title, fn) {
	      var test = it(title, fn);
	      var reString = '^' + escapeRe(test.fullTitle()) + '$';
	      mocha.grep(new RegExp(reString));
	      return test;
	    };

	    /**
	     * Pending test case.
	     */

	    context.xit = context.xspecify = context.it.skip = function(title) {
	      context.it(title);
	    };

	    /**
	     * Number of attempts to retry.
	     */
	    context.it.retries = function(n) {
	      context.retries(n);
	    };
	  });
	};

	},{"../suite":37,"../test":38,"./common":9,"escape-string-regexp":49}],9:[function(require,module,exports){
	'use strict';

	/**
	 * Functions common to more than one interface.
	 *
	 * @param {Suite[]} suites
	 * @param {Context} context
	 * @return {Object} An object containing common functions.
	 */
	module.exports = function(suites, context) {
	  return {
	    /**
	     * This is only present if flag --delay is passed into Mocha. It triggers
	     * root suite execution.
	     *
	     * @param {Suite} suite The root wuite.
	     * @return {Function} A function which runs the root suite
	     */
	    runWithSuite: function runWithSuite(suite) {
	      return function run() {
	        suite.run();
	      };
	    },

	    /**
	     * Execute before running tests.
	     *
	     * @param {string} name
	     * @param {Function} fn
	     */
	    before: function(name, fn) {
	      suites[0].beforeAll(name, fn);
	    },

	    /**
	     * Execute after running tests.
	     *
	     * @param {string} name
	     * @param {Function} fn
	     */
	    after: function(name, fn) {
	      suites[0].afterAll(name, fn);
	    },

	    /**
	     * Execute before each test case.
	     *
	     * @param {string} name
	     * @param {Function} fn
	     */
	    beforeEach: function(name, fn) {
	      suites[0].beforeEach(name, fn);
	    },

	    /**
	     * Execute after each test case.
	     *
	     * @param {string} name
	     * @param {Function} fn
	     */
	    afterEach: function(name, fn) {
	      suites[0].afterEach(name, fn);
	    },

	    test: {
	      /**
	       * Pending test case.
	       *
	       * @param {string} title
	       */
	      skip: function(title) {
	        context.test(title);
	      },

	      /**
	       * Number of retry attempts
	       *
	       * @param {number} n
	       */
	      retries: function(n) {
	        context.retries(n);
	      }
	    }
	  };
	};

	},{}],10:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var Suite = require('../suite');
	var Test = require('../test');

	/**
	 * Exports-style (as Node.js module) interface:
	 *
	 *     exports.Array = {
	 *       '#indexOf()': {
	 *         'should return -1 when the value is not present': function() {
	 *
	 *         },
	 *
	 *         'should return the correct index when the value is present': function() {
	 *
	 *         }
	 *       }
	 *     };
	 *
	 * @param {Suite} suite Root suite.
	 */
	module.exports = function(suite) {
	  var suites = [suite];

	  suite.on('require', visit);

	  function visit(obj, file) {
	    var suite;
	    for (var key in obj) {
	      if (typeof obj[key] === 'function') {
	        var fn = obj[key];
	        switch (key) {
	          case 'before':
	            suites[0].beforeAll(fn);
	            break;
	          case 'after':
	            suites[0].afterAll(fn);
	            break;
	          case 'beforeEach':
	            suites[0].beforeEach(fn);
	            break;
	          case 'afterEach':
	            suites[0].afterEach(fn);
	            break;
	          default:
	            var test = new Test(key, fn);
	            test.file = file;
	            suites[0].addTest(test);
	        }
	      } else {
	        suite = Suite.create(suites[0], key);
	        suites.unshift(suite);
	        visit(obj[key], file);
	        suites.shift();
	      }
	    }
	  }
	};

	},{"../suite":37,"../test":38}],11:[function(require,module,exports){
	exports.bdd = require('./bdd');
	exports.tdd = require('./tdd');
	exports.qunit = require('./qunit');
	exports.exports = require('./exports');

	},{"./bdd":8,"./exports":10,"./qunit":12,"./tdd":13}],12:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var Suite = require('../suite');
	var Test = require('../test');
	var escapeRe = require('escape-string-regexp');

	/**
	 * QUnit-style interface:
	 *
	 *     suite('Array');
	 *
	 *     test('#length', function() {
	 *       var arr = [1,2,3];
	 *       ok(arr.length == 3);
	 *     });
	 *
	 *     test('#indexOf()', function() {
	 *       var arr = [1,2,3];
	 *       ok(arr.indexOf(1) == 0);
	 *       ok(arr.indexOf(2) == 1);
	 *       ok(arr.indexOf(3) == 2);
	 *     });
	 *
	 *     suite('String');
	 *
	 *     test('#length', function() {
	 *       ok('foo'.length == 3);
	 *     });
	 *
	 * @param {Suite} suite Root suite.
	 */
	module.exports = function(suite) {
	  var suites = [suite];

	  suite.on('pre-require', function(context, file, mocha) {
	    var common = require('./common')(suites, context);

	    context.before = common.before;
	    context.after = common.after;
	    context.beforeEach = common.beforeEach;
	    context.afterEach = common.afterEach;
	    context.run = mocha.options.delay && common.runWithSuite(suite);
	    /**
	     * Describe a "suite" with the given `title`.
	     */

	    context.suite = function(title) {
	      if (suites.length > 1) {
	        suites.shift();
	      }
	      var suite = Suite.create(suites[0], title);
	      suite.file = file;
	      suites.unshift(suite);
	      return suite;
	    };

	    /**
	     * Exclusive test-case.
	     */

	    context.suite.only = function(title, fn) {
	      var suite = context.suite(title, fn);
	      mocha.grep(suite.fullTitle());
	    };

	    /**
	     * Describe a specification or test-case
	     * with the given `title` and callback `fn`
	     * acting as a thunk.
	     */

	    context.test = function(title, fn) {
	      var test = new Test(title, fn);
	      test.file = file;
	      suites[0].addTest(test);
	      return test;
	    };

	    /**
	     * Exclusive test-case.
	     */

	    context.test.only = function(title, fn) {
	      var test = context.test(title, fn);
	      var reString = '^' + escapeRe(test.fullTitle()) + '$';
	      mocha.grep(new RegExp(reString));
	    };

	    context.test.skip = common.test.skip;
	    context.test.retries = common.test.retries;
	  });
	};

	},{"../suite":37,"../test":38,"./common":9,"escape-string-regexp":49}],13:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var Suite = require('../suite');
	var Test = require('../test');
	var escapeRe = require('escape-string-regexp');

	/**
	 * TDD-style interface:
	 *
	 *      suite('Array', function() {
	 *        suite('#indexOf()', function() {
	 *          suiteSetup(function() {
	 *
	 *          });
	 *
	 *          test('should return -1 when not present', function() {
	 *
	 *          });
	 *
	 *          test('should return the index when present', function() {
	 *
	 *          });
	 *
	 *          suiteTeardown(function() {
	 *
	 *          });
	 *        });
	 *      });
	 *
	 * @param {Suite} suite Root suite.
	 */
	module.exports = function(suite) {
	  var suites = [suite];

	  suite.on('pre-require', function(context, file, mocha) {
	    var common = require('./common')(suites, context);

	    context.setup = common.beforeEach;
	    context.teardown = common.afterEach;
	    context.suiteSetup = common.before;
	    context.suiteTeardown = common.after;
	    context.run = mocha.options.delay && common.runWithSuite(suite);

	    /**
	     * Describe a "suite" with the given `title` and callback `fn` containing
	     * nested suites and/or tests.
	     */
	    context.suite = function(title, fn) {
	      var suite = Suite.create(suites[0], title);
	      suite.file = file;
	      suites.unshift(suite);
	      fn.call(suite);
	      suites.shift();
	      return suite;
	    };

	    /**
	     * Pending suite.
	     */
	    context.suite.skip = function(title, fn) {
	      var suite = Suite.create(suites[0], title);
	      suite.pending = true;
	      suites.unshift(suite);
	      fn.call(suite);
	      suites.shift();
	    };

	    /**
	     * Exclusive test-case.
	     */
	    context.suite.only = function(title, fn) {
	      var suite = context.suite(title, fn);
	      mocha.grep(suite.fullTitle());
	    };

	    /**
	     * Describe a specification or test-case with the given `title` and
	     * callback `fn` acting as a thunk.
	     */
	    context.test = function(title, fn) {
	      var suite = suites[0];
	      if (suite.isPending()) {
	        fn = null;
	      }
	      var test = new Test(title, fn);
	      test.file = file;
	      suite.addTest(test);
	      return test;
	    };

	    /**
	     * Exclusive test-case.
	     */

	    context.test.only = function(title, fn) {
	      var test = context.test(title, fn);
	      var reString = '^' + escapeRe(test.fullTitle()) + '$';
	      mocha.grep(new RegExp(reString));
	    };

	    context.test.skip = common.test.skip;
	    context.test.retries = common.test.retries;
	  });
	};

	},{"../suite":37,"../test":38,"./common":9,"escape-string-regexp":49}],14:[function(require,module,exports){
	(function (process,global,__dirname){
	/*!
	 * mocha
	 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
	 * MIT Licensed
	 */

	/**
	 * Module dependencies.
	 */

	var escapeRe = require('escape-string-regexp');
	var path = require('path');
	var reporters = require('./reporters');
	var utils = require('./utils');

	/**
	 * Expose `Mocha`.
	 */

	exports = module.exports = Mocha;

	/**
	 * To require local UIs and reporters when running in node.
	 */

	if (!process.browser) {
	  var cwd = process.cwd();
	  module.paths.push(cwd, path.join(cwd, 'node_modules'));
	}

	/**
	 * Expose internals.
	 */

	exports.utils = utils;
	exports.interfaces = require('./interfaces');
	exports.reporters = reporters;
	exports.Runnable = require('./runnable');
	exports.Context = require('./context');
	exports.Runner = require('./runner');
	exports.Suite = require('./suite');
	exports.Hook = require('./hook');
	exports.Test = require('./test');

	/**
	 * Return image `name` path.
	 *
	 * @api private
	 * @param {string} name
	 * @return {string}
	 */
	function image(name) {
	  return path.join(__dirname, '../images', name + '.png');
	}

	/**
	 * Set up mocha with `options`.
	 *
	 * Options:
	 *
	 *   - `ui` name "bdd", "tdd", "exports" etc
	 *   - `reporter` reporter instance, defaults to `mocha.reporters.spec`
	 *   - `globals` array of accepted globals
	 *   - `timeout` timeout in milliseconds
	 *   - `retries` number of times to retry failed tests
	 *   - `bail` bail on the first test failure
	 *   - `slow` milliseconds to wait before considering a test slow
	 *   - `ignoreLeaks` ignore global leaks
	 *   - `fullTrace` display the full stack-trace on failing
	 *   - `grep` string or regexp to filter tests with
	 *
	 * @param {Object} options
	 * @api public
	 */
	function Mocha(options) {
	  options = options || {};
	  this.files = [];
	  this.options = options;
	  if (options.grep) {
	    this.grep(new RegExp(options.grep));
	  }
	  if (options.fgrep) {
	    this.grep(options.fgrep);
	  }
	  this.suite = new exports.Suite('', new exports.Context());
	  this.ui(options.ui);
	  this.bail(options.bail);
	  this.reporter(options.reporter, options.reporterOptions);
	  if (typeof options.timeout !== 'undefined' && options.timeout !== null) {
	    this.timeout(options.timeout);
	  }
	  if (typeof options.retries !== 'undefined' && options.retries !== null) {
	    this.retries(options.retries);
	  }
	  this.useColors(options.useColors);
	  if (options.enableTimeouts !== null) {
	    this.enableTimeouts(options.enableTimeouts);
	  }
	  if (options.slow) {
	    this.slow(options.slow);
	  }
	}

	/**
	 * Enable or disable bailing on the first failure.
	 *
	 * @api public
	 * @param {boolean} [bail]
	 */
	Mocha.prototype.bail = function(bail) {
	  if (!arguments.length) {
	    bail = true;
	  }
	  this.suite.bail(bail);
	  return this;
	};

	/**
	 * Add test `file`.
	 *
	 * @api public
	 * @param {string} file
	 */
	Mocha.prototype.addFile = function(file) {
	  this.files.push(file);
	  return this;
	};

	/**
	 * Set reporter to `reporter`, defaults to "spec".
	 *
	 * @param {String|Function} reporter name or constructor
	 * @param {Object} reporterOptions optional options
	 * @api public
	 * @param {string|Function} reporter name or constructor
	 * @param {Object} reporterOptions optional options
	 */
	Mocha.prototype.reporter = function(reporter, reporterOptions) {
	  if (typeof reporter === 'function') {
	    this._reporter = reporter;
	  } else {
	    reporter = reporter || 'spec';
	    var _reporter;
	    // Try to load a built-in reporter.
	    if (reporters[reporter]) {
	      _reporter = reporters[reporter];
	    }
	    // Try to load reporters from process.cwd() and node_modules
	    if (!_reporter) {
	      try {
	        _reporter = require(reporter);
	      } catch (err) {
	        err.message.indexOf('Cannot find module') !== -1
	          ? console.warn('"' + reporter + '" reporter not found')
	          : console.warn('"' + reporter + '" reporter blew up with error:\n' + err.stack);
	      }
	    }
	    if (!_reporter && reporter === 'teamcity') {
	      console.warn('The Teamcity reporter was moved to a package named '
	        + 'mocha-teamcity-reporter '
	        + '(https://npmjs.org/package/mocha-teamcity-reporter).');
	    }
	    if (!_reporter) {
	      throw new Error('invalid reporter "' + reporter + '"');
	    }
	    this._reporter = _reporter;
	  }
	  this.options.reporterOptions = reporterOptions;
	  return this;
	};

	/**
	 * Set test UI `name`, defaults to "bdd".
	 *
	 * @api public
	 * @param {string} bdd
	 */
	Mocha.prototype.ui = function(name) {
	  name = name || 'bdd';
	  this._ui = exports.interfaces[name];
	  if (!this._ui) {
	    try {
	      this._ui = require(name);
	    } catch (err) {
	      throw new Error('invalid interface "' + name + '"');
	    }
	  }
	  this._ui = this._ui(this.suite);

	  this.suite.on('pre-require', function(context) {
	    exports.afterEach = context.afterEach || context.teardown;
	    exports.after = context.after || context.suiteTeardown;
	    exports.beforeEach = context.beforeEach || context.setup;
	    exports.before = context.before || context.suiteSetup;
	    exports.describe = context.describe || context.suite;
	    exports.it = context.it || context.test;
	    exports.setup = context.setup || context.beforeEach;
	    exports.suiteSetup = context.suiteSetup || context.before;
	    exports.suiteTeardown = context.suiteTeardown || context.after;
	    exports.suite = context.suite || context.describe;
	    exports.teardown = context.teardown || context.afterEach;
	    exports.test = context.test || context.it;
	    exports.run = context.run;
	  });

	  return this;
	};

	/**
	 * Load registered files.
	 *
	 * @api private
	 */
	Mocha.prototype.loadFiles = function(fn) {
	  var self = this;
	  var suite = this.suite;
	  this.files.forEach(function(file) {
	    file = path.resolve(file);
	    suite.emit('pre-require', global, file, self);
	    suite.emit('require', require(file), file, self);
	    suite.emit('post-require', global, file, self);
	  });
	  fn && fn();
	};

	/**
	 * Enable growl support.
	 *
	 * @api private
	 */
	Mocha.prototype._growl = function(runner, reporter) {
	  var notify = require('growl');

	  runner.on('end', function() {
	    var stats = reporter.stats;
	    if (stats.failures) {
	      var msg = stats.failures + ' of ' + runner.total + ' tests failed';
	      notify(msg, { name: 'mocha', title: 'Failed', image: image('error') });
	    } else {
	      notify(stats.passes + ' tests passed in ' + stats.duration + 'ms', {
	        name: 'mocha',
	        title: 'Passed',
	        image: image('ok')
	      });
	    }
	  });
	};

	/**
	 * Add regexp to grep, if `re` is a string it is escaped.
	 *
	 * @param {RegExp|String} re
	 * @return {Mocha}
	 * @api public
	 * @param {RegExp|string} re
	 * @return {Mocha}
	 */
	Mocha.prototype.grep = function(re) {
	  this.options.grep = typeof re === 'string' ? new RegExp(escapeRe(re)) : re;
	  return this;
	};

	/**
	 * Invert `.grep()` matches.
	 *
	 * @return {Mocha}
	 * @api public
	 */
	Mocha.prototype.invert = function() {
	  this.options.invert = true;
	  return this;
	};

	/**
	 * Ignore global leaks.
	 *
	 * @param {Boolean} ignore
	 * @return {Mocha}
	 * @api public
	 * @param {boolean} ignore
	 * @return {Mocha}
	 */
	Mocha.prototype.ignoreLeaks = function(ignore) {
	  this.options.ignoreLeaks = Boolean(ignore);
	  return this;
	};

	/**
	 * Enable global leak checking.
	 *
	 * @return {Mocha}
	 * @api public
	 */
	Mocha.prototype.checkLeaks = function() {
	  this.options.ignoreLeaks = false;
	  return this;
	};

	/**
	 * Display long stack-trace on failing
	 *
	 * @return {Mocha}
	 * @api public
	 */
	Mocha.prototype.fullTrace = function() {
	  this.options.fullStackTrace = true;
	  return this;
	};

	/**
	 * Enable growl support.
	 *
	 * @return {Mocha}
	 * @api public
	 */
	Mocha.prototype.growl = function() {
	  this.options.growl = true;
	  return this;
	};

	/**
	 * Ignore `globals` array or string.
	 *
	 * @param {Array|String} globals
	 * @return {Mocha}
	 * @api public
	 * @param {Array|string} globals
	 * @return {Mocha}
	 */
	Mocha.prototype.globals = function(globals) {
	  this.options.globals = (this.options.globals || []).concat(globals);
	  return this;
	};

	/**
	 * Emit color output.
	 *
	 * @param {Boolean} colors
	 * @return {Mocha}
	 * @api public
	 * @param {boolean} colors
	 * @return {Mocha}
	 */
	Mocha.prototype.useColors = function(colors) {
	  if (colors !== undefined) {
	    this.options.useColors = colors;
	  }
	  return this;
	};

	/**
	 * Use inline diffs rather than +/-.
	 *
	 * @param {Boolean} inlineDiffs
	 * @return {Mocha}
	 * @api public
	 * @param {boolean} inlineDiffs
	 * @return {Mocha}
	 */
	Mocha.prototype.useInlineDiffs = function(inlineDiffs) {
	  this.options.useInlineDiffs = inlineDiffs !== undefined && inlineDiffs;
	  return this;
	};

	/**
	 * Set the timeout in milliseconds.
	 *
	 * @param {Number} timeout
	 * @return {Mocha}
	 * @api public
	 * @param {number} timeout
	 * @return {Mocha}
	 */
	Mocha.prototype.timeout = function(timeout) {
	  this.suite.timeout(timeout);
	  return this;
	};

	/**
	 * Set the number of times to retry failed tests.
	 *
	 * @param {Number} retry times
	 * @return {Mocha}
	 * @api public
	 */
	Mocha.prototype.retries = function(n) {
	  this.suite.retries(n);
	  return this;
	};

	/**
	 * Set slowness threshold in milliseconds.
	 *
	 * @param {Number} slow
	 * @return {Mocha}
	 * @api public
	 * @param {number} slow
	 * @return {Mocha}
	 */
	Mocha.prototype.slow = function(slow) {
	  this.suite.slow(slow);
	  return this;
	};

	/**
	 * Enable timeouts.
	 *
	 * @param {Boolean} enabled
	 * @return {Mocha}
	 * @api public
	 * @param {boolean} enabled
	 * @return {Mocha}
	 */
	Mocha.prototype.enableTimeouts = function(enabled) {
	  this.suite.enableTimeouts(arguments.length && enabled !== undefined ? enabled : true);
	  return this;
	};

	/**
	 * Makes all tests async (accepting a callback)
	 *
	 * @return {Mocha}
	 * @api public
	 */
	Mocha.prototype.asyncOnly = function() {
	  this.options.asyncOnly = true;
	  return this;
	};

	/**
	 * Disable syntax highlighting (in browser).
	 *
	 * @api public
	 */
	Mocha.prototype.noHighlighting = function() {
	  this.options.noHighlighting = true;
	  return this;
	};

	/**
	 * Enable uncaught errors to propagate (in browser).
	 *
	 * @return {Mocha}
	 * @api public
	 */
	Mocha.prototype.allowUncaught = function() {
	  this.options.allowUncaught = true;
	  return this;
	};

	/**
	 * Delay root suite execution.
	 * @returns {Mocha}
	 */
	Mocha.prototype.delay = function delay() {
	  this.options.delay = true;
	  return this;
	};

	/**
	 * Run tests and invoke `fn()` when complete.
	 *
	 * @api public
	 * @param {Function} fn
	 * @return {Runner}
	 */
	Mocha.prototype.run = function(fn) {
	  if (this.files.length) {
	    this.loadFiles();
	  }
	  var suite = this.suite;
	  var options = this.options;
	  options.files = this.files;
	  var runner = new exports.Runner(suite, options.delay);
	  var reporter = new this._reporter(runner, options);
	  runner.ignoreLeaks = options.ignoreLeaks !== false;
	  runner.fullStackTrace = options.fullStackTrace;
	  runner.asyncOnly = options.asyncOnly;
	  runner.allowUncaught = options.allowUncaught;
	  if (options.grep) {
	    runner.grep(options.grep, options.invert);
	  }
	  if (options.globals) {
	    runner.globals(options.globals);
	  }
	  if (options.growl) {
	    this._growl(runner, reporter);
	  }
	  if (options.useColors !== undefined) {
	    exports.reporters.Base.useColors = options.useColors;
	  }
	  exports.reporters.Base.inlineDiffs = options.useInlineDiffs;

	  function done(failures) {
	    if (reporter.done) {
	      reporter.done(failures, fn);
	    } else {
	      fn && fn(failures);
	    }
	  }

	  return runner.run(done);
	};

	}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},"/lib")
	},{"./context":6,"./hook":7,"./interfaces":11,"./reporters":22,"./runnable":35,"./runner":36,"./suite":37,"./test":38,"./utils":39,"_process":58,"escape-string-regexp":49,"growl":51,"path":43}],15:[function(require,module,exports){
	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @api public
	 * @param {string|number} val
	 * @param {Object} options
	 * @return {string|number}
	 */
	module.exports = function(val, options) {
	  options = options || {};
	  if (typeof val === 'string') {
	    return parse(val);
	  }
	  // https://github.com/mochajs/mocha/pull/1035
	  return options['long'] ? longFormat(val) : shortFormat(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @api private
	 * @param {string} str
	 * @return {number}
	 */
	function parse(str) {
	  var match = (/^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i).exec(str);
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 's':
	      return n * s;
	    case 'ms':
	      return n;
	    default:
	      // No default case
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @api private
	 * @param {number} ms
	 * @return {string}
	 */
	function shortFormat(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @api private
	 * @param {number} ms
	 * @return {string}
	 */
	function longFormat(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 *
	 * @api private
	 * @param {number} ms
	 * @param {number} n
	 * @param {string} name
	 */
	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

	},{}],16:[function(require,module,exports){

	/**
	 * Expose `Pending`.
	 */

	module.exports = Pending;

	/**
	 * Initialize a new `Pending` error with the given message.
	 *
	 * @param {string} message
	 */
	function Pending(message) {
	  this.message = message;
	}

	},{}],17:[function(require,module,exports){
	(function (process,global){
	/**
	 * Module dependencies.
	 */

	var tty = require('tty');
	var diff = require('diff');
	var ms = require('../ms');
	var utils = require('../utils');
	var supportsColor = process.browser ? null : require('supports-color');

	/**
	 * Expose `Base`.
	 */

	exports = module.exports = Base;

	/**
	 * Save timer references to avoid Sinon interfering.
	 * See: https://github.com/mochajs/mocha/issues/237
	 */

	/* eslint-disable no-unused-vars, no-native-reassign */
	var Date = global.Date;
	var setTimeout = global.setTimeout;
	var setInterval = global.setInterval;
	var clearTimeout = global.clearTimeout;
	var clearInterval = global.clearInterval;
	/* eslint-enable no-unused-vars, no-native-reassign */

	/**
	 * Check if both stdio streams are associated with a tty.
	 */

	var isatty = tty.isatty(1) && tty.isatty(2);

	/**
	 * Enable coloring by default, except in the browser interface.
	 */

	exports.useColors = !process.browser && (supportsColor || (process.env.MOCHA_COLORS !== undefined));

	/**
	 * Inline diffs instead of +/-
	 */

	exports.inlineDiffs = false;

	/**
	 * Default color map.
	 */

	exports.colors = {
	  pass: 90,
	  fail: 31,
	  'bright pass': 92,
	  'bright fail': 91,
	  'bright yellow': 93,
	  pending: 36,
	  suite: 0,
	  'error title': 0,
	  'error message': 31,
	  'error stack': 90,
	  checkmark: 32,
	  fast: 90,
	  medium: 33,
	  slow: 31,
	  green: 32,
	  light: 90,
	  'diff gutter': 90,
	  'diff added': 32,
	  'diff removed': 31
	};

	/**
	 * Default symbol map.
	 */

	exports.symbols = {
	  ok: '✓',
	  err: '✖',
	  dot: '․'
	};

	// With node.js on Windows: use symbols available in terminal default fonts
	if (process.platform === 'win32') {
	  exports.symbols.ok = '\u221A';
	  exports.symbols.err = '\u00D7';
	  exports.symbols.dot = '.';
	}

	/**
	 * Color `str` with the given `type`,
	 * allowing colors to be disabled,
	 * as well as user-defined color
	 * schemes.
	 *
	 * @param {string} type
	 * @param {string} str
	 * @return {string}
	 * @api private
	 */
	var color = exports.color = function(type, str) {
	  if (!exports.useColors) {
	    return String(str);
	  }
	  return '\u001b[' + exports.colors[type] + 'm' + str + '\u001b[0m';
	};

	/**
	 * Expose term window size, with some defaults for when stderr is not a tty.
	 */

	exports.window = {
	  width: 75
	};

	if (isatty) {
	  exports.window.width = process.stdout.getWindowSize
	      ? process.stdout.getWindowSize(1)[0]
	      : tty.getWindowSize()[1];
	}

	/**
	 * Expose some basic cursor interactions that are common among reporters.
	 */

	exports.cursor = {
	  hide: function() {
	    isatty && process.stdout.write('\u001b[?25l');
	  },

	  show: function() {
	    isatty && process.stdout.write('\u001b[?25h');
	  },

	  deleteLine: function() {
	    isatty && process.stdout.write('\u001b[2K');
	  },

	  beginningOfLine: function() {
	    isatty && process.stdout.write('\u001b[0G');
	  },

	  CR: function() {
	    if (isatty) {
	      exports.cursor.deleteLine();
	      exports.cursor.beginningOfLine();
	    } else {
	      process.stdout.write('\r');
	    }
	  }
	};

	/**
	 * Outut the given `failures` as a list.
	 *
	 * @param {Array} failures
	 * @api public
	 */

	exports.list = function(failures) {
	  console.log();
	  failures.forEach(function(test, i) {
	    // format
	    var fmt = color('error title', '  %s) %s:\n')
	      + color('error message', '     %s')
	      + color('error stack', '\n%s\n');

	    // msg
	    var msg;
	    var err = test.err;
	    var message;
	    if (err.message && typeof err.message.toString === 'function') {
	      message = err.message + '';
	    } else if (typeof err.inspect === 'function') {
	      message = err.inspect() + '';
	    } else {
	      message = '';
	    }
	    var stack = err.stack || message;
	    var index = stack.indexOf(message);
	    var actual = err.actual;
	    var expected = err.expected;
	    var escape = true;

	    if (index === -1) {
	      msg = message;
	    } else {
	      index += message.length;
	      msg = stack.slice(0, index);
	      // remove msg from stack
	      stack = stack.slice(index + 1);
	    }

	    // uncaught
	    if (err.uncaught) {
	      msg = 'Uncaught ' + msg;
	    }
	    // explicitly show diff
	    if (err.showDiff !== false && sameType(actual, expected) && expected !== undefined) {
	      escape = false;
	      if (!(utils.isString(actual) && utils.isString(expected))) {
	        err.actual = actual = utils.stringify(actual);
	        err.expected = expected = utils.stringify(expected);
	      }

	      fmt = color('error title', '  %s) %s:\n%s') + color('error stack', '\n%s\n');
	      var match = message.match(/^([^:]+): expected/);
	      msg = '\n      ' + color('error message', match ? match[1] : msg);

	      if (exports.inlineDiffs) {
	        msg += inlineDiff(err, escape);
	      } else {
	        msg += unifiedDiff(err, escape);
	      }
	    }

	    // indent stack trace
	    stack = stack.replace(/^/gm, '  ');

	    console.log(fmt, (i + 1), test.fullTitle(), msg, stack);
	  });
	};

	/**
	 * Initialize a new `Base` reporter.
	 *
	 * All other reporters generally
	 * inherit from this reporter, providing
	 * stats such as test duration, number
	 * of tests passed / failed etc.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function Base(runner) {
	  var stats = this.stats = { suites: 0, tests: 0, passes: 0, pending: 0, failures: 0 };
	  var failures = this.failures = [];

	  if (!runner) {
	    return;
	  }
	  this.runner = runner;

	  runner.stats = stats;

	  runner.on('start', function() {
	    stats.start = new Date();
	  });

	  runner.on('suite', function(suite) {
	    stats.suites = stats.suites || 0;
	    suite.root || stats.suites++;
	  });

	  runner.on('test end', function() {
	    stats.tests = stats.tests || 0;
	    stats.tests++;
	  });

	  runner.on('pass', function(test) {
	    stats.passes = stats.passes || 0;

	    if (test.duration > test.slow()) {
	      test.speed = 'slow';
	    } else if (test.duration > test.slow() / 2) {
	      test.speed = 'medium';
	    } else {
	      test.speed = 'fast';
	    }

	    stats.passes++;
	  });

	  runner.on('fail', function(test, err) {
	    stats.failures = stats.failures || 0;
	    stats.failures++;
	    test.err = err;
	    failures.push(test);
	  });

	  runner.on('end', function() {
	    stats.end = new Date();
	    stats.duration = new Date() - stats.start;
	  });

	  runner.on('pending', function() {
	    stats.pending++;
	  });
	}

	/**
	 * Output common epilogue used by many of
	 * the bundled reporters.
	 *
	 * @api public
	 */
	Base.prototype.epilogue = function() {
	  var stats = this.stats;
	  var fmt;

	  console.log();

	  // passes
	  fmt = color('bright pass', ' ')
	    + color('green', ' %d passing')
	    + color('light', ' (%s)');

	  console.log(fmt,
	    stats.passes || 0,
	    ms(stats.duration));

	  // pending
	  if (stats.pending) {
	    fmt = color('pending', ' ')
	      + color('pending', ' %d pending');

	    console.log(fmt, stats.pending);
	  }

	  // failures
	  if (stats.failures) {
	    fmt = color('fail', '  %d failing');

	    console.log(fmt, stats.failures);

	    Base.list(this.failures);
	    console.log();
	  }

	  console.log();
	};

	/**
	 * Pad the given `str` to `len`.
	 *
	 * @api private
	 * @param {string} str
	 * @param {string} len
	 * @return {string}
	 */
	function pad(str, len) {
	  str = String(str);
	  return Array(len - str.length + 1).join(' ') + str;
	}

	/**
	 * Returns an inline diff between 2 strings with coloured ANSI output
	 *
	 * @api private
	 * @param {Error} err with actual/expected
	 * @param {boolean} escape
	 * @return {string} Diff
	 */
	function inlineDiff(err, escape) {
	  var msg = errorDiff(err, 'WordsWithSpace', escape);

	  // linenos
	  var lines = msg.split('\n');
	  if (lines.length > 4) {
	    var width = String(lines.length).length;
	    msg = lines.map(function(str, i) {
	      return pad(++i, width) + ' |' + ' ' + str;
	    }).join('\n');
	  }

	  // legend
	  msg = '\n'
	    + color('diff removed', 'actual')
	    + ' '
	    + color('diff added', 'expected')
	    + '\n\n'
	    + msg
	    + '\n';

	  // indent
	  msg = msg.replace(/^/gm, '      ');
	  return msg;
	}

	/**
	 * Returns a unified diff between two strings.
	 *
	 * @api private
	 * @param {Error} err with actual/expected
	 * @param {boolean} escape
	 * @return {string} The diff.
	 */
	function unifiedDiff(err, escape) {
	  var indent = '      ';
	  function cleanUp(line) {
	    if (escape) {
	      line = escapeInvisibles(line);
	    }
	    if (line[0] === '+') {
	      return indent + colorLines('diff added', line);
	    }
	    if (line[0] === '-') {
	      return indent + colorLines('diff removed', line);
	    }
	    if (line.match(/\@\@/)) {
	      return null;
	    }
	    if (line.match(/\\ No newline/)) {
	      return null;
	    }
	    return indent + line;
	  }
	  function notBlank(line) {
	    return typeof line !== 'undefined' && line !== null;
	  }
	  var msg = diff.createPatch('string', err.actual, err.expected);
	  var lines = msg.split('\n').splice(4);
	  return '\n      '
	    + colorLines('diff added', '+ expected') + ' '
	    + colorLines('diff removed', '- actual')
	    + '\n\n'
	    + lines.map(cleanUp).filter(notBlank).join('\n');
	}

	/**
	 * Return a character diff for `err`.
	 *
	 * @api private
	 * @param {Error} err
	 * @param {string} type
	 * @param {boolean} escape
	 * @return {string}
	 */
	function errorDiff(err, type, escape) {
	  var actual = escape ? escapeInvisibles(err.actual) : err.actual;
	  var expected = escape ? escapeInvisibles(err.expected) : err.expected;
	  return diff['diff' + type](actual, expected).map(function(str) {
	    if (str.added) {
	      return colorLines('diff added', str.value);
	    }
	    if (str.removed) {
	      return colorLines('diff removed', str.value);
	    }
	    return str.value;
	  }).join('');
	}

	/**
	 * Returns a string with all invisible characters in plain text
	 *
	 * @api private
	 * @param {string} line
	 * @return {string}
	 */
	function escapeInvisibles(line) {
	  return line.replace(/\t/g, '<tab>')
	    .replace(/\r/g, '<CR>')
	    .replace(/\n/g, '<LF>\n');
	}

	/**
	 * Color lines for `str`, using the color `name`.
	 *
	 * @api private
	 * @param {string} name
	 * @param {string} str
	 * @return {string}
	 */
	function colorLines(name, str) {
	  return str.split('\n').map(function(str) {
	    return color(name, str);
	  }).join('\n');
	}

	/**
	 * Object#toString reference.
	 */
	var objToString = Object.prototype.toString;

	/**
	 * Check that a / b have the same type.
	 *
	 * @api private
	 * @param {Object} a
	 * @param {Object} b
	 * @return {boolean}
	 */
	function sameType(a, b) {
	  return objToString.call(a) === objToString.call(b);
	}

	}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../ms":15,"../utils":39,"_process":58,"diff":48,"supports-color":43,"tty":5}],18:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var utils = require('../utils');

	/**
	 * Expose `Doc`.
	 */

	exports = module.exports = Doc;

	/**
	 * Initialize a new `Doc` reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */
	function Doc(runner) {
	  Base.call(this, runner);

	  var indents = 2;

	  function indent() {
	    return Array(indents).join('  ');
	  }

	  runner.on('suite', function(suite) {
	    if (suite.root) {
	      return;
	    }
	    ++indents;
	    console.log('%s<section class="suite">', indent());
	    ++indents;
	    console.log('%s<h1>%s</h1>', indent(), utils.escape(suite.title));
	    console.log('%s<dl>', indent());
	  });

	  runner.on('suite end', function(suite) {
	    if (suite.root) {
	      return;
	    }
	    console.log('%s</dl>', indent());
	    --indents;
	    console.log('%s</section>', indent());
	    --indents;
	  });

	  runner.on('pass', function(test) {
	    console.log('%s  <dt>%s</dt>', indent(), utils.escape(test.title));
	    var code = utils.escape(utils.clean(test.body));
	    console.log('%s  <dd><pre><code>%s</code></pre></dd>', indent(), code);
	  });

	  runner.on('fail', function(test, err) {
	    console.log('%s  <dt class="error">%s</dt>', indent(), utils.escape(test.title));
	    var code = utils.escape(utils.clean(test.fn.body));
	    console.log('%s  <dd class="error"><pre><code>%s</code></pre></dd>', indent(), code);
	    console.log('%s  <dd class="error">%s</dd>', indent(), utils.escape(err));
	  });
	}

	},{"../utils":39,"./base":17}],19:[function(require,module,exports){
	(function (process){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var inherits = require('../utils').inherits;
	var color = Base.color;

	/**
	 * Expose `Dot`.
	 */

	exports = module.exports = Dot;

	/**
	 * Initialize a new `Dot` matrix test reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function Dot(runner) {
	  Base.call(this, runner);

	  var self = this;
	  var width = Base.window.width * .75 | 0;
	  var n = -1;

	  runner.on('start', function() {
	    process.stdout.write('\n');
	  });

	  runner.on('pending', function() {
	    if (++n % width === 0) {
	      process.stdout.write('\n  ');
	    }
	    process.stdout.write(color('pending', Base.symbols.dot));
	  });

	  runner.on('pass', function(test) {
	    if (++n % width === 0) {
	      process.stdout.write('\n  ');
	    }
	    if (test.speed === 'slow') {
	      process.stdout.write(color('bright yellow', Base.symbols.dot));
	    } else {
	      process.stdout.write(color(test.speed, Base.symbols.dot));
	    }
	  });

	  runner.on('fail', function() {
	    if (++n % width === 0) {
	      process.stdout.write('\n  ');
	    }
	    process.stdout.write(color('fail', Base.symbols.dot));
	  });

	  runner.on('end', function() {
	    console.log();
	    self.epilogue();
	  });
	}

	/**
	 * Inherit from `Base.prototype`.
	 */
	inherits(Dot, Base);

	}).call(this,require('_process'))
	},{"../utils":39,"./base":17,"_process":58}],20:[function(require,module,exports){
	(function (process,__dirname){
	/**
	 * Module dependencies.
	 */

	var JSONCov = require('./json-cov');
	var readFileSync = require('fs').readFileSync;
	var join = require('path').join;

	/**
	 * Expose `HTMLCov`.
	 */

	exports = module.exports = HTMLCov;

	/**
	 * Initialize a new `JsCoverage` reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function HTMLCov(runner) {
	  var jade = require('jade');
	  var file = join(__dirname, '/templates/coverage.jade');
	  var str = readFileSync(file, 'utf8');
	  var fn = jade.compile(str, { filename: file });
	  var self = this;

	  JSONCov.call(this, runner, false);

	  runner.on('end', function() {
	    process.stdout.write(fn({
	      cov: self.cov,
	      coverageClass: coverageClass
	    }));
	  });
	}

	/**
	 * Return coverage class for a given coverage percentage.
	 *
	 * @api private
	 * @param {number} coveragePctg
	 * @return {string}
	 */
	function coverageClass(coveragePctg) {
	  if (coveragePctg >= 75) {
	    return 'high';
	  }
	  if (coveragePctg >= 50) {
	    return 'medium';
	  }
	  if (coveragePctg >= 25) {
	    return 'low';
	  }
	  return 'terrible';
	}

	}).call(this,require('_process'),"/lib/reporters")
	},{"./json-cov":23,"_process":58,"fs":43,"jade":43,"path":43}],21:[function(require,module,exports){
	(function (global){
	/* eslint-env browser */

	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var utils = require('../utils');
	var Progress = require('../browser/progress');
	var escapeRe = require('escape-string-regexp');
	var escape = utils.escape;

	/**
	 * Save timer references to avoid Sinon interfering (see GH-237).
	 */

	/* eslint-disable no-unused-vars, no-native-reassign */
	var Date = global.Date;
	var setTimeout = global.setTimeout;
	var setInterval = global.setInterval;
	var clearTimeout = global.clearTimeout;
	var clearInterval = global.clearInterval;
	/* eslint-enable no-unused-vars, no-native-reassign */

	/**
	 * Expose `HTML`.
	 */

	exports = module.exports = HTML;

	/**
	 * Stats template.
	 */

	var statsTemplate = '<ul id="mocha-stats">'
	  + '<li class="progress"><canvas width="40" height="40"></canvas></li>'
	  + '<li class="passes"><a href="javascript:void(0);">passes:</a> <em>0</em></li>'
	  + '<li class="failures"><a href="javascript:void(0);">failures:</a> <em>0</em></li>'
	  + '<li class="duration">duration: <em>0</em>s</li>'
	  + '</ul>';

	/**
	 * Initialize a new `HTML` reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function HTML(runner) {
	  Base.call(this, runner);

	  var self = this;
	  var stats = this.stats;
	  var stat = fragment(statsTemplate);
	  var items = stat.getElementsByTagName('li');
	  var passes = items[1].getElementsByTagName('em')[0];
	  var passesLink = items[1].getElementsByTagName('a')[0];
	  var failures = items[2].getElementsByTagName('em')[0];
	  var failuresLink = items[2].getElementsByTagName('a')[0];
	  var duration = items[3].getElementsByTagName('em')[0];
	  var canvas = stat.getElementsByTagName('canvas')[0];
	  var report = fragment('<ul id="mocha-report"></ul>');
	  var stack = [report];
	  var progress;
	  var ctx;
	  var root = document.getElementById('mocha');

	  if (canvas.getContext) {
	    var ratio = window.devicePixelRatio || 1;
	    canvas.style.width = canvas.width;
	    canvas.style.height = canvas.height;
	    canvas.width *= ratio;
	    canvas.height *= ratio;
	    ctx = canvas.getContext('2d');
	    ctx.scale(ratio, ratio);
	    progress = new Progress();
	  }

	  if (!root) {
	    return error('#mocha div missing, add it to your document');
	  }

	  // pass toggle
	  on(passesLink, 'click', function(evt) {
	    evt.preventDefault();
	    unhide();
	    var name = (/pass/).test(report.className) ? '' : ' pass';
	    report.className = report.className.replace(/fail|pass/g, '') + name;
	    if (report.className.trim()) {
	      hideSuitesWithout('test pass');
	    }
	  });

	  // failure toggle
	  on(failuresLink, 'click', function(evt) {
	    evt.preventDefault();
	    unhide();
	    var name = (/fail/).test(report.className) ? '' : ' fail';
	    report.className = report.className.replace(/fail|pass/g, '') + name;
	    if (report.className.trim()) {
	      hideSuitesWithout('test fail');
	    }
	  });

	  root.appendChild(stat);
	  root.appendChild(report);

	  if (progress) {
	    progress.size(40);
	  }

	  runner.on('suite', function(suite) {
	    if (suite.root) {
	      return;
	    }

	    // suite
	    var url = self.suiteURL(suite);
	    var el = fragment('<li class="suite"><h1><a href="%s">%s</a></h1></li>', url, escape(suite.title));

	    // container
	    stack[0].appendChild(el);
	    stack.unshift(document.createElement('ul'));
	    el.appendChild(stack[0]);
	  });

	  runner.on('suite end', function(suite) {
	    if (suite.root) {
	      return;
	    }
	    stack.shift();
	  });

	  runner.on('pass', function(test) {
	    var url = self.testURL(test);
	    var markup = '<li class="test pass %e"><h2>%e<span class="duration">%ems</span> '
	      + '<a href="%s" class="replay">‣</a></h2></li>';
	    var el = fragment(markup, test.speed, test.title, test.duration, url);
	    self.addCodeToggle(el, test.body);
	    appendToStack(el);
	    updateStats();
	  });

	  runner.on('fail', function(test) {
	    var el = fragment('<li class="test fail"><h2>%e <a href="%e" class="replay">‣</a></h2></li>',
	      test.title, self.testURL(test));
	    var stackString; // Note: Includes leading newline
	    var message = test.err.toString();

	    // <=IE7 stringifies to [Object Error]. Since it can be overloaded, we
	    // check for the result of the stringifying.
	    if (message === '[object Error]') {
	      message = test.err.message;
	    }

	    if (test.err.stack) {
	      var indexOfMessage = test.err.stack.indexOf(test.err.message);
	      if (indexOfMessage === -1) {
	        stackString = test.err.stack;
	      } else {
	        stackString = test.err.stack.substr(test.err.message.length + indexOfMessage);
	      }
	    } else if (test.err.sourceURL && test.err.line !== undefined) {
	      // Safari doesn't give you a stack. Let's at least provide a source line.
	      stackString = '\n(' + test.err.sourceURL + ':' + test.err.line + ')';
	    }

	    stackString = stackString || '';

	    if (test.err.htmlMessage && stackString) {
	      el.appendChild(fragment('<div class="html-error">%s\n<pre class="error">%e</pre></div>',
	        test.err.htmlMessage, stackString));
	    } else if (test.err.htmlMessage) {
	      el.appendChild(fragment('<div class="html-error">%s</div>', test.err.htmlMessage));
	    } else {
	      el.appendChild(fragment('<pre class="error">%e%e</pre>', message, stackString));
	    }

	    self.addCodeToggle(el, test.body);
	    appendToStack(el);
	    updateStats();
	  });

	  runner.on('pending', function(test) {
	    var el = fragment('<li class="test pass pending"><h2>%e</h2></li>', test.title);
	    appendToStack(el);
	    updateStats();
	  });

	  function appendToStack(el) {
	    // Don't call .appendChild if #mocha-report was already .shift()'ed off the stack.
	    if (stack[0]) {
	      stack[0].appendChild(el);
	    }
	  }

	  function updateStats() {
	    // TODO: add to stats
	    var percent = stats.tests / this.total * 100 | 0;
	    if (progress) {
	      progress.update(percent).draw(ctx);
	    }

	    // update stats
	    var ms = new Date() - stats.start;
	    text(passes, stats.passes);
	    text(failures, stats.failures);
	    text(duration, (ms / 1000).toFixed(2));
	  }
	}

	/**
	 * Makes a URL, preserving querystring ("search") parameters.
	 *
	 * @param {string} s
	 * @return {string} A new URL.
	 */
	function makeUrl(s) {
	  var search = window.location.search;

	  // Remove previous grep query parameter if present
	  if (search) {
	    search = search.replace(/[?&]grep=[^&\s]*/g, '').replace(/^&/, '?');
	  }

	  return window.location.pathname + (search ? search + '&' : '?') + 'grep=' + encodeURIComponent(escapeRe(s));
	}

	/**
	 * Provide suite URL.
	 *
	 * @param {Object} [suite]
	 */
	HTML.prototype.suiteURL = function(suite) {
	  return makeUrl(suite.fullTitle());
	};

	/**
	 * Provide test URL.
	 *
	 * @param {Object} [test]
	 */
	HTML.prototype.testURL = function(test) {
	  return makeUrl(test.fullTitle());
	};

	/**
	 * Adds code toggle functionality for the provided test's list element.
	 *
	 * @param {HTMLLIElement} el
	 * @param {string} contents
	 */
	HTML.prototype.addCodeToggle = function(el, contents) {
	  var h2 = el.getElementsByTagName('h2')[0];

	  on(h2, 'click', function() {
	    pre.style.display = pre.style.display === 'none' ? 'block' : 'none';
	  });

	  var pre = fragment('<pre><code>%e</code></pre>', utils.clean(contents));
	  el.appendChild(pre);
	  pre.style.display = 'none';
	};

	/**
	 * Display error `msg`.
	 *
	 * @param {string} msg
	 */
	function error(msg) {
	  document.body.appendChild(fragment('<div id="mocha-error">%s</div>', msg));
	}

	/**
	 * Return a DOM fragment from `html`.
	 *
	 * @param {string} html
	 */
	function fragment(html) {
	  var args = arguments;
	  var div = document.createElement('div');
	  var i = 1;

	  div.innerHTML = html.replace(/%([se])/g, function(_, type) {
	    switch (type) {
	      case 's': return String(args[i++]);
	      case 'e': return escape(args[i++]);
	      // no default
	    }
	  });

	  return div.firstChild;
	}

	/**
	 * Check for suites that do not have elements
	 * with `classname`, and hide them.
	 *
	 * @param {text} classname
	 */
	function hideSuitesWithout(classname) {
	  var suites = document.getElementsByClassName('suite');
	  for (var i = 0; i < suites.length; i++) {
	    var els = suites[i].getElementsByClassName(classname);
	    if (!els.length) {
	      suites[i].className += ' hidden';
	    }
	  }
	}

	/**
	 * Unhide .hidden suites.
	 */
	function unhide() {
	  var els = document.getElementsByClassName('suite hidden');
	  for (var i = 0; i < els.length; ++i) {
	    els[i].className = els[i].className.replace('suite hidden', 'suite');
	  }
	}

	/**
	 * Set an element's text contents.
	 *
	 * @param {HTMLElement} el
	 * @param {string} contents
	 */
	function text(el, contents) {
	  if (el.textContent) {
	    el.textContent = contents;
	  } else {
	    el.innerText = contents;
	  }
	}

	/**
	 * Listen on `event` with callback `fn`.
	 */
	function on(el, event, fn) {
	  if (el.addEventListener) {
	    el.addEventListener(event, fn, false);
	  } else {
	    el.attachEvent('on' + event, fn);
	  }
	}

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../browser/progress":4,"../utils":39,"./base":17,"escape-string-regexp":49}],22:[function(require,module,exports){
	// Alias exports to a their normalized format Mocha#reporter to prevent a need
	// for dynamic (try/catch) requires, which Browserify doesn't handle.
	exports.Base = exports.base = require('./base');
	exports.Dot = exports.dot = require('./dot');
	exports.Doc = exports.doc = require('./doc');
	exports.TAP = exports.tap = require('./tap');
	exports.JSON = exports.json = require('./json');
	exports.HTML = exports.html = require('./html');
	exports.List = exports.list = require('./list');
	exports.Min = exports.min = require('./min');
	exports.Spec = exports.spec = require('./spec');
	exports.Nyan = exports.nyan = require('./nyan');
	exports.XUnit = exports.xunit = require('./xunit');
	exports.Markdown = exports.markdown = require('./markdown');
	exports.Progress = exports.progress = require('./progress');
	exports.Landing = exports.landing = require('./landing');
	exports.JSONCov = exports['json-cov'] = require('./json-cov');
	exports.HTMLCov = exports['html-cov'] = require('./html-cov');
	exports.JSONStream = exports['json-stream'] = require('./json-stream');

	},{"./base":17,"./doc":18,"./dot":19,"./html":21,"./html-cov":20,"./json":25,"./json-cov":23,"./json-stream":24,"./landing":26,"./list":27,"./markdown":28,"./min":29,"./nyan":30,"./progress":31,"./spec":32,"./tap":33,"./xunit":34}],23:[function(require,module,exports){
	(function (process,global){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');

	/**
	 * Expose `JSONCov`.
	 */

	exports = module.exports = JSONCov;

	/**
	 * Initialize a new `JsCoverage` reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 * @param {boolean} output
	 */
	function JSONCov(runner, output) {
	  Base.call(this, runner);

	  output = arguments.length === 1 || output;
	  var self = this;
	  var tests = [];
	  var failures = [];
	  var passes = [];

	  runner.on('test end', function(test) {
	    tests.push(test);
	  });

	  runner.on('pass', function(test) {
	    passes.push(test);
	  });

	  runner.on('fail', function(test) {
	    failures.push(test);
	  });

	  runner.on('end', function() {
	    var cov = global._$jscoverage || {};
	    var result = self.cov = map(cov);
	    result.stats = self.stats;
	    result.tests = tests.map(clean);
	    result.failures = failures.map(clean);
	    result.passes = passes.map(clean);
	    if (!output) {
	      return;
	    }
	    process.stdout.write(JSON.stringify(result, null, 2));
	  });
	}

	/**
	 * Map jscoverage data to a JSON structure
	 * suitable for reporting.
	 *
	 * @api private
	 * @param {Object} cov
	 * @return {Object}
	 */

	function map(cov) {
	  var ret = {
	    instrumentation: 'node-jscoverage',
	    sloc: 0,
	    hits: 0,
	    misses: 0,
	    coverage: 0,
	    files: []
	  };

	  for (var filename in cov) {
	    if (Object.prototype.hasOwnProperty.call(cov, filename)) {
	      var data = coverage(filename, cov[filename]);
	      ret.files.push(data);
	      ret.hits += data.hits;
	      ret.misses += data.misses;
	      ret.sloc += data.sloc;
	    }
	  }

	  ret.files.sort(function(a, b) {
	    return a.filename.localeCompare(b.filename);
	  });

	  if (ret.sloc > 0) {
	    ret.coverage = (ret.hits / ret.sloc) * 100;
	  }

	  return ret;
	}

	/**
	 * Map jscoverage data for a single source file
	 * to a JSON structure suitable for reporting.
	 *
	 * @api private
	 * @param {string} filename name of the source file
	 * @param {Object} data jscoverage coverage data
	 * @return {Object}
	 */
	function coverage(filename, data) {
	  var ret = {
	    filename: filename,
	    coverage: 0,
	    hits: 0,
	    misses: 0,
	    sloc: 0,
	    source: {}
	  };

	  data.source.forEach(function(line, num) {
	    num++;

	    if (data[num] === 0) {
	      ret.misses++;
	      ret.sloc++;
	    } else if (data[num] !== undefined) {
	      ret.hits++;
	      ret.sloc++;
	    }

	    ret.source[num] = {
	      source: line,
	      coverage: data[num] === undefined ? '' : data[num]
	    };
	  });

	  ret.coverage = ret.hits / ret.sloc * 100;

	  return ret;
	}

	/**
	 * Return a plain-object representation of `test`
	 * free of cyclic properties etc.
	 *
	 * @api private
	 * @param {Object} test
	 * @return {Object}
	 */
	function clean(test) {
	  return {
	    duration: test.duration,
	    currentRetry: test.currentRetry(),
	    fullTitle: test.fullTitle(),
	    title: test.title
	  };
	}

	}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./base":17,"_process":58}],24:[function(require,module,exports){
	(function (process){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');

	/**
	 * Expose `List`.
	 */

	exports = module.exports = List;

	/**
	 * Initialize a new `List` test reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function List(runner) {
	  Base.call(this, runner);

	  var self = this;
	  var total = runner.total;

	  runner.on('start', function() {
	    console.log(JSON.stringify(['start', { total: total }]));
	  });

	  runner.on('pass', function(test) {
	    console.log(JSON.stringify(['pass', clean(test)]));
	  });

	  runner.on('fail', function(test, err) {
	    test = clean(test);
	    test.err = err.message;
	    test.stack = err.stack || null;
	    console.log(JSON.stringify(['fail', test]));
	  });

	  runner.on('end', function() {
	    process.stdout.write(JSON.stringify(['end', self.stats]));
	  });
	}

	/**
	 * Return a plain-object representation of `test`
	 * free of cyclic properties etc.
	 *
	 * @api private
	 * @param {Object} test
	 * @return {Object}
	 */
	function clean(test) {
	  return {
	    title: test.title,
	    fullTitle: test.fullTitle(),
	    duration: test.duration,
	    currentRetry: test.currentRetry()
	  };
	}

	}).call(this,require('_process'))
	},{"./base":17,"_process":58}],25:[function(require,module,exports){
	(function (process){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');

	/**
	 * Expose `JSON`.
	 */

	exports = module.exports = JSONReporter;

	/**
	 * Initialize a new `JSON` reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function JSONReporter(runner) {
	  Base.call(this, runner);

	  var self = this;
	  var tests = [];
	  var pending = [];
	  var failures = [];
	  var passes = [];

	  runner.on('test end', function(test) {
	    tests.push(test);
	  });

	  runner.on('pass', function(test) {
	    passes.push(test);
	  });

	  runner.on('fail', function(test) {
	    failures.push(test);
	  });

	  runner.on('pending', function(test) {
	    pending.push(test);
	  });

	  runner.on('end', function() {
	    var obj = {
	      stats: self.stats,
	      tests: tests.map(clean),
	      pending: pending.map(clean),
	      failures: failures.map(clean),
	      passes: passes.map(clean)
	    };

	    runner.testResults = obj;

	    process.stdout.write(JSON.stringify(obj, null, 2));
	  });
	}

	/**
	 * Return a plain-object representation of `test`
	 * free of cyclic properties etc.
	 *
	 * @api private
	 * @param {Object} test
	 * @return {Object}
	 */
	function clean(test) {
	  return {
	    title: test.title,
	    fullTitle: test.fullTitle(),
	    duration: test.duration,
	    currentRetry: test.currentRetry(),
	    err: errorJSON(test.err || {})
	  };
	}

	/**
	 * Transform `error` into a JSON object.
	 *
	 * @api private
	 * @param {Error} err
	 * @return {Object}
	 */
	function errorJSON(err) {
	  var res = {};
	  Object.getOwnPropertyNames(err).forEach(function(key) {
	    res[key] = err[key];
	  }, err);
	  return res;
	}

	}).call(this,require('_process'))
	},{"./base":17,"_process":58}],26:[function(require,module,exports){
	(function (process){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var inherits = require('../utils').inherits;
	var cursor = Base.cursor;
	var color = Base.color;

	/**
	 * Expose `Landing`.
	 */

	exports = module.exports = Landing;

	/**
	 * Airplane color.
	 */

	Base.colors.plane = 0;

	/**
	 * Airplane crash color.
	 */

	Base.colors['plane crash'] = 31;

	/**
	 * Runway color.
	 */

	Base.colors.runway = 90;

	/**
	 * Initialize a new `Landing` reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function Landing(runner) {
	  Base.call(this, runner);

	  var self = this;
	  var width = Base.window.width * .75 | 0;
	  var total = runner.total;
	  var stream = process.stdout;
	  var plane = color('plane', '✈');
	  var crashed = -1;
	  var n = 0;

	  function runway() {
	    var buf = Array(width).join('-');
	    return '  ' + color('runway', buf);
	  }

	  runner.on('start', function() {
	    stream.write('\n\n\n  ');
	    cursor.hide();
	  });

	  runner.on('test end', function(test) {
	    // check if the plane crashed
	    var col = crashed === -1 ? width * ++n / total | 0 : crashed;

	    // show the crash
	    if (test.state === 'failed') {
	      plane = color('plane crash', '✈');
	      crashed = col;
	    }

	    // render landing strip
	    stream.write('\u001b[' + (width + 1) + 'D\u001b[2A');
	    stream.write(runway());
	    stream.write('\n  ');
	    stream.write(color('runway', Array(col).join('⋅')));
	    stream.write(plane);
	    stream.write(color('runway', Array(width - col).join('⋅') + '\n'));
	    stream.write(runway());
	    stream.write('\u001b[0m');
	  });

	  runner.on('end', function() {
	    cursor.show();
	    console.log();
	    self.epilogue();
	  });
	}

	/**
	 * Inherit from `Base.prototype`.
	 */
	inherits(Landing, Base);

	}).call(this,require('_process'))
	},{"../utils":39,"./base":17,"_process":58}],27:[function(require,module,exports){
	(function (process){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var inherits = require('../utils').inherits;
	var color = Base.color;
	var cursor = Base.cursor;

	/**
	 * Expose `List`.
	 */

	exports = module.exports = List;

	/**
	 * Initialize a new `List` test reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function List(runner) {
	  Base.call(this, runner);

	  var self = this;
	  var n = 0;

	  runner.on('start', function() {
	    console.log();
	  });

	  runner.on('test', function(test) {
	    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));
	  });

	  runner.on('pending', function(test) {
	    var fmt = color('checkmark', '  -')
	      + color('pending', ' %s');
	    console.log(fmt, test.fullTitle());
	  });

	  runner.on('pass', function(test) {
	    var fmt = color('checkmark', '  ' + Base.symbols.dot)
	      + color('pass', ' %s: ')
	      + color(test.speed, '%dms');
	    cursor.CR();
	    console.log(fmt, test.fullTitle(), test.duration);
	  });

	  runner.on('fail', function(test) {
	    cursor.CR();
	    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());
	  });

	  runner.on('end', self.epilogue.bind(self));
	}

	/**
	 * Inherit from `Base.prototype`.
	 */
	inherits(List, Base);

	}).call(this,require('_process'))
	},{"../utils":39,"./base":17,"_process":58}],28:[function(require,module,exports){
	(function (process){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var utils = require('../utils');

	/**
	 * Constants
	 */

	var SUITE_PREFIX = '$';

	/**
	 * Expose `Markdown`.
	 */

	exports = module.exports = Markdown;

	/**
	 * Initialize a new `Markdown` reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function Markdown(runner) {
	  Base.call(this, runner);

	  var level = 0;
	  var buf = '';

	  function title(str) {
	    return Array(level).join('#') + ' ' + str;
	  }

	  function mapTOC(suite, obj) {
	    var ret = obj;
	    var key = SUITE_PREFIX + suite.title;

	    obj = obj[key] = obj[key] || { suite: suite };
	    suite.suites.forEach(function(suite) {
	      mapTOC(suite, obj);
	    });

	    return ret;
	  }

	  function stringifyTOC(obj, level) {
	    ++level;
	    var buf = '';
	    var link;
	    for (var key in obj) {
	      if (key === 'suite') {
	        continue;
	      }
	      if (key !== SUITE_PREFIX) {
	        link = ' - [' + key.substring(1) + ']';
	        link += '(#' + utils.slug(obj[key].suite.fullTitle()) + ')\n';
	        buf += Array(level).join('  ') + link;
	      }
	      buf += stringifyTOC(obj[key], level);
	    }
	    return buf;
	  }

	  function generateTOC(suite) {
	    var obj = mapTOC(suite, {});
	    return stringifyTOC(obj, 0);
	  }

	  generateTOC(runner.suite);

	  runner.on('suite', function(suite) {
	    ++level;
	    var slug = utils.slug(suite.fullTitle());
	    buf += '<a name="' + slug + '"></a>' + '\n';
	    buf += title(suite.title) + '\n';
	  });

	  runner.on('suite end', function() {
	    --level;
	  });

	  runner.on('pass', function(test) {
	    var code = utils.clean(test.body);
	    buf += test.title + '.\n';
	    buf += '\n```js\n';
	    buf += code + '\n';
	    buf += '```\n\n';
	  });

	  runner.on('end', function() {
	    process.stdout.write('# TOC\n');
	    process.stdout.write(generateTOC(runner.suite));
	    process.stdout.write(buf);
	  });
	}

	}).call(this,require('_process'))
	},{"../utils":39,"./base":17,"_process":58}],29:[function(require,module,exports){
	(function (process){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var inherits = require('../utils').inherits;

	/**
	 * Expose `Min`.
	 */

	exports = module.exports = Min;

	/**
	 * Initialize a new `Min` minimal test reporter (best used with --watch).
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function Min(runner) {
	  Base.call(this, runner);

	  runner.on('start', function() {
	    // clear screen
	    process.stdout.write('\u001b[2J');
	    // set cursor position
	    process.stdout.write('\u001b[1;3H');
	  });

	  runner.on('end', this.epilogue.bind(this));
	}

	/**
	 * Inherit from `Base.prototype`.
	 */
	inherits(Min, Base);

	}).call(this,require('_process'))
	},{"../utils":39,"./base":17,"_process":58}],30:[function(require,module,exports){
	(function (process){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var inherits = require('../utils').inherits;

	/**
	 * Expose `Dot`.
	 */

	exports = module.exports = NyanCat;

	/**
	 * Initialize a new `Dot` matrix test reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function NyanCat(runner) {
	  Base.call(this, runner);

	  var self = this;
	  var width = Base.window.width * .75 | 0;
	  var nyanCatWidth = this.nyanCatWidth = 11;

	  this.colorIndex = 0;
	  this.numberOfLines = 4;
	  this.rainbowColors = self.generateColors();
	  this.scoreboardWidth = 5;
	  this.tick = 0;
	  this.trajectories = [[], [], [], []];
	  this.trajectoryWidthMax = (width - nyanCatWidth);

	  runner.on('start', function() {
	    Base.cursor.hide();
	    self.draw();
	  });

	  runner.on('pending', function() {
	    self.draw();
	  });

	  runner.on('pass', function() {
	    self.draw();
	  });

	  runner.on('fail', function() {
	    self.draw();
	  });

	  runner.on('end', function() {
	    Base.cursor.show();
	    for (var i = 0; i < self.numberOfLines; i++) {
	      write('\n');
	    }
	    self.epilogue();
	  });
	}

	/**
	 * Inherit from `Base.prototype`.
	 */
	inherits(NyanCat, Base);

	/**
	 * Draw the nyan cat
	 *
	 * @api private
	 */

	NyanCat.prototype.draw = function() {
	  this.appendRainbow();
	  this.drawScoreboard();
	  this.drawRainbow();
	  this.drawNyanCat();
	  this.tick = !this.tick;
	};

	/**
	 * Draw the "scoreboard" showing the number
	 * of passes, failures and pending tests.
	 *
	 * @api private
	 */

	NyanCat.prototype.drawScoreboard = function() {
	  var stats = this.stats;

	  function draw(type, n) {
	    write(' ');
	    write(Base.color(type, n));
	    write('\n');
	  }

	  draw('green', stats.passes);
	  draw('fail', stats.failures);
	  draw('pending', stats.pending);
	  write('\n');

	  this.cursorUp(this.numberOfLines);
	};

	/**
	 * Append the rainbow.
	 *
	 * @api private
	 */

	NyanCat.prototype.appendRainbow = function() {
	  var segment = this.tick ? '_' : '-';
	  var rainbowified = this.rainbowify(segment);

	  for (var index = 0; index < this.numberOfLines; index++) {
	    var trajectory = this.trajectories[index];
	    if (trajectory.length >= this.trajectoryWidthMax) {
	      trajectory.shift();
	    }
	    trajectory.push(rainbowified);
	  }
	};

	/**
	 * Draw the rainbow.
	 *
	 * @api private
	 */

	NyanCat.prototype.drawRainbow = function() {
	  var self = this;

	  this.trajectories.forEach(function(line) {
	    write('\u001b[' + self.scoreboardWidth + 'C');
	    write(line.join(''));
	    write('\n');
	  });

	  this.cursorUp(this.numberOfLines);
	};

	/**
	 * Draw the nyan cat
	 *
	 * @api private
	 */
	NyanCat.prototype.drawNyanCat = function() {
	  var self = this;
	  var startWidth = this.scoreboardWidth + this.trajectories[0].length;
	  var dist = '\u001b[' + startWidth + 'C';
	  var padding = '';

	  write(dist);
	  write('_,------,');
	  write('\n');

	  write(dist);
	  padding = self.tick ? '  ' : '   ';
	  write('_|' + padding + '/\\_/\\ ');
	  write('\n');

	  write(dist);
	  padding = self.tick ? '_' : '__';
	  var tail = self.tick ? '~' : '^';
	  write(tail + '|' + padding + this.face() + ' ');
	  write('\n');

	  write(dist);
	  padding = self.tick ? ' ' : '  ';
	  write(padding + '""  "" ');
	  write('\n');

	  this.cursorUp(this.numberOfLines);
	};

	/**
	 * Draw nyan cat face.
	 *
	 * @api private
	 * @return {string}
	 */

	NyanCat.prototype.face = function() {
	  var stats = this.stats;
	  if (stats.failures) {
	    return '( x .x)';
	  } else if (stats.pending) {
	    return '( o .o)';
	  } else if (stats.passes) {
	    return '( ^ .^)';
	  }
	  return '( - .-)';
	};

	/**
	 * Move cursor up `n`.
	 *
	 * @api private
	 * @param {number} n
	 */

	NyanCat.prototype.cursorUp = function(n) {
	  write('\u001b[' + n + 'A');
	};

	/**
	 * Move cursor down `n`.
	 *
	 * @api private
	 * @param {number} n
	 */

	NyanCat.prototype.cursorDown = function(n) {
	  write('\u001b[' + n + 'B');
	};

	/**
	 * Generate rainbow colors.
	 *
	 * @api private
	 * @return {Array}
	 */
	NyanCat.prototype.generateColors = function() {
	  var colors = [];

	  for (var i = 0; i < (6 * 7); i++) {
	    var pi3 = Math.floor(Math.PI / 3);
	    var n = (i * (1.0 / 6));
	    var r = Math.floor(3 * Math.sin(n) + 3);
	    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);
	    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);
	    colors.push(36 * r + 6 * g + b + 16);
	  }

	  return colors;
	};

	/**
	 * Apply rainbow to the given `str`.
	 *
	 * @api private
	 * @param {string} str
	 * @return {string}
	 */
	NyanCat.prototype.rainbowify = function(str) {
	  if (!Base.useColors) {
	    return str;
	  }
	  var color = this.rainbowColors[this.colorIndex % this.rainbowColors.length];
	  this.colorIndex += 1;
	  return '\u001b[38;5;' + color + 'm' + str + '\u001b[0m';
	};

	/**
	 * Stdout helper.
	 *
	 * @param {string} string A message to write to stdout.
	 */
	function write(string) {
	  process.stdout.write(string);
	}

	}).call(this,require('_process'))
	},{"../utils":39,"./base":17,"_process":58}],31:[function(require,module,exports){
	(function (process){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var inherits = require('../utils').inherits;
	var color = Base.color;
	var cursor = Base.cursor;

	/**
	 * Expose `Progress`.
	 */

	exports = module.exports = Progress;

	/**
	 * General progress bar color.
	 */

	Base.colors.progress = 90;

	/**
	 * Initialize a new `Progress` bar test reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 * @param {Object} options
	 */
	function Progress(runner, options) {
	  Base.call(this, runner);

	  var self = this;
	  var width = Base.window.width * .50 | 0;
	  var total = runner.total;
	  var complete = 0;
	  var lastN = -1;

	  // default chars
	  options = options || {};
	  options.open = options.open || '[';
	  options.complete = options.complete || '▬';
	  options.incomplete = options.incomplete || Base.symbols.dot;
	  options.close = options.close || ']';
	  options.verbose = false;

	  // tests started
	  runner.on('start', function() {
	    console.log();
	    cursor.hide();
	  });

	  // tests complete
	  runner.on('test end', function() {
	    complete++;

	    var percent = complete / total;
	    var n = width * percent | 0;
	    var i = width - n;

	    if (n === lastN && !options.verbose) {
	      // Don't re-render the line if it hasn't changed
	      return;
	    }
	    lastN = n;

	    cursor.CR();
	    process.stdout.write('\u001b[J');
	    process.stdout.write(color('progress', '  ' + options.open));
	    process.stdout.write(Array(n).join(options.complete));
	    process.stdout.write(Array(i).join(options.incomplete));
	    process.stdout.write(color('progress', options.close));
	    if (options.verbose) {
	      process.stdout.write(color('progress', ' ' + complete + ' of ' + total));
	    }
	  });

	  // tests are complete, output some stats
	  // and the failures if any
	  runner.on('end', function() {
	    cursor.show();
	    console.log();
	    self.epilogue();
	  });
	}

	/**
	 * Inherit from `Base.prototype`.
	 */
	inherits(Progress, Base);

	}).call(this,require('_process'))
	},{"../utils":39,"./base":17,"_process":58}],32:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var inherits = require('../utils').inherits;
	var color = Base.color;
	var cursor = Base.cursor;

	/**
	 * Expose `Spec`.
	 */

	exports = module.exports = Spec;

	/**
	 * Initialize a new `Spec` test reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function Spec(runner) {
	  Base.call(this, runner);

	  var self = this;
	  var indents = 0;
	  var n = 0;

	  function indent() {
	    return Array(indents).join('  ');
	  }

	  runner.on('start', function() {
	    console.log();
	  });

	  runner.on('suite', function(suite) {
	    ++indents;
	    console.log(color('suite', '%s%s'), indent(), suite.title);
	  });

	  runner.on('suite end', function() {
	    --indents;
	    if (indents === 1) {
	      console.log();
	    }
	  });

	  runner.on('pending', function(test) {
	    var fmt = indent() + color('pending', '  - %s');
	    console.log(fmt, test.title);
	  });

	  runner.on('pass', function(test) {
	    var fmt;
	    if (test.speed === 'fast') {
	      fmt = indent()
	        + color('checkmark', '  ' + Base.symbols.ok)
	        + color('pass', ' %s');
	      cursor.CR();
	      console.log(fmt, test.title);
	    } else {
	      fmt = indent()
	        + color('checkmark', '  ' + Base.symbols.ok)
	        + color('pass', ' %s')
	        + color(test.speed, ' (%dms)');
	      cursor.CR();
	      console.log(fmt, test.title, test.duration);
	    }
	  });

	  runner.on('fail', function(test) {
	    cursor.CR();
	    console.log(indent() + color('fail', '  %d) %s'), ++n, test.title);
	  });

	  runner.on('end', self.epilogue.bind(self));
	}

	/**
	 * Inherit from `Base.prototype`.
	 */
	inherits(Spec, Base);

	},{"../utils":39,"./base":17}],33:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');

	/**
	 * Expose `TAP`.
	 */

	exports = module.exports = TAP;

	/**
	 * Initialize a new `TAP` reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function TAP(runner) {
	  Base.call(this, runner);

	  var n = 1;
	  var passes = 0;
	  var failures = 0;

	  runner.on('start', function() {
	    var total = runner.grepTotal(runner.suite);
	    console.log('%d..%d', 1, total);
	  });

	  runner.on('test end', function() {
	    ++n;
	  });

	  runner.on('pending', function(test) {
	    console.log('ok %d %s # SKIP -', n, title(test));
	  });

	  runner.on('pass', function(test) {
	    passes++;
	    console.log('ok %d %s', n, title(test));
	  });

	  runner.on('fail', function(test, err) {
	    failures++;
	    console.log('not ok %d %s', n, title(test));
	    if (err.stack) {
	      console.log(err.stack.replace(/^/gm, '  '));
	    }
	  });

	  runner.on('end', function() {
	    console.log('# tests ' + (passes + failures));
	    console.log('# pass ' + passes);
	    console.log('# fail ' + failures);
	  });
	}

	/**
	 * Return a TAP-safe title of `test`
	 *
	 * @api private
	 * @param {Object} test
	 * @return {String}
	 */
	function title(test) {
	  return test.fullTitle().replace(/#/g, '');
	}

	},{"./base":17}],34:[function(require,module,exports){
	(function (process,global){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');
	var utils = require('../utils');
	var inherits = utils.inherits;
	var fs = require('fs');
	var escape = utils.escape;
	var mkdirp = require('mkdirp');
	var path = require('path');

	/**
	 * Save timer references to avoid Sinon interfering (see GH-237).
	 */

	/* eslint-disable no-unused-vars, no-native-reassign */
	var Date = global.Date;
	var setTimeout = global.setTimeout;
	var setInterval = global.setInterval;
	var clearTimeout = global.clearTimeout;
	var clearInterval = global.clearInterval;
	/* eslint-enable no-unused-vars, no-native-reassign */

	/**
	 * Expose `XUnit`.
	 */

	exports = module.exports = XUnit;

	/**
	 * Initialize a new `XUnit` reporter.
	 *
	 * @api public
	 * @param {Runner} runner
	 */
	function XUnit(runner, options) {
	  Base.call(this, runner);

	  var stats = this.stats;
	  var tests = [];
	  var self = this;

	  if (options.reporterOptions && options.reporterOptions.output) {
	    if (!fs.createWriteStream) {
	      throw new Error('file output not supported in browser');
	    }
	    mkdirp.sync(path.dirname(options.reporterOptions.output));
	    self.fileStream = fs.createWriteStream(options.reporterOptions.output);
	  }

	  runner.on('pending', function(test) {
	    tests.push(test);
	  });

	  runner.on('pass', function(test) {
	    tests.push(test);
	  });

	  runner.on('fail', function(test) {
	    tests.push(test);
	  });

	  runner.on('end', function() {
	    self.write(tag('testsuite', {
	      name: 'Mocha Tests',
	      tests: stats.tests,
	      failures: stats.failures,
	      errors: stats.failures,
	      skipped: stats.tests - stats.failures - stats.passes,
	      timestamp: (new Date()).toUTCString(),
	      time: (stats.duration / 1000) || 0
	    }, false));

	    tests.forEach(function(t) {
	      self.test(t);
	    });

	    self.write('</testsuite>');
	  });
	}

	/**
	 * Inherit from `Base.prototype`.
	 */
	inherits(XUnit, Base);

	/**
	 * Override done to close the stream (if it's a file).
	 *
	 * @param failures
	 * @param {Function} fn
	 */
	XUnit.prototype.done = function(failures, fn) {
	  if (this.fileStream) {
	    this.fileStream.end(function() {
	      fn(failures);
	    });
	  } else {
	    fn(failures);
	  }
	};

	/**
	 * Write out the given line.
	 *
	 * @param {string} line
	 */
	XUnit.prototype.write = function(line) {
	  if (this.fileStream) {
	    this.fileStream.write(line + '\n');
	  } else if (typeof process === 'object' && process.stdout) {
	    process.stdout.write(line + '\n');
	  } else {
	    console.log(line);
	  }
	};

	/**
	 * Output tag for the given `test.`
	 *
	 * @param {Test} test
	 */
	XUnit.prototype.test = function(test) {
	  var attrs = {
	    classname: test.parent.fullTitle(),
	    name: test.title,
	    time: (test.duration / 1000) || 0
	  };

	  if (test.state === 'failed') {
	    var err = test.err;
	    this.write(tag('testcase', attrs, false, tag('failure', {}, false, escape(err.message) + '\n' + escape(err.stack))));
	  } else if (test.isPending()) {
	    this.write(tag('testcase', attrs, false, tag('skipped', {}, true)));
	  } else {
	    this.write(tag('testcase', attrs, true));
	  }
	};

	/**
	 * HTML tag helper.
	 *
	 * @param name
	 * @param attrs
	 * @param close
	 * @param content
	 * @return {string}
	 */
	function tag(name, attrs, close, content) {
	  var end = close ? '/>' : '>';
	  var pairs = [];
	  var tag;

	  for (var key in attrs) {
	    if (Object.prototype.hasOwnProperty.call(attrs, key)) {
	      pairs.push(key + '="' + escape(attrs[key]) + '"');
	    }
	  }

	  tag = '<' + name + (pairs.length ? ' ' + pairs.join(' ') : '') + end;
	  if (content) {
	    tag += content + '</' + name + end;
	  }
	  return tag;
	}

	}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../utils":39,"./base":17,"_process":58,"fs":43,"mkdirp":55,"path":43}],35:[function(require,module,exports){
	(function (global){
	/**
	 * Module dependencies.
	 */

	var EventEmitter = require('events').EventEmitter;
	var Pending = require('./pending');
	var debug = require('debug')('mocha:runnable');
	var milliseconds = require('./ms');
	var utils = require('./utils');
	var inherits = utils.inherits;

	/**
	 * Save timer references to avoid Sinon interfering (see GH-237).
	 */

	/* eslint-disable no-unused-vars, no-native-reassign */
	var Date = global.Date;
	var setTimeout = global.setTimeout;
	var setInterval = global.setInterval;
	var clearTimeout = global.clearTimeout;
	var clearInterval = global.clearInterval;
	/* eslint-enable no-unused-vars, no-native-reassign */

	/**
	 * Object#toString().
	 */

	var toString = Object.prototype.toString;

	/**
	 * Expose `Runnable`.
	 */

	module.exports = Runnable;

	/**
	 * Initialize a new `Runnable` with the given `title` and callback `fn`.
	 *
	 * @param {String} title
	 * @param {Function} fn
	 * @api private
	 * @param {string} title
	 * @param {Function} fn
	 */
	function Runnable(title, fn) {
	  this.title = title;
	  this.fn = fn;
	  this.body = (fn || '').toString();
	  this.async = fn && fn.length;
	  this.sync = !this.async;
	  this._timeout = 2000;
	  this._slow = 75;
	  this._enableTimeouts = true;
	  this.timedOut = false;
	  this._trace = new Error('done() called multiple times');
	  this._retries = -1;
	  this._currentRetry = 0;
	  this.pending = false;
	}

	/**
	 * Inherit from `EventEmitter.prototype`.
	 */
	inherits(Runnable, EventEmitter);

	/**
	 * Set & get timeout `ms`.
	 *
	 * @api private
	 * @param {number|string} ms
	 * @return {Runnable|number} ms or Runnable instance.
	 */
	Runnable.prototype.timeout = function(ms) {
	  if (!arguments.length) {
	    return this._timeout;
	  }
	  if (ms === 0) {
	    this._enableTimeouts = false;
	  }
	  if (typeof ms === 'string') {
	    ms = milliseconds(ms);
	  }
	  debug('timeout %d', ms);
	  this._timeout = ms;
	  if (this.timer) {
	    this.resetTimeout();
	  }
	  return this;
	};

	/**
	 * Set & get slow `ms`.
	 *
	 * @api private
	 * @param {number|string} ms
	 * @return {Runnable|number} ms or Runnable instance.
	 */
	Runnable.prototype.slow = function(ms) {
	  if (!arguments.length) {
	    return this._slow;
	  }
	  if (typeof ms === 'string') {
	    ms = milliseconds(ms);
	  }
	  debug('timeout %d', ms);
	  this._slow = ms;
	  return this;
	};

	/**
	 * Set and get whether timeout is `enabled`.
	 *
	 * @api private
	 * @param {boolean} enabled
	 * @return {Runnable|boolean} enabled or Runnable instance.
	 */
	Runnable.prototype.enableTimeouts = function(enabled) {
	  if (!arguments.length) {
	    return this._enableTimeouts;
	  }
	  debug('enableTimeouts %s', enabled);
	  this._enableTimeouts = enabled;
	  return this;
	};

	/**
	 * Halt and mark as pending.
	 *
	 * @api public
	 */
	Runnable.prototype.skip = function() {
	  throw new Pending();
	};

	/**
	 * Check if this runnable or its parent suite is marked as pending.
	 *
	 * @api private
	 */
	Runnable.prototype.isPending = function() {
	  return this.pending || (this.parent && this.parent.isPending());
	};

	/**
	 * Set number of retries.
	 *
	 * @api private
	 */
	Runnable.prototype.retries = function(n) {
	  if (!arguments.length) {
	    return this._retries;
	  }
	  this._retries = n;
	};

	/**
	 * Get current retry
	 *
	 * @api private
	 */
	Runnable.prototype.currentRetry = function(n) {
	  if (!arguments.length) {
	    return this._currentRetry;
	  }
	  this._currentRetry = n;
	};

	/**
	 * Return the full title generated by recursively concatenating the parent's
	 * full title.
	 *
	 * @api public
	 * @return {string}
	 */
	Runnable.prototype.fullTitle = function() {
	  return this.parent.fullTitle() + ' ' + this.title;
	};

	/**
	 * Clear the timeout.
	 *
	 * @api private
	 */
	Runnable.prototype.clearTimeout = function() {
	  clearTimeout(this.timer);
	};

	/**
	 * Inspect the runnable void of private properties.
	 *
	 * @api private
	 * @return {string}
	 */
	Runnable.prototype.inspect = function() {
	  return JSON.stringify(this, function(key, val) {
	    if (key[0] === '_') {
	      return;
	    }
	    if (key === 'parent') {
	      return '#<Suite>';
	    }
	    if (key === 'ctx') {
	      return '#<Context>';
	    }
	    return val;
	  }, 2);
	};

	/**
	 * Reset the timeout.
	 *
	 * @api private
	 */
	Runnable.prototype.resetTimeout = function() {
	  var self = this;
	  var ms = this.timeout() || 1e9;

	  if (!this._enableTimeouts) {
	    return;
	  }
	  this.clearTimeout();
	  this.timer = setTimeout(function() {
	    if (!self._enableTimeouts) {
	      return;
	    }
	    self.callback(new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.'));
	    self.timedOut = true;
	  }, ms);
	};

	/**
	 * Whitelist a list of globals for this test run.
	 *
	 * @api private
	 * @param {string[]} globals
	 */
	Runnable.prototype.globals = function(globals) {
	  if (!arguments.length) {
	    return this._allowedGlobals;
	  }
	  this._allowedGlobals = globals;
	};

	/**
	 * Run the test and invoke `fn(err)`.
	 *
	 * @param {Function} fn
	 * @api private
	 */
	Runnable.prototype.run = function(fn) {
	  var self = this;
	  var start = new Date();
	  var ctx = this.ctx;
	  var finished;
	  var emitted;

	  // Sometimes the ctx exists, but it is not runnable
	  if (ctx && ctx.runnable) {
	    ctx.runnable(this);
	  }

	  // called multiple times
	  function multiple(err) {
	    if (emitted) {
	      return;
	    }
	    emitted = true;
	    self.emit('error', err || new Error('done() called multiple times; stacktrace may be inaccurate'));
	  }

	  // finished
	  function done(err) {
	    var ms = self.timeout();
	    if (self.timedOut) {
	      return;
	    }
	    if (finished) {
	      return multiple(err || self._trace);
	    }

	    self.clearTimeout();
	    self.duration = new Date() - start;
	    finished = true;
	    if (!err && self.duration > ms && self._enableTimeouts) {
	      err = new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.');
	    }
	    fn(err);
	  }

	  // for .resetTimeout()
	  this.callback = done;

	  // explicit async with `done` argument
	  if (this.async) {
	    this.resetTimeout();

	    if (this.allowUncaught) {
	      return callFnAsync(this.fn);
	    }
	    try {
	      callFnAsync(this.fn);
	    } catch (err) {
	      done(utils.getError(err));
	    }
	    return;
	  }

	  if (this.allowUncaught) {
	    callFn(this.fn);
	    done();
	    return;
	  }

	  // sync or promise-returning
	  try {
	    if (this.isPending()) {
	      done();
	    } else {
	      callFn(this.fn);
	    }
	  } catch (err) {
	    done(utils.getError(err));
	  }

	  function callFn(fn) {
	    var result = fn.call(ctx);
	    if (result && typeof result.then === 'function') {
	      self.resetTimeout();
	      result
	        .then(function() {
	          done();
	          // Return null so libraries like bluebird do not warn about
	          // subsequently constructed Promises.
	          return null;
	        },
	        function(reason) {
	          done(reason || new Error('Promise rejected with no or falsy reason'));
	        });
	    } else {
	      if (self.asyncOnly) {
	        return done(new Error('--async-only option in use without declaring `done()` or returning a promise'));
	      }

	      done();
	    }
	  }

	  function callFnAsync(fn) {
	    fn.call(ctx, function(err) {
	      if (err instanceof Error || toString.call(err) === '[object Error]') {
	        return done(err);
	      }
	      if (err) {
	        if (Object.prototype.toString.call(err) === '[object Object]') {
	          return done(new Error('done() invoked with non-Error: '
	            + JSON.stringify(err)));
	        }
	        return done(new Error('done() invoked with non-Error: ' + err));
	      }
	      done();
	    });
	  }
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./ms":15,"./pending":16,"./utils":39,"debug":2,"events":3}],36:[function(require,module,exports){
	(function (process,global){
	/**
	 * Module dependencies.
	 */

	var EventEmitter = require('events').EventEmitter;
	var Pending = require('./pending');
	var utils = require('./utils');
	var inherits = utils.inherits;
	var debug = require('debug')('mocha:runner');
	var Runnable = require('./runnable');
	var filter = utils.filter;
	var indexOf = utils.indexOf;
	var keys = utils.keys;
	var stackFilter = utils.stackTraceFilter();
	var stringify = utils.stringify;
	var type = utils.type;
	var undefinedError = utils.undefinedError;
	var isArray = utils.isArray;

	/**
	 * Non-enumerable globals.
	 */

	var globals = [
	  'setTimeout',
	  'clearTimeout',
	  'setInterval',
	  'clearInterval',
	  'XMLHttpRequest',
	  'Date',
	  'setImmediate',
	  'clearImmediate'
	];

	/**
	 * Expose `Runner`.
	 */

	module.exports = Runner;

	/**
	 * Initialize a `Runner` for the given `suite`.
	 *
	 * Events:
	 *
	 *   - `start`  execution started
	 *   - `end`  execution complete
	 *   - `suite`  (suite) test suite execution started
	 *   - `suite end`  (suite) all tests (and sub-suites) have finished
	 *   - `test`  (test) test execution started
	 *   - `test end`  (test) test completed
	 *   - `hook`  (hook) hook execution started
	 *   - `hook end`  (hook) hook complete
	 *   - `pass`  (test) test passed
	 *   - `fail`  (test, err) test failed
	 *   - `pending`  (test) test pending
	 *
	 * @api public
	 * @param {Suite} suite Root suite
	 * @param {boolean} [delay] Whether or not to delay execution of root suite
	 * until ready.
	 */
	function Runner(suite, delay) {
	  var self = this;
	  this._globals = [];
	  this._abort = false;
	  this._delay = delay;
	  this.suite = suite;
	  this.started = false;
	  this.total = suite.total();
	  this.failures = 0;
	  this.on('test end', function(test) {
	    self.checkGlobals(test);
	  });
	  this.on('hook end', function(hook) {
	    self.checkGlobals(hook);
	  });
	  this._defaultGrep = /.*/;
	  this.grep(this._defaultGrep);
	  this.globals(this.globalProps().concat(extraGlobals()));
	}

	/**
	 * Wrapper for setImmediate, process.nextTick, or browser polyfill.
	 *
	 * @param {Function} fn
	 * @api private
	 */
	Runner.immediately = global.setImmediate || process.nextTick;

	/**
	 * Inherit from `EventEmitter.prototype`.
	 */
	inherits(Runner, EventEmitter);

	/**
	 * Run tests with full titles matching `re`. Updates runner.total
	 * with number of tests matched.
	 *
	 * @param {RegExp} re
	 * @param {Boolean} invert
	 * @return {Runner} for chaining
	 * @api public
	 * @param {RegExp} re
	 * @param {boolean} invert
	 * @return {Runner} Runner instance.
	 */
	Runner.prototype.grep = function(re, invert) {
	  debug('grep %s', re);
	  this._grep = re;
	  this._invert = invert;
	  this.total = this.grepTotal(this.suite);
	  return this;
	};

	/**
	 * Returns the number of tests matching the grep search for the
	 * given suite.
	 *
	 * @param {Suite} suite
	 * @return {Number}
	 * @api public
	 * @param {Suite} suite
	 * @return {number}
	 */
	Runner.prototype.grepTotal = function(suite) {
	  var self = this;
	  var total = 0;

	  suite.eachTest(function(test) {
	    var match = self._grep.test(test.fullTitle());
	    if (self._invert) {
	      match = !match;
	    }
	    if (match) {
	      total++;
	    }
	  });

	  return total;
	};

	/**
	 * Return a list of global properties.
	 *
	 * @return {Array}
	 * @api private
	 */
	Runner.prototype.globalProps = function() {
	  var props = keys(global);

	  // non-enumerables
	  for (var i = 0; i < globals.length; ++i) {
	    if (~indexOf(props, globals[i])) {
	      continue;
	    }
	    props.push(globals[i]);
	  }

	  return props;
	};

	/**
	 * Allow the given `arr` of globals.
	 *
	 * @param {Array} arr
	 * @return {Runner} for chaining
	 * @api public
	 * @param {Array} arr
	 * @return {Runner} Runner instance.
	 */
	Runner.prototype.globals = function(arr) {
	  if (!arguments.length) {
	    return this._globals;
	  }
	  debug('globals %j', arr);
	  this._globals = this._globals.concat(arr);
	  return this;
	};

	/**
	 * Check for global variable leaks.
	 *
	 * @api private
	 */
	Runner.prototype.checkGlobals = function(test) {
	  if (this.ignoreLeaks) {
	    return;
	  }
	  var ok = this._globals;

	  var globals = this.globalProps();
	  var leaks;

	  if (test) {
	    ok = ok.concat(test._allowedGlobals || []);
	  }

	  if (this.prevGlobalsLength === globals.length) {
	    return;
	  }
	  this.prevGlobalsLength = globals.length;

	  leaks = filterLeaks(ok, globals);
	  this._globals = this._globals.concat(leaks);

	  if (leaks.length > 1) {
	    this.fail(test, new Error('global leaks detected: ' + leaks.join(', ') + ''));
	  } else if (leaks.length) {
	    this.fail(test, new Error('global leak detected: ' + leaks[0]));
	  }
	};

	/**
	 * Fail the given `test`.
	 *
	 * @api private
	 * @param {Test} test
	 * @param {Error} err
	 */
	Runner.prototype.fail = function(test, err) {
	  ++this.failures;
	  test.state = 'failed';

	  if (!(err instanceof Error || err && typeof err.message === 'string')) {
	    err = new Error('the ' + type(err) + ' ' + stringify(err) + ' was thrown, throw an Error :)');
	  }

	  err.stack = (this.fullStackTrace || !err.stack)
	    ? err.stack
	    : stackFilter(err.stack);

	  this.emit('fail', test, err);
	};

	/**
	 * Fail the given `hook` with `err`.
	 *
	 * Hook failures work in the following pattern:
	 * - If bail, then exit
	 * - Failed `before` hook skips all tests in a suite and subsuites,
	 *   but jumps to corresponding `after` hook
	 * - Failed `before each` hook skips remaining tests in a
	 *   suite and jumps to corresponding `after each` hook,
	 *   which is run only once
	 * - Failed `after` hook does not alter
	 *   execution order
	 * - Failed `after each` hook skips remaining tests in a
	 *   suite and subsuites, but executes other `after each`
	 *   hooks
	 *
	 * @api private
	 * @param {Hook} hook
	 * @param {Error} err
	 */
	Runner.prototype.failHook = function(hook, err) {
	  if (hook.ctx && hook.ctx.currentTest) {
	    hook.originalTitle = hook.originalTitle || hook.title;
	    hook.title = hook.originalTitle + ' for "' + hook.ctx.currentTest.title + '"';
	  }

	  this.fail(hook, err);
	  if (this.suite.bail()) {
	    this.emit('end');
	  }
	};

	/**
	 * Run hook `name` callbacks and then invoke `fn()`.
	 *
	 * @api private
	 * @param {string} name
	 * @param {Function} fn
	 */

	Runner.prototype.hook = function(name, fn) {
	  var suite = this.suite;
	  var hooks = suite['_' + name];
	  var self = this;

	  function next(i) {
	    var hook = hooks[i];
	    if (!hook) {
	      return fn();
	    }
	    self.currentRunnable = hook;

	    hook.ctx.currentTest = self.test;

	    self.emit('hook', hook);

	    if (!hook.listeners('error').length) {
	      hook.on('error', function(err) {
	        self.failHook(hook, err);
	      });
	    }

	    hook.run(function(err) {
	      var testError = hook.error();
	      if (testError) {
	        self.fail(self.test, testError);
	      }
	      if (err) {
	        if (err instanceof Pending) {
	          suite.pending = true;
	        } else {
	          self.failHook(hook, err);

	          // stop executing hooks, notify callee of hook err
	          return fn(err);
	        }
	      }
	      self.emit('hook end', hook);
	      delete hook.ctx.currentTest;
	      next(++i);
	    });
	  }

	  Runner.immediately(function() {
	    next(0);
	  });
	};

	/**
	 * Run hook `name` for the given array of `suites`
	 * in order, and callback `fn(err, errSuite)`.
	 *
	 * @api private
	 * @param {string} name
	 * @param {Array} suites
	 * @param {Function} fn
	 */
	Runner.prototype.hooks = function(name, suites, fn) {
	  var self = this;
	  var orig = this.suite;

	  function next(suite) {
	    self.suite = suite;

	    if (!suite) {
	      self.suite = orig;
	      return fn();
	    }

	    self.hook(name, function(err) {
	      if (err) {
	        var errSuite = self.suite;
	        self.suite = orig;
	        return fn(err, errSuite);
	      }

	      next(suites.pop());
	    });
	  }

	  next(suites.pop());
	};

	/**
	 * Run hooks from the top level down.
	 *
	 * @param {String} name
	 * @param {Function} fn
	 * @api private
	 */
	Runner.prototype.hookUp = function(name, fn) {
	  var suites = [this.suite].concat(this.parents()).reverse();
	  this.hooks(name, suites, fn);
	};

	/**
	 * Run hooks from the bottom up.
	 *
	 * @param {String} name
	 * @param {Function} fn
	 * @api private
	 */
	Runner.prototype.hookDown = function(name, fn) {
	  var suites = [this.suite].concat(this.parents());
	  this.hooks(name, suites, fn);
	};

	/**
	 * Return an array of parent Suites from
	 * closest to furthest.
	 *
	 * @return {Array}
	 * @api private
	 */
	Runner.prototype.parents = function() {
	  var suite = this.suite;
	  var suites = [];
	  while (suite.parent) {
	    suite = suite.parent;
	    suites.push(suite);
	  }
	  return suites;
	};

	/**
	 * Run the current test and callback `fn(err)`.
	 *
	 * @param {Function} fn
	 * @api private
	 */
	Runner.prototype.runTest = function(fn) {
	  var self = this;
	  var test = this.test;

	  if (this.asyncOnly) {
	    test.asyncOnly = true;
	  }

	  if (this.allowUncaught) {
	    test.allowUncaught = true;
	    return test.run(fn);
	  }
	  try {
	    test.on('error', function(err) {
	      self.fail(test, err);
	    });
	    test.run(fn);
	  } catch (err) {
	    fn(err);
	  }
	};

	/**
	 * Run tests in the given `suite` and invoke the callback `fn()` when complete.
	 *
	 * @api private
	 * @param {Suite} suite
	 * @param {Function} fn
	 */
	Runner.prototype.runTests = function(suite, fn) {
	  var self = this;
	  var tests = suite.tests.slice();
	  var test;

	  function hookErr(_, errSuite, after) {
	    // before/after Each hook for errSuite failed:
	    var orig = self.suite;

	    // for failed 'after each' hook start from errSuite parent,
	    // otherwise start from errSuite itself
	    self.suite = after ? errSuite.parent : errSuite;

	    if (self.suite) {
	      // call hookUp afterEach
	      self.hookUp('afterEach', function(err2, errSuite2) {
	        self.suite = orig;
	        // some hooks may fail even now
	        if (err2) {
	          return hookErr(err2, errSuite2, true);
	        }
	        // report error suite
	        fn(errSuite);
	      });
	    } else {
	      // there is no need calling other 'after each' hooks
	      self.suite = orig;
	      fn(errSuite);
	    }
	  }

	  function next(err, errSuite) {
	    // if we bail after first err
	    if (self.failures && suite._bail) {
	      return fn();
	    }

	    if (self._abort) {
	      return fn();
	    }

	    if (err) {
	      return hookErr(err, errSuite, true);
	    }

	    // next test
	    test = tests.shift();

	    // all done
	    if (!test) {
	      return fn();
	    }

	    // grep
	    var match = self._grep.test(test.fullTitle());
	    if (self._invert) {
	      match = !match;
	    }
	    if (!match) {
	      // Run immediately only if we have defined a grep. When we
	      // define a grep — It can cause maximum callstack error if
	      // the grep is doing a large recursive loop by neglecting
	      // all tests. The run immediately function also comes with
	      // a performance cost. So we don't want to run immediately
	      // if we run the whole test suite, because running the whole
	      // test suite don't do any immediate recursive loops. Thus,
	      // allowing a JS runtime to breathe.
	      if (self._grep !== self._defaultGrep) {
	        Runner.immediately(next);
	      } else {
	        next();
	      }
	      return;
	    }

	    if (test.isPending()) {
	      self.emit('pending', test);
	      self.emit('test end', test);
	      return next();
	    }

	    // execute test and hook(s)
	    self.emit('test', self.test = test);
	    self.hookDown('beforeEach', function(err, errSuite) {
	      if (suite.isPending()) {
	        self.emit('pending', test);
	        self.emit('test end', test);
	        return next();
	      }
	      if (err) {
	        return hookErr(err, errSuite, false);
	      }
	      self.currentRunnable = self.test;
	      self.runTest(function(err) {
	        test = self.test;
	        if (err) {
	          var retry = test.currentRetry();
	          if (err instanceof Pending) {
	            test.pending = true;
	            self.emit('pending', test);
	          } else if (retry < test.retries()) {
	            var clonedTest = test.clone();
	            clonedTest.currentRetry(retry + 1);
	            tests.unshift(clonedTest);

	            // Early return + hook trigger so that it doesn't
	            // increment the count wrong
	            return self.hookUp('afterEach', next);
	          } else {
	            self.fail(test, err);
	          }
	          self.emit('test end', test);

	          if (err instanceof Pending) {
	            return next();
	          }

	          return self.hookUp('afterEach', next);
	        }

	        test.state = 'passed';
	        self.emit('pass', test);
	        self.emit('test end', test);
	        self.hookUp('afterEach', next);
	      });
	    });
	  }

	  this.next = next;
	  this.hookErr = hookErr;
	  next();
	};

	/**
	 * Run the given `suite` and invoke the callback `fn()` when complete.
	 *
	 * @api private
	 * @param {Suite} suite
	 * @param {Function} fn
	 */
	Runner.prototype.runSuite = function(suite, fn) {
	  var i = 0;
	  var self = this;
	  var total = this.grepTotal(suite);
	  var afterAllHookCalled = false;

	  debug('run suite %s', suite.fullTitle());

	  if (!total || (self.failures && suite._bail)) {
	    return fn();
	  }

	  this.emit('suite', this.suite = suite);

	  function next(errSuite) {
	    if (errSuite) {
	      // current suite failed on a hook from errSuite
	      if (errSuite === suite) {
	        // if errSuite is current suite
	        // continue to the next sibling suite
	        return done();
	      }
	      // errSuite is among the parents of current suite
	      // stop execution of errSuite and all sub-suites
	      return done(errSuite);
	    }

	    if (self._abort) {
	      return done();
	    }

	    var curr = suite.suites[i++];
	    if (!curr) {
	      return done();
	    }

	    // Avoid grep neglecting large number of tests causing a
	    // huge recursive loop and thus a maximum call stack error.
	    // See comment in `this.runTests()` for more information.
	    if (self._grep !== self._defaultGrep) {
	      Runner.immediately(function() {
	        self.runSuite(curr, next);
	      });
	    } else {
	      self.runSuite(curr, next);
	    }
	  }

	  function done(errSuite) {
	    self.suite = suite;
	    self.nextSuite = next;

	    if (afterAllHookCalled) {
	      fn(errSuite);
	    } else {
	      // mark that the afterAll block has been called once
	      // and so can be skipped if there is an error in it.
	      afterAllHookCalled = true;

	      // remove reference to test
	      delete self.test;

	      self.hook('afterAll', function() {
	        self.emit('suite end', suite);
	        fn(errSuite);
	      });
	    }
	  }

	  this.nextSuite = next;

	  this.hook('beforeAll', function(err) {
	    if (err) {
	      return done();
	    }
	    self.runTests(suite, next);
	  });
	};

	/**
	 * Handle uncaught exceptions.
	 *
	 * @param {Error} err
	 * @api private
	 */
	Runner.prototype.uncaught = function(err) {
	  if (err) {
	    debug('uncaught exception %s', err !== function() {
	      return this;
	    }.call(err) ? err : (err.message || err));
	  } else {
	    debug('uncaught undefined exception');
	    err = undefinedError();
	  }
	  err.uncaught = true;

	  var runnable = this.currentRunnable;

	  if (!runnable) {
	    runnable = new Runnable('Uncaught error outside test suite');
	    runnable.parent = this.suite;

	    if (this.started) {
	      this.fail(runnable, err);
	    } else {
	      // Can't recover from this failure
	      this.emit('start');
	      this.fail(runnable, err);
	      this.emit('end');
	    }

	    return;
	  }

	  runnable.clearTimeout();

	  // Ignore errors if complete
	  if (runnable.state) {
	    return;
	  }
	  this.fail(runnable, err);

	  // recover from test
	  if (runnable.type === 'test') {
	    this.emit('test end', runnable);
	    this.hookUp('afterEach', this.next);
	    return;
	  }

	 // recover from hooks
	  if (runnable.type === 'hook') {
	    var errSuite = this.suite;
	    // if hook failure is in afterEach block
	    if (runnable.fullTitle().indexOf('after each') > -1) {
	      return this.hookErr(err, errSuite, true);
	    }
	    // if hook failure is in beforeEach block
	    if (runnable.fullTitle().indexOf('before each') > -1) {
	      return this.hookErr(err, errSuite, false);
	    }
	    // if hook failure is in after or before blocks
	    return this.nextSuite(errSuite);
	  }

	  // bail
	  this.emit('end');
	};

	/**
	 * Cleans up the references to all the deferred functions
	 * (before/after/beforeEach/afterEach) and tests of a Suite.
	 * These must be deleted otherwise a memory leak can happen,
	 * as those functions may reference variables from closures,
	 * thus those variables can never be garbage collected as long
	 * as the deferred functions exist.
	 *
	 * @param {Suite} suite
	 */
	function cleanSuiteReferences(suite) {
	  function cleanArrReferences(arr) {
	    for (var i = 0; i < arr.length; i++) {
	      delete arr[i].fn;
	    }
	  }

	  if (isArray(suite._beforeAll)) {
	    cleanArrReferences(suite._beforeAll);
	  }

	  if (isArray(suite._beforeEach)) {
	    cleanArrReferences(suite._beforeEach);
	  }

	  if (isArray(suite._afterAll)) {
	    cleanArrReferences(suite._afterAll);
	  }

	  if (isArray(suite._afterEach)) {
	    cleanArrReferences(suite._afterEach);
	  }

	  for (var i = 0; i < suite.tests.length; i++) {
	    delete suite.tests[i].fn;
	  }
	}

	/**
	 * Run the root suite and invoke `fn(failures)`
	 * on completion.
	 *
	 * @param {Function} fn
	 * @return {Runner} for chaining
	 * @api public
	 * @param {Function} fn
	 * @return {Runner} Runner instance.
	 */
	Runner.prototype.run = function(fn) {
	  var self = this;
	  var rootSuite = this.suite;

	  fn = fn || function() {};

	  function uncaught(err) {
	    self.uncaught(err);
	  }

	  function start() {
	    self.started = true;
	    self.emit('start');
	    self.runSuite(rootSuite, function() {
	      debug('finished running');
	      self.emit('end');
	    });
	  }

	  debug('start');

	  // references cleanup to avoid memory leaks
	  this.on('suite end', cleanSuiteReferences);

	  // callback
	  this.on('end', function() {
	    debug('end');
	    process.removeListener('uncaughtException', uncaught);
	    fn(self.failures);
	  });

	  // uncaught exception
	  process.on('uncaughtException', uncaught);

	  if (this._delay) {
	    // for reporters, I guess.
	    // might be nice to debounce some dots while we wait.
	    this.emit('waiting', rootSuite);
	    rootSuite.once('run', start);
	  } else {
	    start();
	  }

	  return this;
	};

	/**
	 * Cleanly abort execution.
	 *
	 * @api public
	 * @return {Runner} Runner instance.
	 */
	Runner.prototype.abort = function() {
	  debug('aborting');
	  this._abort = true;

	  return this;
	};

	/**
	 * Filter leaks with the given globals flagged as `ok`.
	 *
	 * @api private
	 * @param {Array} ok
	 * @param {Array} globals
	 * @return {Array}
	 */
	function filterLeaks(ok, globals) {
	  return filter(globals, function(key) {
	    // Firefox and Chrome exposes iframes as index inside the window object
	    if (/^d+/.test(key)) {
	      return false;
	    }

	    // in firefox
	    // if runner runs in an iframe, this iframe's window.getInterface method not init at first
	    // it is assigned in some seconds
	    if (global.navigator && (/^getInterface/).test(key)) {
	      return false;
	    }

	    // an iframe could be approached by window[iframeIndex]
	    // in ie6,7,8 and opera, iframeIndex is enumerable, this could cause leak
	    if (global.navigator && (/^\d+/).test(key)) {
	      return false;
	    }

	    // Opera and IE expose global variables for HTML element IDs (issue #243)
	    if (/^mocha-/.test(key)) {
	      return false;
	    }

	    var matched = filter(ok, function(ok) {
	      if (~ok.indexOf('*')) {
	        return key.indexOf(ok.split('*')[0]) === 0;
	      }
	      return key === ok;
	    });
	    return !matched.length && (!global.navigator || key !== 'onerror');
	  });
	}

	/**
	 * Array of globals dependent on the environment.
	 *
	 * @return {Array}
	 * @api private
	 */
	function extraGlobals() {
	  if (typeof process === 'object' && typeof process.version === 'string') {
	    var parts = process.version.split('.');
	    var nodeVersion = utils.reduce(parts, function(a, v) {
	      return a << 8 | v;
	    });

	    // 'errno' was renamed to process._errno in v0.9.11.

	    if (nodeVersion < 0x00090B) {
	      return ['errno'];
	    }
	  }

	  return [];
	}

	}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./pending":16,"./runnable":35,"./utils":39,"_process":58,"debug":2,"events":3}],37:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var EventEmitter = require('events').EventEmitter;
	var Hook = require('./hook');
	var utils = require('./utils');
	var inherits = utils.inherits;
	var debug = require('debug')('mocha:suite');
	var milliseconds = require('./ms');

	/**
	 * Expose `Suite`.
	 */

	exports = module.exports = Suite;

	/**
	 * Create a new `Suite` with the given `title` and parent `Suite`. When a suite
	 * with the same title is already present, that suite is returned to provide
	 * nicer reporter and more flexible meta-testing.
	 *
	 * @api public
	 * @param {Suite} parent
	 * @param {string} title
	 * @return {Suite}
	 */
	exports.create = function(parent, title) {
	  var suite = new Suite(title, parent.ctx);
	  suite.parent = parent;
	  title = suite.fullTitle();
	  parent.addSuite(suite);
	  return suite;
	};

	/**
	 * Initialize a new `Suite` with the given `title` and `ctx`.
	 *
	 * @api private
	 * @param {string} title
	 * @param {Context} parentContext
	 */
	function Suite(title, parentContext) {
	  this.title = title;
	  function Context() {}
	  Context.prototype = parentContext;
	  this.ctx = new Context();
	  this.suites = [];
	  this.tests = [];
	  this.pending = false;
	  this._beforeEach = [];
	  this._beforeAll = [];
	  this._afterEach = [];
	  this._afterAll = [];
	  this.root = !title;
	  this._timeout = 2000;
	  this._enableTimeouts = true;
	  this._slow = 75;
	  this._bail = false;
	  this._retries = -1;
	  this.delayed = false;
	}

	/**
	 * Inherit from `EventEmitter.prototype`.
	 */
	inherits(Suite, EventEmitter);

	/**
	 * Return a clone of this `Suite`.
	 *
	 * @api private
	 * @return {Suite}
	 */
	Suite.prototype.clone = function() {
	  var suite = new Suite(this.title);
	  debug('clone');
	  suite.ctx = this.ctx;
	  suite.timeout(this.timeout());
	  suite.retries(this.retries());
	  suite.enableTimeouts(this.enableTimeouts());
	  suite.slow(this.slow());
	  suite.bail(this.bail());
	  return suite;
	};

	/**
	 * Set timeout `ms` or short-hand such as "2s".
	 *
	 * @api private
	 * @param {number|string} ms
	 * @return {Suite|number} for chaining
	 */
	Suite.prototype.timeout = function(ms) {
	  if (!arguments.length) {
	    return this._timeout;
	  }
	  if (ms.toString() === '0') {
	    this._enableTimeouts = false;
	  }
	  if (typeof ms === 'string') {
	    ms = milliseconds(ms);
	  }
	  debug('timeout %d', ms);
	  this._timeout = parseInt(ms, 10);
	  return this;
	};

	/**
	 * Set number of times to retry a failed test.
	 *
	 * @api private
	 * @param {number|string} n
	 * @return {Suite|number} for chaining
	 */
	Suite.prototype.retries = function(n) {
	  if (!arguments.length) {
	    return this._retries;
	  }
	  debug('retries %d', n);
	  this._retries = parseInt(n, 10) || 0;
	  return this;
	};

	/**
	  * Set timeout to `enabled`.
	  *
	  * @api private
	  * @param {boolean} enabled
	  * @return {Suite|boolean} self or enabled
	  */
	Suite.prototype.enableTimeouts = function(enabled) {
	  if (!arguments.length) {
	    return this._enableTimeouts;
	  }
	  debug('enableTimeouts %s', enabled);
	  this._enableTimeouts = enabled;
	  return this;
	};

	/**
	 * Set slow `ms` or short-hand such as "2s".
	 *
	 * @api private
	 * @param {number|string} ms
	 * @return {Suite|number} for chaining
	 */
	Suite.prototype.slow = function(ms) {
	  if (!arguments.length) {
	    return this._slow;
	  }
	  if (typeof ms === 'string') {
	    ms = milliseconds(ms);
	  }
	  debug('slow %d', ms);
	  this._slow = ms;
	  return this;
	};

	/**
	 * Sets whether to bail after first error.
	 *
	 * @api private
	 * @param {boolean} bail
	 * @return {Suite|number} for chaining
	 */
	Suite.prototype.bail = function(bail) {
	  if (!arguments.length) {
	    return this._bail;
	  }
	  debug('bail %s', bail);
	  this._bail = bail;
	  return this;
	};

	/**
	 * Check if this suite or its parent suite is marked as pending.
	 *
	 * @api private
	 */
	Suite.prototype.isPending = function() {
	  return this.pending || (this.parent && this.parent.isPending());
	};

	/**
	 * Run `fn(test[, done])` before running tests.
	 *
	 * @api private
	 * @param {string} title
	 * @param {Function} fn
	 * @return {Suite} for chaining
	 */
	Suite.prototype.beforeAll = function(title, fn) {
	  if (this.isPending()) {
	    return this;
	  }
	  if (typeof title === 'function') {
	    fn = title;
	    title = fn.name;
	  }
	  title = '"before all" hook' + (title ? ': ' + title : '');

	  var hook = new Hook(title, fn);
	  hook.parent = this;
	  hook.timeout(this.timeout());
	  hook.retries(this.retries());
	  hook.enableTimeouts(this.enableTimeouts());
	  hook.slow(this.slow());
	  hook.ctx = this.ctx;
	  this._beforeAll.push(hook);
	  this.emit('beforeAll', hook);
	  return this;
	};

	/**
	 * Run `fn(test[, done])` after running tests.
	 *
	 * @api private
	 * @param {string} title
	 * @param {Function} fn
	 * @return {Suite} for chaining
	 */
	Suite.prototype.afterAll = function(title, fn) {
	  if (this.isPending()) {
	    return this;
	  }
	  if (typeof title === 'function') {
	    fn = title;
	    title = fn.name;
	  }
	  title = '"after all" hook' + (title ? ': ' + title : '');

	  var hook = new Hook(title, fn);
	  hook.parent = this;
	  hook.timeout(this.timeout());
	  hook.retries(this.retries());
	  hook.enableTimeouts(this.enableTimeouts());
	  hook.slow(this.slow());
	  hook.ctx = this.ctx;
	  this._afterAll.push(hook);
	  this.emit('afterAll', hook);
	  return this;
	};

	/**
	 * Run `fn(test[, done])` before each test case.
	 *
	 * @api private
	 * @param {string} title
	 * @param {Function} fn
	 * @return {Suite} for chaining
	 */
	Suite.prototype.beforeEach = function(title, fn) {
	  if (this.isPending()) {
	    return this;
	  }
	  if (typeof title === 'function') {
	    fn = title;
	    title = fn.name;
	  }
	  title = '"before each" hook' + (title ? ': ' + title : '');

	  var hook = new Hook(title, fn);
	  hook.parent = this;
	  hook.timeout(this.timeout());
	  hook.retries(this.retries());
	  hook.enableTimeouts(this.enableTimeouts());
	  hook.slow(this.slow());
	  hook.ctx = this.ctx;
	  this._beforeEach.push(hook);
	  this.emit('beforeEach', hook);
	  return this;
	};

	/**
	 * Run `fn(test[, done])` after each test case.
	 *
	 * @api private
	 * @param {string} title
	 * @param {Function} fn
	 * @return {Suite} for chaining
	 */
	Suite.prototype.afterEach = function(title, fn) {
	  if (this.isPending()) {
	    return this;
	  }
	  if (typeof title === 'function') {
	    fn = title;
	    title = fn.name;
	  }
	  title = '"after each" hook' + (title ? ': ' + title : '');

	  var hook = new Hook(title, fn);
	  hook.parent = this;
	  hook.timeout(this.timeout());
	  hook.retries(this.retries());
	  hook.enableTimeouts(this.enableTimeouts());
	  hook.slow(this.slow());
	  hook.ctx = this.ctx;
	  this._afterEach.push(hook);
	  this.emit('afterEach', hook);
	  return this;
	};

	/**
	 * Add a test `suite`.
	 *
	 * @api private
	 * @param {Suite} suite
	 * @return {Suite} for chaining
	 */
	Suite.prototype.addSuite = function(suite) {
	  suite.parent = this;
	  suite.timeout(this.timeout());
	  suite.retries(this.retries());
	  suite.enableTimeouts(this.enableTimeouts());
	  suite.slow(this.slow());
	  suite.bail(this.bail());
	  this.suites.push(suite);
	  this.emit('suite', suite);
	  return this;
	};

	/**
	 * Add a `test` to this suite.
	 *
	 * @api private
	 * @param {Test} test
	 * @return {Suite} for chaining
	 */
	Suite.prototype.addTest = function(test) {
	  test.parent = this;
	  test.timeout(this.timeout());
	  test.retries(this.retries());
	  test.enableTimeouts(this.enableTimeouts());
	  test.slow(this.slow());
	  test.ctx = this.ctx;
	  this.tests.push(test);
	  this.emit('test', test);
	  return this;
	};

	/**
	 * Return the full title generated by recursively concatenating the parent's
	 * full title.
	 *
	 * @api public
	 * @return {string}
	 */
	Suite.prototype.fullTitle = function() {
	  if (this.parent) {
	    var full = this.parent.fullTitle();
	    if (full) {
	      return full + ' ' + this.title;
	    }
	  }
	  return this.title;
	};

	/**
	 * Return the total number of tests.
	 *
	 * @api public
	 * @return {number}
	 */
	Suite.prototype.total = function() {
	  return utils.reduce(this.suites, function(sum, suite) {
	    return sum + suite.total();
	  }, 0) + this.tests.length;
	};

	/**
	 * Iterates through each suite recursively to find all tests. Applies a
	 * function in the format `fn(test)`.
	 *
	 * @api private
	 * @param {Function} fn
	 * @return {Suite}
	 */
	Suite.prototype.eachTest = function(fn) {
	  utils.forEach(this.tests, fn);
	  utils.forEach(this.suites, function(suite) {
	    suite.eachTest(fn);
	  });
	  return this;
	};

	/**
	 * This will run the root suite if we happen to be running in delayed mode.
	 */
	Suite.prototype.run = function run() {
	  if (this.root) {
	    this.emit('run');
	  }
	};

	},{"./hook":7,"./ms":15,"./utils":39,"debug":2,"events":3}],38:[function(require,module,exports){
	/**
	 * Module dependencies.
	 */

	var Runnable = require('./runnable');
	var inherits = require('./utils').inherits;

	/**
	 * Expose `Test`.
	 */

	module.exports = Test;

	/**
	 * Initialize a new `Test` with the given `title` and callback `fn`.
	 *
	 * @api private
	 * @param {String} title
	 * @param {Function} fn
	 */
	function Test(title, fn) {
	  Runnable.call(this, title, fn);
	  this.pending = !fn;
	  this.type = 'test';
	}

	/**
	 * Inherit from `Runnable.prototype`.
	 */
	inherits(Test, Runnable);

	Test.prototype.clone = function() {
	  var test = new Test(this.title, this.fn);
	  test.timeout(this.timeout());
	  test.slow(this.slow());
	  test.enableTimeouts(this.enableTimeouts());
	  test.retries(this.retries());
	  test.currentRetry(this.currentRetry());
	  test.globals(this.globals());
	  test.parent = this.parent;
	  test.file = this.file;
	  test.ctx = this.ctx;
	  return test;
	};

	},{"./runnable":35,"./utils":39}],39:[function(require,module,exports){
	(function (process,Buffer){
	/* eslint-env browser */

	/**
	 * Module dependencies.
	 */

	var basename = require('path').basename;
	var debug = require('debug')('mocha:watch');
	var exists = require('fs').existsSync || require('path').existsSync;
	var glob = require('glob');
	var join = require('path').join;
	var readdirSync = require('fs').readdirSync;
	var statSync = require('fs').statSync;
	var watchFile = require('fs').watchFile;
	var toISOString = require('to-iso-string');

	/**
	 * Ignored directories.
	 */

	var ignore = ['node_modules', '.git'];

	exports.inherits = require('util').inherits;

	/**
	 * Escape special characters in the given string of html.
	 *
	 * @api private
	 * @param  {string} html
	 * @return {string}
	 */
	exports.escape = function(html) {
	  return String(html)
	    .replace(/&/g, '&amp;')
	    .replace(/"/g, '&quot;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;');
	};

	/**
	 * Array#forEach (<=IE8)
	 *
	 * @api private
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Object} scope
	 */
	exports.forEach = function(arr, fn, scope) {
	  for (var i = 0, l = arr.length; i < l; i++) {
	    fn.call(scope, arr[i], i);
	  }
	};

	/**
	 * Test if the given obj is type of string.
	 *
	 * @api private
	 * @param {Object} obj
	 * @return {boolean}
	 */
	exports.isString = function(obj) {
	  return typeof obj === 'string';
	};

	/**
	 * Array#map (<=IE8)
	 *
	 * @api private
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Object} scope
	 * @return {Array}
	 */
	exports.map = function(arr, fn, scope) {
	  var result = [];
	  for (var i = 0, l = arr.length; i < l; i++) {
	    result.push(fn.call(scope, arr[i], i, arr));
	  }
	  return result;
	};

	/**
	 * Array#indexOf (<=IE8)
	 *
	 * @api private
	 * @param {Array} arr
	 * @param {Object} obj to find index of
	 * @param {number} start
	 * @return {number}
	 */
	exports.indexOf = function(arr, obj, start) {
	  for (var i = start || 0, l = arr.length; i < l; i++) {
	    if (arr[i] === obj) {
	      return i;
	    }
	  }
	  return -1;
	};

	/**
	 * Array#reduce (<=IE8)
	 *
	 * @api private
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Object} val Initial value.
	 * @return {*}
	 */
	exports.reduce = function(arr, fn, val) {
	  var rval = val;

	  for (var i = 0, l = arr.length; i < l; i++) {
	    rval = fn(rval, arr[i], i, arr);
	  }

	  return rval;
	};

	/**
	 * Array#filter (<=IE8)
	 *
	 * @api private
	 * @param {Array} arr
	 * @param {Function} fn
	 * @return {Array}
	 */
	exports.filter = function(arr, fn) {
	  var ret = [];

	  for (var i = 0, l = arr.length; i < l; i++) {
	    var val = arr[i];
	    if (fn(val, i, arr)) {
	      ret.push(val);
	    }
	  }

	  return ret;
	};

	/**
	 * Object.keys (<=IE8)
	 *
	 * @api private
	 * @param {Object} obj
	 * @return {Array} keys
	 */
	exports.keys = typeof Object.keys === 'function' ? Object.keys : function(obj) {
	  var keys = [];
	  var has = Object.prototype.hasOwnProperty; // for `window` on <=IE8

	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      keys.push(key);
	    }
	  }

	  return keys;
	};

	/**
	 * Watch the given `files` for changes
	 * and invoke `fn(file)` on modification.
	 *
	 * @api private
	 * @param {Array} files
	 * @param {Function} fn
	 */
	exports.watch = function(files, fn) {
	  var options = { interval: 100 };
	  files.forEach(function(file) {
	    debug('file %s', file);
	    watchFile(file, options, function(curr, prev) {
	      if (prev.mtime < curr.mtime) {
	        fn(file);
	      }
	    });
	  });
	};

	/**
	 * Array.isArray (<=IE8)
	 *
	 * @api private
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	var isArray = typeof Array.isArray === 'function' ? Array.isArray : function(obj) {
	  return Object.prototype.toString.call(obj) === '[object Array]';
	};

	exports.isArray = isArray;

	/**
	 * Buffer.prototype.toJSON polyfill.
	 *
	 * @type {Function}
	 */
	if (typeof Buffer !== 'undefined' && Buffer.prototype) {
	  Buffer.prototype.toJSON = Buffer.prototype.toJSON || function() {
	    return Array.prototype.slice.call(this, 0);
	  };
	}

	/**
	 * Ignored files.
	 *
	 * @api private
	 * @param {string} path
	 * @return {boolean}
	 */
	function ignored(path) {
	  return !~ignore.indexOf(path);
	}

	/**
	 * Lookup files in the given `dir`.
	 *
	 * @api private
	 * @param {string} dir
	 * @param {string[]} [ext=['.js']]
	 * @param {Array} [ret=[]]
	 * @return {Array}
	 */
	exports.files = function(dir, ext, ret) {
	  ret = ret || [];
	  ext = ext || ['js'];

	  var re = new RegExp('\\.(' + ext.join('|') + ')$');

	  readdirSync(dir)
	    .filter(ignored)
	    .forEach(function(path) {
	      path = join(dir, path);
	      if (statSync(path).isDirectory()) {
	        exports.files(path, ext, ret);
	      } else if (path.match(re)) {
	        ret.push(path);
	      }
	    });

	  return ret;
	};

	/**
	 * Compute a slug from the given `str`.
	 *
	 * @api private
	 * @param {string} str
	 * @return {string}
	 */
	exports.slug = function(str) {
	  return str
	    .toLowerCase()
	    .replace(/ +/g, '-')
	    .replace(/[^-\w]/g, '');
	};

	/**
	 * Strip the function definition from `str`, and re-indent for pre whitespace.
	 *
	 * @param {string} str
	 * @return {string}
	 */
	exports.clean = function(str) {
	  str = str
	    .replace(/\r\n?|[\n\u2028\u2029]/g, '\n').replace(/^\uFEFF/, '')
	    .replace(/^function *\(.*\)\s*\{|\(.*\) *=> *\{?/, '')
	    .replace(/\s+\}$/, '');

	  var spaces = str.match(/^\n?( *)/)[1].length;
	  var tabs = str.match(/^\n?(\t*)/)[1].length;
	  var re = new RegExp('^\n?' + (tabs ? '\t' : ' ') + '{' + (tabs ? tabs : spaces) + '}', 'gm');

	  str = str.replace(re, '');

	  return exports.trim(str);
	};

	/**
	 * Trim the given `str`.
	 *
	 * @api private
	 * @param {string} str
	 * @return {string}
	 */
	exports.trim = function(str) {
	  return str.replace(/^\s+|\s+$/g, '');
	};

	/**
	 * Parse the given `qs`.
	 *
	 * @api private
	 * @param {string} qs
	 * @return {Object}
	 */
	exports.parseQuery = function(qs) {
	  return exports.reduce(qs.replace('?', '').split('&'), function(obj, pair) {
	    var i = pair.indexOf('=');
	    var key = pair.slice(0, i);
	    var val = pair.slice(++i);

	    obj[key] = decodeURIComponent(val);
	    return obj;
	  }, {});
	};

	/**
	 * Highlight the given string of `js`.
	 *
	 * @api private
	 * @param {string} js
	 * @return {string}
	 */
	function highlight(js) {
	  return js
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>')
	    .replace(/('.*?')/gm, '<span class="string">$1</span>')
	    .replace(/(\d+\.\d+)/gm, '<span class="number">$1</span>')
	    .replace(/(\d+)/gm, '<span class="number">$1</span>')
	    .replace(/\bnew[ \t]+(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
	    .replace(/\b(function|new|throw|return|var|if|else)\b/gm, '<span class="keyword">$1</span>');
	}

	/**
	 * Highlight the contents of tag `name`.
	 *
	 * @api private
	 * @param {string} name
	 */
	exports.highlightTags = function(name) {
	  var code = document.getElementById('mocha').getElementsByTagName(name);
	  for (var i = 0, len = code.length; i < len; ++i) {
	    code[i].innerHTML = highlight(code[i].innerHTML);
	  }
	};

	/**
	 * If a value could have properties, and has none, this function is called,
	 * which returns a string representation of the empty value.
	 *
	 * Functions w/ no properties return `'[Function]'`
	 * Arrays w/ length === 0 return `'[]'`
	 * Objects w/ no properties return `'{}'`
	 * All else: return result of `value.toString()`
	 *
	 * @api private
	 * @param {*} value The value to inspect.
	 * @param {string} [type] The type of the value, if known.
	 * @returns {string}
	 */
	function emptyRepresentation(value, type) {
	  type = type || exports.type(value);

	  switch (type) {
	    case 'function':
	      return '[Function]';
	    case 'object':
	      return '{}';
	    case 'array':
	      return '[]';
	    default:
	      return value.toString();
	  }
	}

	/**
	 * Takes some variable and asks `Object.prototype.toString()` what it thinks it
	 * is.
	 *
	 * @api private
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
	 * @param {*} value The value to test.
	 * @returns {string}
	 * @example
	 * type({}) // 'object'
	 * type([]) // 'array'
	 * type(1) // 'number'
	 * type(false) // 'boolean'
	 * type(Infinity) // 'number'
	 * type(null) // 'null'
	 * type(new Date()) // 'date'
	 * type(/foo/) // 'regexp'
	 * type('type') // 'string'
	 * type(global) // 'global'
	 */
	exports.type = function type(value) {
	  if (value === undefined) {
	    return 'undefined';
	  } else if (value === null) {
	    return 'null';
	  } else if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {
	    return 'buffer';
	  }
	  return Object.prototype.toString.call(value)
	    .replace(/^\[.+\s(.+?)\]$/, '$1')
	    .toLowerCase();
	};

	/**
	 * Stringify `value`. Different behavior depending on type of value:
	 *
	 * - If `value` is undefined or null, return `'[undefined]'` or `'[null]'`, respectively.
	 * - If `value` is not an object, function or array, return result of `value.toString()` wrapped in double-quotes.
	 * - If `value` is an *empty* object, function, or array, return result of function
	 *   {@link emptyRepresentation}.
	 * - If `value` has properties, call {@link exports.canonicalize} on it, then return result of
	 *   JSON.stringify().
	 *
	 * @api private
	 * @see exports.type
	 * @param {*} value
	 * @return {string}
	 */
	exports.stringify = function(value) {
	  var type = exports.type(value);

	  if (!~exports.indexOf(['object', 'array', 'function'], type)) {
	    if (type !== 'buffer') {
	      return jsonStringify(value);
	    }
	    var json = value.toJSON();
	    // Based on the toJSON result
	    return jsonStringify(json.data && json.type ? json.data : json, 2)
	      .replace(/,(\n|$)/g, '$1');
	  }

	  for (var prop in value) {
	    if (Object.prototype.hasOwnProperty.call(value, prop)) {
	      return jsonStringify(exports.canonicalize(value), 2).replace(/,(\n|$)/g, '$1');
	    }
	  }

	  return emptyRepresentation(value, type);
	};

	/**
	 * like JSON.stringify but more sense.
	 *
	 * @api private
	 * @param {Object}  object
	 * @param {number=} spaces
	 * @param {number=} depth
	 * @returns {*}
	 */
	function jsonStringify(object, spaces, depth) {
	  if (typeof spaces === 'undefined') {
	    // primitive types
	    return _stringify(object);
	  }

	  depth = depth || 1;
	  var space = spaces * depth;
	  var str = isArray(object) ? '[' : '{';
	  var end = isArray(object) ? ']' : '}';
	  var length = typeof object.length === 'number' ? object.length : exports.keys(object).length;
	  // `.repeat()` polyfill
	  function repeat(s, n) {
	    return new Array(n).join(s);
	  }

	  function _stringify(val) {
	    switch (exports.type(val)) {
	      case 'null':
	      case 'undefined':
	        val = '[' + val + ']';
	        break;
	      case 'array':
	      case 'object':
	        val = jsonStringify(val, spaces, depth + 1);
	        break;
	      case 'boolean':
	      case 'regexp':
	      case 'symbol':
	      case 'number':
	        val = val === 0 && (1 / val) === -Infinity // `-0`
	          ? '-0'
	          : val.toString();
	        break;
	      case 'date':
	        var sDate;
	        if (isNaN(val.getTime())) { // Invalid date
	          sDate = val.toString();
	        } else {
	          sDate = val.toISOString ? val.toISOString() : toISOString(val);
	        }
	        val = '[Date: ' + sDate + ']';
	        break;
	      case 'buffer':
	        var json = val.toJSON();
	        // Based on the toJSON result
	        json = json.data && json.type ? json.data : json;
	        val = '[Buffer: ' + jsonStringify(json, 2, depth + 1) + ']';
	        break;
	      default:
	        val = (val === '[Function]' || val === '[Circular]')
	          ? val
	          : JSON.stringify(val); // string
	    }
	    return val;
	  }

	  for (var i in object) {
	    if (!Object.prototype.hasOwnProperty.call(object, i)) {
	      continue; // not my business
	    }
	    --length;
	    str += '\n ' + repeat(' ', space)
	      + (isArray(object) ? '' : '"' + i + '": ') // key
	      + _stringify(object[i])                     // value
	      + (length ? ',' : '');                     // comma
	  }

	  return str
	    // [], {}
	    + (str.length !== 1 ? '\n' + repeat(' ', --space) + end : end);
	}

	/**
	 * Test if a value is a buffer.
	 *
	 * @api private
	 * @param {*} value The value to test.
	 * @return {boolean} True if `value` is a buffer, otherwise false
	 */
	exports.isBuffer = function(value) {
	  return typeof Buffer !== 'undefined' && Buffer.isBuffer(value);
	};

	/**
	 * Return a new Thing that has the keys in sorted order. Recursive.
	 *
	 * If the Thing...
	 * - has already been seen, return string `'[Circular]'`
	 * - is `undefined`, return string `'[undefined]'`
	 * - is `null`, return value `null`
	 * - is some other primitive, return the value
	 * - is not a primitive or an `Array`, `Object`, or `Function`, return the value of the Thing's `toString()` method
	 * - is a non-empty `Array`, `Object`, or `Function`, return the result of calling this function again.
	 * - is an empty `Array`, `Object`, or `Function`, return the result of calling `emptyRepresentation()`
	 *
	 * @api private
	 * @see {@link exports.stringify}
	 * @param {*} value Thing to inspect.  May or may not have properties.
	 * @param {Array} [stack=[]] Stack of seen values
	 * @return {(Object|Array|Function|string|undefined)}
	 */
	exports.canonicalize = function(value, stack) {
	  var canonicalizedObj;
	  /* eslint-disable no-unused-vars */
	  var prop;
	  /* eslint-enable no-unused-vars */
	  var type = exports.type(value);
	  function withStack(value, fn) {
	    stack.push(value);
	    fn();
	    stack.pop();
	  }

	  stack = stack || [];

	  if (exports.indexOf(stack, value) !== -1) {
	    return '[Circular]';
	  }

	  switch (type) {
	    case 'undefined':
	    case 'buffer':
	    case 'null':
	      canonicalizedObj = value;
	      break;
	    case 'array':
	      withStack(value, function() {
	        canonicalizedObj = exports.map(value, function(item) {
	          return exports.canonicalize(item, stack);
	        });
	      });
	      break;
	    case 'function':
	      /* eslint-disable guard-for-in */
	      for (prop in value) {
	        canonicalizedObj = {};
	        break;
	      }
	      /* eslint-enable guard-for-in */
	      if (!canonicalizedObj) {
	        canonicalizedObj = emptyRepresentation(value, type);
	        break;
	      }
	    /* falls through */
	    case 'object':
	      canonicalizedObj = canonicalizedObj || {};
	      withStack(value, function() {
	        exports.forEach(exports.keys(value).sort(), function(key) {
	          canonicalizedObj[key] = exports.canonicalize(value[key], stack);
	        });
	      });
	      break;
	    case 'date':
	    case 'number':
	    case 'regexp':
	    case 'boolean':
	    case 'symbol':
	      canonicalizedObj = value;
	      break;
	    default:
	      canonicalizedObj = value + '';
	  }

	  return canonicalizedObj;
	};

	/**
	 * Lookup file names at the given `path`.
	 *
	 * @api public
	 * @param {string} path Base path to start searching from.
	 * @param {string[]} extensions File extensions to look for.
	 * @param {boolean} recursive Whether or not to recurse into subdirectories.
	 * @return {string[]} An array of paths.
	 */
	exports.lookupFiles = function lookupFiles(path, extensions, recursive) {
	  var files = [];
	  var re = new RegExp('\\.(' + extensions.join('|') + ')$');

	  if (!exists(path)) {
	    if (exists(path + '.js')) {
	      path += '.js';
	    } else {
	      files = glob.sync(path);
	      if (!files.length) {
	        throw new Error("cannot resolve path (or pattern) '" + path + "'");
	      }
	      return files;
	    }
	  }

	  try {
	    var stat = statSync(path);
	    if (stat.isFile()) {
	      return path;
	    }
	  } catch (err) {
	    // ignore error
	    return;
	  }

	  readdirSync(path).forEach(function(file) {
	    file = join(path, file);
	    try {
	      var stat = statSync(file);
	      if (stat.isDirectory()) {
	        if (recursive) {
	          files = files.concat(lookupFiles(file, extensions, recursive));
	        }
	        return;
	      }
	    } catch (err) {
	      // ignore error
	      return;
	    }
	    if (!stat.isFile() || !re.test(file) || basename(file)[0] === '.') {
	      return;
	    }
	    files.push(file);
	  });

	  return files;
	};

	/**
	 * Generate an undefined error with a message warning the user.
	 *
	 * @return {Error}
	 */

	exports.undefinedError = function() {
	  return new Error('Caught undefined error, did you throw without specifying what?');
	};

	/**
	 * Generate an undefined error if `err` is not defined.
	 *
	 * @param {Error} err
	 * @return {Error}
	 */

	exports.getError = function(err) {
	  return err || exports.undefinedError();
	};

	/**
	 * @summary
	 * This Filter based on `mocha-clean` module.(see: `github.com/rstacruz/mocha-clean`)
	 * @description
	 * When invoking this function you get a filter function that get the Error.stack as an input,
	 * and return a prettify output.
	 * (i.e: strip Mocha and internal node functions from stack trace).
	 * @returns {Function}
	 */
	exports.stackTraceFilter = function() {
	  // TODO: Replace with `process.browser`
	  var slash = '/';
	  var is = typeof document === 'undefined' ? { node: true } : { browser: true };
	  var cwd = is.node
	      ? process.cwd() + slash
	      : (typeof location === 'undefined' ? window.location : location).href.replace(/\/[^\/]*$/, '/');

	  function isMochaInternal(line) {
	    return (~line.indexOf('node_modules' + slash + 'mocha' + slash))
	      || (~line.indexOf('components' + slash + 'mochajs' + slash))
	      || (~line.indexOf('components' + slash + 'mocha' + slash))
	      || (~line.indexOf(slash + 'mocha.js'));
	  }

	  function isNodeInternal(line) {
	    return (~line.indexOf('(timers.js:'))
	      || (~line.indexOf('(events.js:'))
	      || (~line.indexOf('(node.js:'))
	      || (~line.indexOf('(module.js:'))
	      || (~line.indexOf('GeneratorFunctionPrototype.next (native)'))
	      || false;
	  }

	  return function(stack) {
	    stack = stack.split('\n');

	    stack = exports.reduce(stack, function(list, line) {
	      if (isMochaInternal(line)) {
	        return list;
	      }

	      if (is.node && isNodeInternal(line)) {
	        return list;
	      }

	      // Clean up cwd(absolute)
	      if (/\(?.+:\d+:\d+\)?$/.test(line)) {
	        line = line.replace(cwd, '');
	      }

	      list.push(line);
	      return list;
	    }, []);

	    return stack.join('\n');
	  };
	};

	}).call(this,require('_process'),require("buffer").Buffer)
	},{"_process":58,"buffer":45,"debug":2,"fs":43,"glob":43,"path":43,"to-iso-string":72,"util":75}],40:[function(require,module,exports){
	'use strict'

	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	function init () {
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i]
	    revLookup[code.charCodeAt(i)] = i
	  }

	  revLookup['-'.charCodeAt(0)] = 62
	  revLookup['_'.charCodeAt(0)] = 63
	}

	init()

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}

	},{}],41:[function(require,module,exports){

	},{}],42:[function(require,module,exports){
	(function (process){
	var WritableStream = require('stream').Writable
	var inherits = require('util').inherits

	module.exports = BrowserStdout


	inherits(BrowserStdout, WritableStream)

	function BrowserStdout(opts) {
	  if (!(this instanceof BrowserStdout)) return new BrowserStdout(opts)

	  opts = opts || {}
	  WritableStream.call(this, opts)
	  this.label = (opts.label !== undefined) ? opts.label : 'stdout'
	}

	BrowserStdout.prototype._write = function(chunks, encoding, cb) {
	  var output = chunks.toString ? chunks.toString() : chunks
	  if (this.label === false) {
	    console.log(output)
	  } else {
	    console.log(this.label+':', output)
	  }
	  process.nextTick(cb)
	}

	}).call(this,require('_process'))
	},{"_process":58,"stream":59,"util":75}],43:[function(require,module,exports){
	arguments[4][41][0].apply(exports,arguments)
	},{"dup":41}],44:[function(require,module,exports){
	(function (global){
	'use strict';

	var buffer = require('buffer');
	var Buffer = buffer.Buffer;
	var SlowBuffer = buffer.SlowBuffer;
	var MAX_LEN = buffer.kMaxLength || 2147483647;
	exports.alloc = function alloc(size, fill, encoding) {
	  if (typeof Buffer.alloc === 'function') {
	    return Buffer.alloc(size, fill, encoding);
	  }
	  if (typeof encoding === 'number') {
	    throw new TypeError('encoding must not be number');
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  var enc = encoding;
	  var _fill = fill;
	  if (_fill === undefined) {
	    enc = undefined;
	    _fill = 0;
	  }
	  var buf = new Buffer(size);
	  if (typeof _fill === 'string') {
	    var fillBuf = new Buffer(_fill, enc);
	    var flen = fillBuf.length;
	    var i = -1;
	    while (++i < size) {
	      buf[i] = fillBuf[i % flen];
	    }
	  } else {
	    buf.fill(_fill);
	  }
	  return buf;
	}
	exports.allocUnsafe = function allocUnsafe(size) {
	  if (typeof Buffer.allocUnsafe === 'function') {
	    return Buffer.allocUnsafe(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new Buffer(size);
	}
	exports.from = function from(value, encodingOrOffset, length) {
	  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
	    return Buffer.from(value, encodingOrOffset, length);
	  }
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	  if (typeof value === 'string') {
	    return new Buffer(value, encodingOrOffset);
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    var offset = encodingOrOffset;
	    if (arguments.length === 1) {
	      return new Buffer(value);
	    }
	    if (typeof offset === 'undefined') {
	      offset = 0;
	    }
	    var len = length;
	    if (typeof len === 'undefined') {
	      len = value.byteLength - offset;
	    }
	    if (offset >= value.byteLength) {
	      throw new RangeError('\'offset\' is out of bounds');
	    }
	    if (len > value.byteLength - offset) {
	      throw new RangeError('\'length\' is out of bounds');
	    }
	    return new Buffer(value.slice(offset, offset + len));
	  }
	  if (Buffer.isBuffer(value)) {
	    var out = new Buffer(value.length);
	    value.copy(out, 0, 0, value.length);
	    return out;
	  }
	  if (value) {
	    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
	      return new Buffer(value);
	    }
	    if (value.type === 'Buffer' && Array.isArray(value.data)) {
	      return new Buffer(value.data);
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
	}
	exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
	  if (typeof Buffer.allocUnsafeSlow === 'function') {
	    return Buffer.allocUnsafeSlow(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size >= MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new SlowBuffer(size);
	}

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"buffer":45}],45:[function(require,module,exports){
	(function (global){
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = require('base64-js')
	var ieee754 = require('ieee754')
	var isArray = require('isarray')

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

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

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    return arr.foo() === 42 && // typed array instances can be augmented
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

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
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

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
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

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
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
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

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
	      case undefined:
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

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

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

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
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

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	function arrayIndexOf (arr, val, byteOffset, encoding) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var foundIndex = -1
	  for (var i = 0; byteOffset + i < arrLength; i++) {
	    if (read(arr, byteOffset + i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	      if (foundIndex === -1) foundIndex = i
	      if (i - foundIndex + 1 === valLength) return (byteOffset + foundIndex) * indexSize
	    } else {
	      if (foundIndex !== -1) i -= i - foundIndex
	      foundIndex = -1
	    }
	  }
	  return -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  if (Buffer.isBuffer(val)) {
	    // special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(this, val, byteOffset, encoding)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset, encoding)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
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
	    if (isNaN(parsed)) return i
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
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
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
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

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
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

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
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

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
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
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
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
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
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
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
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; i++) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

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

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"base64-js":40,"ieee754":52,"isarray":46}],46:[function(require,module,exports){
	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	},{}],47:[function(require,module,exports){
	(function (Buffer){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	}).call(this,{"isBuffer":require("../../is-buffer/index.js")})
	},{"../../is-buffer/index.js":54}],48:[function(require,module,exports){
	/* See LICENSE file for terms of use */

	/*
	 * Text diff implementation.
	 *
	 * This library supports the following APIS:
	 * JsDiff.diffChars: Character by character diff
	 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
	 * JsDiff.diffLines: Line based diff
	 *
	 * JsDiff.diffCss: Diff targeted at CSS content
	 *
	 * These methods are based on the implementation proposed in
	 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
	 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
	 */
	(function(global, undefined) {
	  var objectPrototypeToString = Object.prototype.toString;

	  /*istanbul ignore next*/
	  function map(arr, mapper, that) {
	    if (Array.prototype.map) {
	      return Array.prototype.map.call(arr, mapper, that);
	    }

	    var other = new Array(arr.length);

	    for (var i = 0, n = arr.length; i < n; i++) {
	      other[i] = mapper.call(that, arr[i], i, arr);
	    }
	    return other;
	  }
	  function clonePath(path) {
	    return { newPos: path.newPos, components: path.components.slice(0) };
	  }
	  function removeEmpty(array) {
	    var ret = [];
	    for (var i = 0; i < array.length; i++) {
	      if (array[i]) {
	        ret.push(array[i]);
	      }
	    }
	    return ret;
	  }
	  function escapeHTML(s) {
	    var n = s;
	    n = n.replace(/&/g, '&amp;');
	    n = n.replace(/</g, '&lt;');
	    n = n.replace(/>/g, '&gt;');
	    n = n.replace(/"/g, '&quot;');

	    return n;
	  }

	  // This function handles the presence of circular references by bailing out when encountering an
	  // object that is already on the "stack" of items being processed.
	  function canonicalize(obj, stack, replacementStack) {
	    stack = stack || [];
	    replacementStack = replacementStack || [];

	    var i;

	    for (i = 0; i < stack.length; i += 1) {
	      if (stack[i] === obj) {
	        return replacementStack[i];
	      }
	    }

	    var canonicalizedObj;

	    if ('[object Array]' === objectPrototypeToString.call(obj)) {
	      stack.push(obj);
	      canonicalizedObj = new Array(obj.length);
	      replacementStack.push(canonicalizedObj);
	      for (i = 0; i < obj.length; i += 1) {
	        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);
	      }
	      stack.pop();
	      replacementStack.pop();
	    } else if (typeof obj === 'object' && obj !== null) {
	      stack.push(obj);
	      canonicalizedObj = {};
	      replacementStack.push(canonicalizedObj);
	      var sortedKeys = [],
	          key;
	      for (key in obj) {
	        sortedKeys.push(key);
	      }
	      sortedKeys.sort();
	      for (i = 0; i < sortedKeys.length; i += 1) {
	        key = sortedKeys[i];
	        canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);
	      }
	      stack.pop();
	      replacementStack.pop();
	    } else {
	      canonicalizedObj = obj;
	    }
	    return canonicalizedObj;
	  }

	  function buildValues(components, newString, oldString, useLongestToken) {
	    var componentPos = 0,
	        componentLen = components.length,
	        newPos = 0,
	        oldPos = 0;

	    for (; componentPos < componentLen; componentPos++) {
	      var component = components[componentPos];
	      if (!component.removed) {
	        if (!component.added && useLongestToken) {
	          var value = newString.slice(newPos, newPos + component.count);
	          value = map(value, function(value, i) {
	            var oldValue = oldString[oldPos + i];
	            return oldValue.length > value.length ? oldValue : value;
	          });

	          component.value = value.join('');
	        } else {
	          component.value = newString.slice(newPos, newPos + component.count).join('');
	        }
	        newPos += component.count;

	        // Common case
	        if (!component.added) {
	          oldPos += component.count;
	        }
	      } else {
	        component.value = oldString.slice(oldPos, oldPos + component.count).join('');
	        oldPos += component.count;

	        // Reverse add and remove so removes are output first to match common convention
	        // The diffing algorithm is tied to add then remove output and this is the simplest
	        // route to get the desired output with minimal overhead.
	        if (componentPos && components[componentPos - 1].added) {
	          var tmp = components[componentPos - 1];
	          components[componentPos - 1] = components[componentPos];
	          components[componentPos] = tmp;
	        }
	      }
	    }

	    return components;
	  }

	  function Diff(ignoreWhitespace) {
	    this.ignoreWhitespace = ignoreWhitespace;
	  }
	  Diff.prototype = {
	    diff: function(oldString, newString, callback) {
	      var self = this;

	      function done(value) {
	        if (callback) {
	          setTimeout(function() { callback(undefined, value); }, 0);
	          return true;
	        } else {
	          return value;
	        }
	      }

	      // Handle the identity case (this is due to unrolling editLength == 0
	      if (newString === oldString) {
	        return done([{ value: newString }]);
	      }
	      if (!newString) {
	        return done([{ value: oldString, removed: true }]);
	      }
	      if (!oldString) {
	        return done([{ value: newString, added: true }]);
	      }

	      newString = this.tokenize(newString);
	      oldString = this.tokenize(oldString);

	      var newLen = newString.length, oldLen = oldString.length;
	      var editLength = 1;
	      var maxEditLength = newLen + oldLen;
	      var bestPath = [{ newPos: -1, components: [] }];

	      // Seed editLength = 0, i.e. the content starts with the same values
	      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
	      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
	        // Identity per the equality and tokenizer
	        return done([{value: newString.join('')}]);
	      }

	      // Main worker method. checks all permutations of a given edit length for acceptance.
	      function execEditLength() {
	        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
	          var basePath;
	          var addPath = bestPath[diagonalPath - 1],
	              removePath = bestPath[diagonalPath + 1],
	              oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
	          if (addPath) {
	            // No one else is going to attempt to use this value, clear it
	            bestPath[diagonalPath - 1] = undefined;
	          }

	          var canAdd = addPath && addPath.newPos + 1 < newLen,
	              canRemove = removePath && 0 <= oldPos && oldPos < oldLen;
	          if (!canAdd && !canRemove) {
	            // If this path is a terminal then prune
	            bestPath[diagonalPath] = undefined;
	            continue;
	          }

	          // Select the diagonal that we want to branch from. We select the prior
	          // path whose position in the new string is the farthest from the origin
	          // and does not pass the bounds of the diff graph
	          if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {
	            basePath = clonePath(removePath);
	            self.pushComponent(basePath.components, undefined, true);
	          } else {
	            basePath = addPath;   // No need to clone, we've pulled it from the list
	            basePath.newPos++;
	            self.pushComponent(basePath.components, true, undefined);
	          }

	          oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

	          // If we have hit the end of both strings, then we are done
	          if (basePath.newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
	            return done(buildValues(basePath.components, newString, oldString, self.useLongestToken));
	          } else {
	            // Otherwise track this path as a potential candidate and continue.
	            bestPath[diagonalPath] = basePath;
	          }
	        }

	        editLength++;
	      }

	      // Performs the length of edit iteration. Is a bit fugly as this has to support the
	      // sync and async mode which is never fun. Loops over execEditLength until a value
	      // is produced.
	      if (callback) {
	        (function exec() {
	          setTimeout(function() {
	            // This should not happen, but we want to be safe.
	            /*istanbul ignore next */
	            if (editLength > maxEditLength) {
	              return callback();
	            }

	            if (!execEditLength()) {
	              exec();
	            }
	          }, 0);
	        }());
	      } else {
	        while (editLength <= maxEditLength) {
	          var ret = execEditLength();
	          if (ret) {
	            return ret;
	          }
	        }
	      }
	    },

	    pushComponent: function(components, added, removed) {
	      var last = components[components.length - 1];
	      if (last && last.added === added && last.removed === removed) {
	        // We need to clone here as the component clone operation is just
	        // as shallow array clone
	        components[components.length - 1] = {count: last.count + 1, added: added, removed: removed };
	      } else {
	        components.push({count: 1, added: added, removed: removed });
	      }
	    },
	    extractCommon: function(basePath, newString, oldString, diagonalPath) {
	      var newLen = newString.length,
	          oldLen = oldString.length,
	          newPos = basePath.newPos,
	          oldPos = newPos - diagonalPath,

	          commonCount = 0;
	      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
	        newPos++;
	        oldPos++;
	        commonCount++;
	      }

	      if (commonCount) {
	        basePath.components.push({count: commonCount});
	      }

	      basePath.newPos = newPos;
	      return oldPos;
	    },

	    equals: function(left, right) {
	      var reWhitespace = /\S/;
	      return left === right || (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right));
	    },
	    tokenize: function(value) {
	      return value.split('');
	    }
	  };

	  var CharDiff = new Diff();

	  var WordDiff = new Diff(true);
	  var WordWithSpaceDiff = new Diff();
	  WordDiff.tokenize = WordWithSpaceDiff.tokenize = function(value) {
	    return removeEmpty(value.split(/(\s+|\b)/));
	  };

	  var CssDiff = new Diff(true);
	  CssDiff.tokenize = function(value) {
	    return removeEmpty(value.split(/([{}:;,]|\s+)/));
	  };

	  var LineDiff = new Diff();

	  var TrimmedLineDiff = new Diff();
	  TrimmedLineDiff.ignoreTrim = true;

	  LineDiff.tokenize = TrimmedLineDiff.tokenize = function(value) {
	    var retLines = [],
	        lines = value.split(/^/m);
	    for (var i = 0; i < lines.length; i++) {
	      var line = lines[i],
	          lastLine = lines[i - 1],
	          lastLineLastChar = lastLine && lastLine[lastLine.length - 1];

	      // Merge lines that may contain windows new lines
	      if (line === '\n' && lastLineLastChar === '\r') {
	          retLines[retLines.length - 1] = retLines[retLines.length - 1].slice(0, -1) + '\r\n';
	      } else {
	        if (this.ignoreTrim) {
	          line = line.trim();
	          // add a newline unless this is the last line.
	          if (i < lines.length - 1) {
	            line += '\n';
	          }
	        }
	        retLines.push(line);
	      }
	    }

	    return retLines;
	  };

	  var PatchDiff = new Diff();
	  PatchDiff.tokenize = function(value) {
	    var ret = [],
	        linesAndNewlines = value.split(/(\n|\r\n)/);

	    // Ignore the final empty token that occurs if the string ends with a new line
	    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
	      linesAndNewlines.pop();
	    }

	    // Merge the content and line separators into single tokens
	    for (var i = 0; i < linesAndNewlines.length; i++) {
	      var line = linesAndNewlines[i];

	      if (i % 2) {
	        ret[ret.length - 1] += line;
	      } else {
	        ret.push(line);
	      }
	    }
	    return ret;
	  };

	  var SentenceDiff = new Diff();
	  SentenceDiff.tokenize = function(value) {
	    return removeEmpty(value.split(/(\S.+?[.!?])(?=\s+|$)/));
	  };

	  var JsonDiff = new Diff();
	  // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
	  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
	  JsonDiff.useLongestToken = true;
	  JsonDiff.tokenize = LineDiff.tokenize;
	  JsonDiff.equals = function(left, right) {
	    return LineDiff.equals(left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
	  };

	  var JsDiff = {
	    Diff: Diff,

	    diffChars: function(oldStr, newStr, callback) { return CharDiff.diff(oldStr, newStr, callback); },
	    diffWords: function(oldStr, newStr, callback) { return WordDiff.diff(oldStr, newStr, callback); },
	    diffWordsWithSpace: function(oldStr, newStr, callback) { return WordWithSpaceDiff.diff(oldStr, newStr, callback); },
	    diffLines: function(oldStr, newStr, callback) { return LineDiff.diff(oldStr, newStr, callback); },
	    diffTrimmedLines: function(oldStr, newStr, callback) { return TrimmedLineDiff.diff(oldStr, newStr, callback); },

	    diffSentences: function(oldStr, newStr, callback) { return SentenceDiff.diff(oldStr, newStr, callback); },

	    diffCss: function(oldStr, newStr, callback) { return CssDiff.diff(oldStr, newStr, callback); },
	    diffJson: function(oldObj, newObj, callback) {
	      return JsonDiff.diff(
	        typeof oldObj === 'string' ? oldObj : JSON.stringify(canonicalize(oldObj), undefined, '  '),
	        typeof newObj === 'string' ? newObj : JSON.stringify(canonicalize(newObj), undefined, '  '),
	        callback
	      );
	    },

	    createTwoFilesPatch: function(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader) {
	      var ret = [];

	      if (oldFileName == newFileName) {
	        ret.push('Index: ' + oldFileName);
	      }
	      ret.push('===================================================================');
	      ret.push('--- ' + oldFileName + (typeof oldHeader === 'undefined' ? '' : '\t' + oldHeader));
	      ret.push('+++ ' + newFileName + (typeof newHeader === 'undefined' ? '' : '\t' + newHeader));

	      var diff = PatchDiff.diff(oldStr, newStr);
	      diff.push({value: '', lines: []});   // Append an empty value to make cleanup easier

	      // Formats a given set of lines for printing as context lines in a patch
	      function contextLines(lines) {
	        return map(lines, function(entry) { return ' ' + entry; });
	      }

	      // Outputs the no newline at end of file warning if needed
	      function eofNL(curRange, i, current) {
	        var last = diff[diff.length - 2],
	            isLast = i === diff.length - 2,
	            isLastOfType = i === diff.length - 3 && current.added !== last.added;

	        // Figure out if this is the last line for the given file and missing NL
	        if (!(/\n$/.test(current.value)) && (isLast || isLastOfType)) {
	          curRange.push('\\ No newline at end of file');
	        }
	      }

	      var oldRangeStart = 0, newRangeStart = 0, curRange = [],
	          oldLine = 1, newLine = 1;
	      for (var i = 0; i < diff.length; i++) {
	        var current = diff[i],
	            lines = current.lines || current.value.replace(/\n$/, '').split('\n');
	        current.lines = lines;

	        if (current.added || current.removed) {
	          // If we have previous context, start with that
	          if (!oldRangeStart) {
	            var prev = diff[i - 1];
	            oldRangeStart = oldLine;
	            newRangeStart = newLine;

	            if (prev) {
	              curRange = contextLines(prev.lines.slice(-4));
	              oldRangeStart -= curRange.length;
	              newRangeStart -= curRange.length;
	            }
	          }

	          // Output our changes
	          curRange.push.apply(curRange, map(lines, function(entry) {
	            return (current.added ? '+' : '-') + entry;
	          }));
	          eofNL(curRange, i, current);

	          // Track the updated file position
	          if (current.added) {
	            newLine += lines.length;
	          } else {
	            oldLine += lines.length;
	          }
	        } else {
	          // Identical context lines. Track line changes
	          if (oldRangeStart) {
	            // Close out any changes that have been output (or join overlapping)
	            if (lines.length <= 8 && i < diff.length - 2) {
	              // Overlapping
	              curRange.push.apply(curRange, contextLines(lines));
	            } else {
	              // end the range and output
	              var contextSize = Math.min(lines.length, 4);
	              ret.push(
	                  '@@ -' + oldRangeStart + ',' + (oldLine - oldRangeStart + contextSize)
	                  + ' +' + newRangeStart + ',' + (newLine - newRangeStart + contextSize)
	                  + ' @@');
	              ret.push.apply(ret, curRange);
	              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));
	              if (lines.length <= 4) {
	                eofNL(ret, i, current);
	              }

	              oldRangeStart = 0;
	              newRangeStart = 0;
	              curRange = [];
	            }
	          }
	          oldLine += lines.length;
	          newLine += lines.length;
	        }
	      }

	      return ret.join('\n') + '\n';
	    },

	    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {
	      return JsDiff.createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader);
	    },

	    applyPatch: function(oldStr, uniDiff) {
	      var diffstr = uniDiff.split('\n'),
	          hunks = [],
	          i = 0,
	          remEOFNL = false,
	          addEOFNL = false;

	      // Skip to the first change hunk
	      while (i < diffstr.length && !(/^@@/.test(diffstr[i]))) {
	        i++;
	      }

	      // Parse the unified diff
	      for (; i < diffstr.length; i++) {
	        if (diffstr[i][0] === '@') {
	          var chnukHeader = diffstr[i].split(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/);
	          hunks.unshift({
	            start: chnukHeader[3],
	            oldlength: +chnukHeader[2],
	            removed: [],
	            newlength: chnukHeader[4],
	            added: []
	          });
	        } else if (diffstr[i][0] === '+') {
	          hunks[0].added.push(diffstr[i].substr(1));
	        } else if (diffstr[i][0] === '-') {
	          hunks[0].removed.push(diffstr[i].substr(1));
	        } else if (diffstr[i][0] === ' ') {
	          hunks[0].added.push(diffstr[i].substr(1));
	          hunks[0].removed.push(diffstr[i].substr(1));
	        } else if (diffstr[i][0] === '\\') {
	          if (diffstr[i - 1][0] === '+') {
	            remEOFNL = true;
	          } else if (diffstr[i - 1][0] === '-') {
	            addEOFNL = true;
	          }
	        }
	      }

	      // Apply the diff to the input
	      var lines = oldStr.split('\n');
	      for (i = hunks.length - 1; i >= 0; i--) {
	        var hunk = hunks[i];
	        // Sanity check the input string. Bail if we don't match.
	        for (var j = 0; j < hunk.oldlength; j++) {
	          if (lines[hunk.start - 1 + j] !== hunk.removed[j]) {
	            return false;
	          }
	        }
	        Array.prototype.splice.apply(lines, [hunk.start - 1, hunk.oldlength].concat(hunk.added));
	      }

	      // Handle EOFNL insertion/removal
	      if (remEOFNL) {
	        while (!lines[lines.length - 1]) {
	          lines.pop();
	        }
	      } else if (addEOFNL) {
	        lines.push('');
	      }
	      return lines.join('\n');
	    },

	    convertChangesToXML: function(changes) {
	      var ret = [];
	      for (var i = 0; i < changes.length; i++) {
	        var change = changes[i];
	        if (change.added) {
	          ret.push('<ins>');
	        } else if (change.removed) {
	          ret.push('<del>');
	        }

	        ret.push(escapeHTML(change.value));

	        if (change.added) {
	          ret.push('</ins>');
	        } else if (change.removed) {
	          ret.push('</del>');
	        }
	      }
	      return ret.join('');
	    },

	    // See: http://code.google.com/p/google-diff-match-patch/wiki/API
	    convertChangesToDMP: function(changes) {
	      var ret = [],
	          change,
	          operation;
	      for (var i = 0; i < changes.length; i++) {
	        change = changes[i];
	        if (change.added) {
	          operation = 1;
	        } else if (change.removed) {
	          operation = -1;
	        } else {
	          operation = 0;
	        }

	        ret.push([operation, change.value]);
	      }
	      return ret;
	    },

	    canonicalize: canonicalize
	  };

	  /*istanbul ignore next */
	  /*global module */
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = JsDiff;
	  } else if (true) {
	    /*global define */
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() { return JsDiff; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof global.JsDiff === 'undefined') {
	    global.JsDiff = JsDiff;
	  }
	}(this));

	},{}],49:[function(require,module,exports){
	'use strict';

	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}

		return str.replace(matchOperatorsRe,  '\\$&');
	};

	},{}],50:[function(require,module,exports){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

	},{}],51:[function(require,module,exports){
	(function (process){
	// Growl - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

	/**
	 * Module dependencies.
	 */

	var exec = require('child_process').exec
	  , fs = require('fs')
	  , path = require('path')
	  , exists = fs.existsSync || path.existsSync
	  , os = require('os')
	  , quote = JSON.stringify
	  , cmd;

	function which(name) {
	  var paths = process.env.PATH.split(':');
	  var loc;

	  for (var i = 0, len = paths.length; i < len; ++i) {
	    loc = path.join(paths[i], name);
	    if (exists(loc)) return loc;
	  }
	}

	switch(os.type()) {
	  case 'Darwin':
	    if (which('terminal-notifier')) {
	      cmd = {
	          type: "Darwin-NotificationCenter"
	        , pkg: "terminal-notifier"
	        , msg: '-message'
	        , title: '-title'
	        , subtitle: '-subtitle'
	        , icon: '-appIcon'
	        , sound:  '-sound'
	        , url: '-open'
	        , priority: {
	              cmd: '-execute'
	            , range: []
	          }
	      };
	    } else {
	      cmd = {
	          type: "Darwin-Growl"
	        , pkg: "growlnotify"
	        , msg: '-m'
	        , sticky: '--sticky'
	        , priority: {
	              cmd: '--priority'
	            , range: [
	                -2
	              , -1
	              , 0
	              , 1
	              , 2
	              , "Very Low"
	              , "Moderate"
	              , "Normal"
	              , "High"
	              , "Emergency"
	            ]
	          }
	      };
	    }
	    break;
	  case 'Linux':
	    if (which('growl')) {
	      cmd = {
	          type: "Linux-Growl"
	        , pkg: "growl"
	        , msg: '-m'
	        , title: '-title'
	        , subtitle: '-subtitle'
	        , host: {
	            cmd: '-H'
	          , hostname: '192.168.33.1'
	        }
	      };
	    } else {
	      cmd = {
	          type: "Linux"
	        , pkg: "notify-send"
	        , msg: ''
	        , sticky: '-t 0'
	        , icon: '-i'
	        , priority: {
	            cmd: '-u'
	          , range: [
	              "low"
	            , "normal"
	            , "critical"
	          ]
	        }
	      };
	    }
	    break;
	  case 'Windows_NT':
	    cmd = {
	        type: "Windows"
	      , pkg: "growlnotify"
	      , msg: ''
	      , sticky: '/s:true'
	      , title: '/t:'
	      , icon: '/i:'
	      , url: '/cu:'
	      , priority: {
	            cmd: '/p:'
	          , range: [
	              -2
	            , -1
	            , 0
	            , 1
	            , 2
	          ]
	        }
	    };
	    break;
	}

	/**
	 * Expose `growl`.
	 */

	exports = module.exports = growl;

	/**
	 * Node-growl version.
	 */

	exports.version = '1.4.1'

	/**
	 * Send growl notification _msg_ with _options_.
	 *
	 * Options:
	 *
	 *  - title   Notification title
	 *  - sticky  Make the notification stick (defaults to false)
	 *  - priority  Specify an int or named key (default is 0)
	 *  - name    Application name (defaults to growlnotify)
	 *  - sound   Sound efect ( in OSx defined in preferences -> sound -> effects) * works only in OSX > 10.8x
	 *  - image
	 *    - path to an icon sets --iconpath
	 *    - path to an image sets --image
	 *    - capitalized word sets --appIcon
	 *    - filename uses extname as --icon
	 *    - otherwise treated as --icon
	 *
	 * Examples:
	 *
	 *   growl('New email')
	 *   growl('5 new emails', { title: 'Thunderbird' })
	 *   growl('5 new emails', { title: 'Thunderbird', sound: 'Purr' })
	 *   growl('Email sent', function(){
	 *     // ... notification sent
	 *   })
	 *
	 * @param {string} msg
	 * @param {object} options
	 * @param {function} fn
	 * @api public
	 */

	function growl(msg, options, fn) {
	  var image
	    , args
	    , options = options || {}
	    , fn = fn || function(){};

	  if (options.exec) {
	    cmd = {
	        type: "Custom"
	      , pkg: options.exec
	      , range: []
	    };
	  }

	  // noop
	  if (!cmd) return fn(new Error('growl not supported on this platform'));
	  args = [cmd.pkg];

	  // image
	  if (image = options.image) {
	    switch(cmd.type) {
	      case 'Darwin-Growl':
	        var flag, ext = path.extname(image).substr(1)
	        flag = flag || ext == 'icns' && 'iconpath'
	        flag = flag || /^[A-Z]/.test(image) && 'appIcon'
	        flag = flag || /^png|gif|jpe?g$/.test(ext) && 'image'
	        flag = flag || ext && (image = ext) && 'icon'
	        flag = flag || 'icon'
	        args.push('--' + flag, quote(image))
	        break;
	      case 'Darwin-NotificationCenter':
	        args.push(cmd.icon, quote(image));
	        break;
	      case 'Linux':
	        args.push(cmd.icon, quote(image));
	        // libnotify defaults to sticky, set a hint for transient notifications
	        if (!options.sticky) args.push('--hint=int:transient:1');
	        break;
	      case 'Windows':
	        args.push(cmd.icon + quote(image));
	        break;
	    }
	  }

	  // sticky
	  if (options.sticky) args.push(cmd.sticky);

	  // priority
	  if (options.priority) {
	    var priority = options.priority + '';
	    var checkindexOf = cmd.priority.range.indexOf(priority);
	    if (~cmd.priority.range.indexOf(priority)) {
	      args.push(cmd.priority, options.priority);
	    }
	  }

	  //sound
	  if(options.sound && cmd.type === 'Darwin-NotificationCenter'){
	    args.push(cmd.sound, options.sound)
	  }

	  // name
	  if (options.name && cmd.type === "Darwin-Growl") {
	    args.push('--name', options.name);
	  }

	  switch(cmd.type) {
	    case 'Darwin-Growl':
	      args.push(cmd.msg);
	      args.push(quote(msg).replace(/\\n/g, '\n'));
	      if (options.title) args.push(quote(options.title));
	      break;
	    case 'Darwin-NotificationCenter':
	      args.push(cmd.msg);
	      var stringifiedMsg = quote(msg);
	      var escapedMsg = stringifiedMsg.replace(/\\n/g, '\n');
	      args.push(escapedMsg);
	      if (options.title) {
	        args.push(cmd.title);
	        args.push(quote(options.title));
	      }
	      if (options.subtitle) {
	        args.push(cmd.subtitle);
	        args.push(quote(options.subtitle));
	      }
	      if (options.url) {
	        args.push(cmd.url);
	        args.push(quote(options.url));
	      }
	      break;
	    case 'Linux-Growl':
	      args.push(cmd.msg);
	      args.push(quote(msg).replace(/\\n/g, '\n'));
	      if (options.title) args.push(quote(options.title));
	      if (cmd.host) {
	        args.push(cmd.host.cmd, cmd.host.hostname)
	      }
	      break;
	    case 'Linux':
	      if (options.title) {
	        args.push(quote(options.title));
	        args.push(cmd.msg);
	        args.push(quote(msg).replace(/\\n/g, '\n'));
	      } else {
	        args.push(quote(msg).replace(/\\n/g, '\n'));
	      }
	      break;
	    case 'Windows':
	      args.push(quote(msg).replace(/\\n/g, '\n'));
	      if (options.title) args.push(cmd.title + quote(options.title));
	      if (options.url) args.push(cmd.url + quote(options.url));
	      break;
	    case 'Custom':
	      args[0] = (function(origCommand) {
	        var message = options.title
	          ? options.title + ': ' + msg
	          : msg;
	        var command = origCommand.replace(/(^|[^%])%s/g, '$1' + quote(message));
	        if (command === origCommand) args.push(quote(message));
	        return command;
	      })(args[0]);
	      break;
	  }

	  // execute
	  exec(args.join(' '), fn);
	};

	}).call(this,require('_process'))
	},{"_process":58,"child_process":43,"fs":43,"os":56,"path":43}],52:[function(require,module,exports){
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

	},{}],53:[function(require,module,exports){
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}

	},{}],54:[function(require,module,exports){
	/**
	 * Determine if an object is Buffer
	 *
	 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * License:  MIT
	 *
	 * `npm install is-buffer`
	 */

	module.exports = function (obj) {
	  return !!(obj != null &&
	    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
	      (obj.constructor &&
	      typeof obj.constructor.isBuffer === 'function' &&
	      obj.constructor.isBuffer(obj))
	    ))
	}

	},{}],55:[function(require,module,exports){
	(function (process){
	var path = require('path');
	var fs = require('fs');
	var _0777 = parseInt('0777', 8);

	module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;

	function mkdirP (p, opts, f, made) {
	    if (typeof opts === 'function') {
	        f = opts;
	        opts = {};
	    }
	    else if (!opts || typeof opts !== 'object') {
	        opts = { mode: opts };
	    }
	    
	    var mode = opts.mode;
	    var xfs = opts.fs || fs;
	    
	    if (mode === undefined) {
	        mode = _0777 & (~process.umask());
	    }
	    if (!made) made = null;
	    
	    var cb = f || function () {};
	    p = path.resolve(p);
	    
	    xfs.mkdir(p, mode, function (er) {
	        if (!er) {
	            made = made || p;
	            return cb(null, made);
	        }
	        switch (er.code) {
	            case 'ENOENT':
	                mkdirP(path.dirname(p), opts, function (er, made) {
	                    if (er) cb(er, made);
	                    else mkdirP(p, opts, cb, made);
	                });
	                break;

	            // In the case of any other error, just see if there's a dir
	            // there already.  If so, then hooray!  If not, then something
	            // is borked.
	            default:
	                xfs.stat(p, function (er2, stat) {
	                    // if the stat fails, then that's super weird.
	                    // let the original error be the failure reason.
	                    if (er2 || !stat.isDirectory()) cb(er, made)
	                    else cb(null, made);
	                });
	                break;
	        }
	    });
	}

	mkdirP.sync = function sync (p, opts, made) {
	    if (!opts || typeof opts !== 'object') {
	        opts = { mode: opts };
	    }
	    
	    var mode = opts.mode;
	    var xfs = opts.fs || fs;
	    
	    if (mode === undefined) {
	        mode = _0777 & (~process.umask());
	    }
	    if (!made) made = null;

	    p = path.resolve(p);

	    try {
	        xfs.mkdirSync(p, mode);
	        made = made || p;
	    }
	    catch (err0) {
	        switch (err0.code) {
	            case 'ENOENT' :
	                made = sync(path.dirname(p), opts, made);
	                sync(p, opts, made);
	                break;

	            // In the case of any other error, just see if there's a dir
	            // there already.  If so, then hooray!  If not, then something
	            // is borked.
	            default:
	                var stat;
	                try {
	                    stat = xfs.statSync(p);
	                }
	                catch (err1) {
	                    throw err0;
	                }
	                if (!stat.isDirectory()) throw err0;
	                break;
	        }
	    }

	    return made;
	};

	}).call(this,require('_process'))
	},{"_process":58,"fs":43,"path":43}],56:[function(require,module,exports){
	exports.endianness = function () { return 'LE' };

	exports.hostname = function () {
	    if (typeof location !== 'undefined') {
	        return location.hostname
	    }
	    else return '';
	};

	exports.loadavg = function () { return [] };

	exports.uptime = function () { return 0 };

	exports.freemem = function () {
	    return Number.MAX_VALUE;
	};

	exports.totalmem = function () {
	    return Number.MAX_VALUE;
	};

	exports.cpus = function () { return [] };

	exports.type = function () { return 'Browser' };

	exports.release = function () {
	    if (typeof navigator !== 'undefined') {
	        return navigator.appVersion;
	    }
	    return '';
	};

	exports.networkInterfaces
	= exports.getNetworkInterfaces
	= function () { return {} };

	exports.arch = function () { return 'javascript' };

	exports.platform = function () { return 'browser' };

	exports.tmpdir = exports.tmpDir = function () {
	    return '/tmp';
	};

	exports.EOL = '\n';

	},{}],57:[function(require,module,exports){
	(function (process){
	'use strict';

	if (!process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}

	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	  case 0:
	  case 1:
	    return process.nextTick(fn);
	  case 2:
	    return process.nextTick(function afterTickOne() {
	      fn.call(null, arg1);
	    });
	  case 3:
	    return process.nextTick(function afterTickTwo() {
	      fn.call(null, arg1, arg2);
	    });
	  case 4:
	    return process.nextTick(function afterTickThree() {
	      fn.call(null, arg1, arg2, arg3);
	    });
	  default:
	    args = new Array(len - 1);
	    i = 0;
	    while (i < args.length) {
	      args[i++] = arguments[i];
	    }
	    return process.nextTick(function afterTick() {
	      fn.apply(null, args);
	    });
	  }
	}

	}).call(this,require('_process'))
	},{"_process":58}],58:[function(require,module,exports){
	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };

	},{}],59:[function(require,module,exports){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = require('events').EventEmitter;
	var inherits = require('inherits');

	inherits(Stream, EE);
	Stream.Readable = require('readable-stream/readable.js');
	Stream.Writable = require('readable-stream/writable.js');
	Stream.Duplex = require('readable-stream/duplex.js');
	Stream.Transform = require('readable-stream/transform.js');
	Stream.PassThrough = require('readable-stream/passthrough.js');

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};

	},{"events":50,"inherits":53,"readable-stream/duplex.js":61,"readable-stream/passthrough.js":67,"readable-stream/readable.js":68,"readable-stream/transform.js":69,"readable-stream/writable.js":70}],60:[function(require,module,exports){
	arguments[4][46][0].apply(exports,arguments)
	},{"dup":46}],61:[function(require,module,exports){
	module.exports = require("./lib/_stream_duplex.js")

	},{"./lib/_stream_duplex.js":62}],62:[function(require,module,exports){
	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	'use strict';

	/*<replacement>*/

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/

	module.exports = Duplex;

	/*<replacement>*/
	var processNextTick = require('process-nextick-args');
	/*</replacement>*/

	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/

	var Readable = require('./_stream_readable');
	var Writable = require('./_stream_writable');

	util.inherits(Duplex, Readable);

	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}

	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}
	},{"./_stream_readable":64,"./_stream_writable":66,"core-util-is":47,"inherits":53,"process-nextick-args":57}],63:[function(require,module,exports){
	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	'use strict';

	module.exports = PassThrough;

	var Transform = require('./_stream_transform');

	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};
	},{"./_stream_transform":65,"core-util-is":47,"inherits":53}],64:[function(require,module,exports){
	(function (process){
	'use strict';

	module.exports = Readable;

	/*<replacement>*/
	var processNextTick = require('process-nextick-args');
	/*</replacement>*/

	/*<replacement>*/
	var isArray = require('isarray');
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	/*<replacement>*/
	var EE = require('events').EventEmitter;

	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = require('st' + 'ream');
	  } catch (_) {} finally {
	    if (!Stream) Stream = require('events').EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = require('buffer').Buffer;
	/*<replacement>*/
	var bufferShim = require('buffer-shims');
	/*</replacement>*/

	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/

	/*<replacement>*/
	var debugUtil = require('util');
	var debug = void 0;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/

	var StringDecoder;

	util.inherits(Readable, Stream);

	var hasPrependListener = typeof EE.prototype.prependListener === 'function';

	function prependListener(emitter, event, fn) {
	  if (hasPrependListener) return emitter.prependListener(event, fn);

	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS. This is here
	  // only because this code needs to continue to work with older versions
	  // of Node.js that do not include the prependListener() method. The goal
	  // is to eventually remove this hack.
	  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	}

	var Duplex;
	function ReadableState(options, stream) {
	  Duplex = Duplex || require('./_stream_duplex');

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	var Duplex;
	function Readable(options) {
	  Duplex = Duplex || require('./_stream_duplex');

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = bufferShim.from(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended) return 0;

	  if (state.objectMode) return n === 0 ? 0 : 1;

	  if (n === null || isNaN(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;
	  }

	  if (n <= 0) return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else {
	      return state.length;
	    }
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (typeof n !== 'number' || n > 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading) n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended) state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0) endReadable(this);

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var _i = 0; _i < len; _i++) {
	      dests[_i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1) return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && !this._readableState.endEmitted) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0) return null;

	  if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode) ret = list.join('');else if (list.length === 1) ret = list[0];else ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode) ret = '';else ret = bufferShim.allocUnsafe(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var _buf = list[0];
	        var cpy = Math.min(n - c, _buf.length);

	        if (stringMode) ret += _buf.slice(0, cpy);else _buf.copy(ret, c, 0, cpy);

	        if (cpy < _buf.length) list[0] = _buf.slice(cpy);else list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	}).call(this,require('_process'))
	},{"./_stream_duplex":62,"_process":58,"buffer":45,"buffer-shims":44,"core-util-is":47,"events":50,"inherits":53,"isarray":60,"process-nextick-args":57,"string_decoder/":71,"util":41}],65:[function(require,module,exports){
	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	'use strict';

	module.exports = Transform;

	var Duplex = require('./_stream_duplex');

	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/

	util.inherits(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}

	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er) {
	      done(stream, er);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('Not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er) {
	  if (er) return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}
	},{"./_stream_duplex":62,"core-util-is":47,"inherits":53}],66:[function(require,module,exports){
	(function (process){
	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.

	'use strict';

	module.exports = Writable;

	/*<replacement>*/
	var processNextTick = require('process-nextick-args');
	/*</replacement>*/

	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/

	Writable.WritableState = WritableState;

	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/

	/*<replacement>*/
	var internalUtil = {
	  deprecate: require('util-deprecate')
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = require('st' + 'ream');
	  } catch (_) {} finally {
	    if (!Stream) Stream = require('events').EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = require('buffer').Buffer;
	/*<replacement>*/
	var bufferShim = require('buffer-shims');
	/*</replacement>*/

	util.inherits(Writable, Stream);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	var Duplex;
	function WritableState(options, stream) {
	  Duplex = Duplex || require('./_stream_duplex');

	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function writableStateGetBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};

	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	    });
	  } catch (_) {}
	})();

	var Duplex;
	function Writable(options) {
	  Duplex = Duplex || require('./_stream_duplex');

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = bufferShim.from(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) processNextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}
	}).call(this,require('_process'))
	},{"./_stream_duplex":62,"_process":58,"buffer":45,"buffer-shims":44,"core-util-is":47,"events":50,"inherits":53,"process-nextick-args":57,"util-deprecate":73}],67:[function(require,module,exports){
	module.exports = require("./lib/_stream_passthrough.js")

	},{"./lib/_stream_passthrough.js":63}],68:[function(require,module,exports){
	(function (process){
	var Stream = (function (){
	  try {
	    return require('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify
	  } catch(_){}
	}());
	exports = module.exports = require('./lib/_stream_readable.js');
	exports.Stream = Stream || exports;
	exports.Readable = exports;
	exports.Writable = require('./lib/_stream_writable.js');
	exports.Duplex = require('./lib/_stream_duplex.js');
	exports.Transform = require('./lib/_stream_transform.js');
	exports.PassThrough = require('./lib/_stream_passthrough.js');

	if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
	  module.exports = Stream;
	}

	}).call(this,require('_process'))
	},{"./lib/_stream_duplex.js":62,"./lib/_stream_passthrough.js":63,"./lib/_stream_readable.js":64,"./lib/_stream_transform.js":65,"./lib/_stream_writable.js":66,"_process":58}],69:[function(require,module,exports){
	module.exports = require("./lib/_stream_transform.js")

	},{"./lib/_stream_transform.js":65}],70:[function(require,module,exports){
	module.exports = require("./lib/_stream_writable.js")

	},{"./lib/_stream_writable.js":66}],71:[function(require,module,exports){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = require('buffer').Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}

	},{"buffer":45}],72:[function(require,module,exports){

	/**
	 * Expose `toIsoString`.
	 */

	module.exports = toIsoString;


	/**
	 * Turn a `date` into an ISO string.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
	 *
	 * @param {Date} date
	 * @return {String}
	 */

	function toIsoString (date) {
	  return date.getUTCFullYear()
	    + '-' + pad(date.getUTCMonth() + 1)
	    + '-' + pad(date.getUTCDate())
	    + 'T' + pad(date.getUTCHours())
	    + ':' + pad(date.getUTCMinutes())
	    + ':' + pad(date.getUTCSeconds())
	    + '.' + String((date.getUTCMilliseconds()/1000).toFixed(3)).slice(2, 5)
	    + 'Z';
	}


	/**
	 * Pad a `number` with a ten's place zero.
	 *
	 * @param {Number} number
	 * @return {String}
	 */

	function pad (number) {
	  var n = number.toString();
	  return n.length === 1 ? '0' + n : n;
	}
	},{}],73:[function(require,module,exports){
	(function (global){

	/**
	 * Module exports.
	 */

	module.exports = deprecate;

	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */

	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */

	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],74:[function(require,module,exports){
	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}
	},{}],75:[function(require,module,exports){
	(function (process,global){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
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
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
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
	    base = ' ' + formatError(value);
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
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
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
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
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
	  if (isUndefined(name)) {
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
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
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


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = require('./support/isBuffer');

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = require('inherits');

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./support/isBuffer":74,"_process":58,"inherits":53}]},{},[1]);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(32).Buffer, __webpack_require__(36).setImmediate))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(33)
	var ieee754 = __webpack_require__(34)
	var isArray = __webpack_require__(35)

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32).Buffer, (function() { return this; }())))

/***/ },
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(37).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36).setImmediate, __webpack_require__(36).clearImmediate))

/***/ },
/* 37 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(16));
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
			## objToStyle
			```html
			<span mc-style="{height: 100, width: 200} | objToStyle"></span>
			```
			 */

			exports['objToStyle'] = function(value) {
			  var autoPx, css, key, val;
			  autoPx = ['width', 'height', 'left', 'top', 'right', 'bottom'];
			  css = [];
			  for (key in value) {
			    val = value[key];
			    if (indexOf.call(autoPx, key) >= 0 && util.isNumber(val)) {
			      val = val + 'px';
			    }
			    css.push(key + ": " + val);
			  }
			  return css.join(';');
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

			exports['focus'] = function(el, value) {
			  if (value && true || false) {
			    return el.focus();
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
		    var j, k, len, ref, results, v;
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
		      $(this.refs).off(event);
		      ref = this._eventReged;
		      results = [];
		      for (k = j = 0, len = ref.length; j < len; k = ++j) {
		        v = ref[k];
		        if (v === event) {
		          this._eventReged.splice(k, 1);
		          break;
		        } else {
		          results.push(void 0);
		        }
		      }
		      return results;
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
		 * @param  {string} str
		 * @return {!Array}
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

		    var next = str[index]
		    var prefix = res[2]
		    var name = res[3]
		    var capture = res[4]
		    var group = res[5]
		    var modifier = res[6]
		    var asterisk = res[7]

		    // Push the current path onto the tokens.
		    if (path) {
		      tokens.push(path)
		      path = ''
		    }

		    var partial = prefix != null && next != null && next !== prefix
		    var repeat = modifier === '+' || modifier === '*'
		    var optional = modifier === '?' || modifier === '*'
		    var delimiter = res[2] || '/'
		    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

		    tokens.push({
		      name: name || key++,
		      prefix: prefix || '',
		      delimiter: delimiter,
		      optional: optional,
		      repeat: repeat,
		      partial: partial,
		      asterisk: !!asterisk,
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
		 * @param  {string}             str
		 * @return {!function(Object=, Object=)}
		 */
		function compile (str) {
		  return tokensToFunction(parse(str))
		}

		/**
		 * Prettier encoding of URI path segments.
		 *
		 * @param  {string}
		 * @return {string}
		 */
		function encodeURIComponentPretty (str) {
		  return encodeURI(str).replace(/[\/?#]/g, function (c) {
		    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
		  })
		}

		/**
		 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
		 *
		 * @param  {string}
		 * @return {string}
		 */
		function encodeAsterisk (str) {
		  return encodeURI(str).replace(/[?#]/g, function (c) {
		    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
		  })
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
		      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
		    }
		  }

		  return function (obj, opts) {
		    var path = ''
		    var data = obj || {}
		    var options = opts || {}
		    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

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
		          // Prepend partial segment prefixes.
		          if (token.partial) {
		            path += token.prefix
		          }

		          continue
		        } else {
		          throw new TypeError('Expected "' + token.name + '" to be defined')
		        }
		      }

		      if (isarray(value)) {
		        if (!token.repeat) {
		          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
		        }

		        if (value.length === 0) {
		          if (token.optional) {
		            continue
		          } else {
		            throw new TypeError('Expected "' + token.name + '" to not be empty')
		          }
		        }

		        for (var j = 0; j < value.length; j++) {
		          segment = encode(value[j])

		          if (!matches[i].test(segment)) {
		            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
		          }

		          path += (j === 0 ? token.prefix : token.delimiter) + segment
		        }

		        continue
		      }

		      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

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
		 * @param  {string} str
		 * @return {string}
		 */
		function escapeString (str) {
		  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
		}

		/**
		 * Escape the capturing group by escaping special characters and meaning.
		 *
		 * @param  {string} group
		 * @return {string}
		 */
		function escapeGroup (group) {
		  return group.replace(/([=!:$\/()])/g, '\\$1')
		}

		/**
		 * Attach the keys as a property of the regexp.
		 *
		 * @param  {!RegExp} re
		 * @param  {Array}   keys
		 * @return {!RegExp}
		 */
		function attachKeys (re, keys) {
		  re.keys = keys
		  return re
		}

		/**
		 * Get the flags for a regexp from the options.
		 *
		 * @param  {Object} options
		 * @return {string}
		 */
		function flags (options) {
		  return options.sensitive ? '' : 'i'
		}

		/**
		 * Pull out keys from a regexp.
		 *
		 * @param  {!RegExp} path
		 * @param  {!Array}  keys
		 * @return {!RegExp}
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
		        partial: false,
		        asterisk: false,
		        pattern: null
		      })
		    }
		  }

		  return attachKeys(path, keys)
		}

		/**
		 * Transform an array into a regexp.
		 *
		 * @param  {!Array}  path
		 * @param  {Array}   keys
		 * @param  {!Object} options
		 * @return {!RegExp}
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
		 * @param  {string}  path
		 * @param  {!Array}  keys
		 * @param  {!Object} options
		 * @return {!RegExp}
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
		 * @param  {!Array}  tokens
		 * @param  {Object=} options
		 * @return {!RegExp}
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
		      var capture = '(?:' + token.pattern + ')'

		      if (token.repeat) {
		        capture += '(?:' + prefix + capture + ')*'
		      }

		      if (token.optional) {
		        if (!token.partial) {
		          capture = '(?:' + prefix + '(' + capture + '))?'
		        } else {
		          capture = prefix + '(' + capture + ')?'
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
		 * @param  {(string|RegExp|Array)} path
		 * @param  {(Array|Object)=}       keys
		 * @param  {Object=}               options
		 * @return {!RegExp}
		 */
		function pathToRegexp (path, keys, options) {
		  keys = keys || []

		  if (!isarray(keys)) {
		    options = /** @type {!Object} */ (keys)
		    keys = []
		  } else if (!options) {
		    options = {}
		  }

		  if (path instanceof RegExp) {
		    return regexpToRegexp(path, /** @type {!Array} */ (keys))
		  }

		  if (isarray(path)) {
		    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
		  }

		  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
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
		    this.subViews = [];
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

		  View.prototype.openSubView = function(View, options) {
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
		    PopUpView.__super__.constructor.call(this);
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
/* 39 */
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

	mcoreapp = __webpack_require__(38);

	RouteChange = __webpack_require__(40);

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
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42);


/***/ },
/* 42 */
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

	exports.AssertionError = __webpack_require__(43);

	/*!
	 * Utils for plugins (not exported)
	 */

	var util = __webpack_require__(44);

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

	var config = __webpack_require__(57);
	exports.config = config;

	/*!
	 * Primary `Assertion` prototype
	 */

	var assertion = __webpack_require__(72);
	exports.use(assertion);

	/*!
	 * Core Assertions
	 */

	var core = __webpack_require__(73);
	exports.use(core);

	/*!
	 * Expect interface
	 */

	var expect = __webpack_require__(74);
	exports.use(expect);

	/*!
	 * Should interface
	 */

	var should = __webpack_require__(75);
	exports.use(should);

	/*!
	 * Assert interface
	 */

	var assert = __webpack_require__(76);
	exports.use(assert);


/***/ },
/* 43 */
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
/* 44 */
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

	exports.test = __webpack_require__(45);

	/*!
	 * type utility
	 */

	exports.type = __webpack_require__(47);

	/*!
	 * expectTypes utility
	 */
	exports.expectTypes = __webpack_require__(49);

	/*!
	 * message utility
	 */

	exports.getMessage = __webpack_require__(50);

	/*!
	 * actual utility
	 */

	exports.getActual = __webpack_require__(51);

	/*!
	 * Inspect util
	 */

	exports.inspect = __webpack_require__(52);

	/*!
	 * Object Display util
	 */

	exports.objDisplay = __webpack_require__(56);

	/*!
	 * Flag utility
	 */

	exports.flag = __webpack_require__(46);

	/*!
	 * Flag transferring utility
	 */

	exports.transferFlags = __webpack_require__(58);

	/*!
	 * Deep equal utility
	 */

	exports.eql = __webpack_require__(59);

	/*!
	 * Deep path value
	 */

	exports.getPathValue = __webpack_require__(63);

	/*!
	 * Deep path info
	 */

	exports.getPathInfo = __webpack_require__(64);

	/*!
	 * Check if a property exists
	 */

	exports.hasProperty = __webpack_require__(65);

	/*!
	 * Function name
	 */

	exports.getName = __webpack_require__(53);

	/*!
	 * add Property
	 */

	exports.addProperty = __webpack_require__(66);

	/*!
	 * add Method
	 */

	exports.addMethod = __webpack_require__(67);

	/*!
	 * overwrite Property
	 */

	exports.overwriteProperty = __webpack_require__(68);

	/*!
	 * overwrite Method
	 */

	exports.overwriteMethod = __webpack_require__(69);

	/*!
	 * Add a chainable method
	 */

	exports.addChainableMethod = __webpack_require__(70);

	/*!
	 * Overwrite chainable method
	 */

	exports.overwriteChainableMethod = __webpack_require__(71);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(46);

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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(48);


/***/ },
/* 48 */
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
/* 49 */
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

	var AssertionError = __webpack_require__(43);
	var flag = __webpack_require__(46);
	var type = __webpack_require__(47);

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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(46)
	  , getActual = __webpack_require__(51)
	  , inspect = __webpack_require__(52)
	  , objDisplay = __webpack_require__(56);

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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// This is (almost) directly from Node.js utils
	// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

	var getName = __webpack_require__(53);
	var getProperties = __webpack_require__(54);
	var getEnumerableProperties = __webpack_require__(55);

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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var inspect = __webpack_require__(52);
	var config = __webpack_require__(57);

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
/* 57 */
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
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(60);


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var type = __webpack_require__(61);

	/*!
	 * Buffer.isBuffer browser shim
	 */

	var Buffer;
	try { Buffer = __webpack_require__(32).Buffer; }
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62);


/***/ },
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */

	var getPathInfo = __webpack_require__(64);

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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathInfo utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var hasProperty = __webpack_require__(65);

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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - hasProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var type = __webpack_require__(47);

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(57);
	var flag = __webpack_require__(46);

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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(57);

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
	var flag = __webpack_require__(46);

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
/* 68 */
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
/* 69 */
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var transferFlags = __webpack_require__(58);
	var flag = __webpack_require__(46);
	var config = __webpack_require__(57);

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
/* 71 */
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(57);

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
/* 73 */
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
/* 74 */
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
/* 75 */
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
/* 76 */
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