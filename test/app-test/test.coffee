###*
 *
 *
 * @author vfasky <vfasky@gmail.com>
###
'use strict'


{TestApp, expect} = require 'mcoreapp'

app = new TestApp()

require('./app/route') app

describe 'Route Test', ->

    curView = null

    it 'get /', (done)->
        app.goUrl '/', (view)->
            curView = view
            done null


    it 'test render', ->
        text = curView.$el.find('.test').text()
        expect(text).to.be.equal 'hello'


describe 'Template', ->

    cruView = null

    it 'get /template', (done)->
        app.goUrl '/template', (view)->
            cruView = view
            done null


    it 'test mc-for by Array', ->
        $ul = cruView.$el.find('.test-for-list')
        expect( $ul.find('li').length ).to.be.equal 5

        expect( $ul.find('li').eq(0).text().trim() ).to.be.equal '0. test0'


app.run()
