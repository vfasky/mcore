###*
# 
# @date 2016-01-09 14:12:49
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{Template} = require 'mcore'

exports.test = ->
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
            tpl.scope.books.change =
                id: 'v'
                name: (new Date())
        , 1000

