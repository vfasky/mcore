###*
 * 测试属性
 * @module case/attr
 * @author vfasky <vfasky@gmail.com>
###
define 'case/attr',
['jquery', 'mcoreExt', 'describe', 'it'],
($, mcore, describe, it)->
    
    "use strict"

    View = mcore.View
    validator = mcore.ext.validator


    describe 'attr test', ->

        it 'validator required',  (done)->
            $el = $ '<div />'
            ValidatorView = View.subclass
                constructor: View::constructor
                run: ->
                    @on 'render', =>
                        @$el.find('form').submit()

                    @renderString '''
                        <form rv-on-submit="self.save" rv-validator>
                            <input name="id" validator="required" />
                        </form>
                    '''

                save: (el)->
                    $form = $ el

                    ref = $form.data('check')()

                    if $.isFunction ref
                        errData = ref()
                        done() if errData.err == '不能为空'

                    false

            view = new ValidatorView $el
            view.run()


        it 'validator isEmail is null pass',  (done)->
            $el = $ '<div />'
            ValidatorView = View.subclass
                constructor: View::constructor
                run: ->
                    @on 'render', =>
                        @$el.find('form').submit()

                    @renderString '''
                        <form rv-on-submit="self.save" rv-validator>
                            <input name="id" value="" validator="isEmail err:emailIsError" />
                        </form>
                    '''

                save: (el)->
                    $form = $ el

                    ref = $form.data('check')()

                    done() if $.isFunction(ref) == false

                    false

            view = new ValidatorView $el
            view.run()


        it 'validator isEmail',  (done)->
            $el = $ '<div />'
            ValidatorView = View.subclass
                constructor: View::constructor
                run: ->
                    @on 'render', =>
                        @$el.find('form').submit()

                    @renderString '''
                        <form rv-on-submit="self.save" rv-validator>
                            <input name="id" value="1" validator="required | isEmail err:emailIsError" />
                        </form>
                    '''

                save: (el)->
                    $form = $ el

                    ref = $form.data('check')()

                    if $.isFunction ref
                        errData = ref()
                        done() if errData.err == 'emailIsError'

                    false

            view = new ValidatorView $el
            view.run()


        it 'validator isUrl',  (done)->
            $el = $ '<div />'
            ValidatorView = View.subclass
                constructor: View::constructor
                run: ->
                    @on 'render', =>
                        @$el.find('form').submit()

                    @renderString '''
                        <form rv-on-submit="self.save" rv-validator>
                            <input name="id" value="vfasky@gmail.com" validator="required | isEmail " />
                            <input name="url" value="vfasky" validator="required | isUrl " />

                        </form>
                    '''

                save: (el)->
                    $form = $ el

                    ref = $form.data('check')()

                    done() if $.isFunction(ref)
                    
                    false

            view = new ValidatorView $el
            view.run()

        it 'validator min',  (done)->
            $el = $ '<div />'
            ValidatorView = View.subclass
                constructor: View::constructor
                run: ->
                    @on 'render', =>
                        @$el.find('form').submit()

                    @renderString '''
                        <form rv-on-submit="self.save" rv-validator>
                            <input name="id" value="1" validator="required | min 9" />

                        </form>
                    '''

                save: (el)->
                    $form = $ el

                    ref = $form.data('check')()
                    console.log ref().err

                    done() if ref().err == '数值要大于 9'
                    
                    false

            view = new ValidatorView $el
            view.run()

        it 'validator pass',  (done)->
            $el = $ '<div />'
            ValidatorView = View.subclass
                constructor: View::constructor
                run: ->
                    @on 'render', =>
                        @$el.find('form').submit()

                    @renderString '''
                        <form rv-on-submit="self.save" rv-validator>
                            <input name="id" value="vfasky@gmail.com" validator="required | isEmail " />
                            <input name="url" value="http://vfasky.com" validator="required | isUrl " />

                        </form>
                    '''

                save: (el)->
                    $form = $ el

                    ref = $form.data('check')()

                    done() if ref.id == 'vfasky@gmail.com'
                    false

            view = new ValidatorView $el
            view.run()


    

