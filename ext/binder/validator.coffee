###*
# 表单验证
# @date 2016-02-14 16:01:56
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

$ = require 'jquery'
{Template, util} = require 'mcore'

require '../vendor/jquery.serialize-object'

# 是否字母
_isAlphabetReg = /^[A-Za-z]+$/

# 是否邮箱
_isEmailReg = /^(?:[a-z0-9]+[_\-+.]+)*[a-z0-9]+@(?:([a-z0-9]+-?)*[a-z0-9]+.)+([a-z]{2,})+$/i

# 是否日期 20120409 | 2012-04-09 | 2012/04/09 | 2012.04.09 | 以上各种无 0 的状况
_isDateReg = /^([1-2]\d{3})([-/.])?(1[0-2]|0?[1-9])([-/.])?([1-2]\d|3[01]|0?[1-9])$/

# 是否手机
_isMobileReg = /^1[3-9]\d{9}$/

###*
 * 检查座机
 * 座机：仅中国座机支持；区号可有 3、4位数并且以 0 开头；电话号不以 0 开头，最 8 位数，最少 7 位数
 * 但 400/800 除头开外，适应电话，电话本身是 7 位数
 * 0755-29819991 | 0755 29819991 | 400-6927972 | 4006927927 | 800...
 *
###
_isTelReg = /^(?:(?:0\d{2,3}[- ]?[1-9]\d{6,7})|(?:[48]00[- ]?[1-9]\d{6}))$/

# 检查url
_urlCheck = do ->
    protocols = '((https?|s?ftp|irc[6s]?|git|afp|telnet|smb):\\/\\/)?'
    userInfo = '([a-z0-9]\\w*(\\:[\\S]+)?\\@)?'
    domain = '(?:localhost|(?:[a-z0-9]+(?:[-\\w]*[a-z0-9])?(?:\\.[a-z0-9][-\\w]*[a-z0-9])*)*\\.[a-z]{2,})'
    port = '(:\\d{1,5})?'
    ip = '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}'
    address = '(\\/\\S*)?'
    domainType = [protocols, userInfo, domain, port, address]
    ipType = [protocols, userInfo, ip, port, address]
    rDomain = new RegExp('^' + domainType.join('') + '$', 'i')
    rIP = new RegExp('^' + ipType.join('') + '$', 'i')

    (x)->
        rDomain.test x or rIP.test x

_rule =
    # 不能为空
    required: (x = '', rule = null)->
        return String(x).trim().length > 0 if rule == null

        if x.$form.find(rule).val()
            return String(x).trim().length > 0
        true

    # 是否字母
    isAlphabet: (x)-> _isAlphabetReg.test String(x)
    # 最小长度
    minlength: (x, len)->
        len = Number len
        x = String(x).trim()
        x.length >= len
    # 最大长度
    maxlength: (x, len)->
        len = Number len
        x = String(x).trim()
        x.length <= len
    # 只能是数字
    isNumber: (x)-> $.isNumeric String(x)
    # 是否为整数
    isInteger: (x)-> Number(x) % 1 == 0
    # 最小值
    min: (x, min)->
        Number(x) >= Number(min)
    # 最小值
    max: (x, max)->
        Number(x) <= Number(max)
    # 是否相符
    equals: (x, value)->
        value = value.val() if value instanceof $
        x = x.val() if x instanceof $
        String(x) == String(value)
    # 是否邮箱
    isEmail: (x) -> _isEmailReg.test String(x)
    # 检查日期
    isDate: (x) ->
        return false if _isDateReg.test String(x)
        taste = _isDateReg.exec String(x)

        year = Number taste[1]
        month = Number taste[3] - 1
        day = Number taste[5]
        d = new Date year, month, day

        year == d.getFullYear() and month == d.getMonth() and day == d.getDate()
    # 是否手机
    isMobile: (x) -> _isMobileReg.test String(x)
    # 是否座机
    isTel: (x) -> _isTelReg.test String(x)
    # url
    isUrl: (x)-> _urlCheck String(x)

_errMsg =
    required: '不能为空'
    isNumber: '只能是数字'
    isAlphabet: '只能是字母'
    minlength: (len)->
        "最小 #{len} 位字符"
    maxlength: (len)->
        "最多 #{len} 位字符"
    min: (min)->
        "数值要大于 #{min}"
    max: (max)->
        "数值要小于 #{max}"
    equals: '两次输入的值不相符'
    isEmail: '邮箱格式不正确'
    isInteger: '数值必须是整数'
    isDate: '日期格式不正确'
    isMobile: '手机格式不正确'
    isTel: '座机格式不正确'


# 解释验证规则
parseValidator = ($el, rules = [])->
    name = $el.attr 'name'
    return false if !name

    util.each $el.attr('validator').split('|'), (v)->
        ix = String(v).indexOf ' err:'
        if ix != -1
            eT = v.split(' err:')
            v = eT[0]
            diyErr = eT[1]

        args = $.grep v.split(' '), (s)=>
            $.trim(s).length > 0


        ruleType = args[0]
        checkRule = _rule[ruleType]

        if !checkRule
            console.log "validator rule: #{ruleType} undefined"
            return

        if diyErr
            err = diyErr
        else
            if $.isFunction(_errMsg[ruleType])
                msgArgs = args.slice 0
                msgArgs.splice 0, 1
                err = _errMsg[ruleType].apply $el[0], msgArgs
            else
                err = _errMsg[ruleType] or 'error'

        args[0] = $el
        args[1] = @$el.find(args[1]).eq 0 if ruleType == 'equals'

        rules.push
            name: name
            type: ruleType
            rule: checkRule
            args: args
            err: err

# 取规则
getRules = ($form)->
    rules = []

    $form.find('[validator]').each ->
        parseValidator $(@), rules

    rules

# 取对应name的值
getNameValue = (data, name, $el)->
    name = String(name)
    if -1 == name.indexOf('[')
        return data[name] or ''

    $el.val().trim()


Template.binders['validator'] =
    rendered: (el, value)->
        if el.tagName.toLowerCase() != 'form' or !el._element
            return el.setAttribute 'validator', value

        callback = ->
        if el._element.template.hasOwnProperty('_proxy') and el._element.template._proxy[value]
            callback = el._element.template._proxy[value]
        else if el._element.template[value]
            callback = el._element.template[value]

        $form = $ el

        $form.off('submit.validator').on 'submit.validator', ->
            rules = getRules $form
            data = $form.serializeObject()
            err = null

            $.each rules, (k, v)->
                $el = v.args[0]
                _value = getNameValue data, v.name, $el

                if v.type != 'required' and (_value == '' or _value == undefined)
                    return

                value =
                    toString: -> String _value
                    toNumber: -> Number _value
                    $el: $el
                    $form: $form

                v.args[0] = value

                if false == v.rule.apply(null, v.args)
                    err =
                        $el: $el
                        err: v.err
                        $form: $form
                    return false


            callback err, data

            false


module.exports =
    add: (x, fun, errMsg)->
        _rule[x] = fun
        _errMsg[x] = errMsg if errMsg

    addErrMsg: (type, msg)->
        _errMsg[type] = msg


    check: (args...)->
        return false if args.length < 2
        type = args[0]
        args.splice(0, 1)

        return false if !rule[type]

        _rule[type].apply(null, args)
