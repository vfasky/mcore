###*
 * 测试路由
 * @module case/route
 * @author vfasky <vfasky@gmail.com>
###
define 'case/route',
['describe', 'it', 'mcore/route', 'assert'],
(describe, it, route, assert)->
    
    "use strict"

    describe 'route test pathToObject', ->
        it '?id=4&v=ttt', ->
            data = route.pathToObject '/test?id=4&v=ttt'
            
            assert.equal JSON.stringify(data), JSON.stringify
                id: 4
                v: 'ttt'
                
        it '&id=5&b=c&c1 =d', ->
            data = route.pathToObject '/test/vvv/&id=5&b=c&c1 =d'
            assert.equal JSON.stringify(data), JSON.stringify
                id: 5
                b: 'c'
                c1: 'd'


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


    describe 'route test Route::match', ->

        ru = new route.Route()

        it '/show/:id', (done)->
            ru.add '/show/:id', (id)->
                assert.equal 2, id
                done()

            ru.match '/show/2'


        it '/show2/:id context', (done)->
            ru.add '/show2/:id', (id)->
                assert.equal 2, id
                assert.equal 2, @data.id
                assert.equal 3, @context.v
                assert.equal @url, '/show2/2?v=3'
                
                done()

            ru.match '/show2/2?v=3'

            ru.add '/show0/:id', (id)->
                assert.equal 2, id
                assert.equal 2, @data.id
                assert.equal 3, @context.v
                assert.equal @url, '/show0/2&v=3'
                
                done()

            ru.match '/show0/2&v=3'


        it '/show3/:id?', (done)->
            ru.add '/show3/:id?', (id)->
                assert.equal null, id
                done()

            ru.match '/show3/'


        it '/show4/:id?/:v', (done)->
            ru.add '/show4/:id?/:v', (id, v)->
                assert.equal null, id
                assert.equal 7, v
                done()

            ru.add '/show4/:id?/:v', (id, v)->
                done '重复配对'

            ru.match '/show4//7'
            

        it '/show5/*', (done)->
            ru.add '/show5/*', (id)->
                assert.equal '7/8/9', id
                done()

            ru.match '/show5/7/8/9'








