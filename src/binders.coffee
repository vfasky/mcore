###*
# dom attr binders
# @date 2016-01-14 21:25:51
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

exports['show'] = (el, value)->
    el.style.display = if value then '' else 'none'

exports['hide'] = (el, value)->
    el.style.display = if value then 'none' else ''

exports['checked'] = (el, value)->
    el.checked = value and true or false

exports['html'] = (el, value)->
    el.innerHTML = if value? then value else ''

exports['text'] = (el, value)->
    if el.textContent?
        el.textContent = if value? then value else ''
    else
        el.innerText = if value? then value else ''


