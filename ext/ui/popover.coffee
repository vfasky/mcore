###*
 * 表单错误提醒
 * @module mcoreExtUiPopover
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

$ = require 'jquery'
$doc = $ document

module.exports = (mcore)->
    {Component} = mcore

    class Popover extends Component

        init: ->
            @showTime = 3000
            @hideTimeId = null

        showError: (@errData)->
            $el = @errData.$el.data('proxyEl') or @errData.$el

            $el.off('focus.popover').focus().on 'focus.popover', =>
                $el.removeClass 'error'
                @hideError()

            # add .error class
            $el.addClass 'error'

            # 定位
            offset = $el.offset()

            className = 'popover-top'
            if offset.top > $doc.height() * 0.8
                offset.top -= ($el.height() or 20)
            else
                offset.top += ($el.height() or 20)
                className = 'popover-bottom'

            clearTimeout @hideTimeId if @hideTimeId

            @render require('./tpl/popover.html'),
                err: @errData.err
                className: className + ' active '
            , =>
                @.$el = $ @refs if !@.$el
                @.$el.css offset

                @hideTimeId = setTimeout =>
                    @hideError()
                , @showTime


        hideError: ->
            @set 'className', ''



    Popover
