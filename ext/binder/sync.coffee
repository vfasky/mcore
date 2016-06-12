###*
 *
 * 同步表单内的值
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

module.exports = (mcore)->
    {Template, util} = mcore
    $ = require 'jquery'

    Template.binders['sync'] =
        rendered:(el, dataKey)->
            if el.tagName.toLowerCase() != 'form' or !el._element
                return el.setAttribute 'sync', dataKey

            proxyEnv = Template.getEnv el

            set = (name, value)->
                if proxyEnv.scope
                    #console.log dataKey, name, value
                    proxyEnv.scope[dataKey][name] = value
                else
                    pData = proxyEnv.get dataKey
                    pData[name] = value
                    proxyEnv.set dataKey, dataKey

            $form = $ el

            $form.on 'change', '[name]', ->
                $el = $ @
                name = $el.attr 'name'
                if name
                    if $el.is('[type=checkbox],[type=radio]')
                        val = if $el.prop('checked') then @value else ''
                        set name, val
                    else
                        set name, @value
