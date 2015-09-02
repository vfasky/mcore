// Generated by CoffeeScript 1.9.3

/**
 * util
 * @module mcore/util
 * @author vfasky <vfasky@gmail.com>
 */

(function() {
  define('mcore/util', function() {
    "use strict";
    var _cachePre, _isNumberReg, _localStorage, _memoryStorage, exports;
    exports = {};
    _isNumberReg = /^-{0,1}\d*\.{0,1}\d+$/;
    _cachePre = '__cache_';
    _localStorage = window.localStorage;
    _memoryStorage = {};
    exports.isNumber = function(x) {
      return _isNumberReg.test(x);
    };
    exports.isObject = function(x) {
      return Object.prototype.toString.call(x) === '[object Object]';
    };
    exports.clone = function(value) {
      return JSON.parse(JSON.stringify(value));
    };
    exports.cache = {
      set: function(key, value, time) {
        var data;
        if (time == null) {
          time = Infinity;
        }
        if (time !== Infinity) {
          time = (new Date()).getTime() + parseInt(time);
        }
        data = {
          time: time,
          value: value
        };
        return _localStorage.setItem(_cachePre + key, JSON.stringify(data));
      },
      get: function(key, defaultVal) {
        var curTime, data;
        if (defaultVal == null) {
          defaultVal = null;
        }
        data = _localStorage.getItem(_cachePre + key);
        if (!data) {
          return defaultVal;
        }
        data = JSON.parse(data);
        curTime = (new Date()).getTime();
        if (curTime <= data.time) {
          return data.value;
        }
        exports.cache.remove(key);
        return defaultVal;
      },
      remove: function(key) {
        return _localStorage.removeItem(_cachePre + key);
      }
    };

    /**
     * promise cache
     * @author vfasky <vfasky@gmail.com>
     * @param key 缓存key
     */
    exports.promiseCache = function(key, promise, options) {
      var data, dtd;
      data = options.proxy.get(key);
      if (data) {
        dtd = $.Deferred();
        dtd.resolve(exports.clone(data));
        return dtd.promise();
      } else {
        return promise().then(function(res) {
          return options.proxy.set(key, exports.clone(res), options.time);
        });
      }
    };

    /**
     * 基于本地存放的cache
     * @author vfasky <vfasky@gmail.com>
     *
     */
    exports.promiseCacheLocalProxy = {
      set: exports.cache.set,
      get: exports.cache.get
    };

    /**
     * 基于内存的cache
     * @author vfasky <vfasky@gmail.com>
     *
     */
    exports.promiseCacheMemoryproxy = {
      set: function(key, value) {
        return _memoryStorage[key] = value;
      },
      get: function(key) {
        return _memoryStorage[key] || null;
      }
    };

    /**
     * 遍历数组
     */
    exports.each = function(arr, cb) {
      var k, ref, v;
      if (cb == null) {
        cb = function() {};
      }
      if (false === Array.isArray(arr)) {
        return;
      }
      for (k in arr) {
        v = arr[k];
        ref = cb(v, k);
        if (false === ref) {
          break;
        }
      }
    };
    return exports;
  });

}).call(this);