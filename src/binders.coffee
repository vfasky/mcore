###*
# # dom attr binders
# 自定义的 dom 属性
# @date 2016-01-14 21:25:51
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

###

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
###

# ## mc-show
# 当值为 true 时，显示 DOM
exports['show'] = (el, value)->
    el.style.display = if value then '' else 'none'

# ## mc-hide
# 当值为 true 时，隐藏 DOM
exports['hide'] = (el, value)->
    el.style.display = if value then 'none' else ''

# ## mc-checked
# 当值为 true 时， 选中
exports['checked'] = (el, value)->
    el.checked = value and true or false

# ## mc-html
# 在DOM中写入HTML, 模板中值都只会是安全的String,除非用该属性设置html
exports['html'] = (el, value)->
    el.innerHTML = if value? then value else ''

###
## mc-*
设置对应属性的值(没有找到对应的自定义属性，就会执行该方式)
如 `mc-style` ，是设置 style； 'mc-height' 设置高度等
###
