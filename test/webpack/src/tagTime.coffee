###*
# 
# @date 2016-01-26 09:41:52
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{Template, Component} = require 'mcore'

class Time extends Component

    init: ->
        @on 'rendered', =>
            setTimeout =>
                @set 'time', new Date()
            , 1000
            
        @render require('./tpl/tagTime.html'),
            time: new Date()



Template.components.time = Time
