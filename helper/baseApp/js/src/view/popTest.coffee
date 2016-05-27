{PopUpView} = require 'mcoreApp'

class PopTest extends PopUpView
    run: ->
        @render require('../tpl/popTest.html'),
            id: @.vix

    backClick: (event, el)->
        @back()

    closeClick: (event, el)->
        @close()

    openClick:(event,el)->
        @.parent.open PopTest

module.exports = PopTest
module.exports.viewName = 'poptest'
