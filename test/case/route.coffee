###*
 * 测试路由
 * @module case/route
 * @author vfasky <vfasky@gmail.com>
###
define 'case/route',
['describe', 'it', 'mcore/route', 'assert'],
(describe, it, route, assert)->
    
    "use strict"

    describe 'route test pathToRegexp', ->
        it '/index/:id/:v', ->
            key = []

            reg = route.pathToRegexp('/index/:id/:v', key)
            assert.equal null, reg.exec('/index/12')

            ref = reg.exec('/index/12/13')
            data = {}
            for v in [1...ref.length]
                k = key[v-1]
                data[k.name] = Number ref[v] if k

            assert.equal JSON.stringify(data), JSON.stringify
                id: 12
                v: 13

        it '/index/:id?/:v', ->
            key = []
            reg = route.pathToRegexp('/index/:id?/:v', key)
            assert.equal true, Array.isArray reg.exec('/index//12')


        it '/show/*', ->
            key = []
            reg = route.pathToRegexp('/show/*', key)

            assert.equal 2, reg.exec('/show/sf/sdf/').length




