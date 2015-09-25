###*
# React Template
# @date 2015-09-25 11:00:28
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###

###*
 * test view
 * @module view/test
 * @author vfasky <vfasky@gmail.com>
###
define 'view/test', ['mcore/rview'], (View)->
    
    "use strict"

    View
        init: ->
            @render 'test/rtpl'

define 'view/test2', ['mcore/rview'], (View)->
    
    "use strict"

    View
        init: ->
            @render 'test/rtpl2'



define 'case/rtpl',
['describe', 'it', 'assert', 'jquery', 'mcore/rtemplate', 'mcore/rview', 'mcore/rapp'],
(describe, it, assert, $, Template, View, App)->
    
    "use strict"

    describe 'React Template base', ->

        it 'hello word', ->
            div = $ '<div/>'
            view = new Template 'hello'
            view.render 'test/rtpl'
                .then (res)->
                    Template.render res.View, res.data, div[0]
                    console.log div[0]


        it 'react app', ->
            div = $ '<div/>'

            app = new App div[0]

            app.use (err, next)->
                console.log @
                next()

            app.route '/test', 'view/test2'
            app.route '*', 'view/test'

            app.router.match '/'

            setTimeout ->
                app.router.match '/test'
            , 1000

