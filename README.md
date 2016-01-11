## demo

```coffee
'use strict'

{Template} = require 'mcore'

tpl = new Template

tpl.render require('./tpl/test.html'),
   id: 'test2'
   list: [
       {name : 'ok1'}
       {name : 'ok2'}
   ]
   books: {
       '1': {id: 0, name: 'book1'}
       '2': {id: 1, name: 'book2'}
   }
, ->
    document.body.appendChild tpl.refs

    setInterval ->
        tpl.set 'time', (new Date()).getTime()
        books = tpl.get 'books'
        books.change =
            id: 'v'
            name: (new Date())

        tpl.set 'books', books
    , 1000

```
