###*
# 
# @date 2016-01-30 10:15:30
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

$ = require 'jquery'

_storage_key = '__todo_mvc_data_'

storage = window.localStorage

# 支持ie
if !storage or !storage.setItem
    _data = {}
    storage =
        setItem: (key, val)->
            _data[key] = val

        getItem: (key)->
            _data[key]

# 取数据列表
exports.list = (selected = 'all')->
    data = []
    try
        data = JSON.parse storage.getItem(_storage_key) or '[]'
    catch error

    return data if selected == 'all'

    $.grep data, (v)->
        v.visibility == selected

# 写文件
exports.write = (data)->
    storage.setItem _storage_key, JSON.stringify(data)

# 更新数据
exports.update = (todo)->
    data = exports.list()
    isMatch = false

    $.each data, (k, v)->
        if String(v.id) == String(todo.id)
            v.title = todo.title
            v.visibility = todo.visibility
            v.isEdit = todo.isEdit
            isMatch = true
            return false

    exports.write data if isMatch

# 添加数据
exports.add = (todo)->
    todo.id = (new Date).getTime()
    data = exports.list()
    data.push todo

    exports.write data

    todo.id
    

# 取一条数据
exports.get = (id)->
    data = exports.list()
    todo = null

    $.each data, (k, v)->
        if String(v.id) == String(id)
            todo = v
            return false

    todo



# 删除数据
exports.remove = (id)->
    data = exports.list()

    $.each data, (k, v)->
        if String(v.id) == String(id)
            data.splice k, 1
            exports.write data
            return false


