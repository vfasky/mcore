###*
 * view test
 * @module case/view
 * @author vfasky <vfasky@gmail.com>
###
define 'case/view',
['describe', 'it', 'mcore/view', 'assert', 'jquery', 'mcore/template'],
(describe, it, View, assert, $, Template)->
    
    "use strict"

    describe 'test view and template', ->

        it 'hello', (done)->

            TestView = View.subclass
                constructor: View::constructor
                run: ->
                    @render 'test/t1'

            $el = $ '<div/>'
            testView = new TestView $el

            testView.on 'render', ->
                assert.equal true, $el.text().trim() == 'hello'
                done()

            testView.run()


        it 'each', (done)->

            TestView = View.subclass
                constructor: View::constructor
                run: ->
                    @render 'test/t2',
                        testData: [0...5]

            $el = $ '<div/>'
            testView = new TestView $el

            testView.on 'render', ->
                assert.equal true, $el.find('.t1').length == 5
                done()

            testView.run()


        it 'promise data', (done)->
            
            TestView = View.subclass
                constructor: View::constructor
                run: ->
                    @render 'test/t2',
                        testData: @getData()

                getData: ->
                    dtd = $.Deferred()
                    
                    dtd.resolve [0...5]
                    
                    dtd.promise()

            $el = $ '<div/>'
            testView = new TestView $el

            testView.on 'render', ->
                assert.equal true, $el.find('.t1').length == 5
                done()

            testView.run()

        it 'template diy attr', (done)->

            Template.regAttr 'test', Template.Attr.subclass
                constructor: Template.Attr::constructor
                init: (el)->
                    $(el).html 'diy'

            TestView = View.subclass
                constructor: View::constructor
                run: ->
                    @render 'test/t3'

            $el = $ '<div/>'
            testView = new TestView $el

            testView.on 'render', ->
                assert.equal true, $el.text().trim() == 'diy'
                done()

            testView.run()

        it 'template 2way attr', (done)->

            Template.regAttr 'test', Template.Attr.subclass
                constructor: Template.Attr::constructor
                init: (el)->
                    $(el).html 'diy'
                update: (value)->
                    @sync 'ok'

            TestView = View.subclass
                constructor: View::constructor
                run: ->
                    @render 'test/t4',
                        t: 0

            $el = $ '<div/>'
            testView = new TestView $el

            testView.on 'change:t', (val)->
                done() if val == 'ok'
                
            testView.run()


        it 'template components', (done)->
            Template.regTag 'test',
                attr: 'list'
                template: ->
                    '''
                    <div rv-each-v="list" class="t5">{v}</div>
                    '''
                init: (el, data)->
                    data

            TestView = View.subclass
                constructor: View::constructor
                run: ->
                    @render 'test/t5',
                        data: [0...5]

                changeData: ->
                    @set 'data', [0...3]
                    

            $el = $ '<div/>'
            testView = new TestView $el

            testView.on 'render', ->
                assert.equal 5, $el.find('.t5').length

                # 更改值
                testView.changeData()

                done() if $el.find('.t5').length == 3
                            
            testView.run()

                    













