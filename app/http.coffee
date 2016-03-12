###*
# 封装 http 请求
# @date 2015-12-07 14:32:01
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###

"use strict"

$ = require 'jquery'

#默认：错误处理, 网络层面
networkErrCallback = (xhr, status, hideError)->
    msg = 'Network Error'

    # 后端是否返回错误信息
    if xhr.responseText
        try
            res = $.parseJSON xhr.responseText
            msg = res.error if res.error
        catch error

    httpCode = xhr.statusCode().status

    if httpCode
        msg = msg + ' ( code: ' + httpCode + ' )'

    # 是否需要隐藏
    if !hideError
        alert msg
    else
        console.log msg

#默认： 业务层面的出错处理
errCallback = (res, hideError)->
    msg = res.error or res.msg or 'An unknown error occurred'
    # 是否需要隐藏
    if !hideError
        alert msg
    else
        console.log msg

# 封装http请求
http = do ->
    # 超时时间
    timeout = 10000

    ajax = (type, url, data, hideError = false)->
        dtd = $.Deferred()
        #console.log http.buildHeaders()

        data = http.sendDataFormat data or {}

        options =
            cache: false
            data: data
            dataType: 'json'
            type: type or 'GET'
            timeout: timeout
            headers: http.buildHeaders()

        if window['FormData'] and data instanceof FormData
            options.processData = false
            options.contentType = false

        if  type == 'jsonp'
            options.type = 'GET'
            options.dataType = 'jsonp'

        #console.log options

        xhr = $.ajax(
            url,
            options
        )
        xhr.sendData = options.data

        http.onBeforeSend xhr

        xhr.then (res)->
            if http.isSuccess(res, @)
                dtd.resolve http.responseFormat res
            else
                dtd.reject res
                errCallback res, hideError

        .fail (xhr, status)->
            dtd.reject xhr, status
            if !xhr.statusCode().status
                networkErrCallback xhr, status, hideError
            else
                try
                    res = $.parseJSON xhr.responseText
                catch error
                    res = {}

                errCallback res, hideError
                
        .always ->
            http.onComplete xhr

        promise = dtd.promise()
        promise.xhr = xhr
        promise.reject = (err)->
            dtd = $.Deferred()
            dtd.reject err
            dtd.promise()
        promise

    exports =
        get: (url, data, hideError = false)->
            ajax 'GET', url, data, hideError
        post: (url, data, hideError = false)->
            ajax 'POST', url, data, hideError
        jsonp: (url, data, hideError = false) ->
            ajax 'jsonp', url, data, hideError

# 注册开始发送请求事件
http.onBeforeSend = ->

# 注册请求完成事件（无论成功与否）
http.onComplete = ->


# 判断请求是否成功
http.isSuccess = (res)-> Number(res.code) == 1

# 构造请求头
http.buildHeaders = -> {}

# 注册错误处理
http.regErrCallback = (type, fun)->
    if type == 'network'
        networkErrCallback = fun
    else
        errCallback = fun

# 返回数据的处理
http.responseFormat = (res)-> res

# 处理发送的数据
http.sendDataFormat = (data)-> data

module.exports = http
