###*
 *
 * 扩展 util
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

{util} = require 'mcore'
each = util.each
$ = require 'jquery'

util.loadPromise = (data = {})->
    dtd = $.Deferred()
    keys = util.objectKeys data

    if keys.length == 0
        dtd.resolve {}
    else
        promises = []
        each keys, (v)->
            promises.push data[v]

        $.when.apply(null, promises).done (args...)->
            vData = {}
            each args, (v, k)=>
                key = keys[k]
                if key != undefined
                    # 坑
                    if util.isArray(v) and v.length == 3 and v[2].promise
                        v = v[0]
                    vData[key] = v

                return

            dtd.resolve vData
        .fail (err)->
            dtd.reject err

    dtd.promise()

module.exports = util
