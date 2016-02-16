
/**
 * ## 过滤函数
 * @date 2016-01-13 18:07:10
 * @author vfasky <vfasky@gmail.com>
 * @link http://vfasky.com
 */
'use strict';
var util;

util = require('./util');

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
