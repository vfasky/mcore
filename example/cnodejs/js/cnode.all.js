define(["jquery","mcoreExt","mcore","moment","markdown-it","hljs"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__) { return /******/ (function(modules) { // webpackBootstrap
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

	// Generated by CoffeeScript 1.9.3

	/**
	 * 启动
	 * @module cnode/bootstrap
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var $, init, mcore, middleware;

	  $ = __webpack_require__(1);

	  mcore = __webpack_require__(2);

	  middleware = __webpack_require__(3);

	  __webpack_require__(5);

	  __webpack_require__(8);

	  init = false;

	  module.exports = function(select, loadSelect) {
	    var app;
	    app = new mcore.App($(select));
	    app.use(middleware.loader);
	    app.route('/topic/:id', __webpack_require__(15)).route('/user/:userName', __webpack_require__(18)).route('*', __webpack_require__(19));
	    app.on('runView', function() {
	      if (init === false) {
	        init = true;
	        return $(loadSelect).remove();
	      }
	    });
	    return app.run();
	  };

	}).call(this);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * 中间件
	 * @module middleware
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var exports;

	  exports = module.exports = {
	    loader: __webpack_require__(4)
	  };

	}).call(this);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * loading 效果
	 * @module middleware/loader
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var $, $el;

	  $ = __webpack_require__(1);

	  $el = $('<div class="loader-wrap">\n    <div class="flower-loader">\n        Loading…\n    </div>\n</div>');

	  $el.hide().appendTo('body');

	  module.exports = function(err, next) {
	    if (err) {
	      return next(err);
	    }
	    this.view.on('beforeRender', function() {
	      return $el.show();
	    });
	    this.view.on('tplBeforeUpdate', function() {
	      return $el.show();
	    });
	    this.view.on('render', function() {
	      return $el.hide();
	    });
	    this.view.on('tplUpdate', function() {
	      return $el.hide();
	    });
	    return next();
	  };

	}).call(this);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * 自定义tag
	 * @module tag
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  __webpack_require__(6);

	}).call(this);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * 通用顶部
	 * <top-header title="self:title" back="self.back" />
	 * @module tag/topHead
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var mcore;

	  mcore = __webpack_require__(7);

	  mcore.Template.regTag('top-header', {
	    attr: ['title', 'back'],
	    template: function() {
	      return '<div class="bar bar-header bar-royal">\n    <button rv-on-click="back" class="button button-icon icon ion-ios-arrow-thin-left"></button>\n\n    <h1 class="title" rv-text="title | substr 0 13"></h1>\n</div>';
	    },
	    init: function(el, data) {
	      return data;
	    }
	  });

	}).call(this);


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * 属性扩展
	 * @module attr
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  __webpack_require__(9);

	  __webpack_require__(10);

	}).call(this);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * 外部连接新窗口打开
	 * @module attr/linkToBlank
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var $, mcore, origin;

	  $ = __webpack_require__(1);

	  mcore = __webpack_require__(7);

	  origin = window.location.origin;

	  mcore.Template.regAttr('link-to-blank', mcore.Template.Attr.subclass({
	    constructor: mcore.Template.Attr.prototype.constructor,
	    init: function() {
	      return this.$el.on('click', 'a', function() {
	        var href, id;
	        href = String(this.href);
	        if (href.indexOf('cnodejs.org/topic/') !== -1) {
	          id = href.split('cnodejs.org/topic/').pop();
	          window.location.href = '#/topic/' + id;
	          return false;
	        }
	        if (href.indexOf(origin) !== 0) {
	          window.open(href);
	          return false;
	        }
	      });
	    }
	  }));

	}).call(this);


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * @user 连接的处理
	 * @module attr/userLink
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var $, format, mcore;

	  $ = __webpack_require__(1);

	  mcore = __webpack_require__(7);

	  format = __webpack_require__(11);

	  mcore.Template.regAttr('user-link', mcore.Template.Attr.subclass({
	    constructor: mcore.Template.Attr.prototype.constructor,
	    init: function() {
	      this.ix = this.$el.attr('data-ix');
	      return this.$el.on('click', 'a', function() {
	        var href;
	        href = String($(this).attr('href'));
	        if (href.indexOf('/user/') === 0) {
	          window.location.href = '#' + href;
	          return false;
	        }
	      });
	    },
	    update: function(replies) {
	      var self;
	      this.replies = JSON.parse(JSON.stringify(replies));
	      self = this;
	      return this.$el.find('a').each(function() {
	        var $el, $quote, href, quote, txt, userName;
	        $el = $(this);
	        txt = $el.text();
	        href = $el.attr('href');
	        if (txt.indexOf('@') !== 0 || href.indexOf('/user/') !== 0) {
	          return;
	        }
	        userName = txt.replace('@', '');
	        replies = self.replies.slice(0, self.ix);
	        replies.reverse();
	        quote = '';
	        $.each(replies, function(k, v) {
	          if (v.author.loginname === userName) {
	            quote = v;
	            return false;
	          }
	        });
	        if (quote) {
	          $quote = $("<blockquote>\n    " + (format.markdown(quote.content)) + "\n</blockquote>");
	          return $quote.insertBefore($el);
	        }
	      });
	    }
	  }));

	}).call(this);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * 过滤函数
	 * @module cnode/formatters
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var Markdownit, Template, highlight, hljs, markdown, mcore, moment;

	  mcore = __webpack_require__(7);

	  moment = __webpack_require__(12);

	  Markdownit = __webpack_require__(13);

	  hljs = __webpack_require__(14);

	  hljs.initHighlightingOnLoad();

	  Template = mcore.Template;

	  highlight = (function() {
	    var alias;
	    alias = [
	      {
	        js: 'javascript',
	        jscript: 'javascript',
	        html: 'xml',
	        htm: 'xml',
	        coffee: 'coffeescript',
	        'coffee-script': 'coffeescript',
	        yml: 'yaml',
	        pl: 'perl',
	        ru: 'ruby',
	        rb: 'ruby',
	        csharp: 'cs'
	      }
	    ];
	    return function(str, lang) {
	      var _, compiled, content, firstLine, lines, numbers, result;
	      lang = String(lang).toLowerCase() || 'javascript';
	      if (alias[lang]) {
	        lang = alias[lang];
	      }
	      if (hljs.getLanguage(lang)) {
	        try {
	          compiled = hljs.highlight(lang, str).value;
	        } catch (_error) {
	          _ = _error;
	          compiled = hljs.highlightAuto(str).value;
	        }
	      } else {
	        compiled = hljs.highlightAuto(str).value;
	      }
	      lines = compiled.split('\n');
	      numbers = '';
	      content = '';
	      firstLine = 1;
	      if (!lines[lines.length - 1]) {
	        lines.pop();
	      }
	      lines.forEach(function(item, i) {
	        numbers += '<div class="line">' + (i + firstLine) + '</div>';
	        return content += '<div class="line">' + item + '</div>';
	      });
	      result = '<figure class="highlight' + (lang != null ? lang : ' ' + {
	        lang: ''
	      }) + '">';
	      result += "<table>\n    <tr>\n        <td class=\"gutter\"><pre>" + numbers + "</pre></td>\n        <td class=\"code\"><pre>" + content + "</pre></td>\n    </tr>\n</table>";
	      result += '</figure>';
	      return result;
	    };
	  })();

	  markdown = new Markdownit({
	    html: false,
	    xhtmlOut: false,
	    breaks: true,
	    langPrefix: 'hljs ',
	    linkify: true,
	    typographer: false,
	    highlight: highlight
	  });

	  Template.formatters('dateFormat', function(value, format) {
	    if (format == null) {
	      format = 'YYYY-MM-DD';
	    }
	    return moment(value).format(format);
	  });

	  Template.formatters('fromNow', function(value) {
	    return moment(value).fromNow();
	  });

	  Template.formatters('markdown', function(value) {
	    return markdown.render(value);
	  });

	  module.exports = {
	    markdown: function(md) {
	      return markdown.render(md);
	    }
	  };

	}).call(this);


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 *
	 * @module cnode/topic
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var $, View, mcore;

	  $ = __webpack_require__(1);

	  mcore = __webpack_require__(2);

	  View = __webpack_require__(16);

	  __webpack_require__(11);

	  __webpack_require__(8);

	  module.exports = View.subclass({
	    constructor: View.prototype.constructor,
	    run: function(id) {
	      return this.render('cnode/topic.html', {
	        replieEnd: 5,
	        topic: this.api.topic(id).then(function(res) {
	          res.data.replies.forEach(function(v, k) {
	            return v.ix = k;
	          });
	          return res;
	        })
	      });
	    },
	    watch: function() {
	      return this.$el.on('scrollend', (function(_this) {
	        return function() {
	          var replieEnd, topic, topicCount, total;
	          topic = _this.get('topic');
	          replieEnd = _this.get('replieEnd');
	          total = replieEnd + 5;
	          topicCount = Number(topic.data.reply_count);
	          if (total > topicCount) {
	            total = topicCount;
	          }
	          if (total === replieEnd) {
	            return;
	          }
	          return _this.set('replieEnd', total);
	        };
	      })(this));
	    }
	  });

	  module.exports.viewName = 'topic';

	}).call(this);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * 
	 * @module cnode/view
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var api, mcore;

	  mcore = __webpack_require__(2);

	  api = __webpack_require__(17);

	  module.exports = mcore.View.subclass({
	    constructor: mcore.View.prototype.constructor,
	    beforeInit: function() {
	      return this.api = api;
	    }
	  });

	}).call(this);


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * api
	 * @module cnode/api
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var $, _host;

	  $ = __webpack_require__(1);

	  _host = 'https://cnodejs.org/api/v1';

	  module.exports = {
	    topics: function(data) {
	      if (data == null) {
	        data = {};
	      }
	      data = $.extend({
	        mdrender: false,
	        limit: 10
	      }, data);
	      return $.get(_host + '/topics', data);
	    },
	    topic: function(id) {
	      return $.get(_host + '/topic/' + id, {
	        mdrender: false
	      });
	    },
	    user: function(userName) {
	      return $.get(_host + '/user/' + userName);
	    }
	  };

	}).call(this);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * 用户主页
	 * @module cnode/user
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var View;

	  View = __webpack_require__(16);

	  __webpack_require__(11);

	  __webpack_require__(2);

	  module.exports = View.subclass({
	    constructor: View.prototype.constructor,
	    run: function(userName) {
	      return this.render('cnode/user.html', {
	        user: this.api.user(userName)
	      });
	    }
	  });

	  module.exports.viewName = 'user';

	}).call(this);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.3

	/**
	 * 首页
	 * @module cnode/index
	 * @author vfasky <vfasky@gmail.com>
	 */

	(function() {
	  "use strict";
	  var $, View, mcore;

	  $ = __webpack_require__(1);

	  mcore = __webpack_require__(2);

	  View = __webpack_require__(16);

	  module.exports = View.subclass({
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

	  module.exports.viewName = 'index';

	}).call(this);


/***/ }
/******/ ])});;