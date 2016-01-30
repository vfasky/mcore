###*
# todo MVC
# @date 2016-01-29 15:44:12
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{View, util} = require 'mcoreApp'
model = require '../app/model'
$ = require 'jquery'

class Index extends View
        
    run: (@selected = 'all')->
        @render require('../tpl/index.html'),
            todos: model.list @selected
            selected: @selected
            allTodos: model.list()

    updateTodos: ->
        @set 'todos', model.list @selected
        @set 'allTodos', model.list()

    # 编辑 
    editTodo: (el)->
        $el = $(el)
        id = $el.attr 'data-id'
        
        todo = model.get id
        return if !todo
        
        todo.isEdit = true
        model.update todo
        
        @updateTodos()

        util.nextTick -> $el.next().focus()

    # 保存
    saveTodo: (el)->
        id = $(el).attr 'data-id'
        
        todo = model.get id
        return if !todo
        todo.title = el.value if el.value
        todo.isEdit = false
        model.update todo
        @updateTodos()

    # 不保存
    unsaveTodo: (el)->
        id = $(el).attr 'data-id'
        
        todo = model.get id
        return if !todo
        todo.isEdit = false
        model.update todo
        @updateTodos()



    # 删除
    removeTodo: (el)->
        id = $(el).attr 'data-id'
        model.remove id
        @updateTodos()
        false

    # 删除所有todo
    removeAllTodos: ->
        model.write []
        @updateTodos()
        false

    # 添加todo
    addTodo: (el, event)->
        todo =
            title: $.trim el.value
            visibility: 'active'
        return if todo.title.length == 0

        model.add todo
        @updateTodos()
        el.value = ''

        return false


    # 更改所有 todo 的状态
    changeAllVisibility: (el)->
        isCompleted = el.checked
        todos = model.list @selected

        $.each todos, (k, v)->
            v.visibility = isCompleted and 'completed' or 'active'

        model.write todos
        @updateTodos()


    # 更改单个todo的状态
    changeTodoVisibility: (el)->
        id = el.value
        todo = model.get id
        return if !todo
        
        todo.visibility = el.checked and 'completed' or 'active'
        model.update todo
        
        @updateTodos()


module.exports = Index
module.exports.viewName = 'index'
