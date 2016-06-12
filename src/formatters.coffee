###*
# ## 过滤函数
# @date 2016-01-13 18:07:10
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

util = require './util'

# ## 将值转 Number
exports['toNumber'] = (x)->
    return 0 if false == util.isNumber(x)
    Number x

# ## toFixed
exports['toFixed'] = (x, len = 1)->
    Number(x).toFixed len

###
## in 是否在指参数中
```html
<span mc-show="scope.id | in 1 2 3"></span>
```
###
exports['in'] = (x, arr...)->
    x in arr

###
## objToStyle
```html
<span mc-style="{height: 100, width: 200} | objToStyle"></span>
```
###
exports['objToStyle'] = (value)->
    autoPx = ['width', 'height', 'left', 'top', 'right', 'bottom']
    css = []
    for key, val of value
        if key in autoPx and util.isNumber(val)
            val = val + 'px'

        css.push "#{key}: #{val}"

    css.join ';'


###
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
###
