###*
# 测试util 
# @date 2015-08-24 22:01:12
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###

define 'case/util',
['describe', 'it', 'mcore/util', 'assert'],
(describe, it, util, assert)->

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
