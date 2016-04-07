###*
 *
 * 同步表单内的值
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

module.exports = (mcore)->
    {Template, util} = mcore

    Template.binders['sync'] =
        rendered:(el, value)->
            if el.tagName.toLowerCase() != 'form' or !el._element
                return el.setAttribute 'sync', value
