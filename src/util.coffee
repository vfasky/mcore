###*
#
# @date 2016-01-11 20:41:14
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

if window.Node && Node.prototype && !Node.prototype.contains
    Node.prototype.contains = (arg)-> !!(this.compareDocumentPosition(arg) & 16)


_isNumberReg = /^-{0,1}\d*\.{0,1}\d+$/

exports.isNumber = (x)->
    _isNumberReg.test x


exports.isArray = (x)->
    return Array.isArray(x) if Array.isArray
    Object::toString.call(x) == '[object Array]'


exports.isObject = (x)->
    Object::toString.call(x) == '[object Object]'


exports.isString = (x)->
    Object::toString.call(x) == '[object String]'


exports.isFunction = (x)->
    Object::toString.call(x) == '[object Function]'


exports.isPlainObject = (x)->
    if !x or Object::toString.call(x) != '[object Object]' or
    x.nodeType or x.setInterval
        return false

    hasOwnConstructor = Object.hasOwnProperty.call x, 'constructor'
    hasIsPropertyOfMethod = Object.hasOwnProperty.call x.constructor.prototype, 'isPrototypeOf'

    if x.constructor and !hasOwnConstructor and !hasIsPropertyOfMethod
        return false

    for key of x
        lastKey = key

    typeof lastKey == 'undefined' or Object.hasOwnProperty.call x, lastKey


exports.extend = ->
    target = arguments[0] or {}
    length = arguments.length
    deep = false
    start = 1

    if typeof target == 'boolean'
        deep = target
        target = arguments[1] or {}
        start = 2

    if typeof target != 'object' and typeof target != 'function'
        target = {}

    for i in [start...length]
        if (options = arguments[i]) != null
            for name of options
                src = target[name]
                copy = options[name]

                continue if target == copy

                if deep and copy and ( exports.isPlainObject(copy) or exports.isArray(copy) )
                    clone = {}
                    if src and ( exports.isPlainObject(src) or exports.isArray(src) )
                        clone = exports.isArray(copy) and [] or {}

                    target[name] = exports.extend deep, clone, copy

                else if typeof copy != 'undefined'
                    target[name] = copy

    target


exports.setElementAttr = (el, attrName, value, noHash)->
    if attrName == 'style'
        return el.style.cssText = value

    if attrName == 'class'
        return el.className = value

    tagName = (el.tagName or '').toLowerCase()

    if attrName == 'value' and tagName in ['input', 'textarea']
        return el.value = value

    if el._element and el._element.setAttribute and !noHash
        el._element.setAttribute el, attrName, value
    else
        if exports.isString(value) or exports.isNumber(value)
            el.setAttribute attrName, value


exports.removeElementAttr = (el, attrName)->
    if el._element and el._element.removeAttribute
        el._element.removeAttribute attrName
    else
        el.removeAttribute attrName


exports.toArray = (listLike)->
    return [] if !listLike
    list = []
    for i in [0...listLike.length]
        list.push listLike[i]
    list


exports.each = (arr, done)->
    for v, k in arr
        res = done v, k
        return if false == res


exports.objectKeys = (obj = {})->
    return Object.keys(obj) if Object.keys
    keys = []
    for key of obj
        keys.push key

    keys

exports.nodeContains = (parentNode, node)->
    parentNode.contains node

exports.addEvent = (node, type, callback)->
    if node.addEventListener
        node.addEventListener type, callback
    else if node.attachEvent
        node['e' + type + callback] = callback
        node[type + callback] = ->
            event = window.event
            event.target = event.srcElement
            node['e' + type + callback] event
        node.attachEvent 'on' + type, node[type + callback]


exports.removeEvent = (node, type, callback)->
    if node.removeEventListener
        node.removeEventListener type, callback
    else if node.detachEvent
        node.detachEvent 'on' + type, node[type + callback]
        node[type + callback] = null



# 放到下一帧执行
do ->
    if window.requestAnimationFrame
        exports.nextTick = (fun)->
            window.requestAnimationFrame -> fun()

        exports.nextTick.clear = (id)->
            window.cancelAnimationFrame id if id

    else
        exports.nextTick = (fun)->
            setTimeout fun, 0

        exports.nextTick.clear = (id)->
            clearTimeout id if id
