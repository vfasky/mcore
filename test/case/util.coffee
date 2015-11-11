###*
# 测试util 
# @date 2015-08-24 22:01:12
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###

define 'case/util',
['describe', 'it', 'mcore', 'assert'],
(describe, it, mcore, assert)->
    "use strict"
    
    util = mcore.util

    describe 'util isNumber', ->

        it '123', ->
            assert.equal true, util.isNumber 123

        it '"123"', ->
            assert.equal true, util.isNumber '123'

        it '-123', ->
            assert.equal true, util.isNumber -123

        it '"123"', ->
            assert.equal true, util.isNumber '-123'

        it '-123.234', ->
            assert.equal true, util.isNumber -123.234

        it '"123.234"', ->
            assert.equal true, util.isNumber '-123.234'

        it '12a is false', ->
            assert.equal false, util.isNumber '12a'

        it '+123 is false', ->
            assert.equal false, util.isNumber '+123'

        it '123.456.789 is false', ->
            assert.equal false, util.isNumber '123.456.789'
            

    describe 'util isObject', ->
        
        it '123 is false', ->
            assert.equal false, util.isObject 123

        it '{} is true', ->
            assert.equal true, util.isObject {}

        it '{ key: 123 } is true', ->
            assert.equal true, util.isObject { key: 123 }

        it 'function test(){} is false', ->
            test = ->
            assert.equal false, util.isObject test


    describe 'util each', ->

        it '[1,2,3,4,5]', ->
            total = ''

            util.each [1...6], (v)->
                total += v

            assert.equal '12345', total

        it '[1,2,3,4,5] > 3 break', ->
            total = ''

            util.each [1...6], (v, k)->
                return false if k >= 3
                total += v

            assert.equal '123', total

            
    describe 'util clone', ->

        it 't1 clone t2', ->
            t1 = ok: 'yes'
            t2 = util.clone t1

            t2.ok = 'no'

            assert.equal false, t1.ok == t2.ok
