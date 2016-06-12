###*
 *
 * 将数据加入表单
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

module.exports = (mcore)->
    {Template, util} = mcore
    $ = require 'jquery'

    Template.binders['load-data'] =
        rendered:(el, data = {})->
            if el.tagName.toLowerCase() != 'form' or !el._element
                return el.setAttribute 'load-data', data

            $form = $ el

            for k, v of data
                $el = $form.find("[name=#{k}]")

                if $el.is('[type=checkbox],[type=radio]')
                    $el.prop 'checked', String($el.val()) == String(v)
                else
                    $el.val v
