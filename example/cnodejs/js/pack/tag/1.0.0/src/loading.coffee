###*
 * <loading watch="self:data"/>
 * @module tag/loading
 * @author vfasky <vfasky@gmail.com>
###
define 'tag/loading', ['jquery', 'mcore'], ($, mcore)->
    
    "use strict"

    mcore.Template.regTag 'loading',
        attr: ['watch']
        template: ->
            '''
            <div rv-unless="watch" class="card text-center padding">
                loading ...
            </div>
            '''
        init: (el, data)->
            data

