## 基于 virtual-dom 的前端框架



 框架分为两部分

* `mcore` 模板引擎（Core),  无依赖，支持（IE6+)
* `mcoreApp` SPA（单页应用）框架，依赖 `jQuery` , `mcore` 支持（IE6+）



### mcore 模板引擎

#### DEMO

``` html
<!-- ./tpl/test.html -->
<ul>
  <li mc-for="v , k in scope.list" mc-on-click="showIx">
    <span mc-data-ix="k">{v.name}</span>
  </li>
</ul>
```

``` coffeescript
# demo.coffee
{Template} = require 'mcore'

# init tpl
tpl = new Template()

# bind click event
tpl.showIx = (el)->
	console.log el
    
 # render
tpl.render require('./tpl/test.html'),
	list: [
       {name : 'ok1'}
       {name : 'ok2'}
	]
 , -> # rendered
    document.body.appendChild tpl.refs
```

