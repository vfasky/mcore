###*
 *
 * test App
 * @author vfasky <vfasky@gmail.com>
###
'use strict'


mcoreapp = require '../dist/mcoreApp'
RouteChange = require './routeChange'

$vd = $ '<div/>'

class TestApp extends mcoreapp.App

    constructor: ($el = $vd, options = {})->
        @routeChange = new RouteChange()
        options.routeChange = @routeChange.init

        super $el, options


    goUrl: (url, runViewCallback)->
        @off 'runView'

        @on 'runView', (view) ->
            view.instantiate.on 'rendered', ->
                runViewCallback view.instantiate

        @router.match url


    run: ->
        #super()
        mocha.run() if mocha

module.exports = TestApp
