###*
 * 表单验证
 * @module mcore-attr/validator
 * @author vfasky <vfasky@gmail.com>
###

"use strict"

$ = require 'jquery'
mcore = require 'mcore'
require 'formSerializer'

Template = mcore.Template
util = mcore.util

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

# 身份证
_isIDReg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i

# 检查url
urlCheck = do ->
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


errMsg =
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
    isIdentityCode: '身份证号格式错误'


rule =
    # 不能为空
    required: (x = '')->
        String(x).trim().length > 0
    # 是否字母
    isAlphabet: (x)-> _isAlphabetReg.test x
    # 最小长度
    minlength: (x, len)->
        len = Number len
        x = String(x).trim()
        x.length >= len
    # 最大长度
    maxlength: (x, len)->
        len = Number len
        x = String(x).trim()
        x.length < len
    # 只能是数字
    isNumber: (x)-> $.isNumeric x
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
    isEmail: (x) -> _isEmailReg.test x
    # 检查日期
    isDate: (x) ->
        return false if _isDateReg.test x
        taste = _isDateReg.exec x

        year = Number taste[1]
        month = Number taste[3] - 1
        day = Number taste[5]
        d = new Date year, month, day

        year == d.getFullYear() and month == d.getMonth() and day == d.getDate()
    # 是否手机
    isMobile: (x) -> _isMobileReg.test x
    # 是否座机
    isTel: (x) -> _isTelReg.test x
    # 检查身份证
    isIdentityCode: (x)->
        x = String(x).replace('x', 'X')

        cisy =
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外"
        
        return false if _isIDReg.test x

        return false if !cisy[x.substr(0, 2)]

        if x.length == 18
            code = x.split ''
            #∑(ai×Wi)(mod 11)
            #加权因子
            factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
            #校验位
            parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
            sum = 0
            ai = 0
            wi = 0
            for i in [0...17]
                ai = code[i]
                wi = factor[i]
                sum += ai * wi

            last = parity[sum % 11]
            return false if last != code[17]

        true

    # url
    isUrl: (x)-> urlCheck x


###*
 * 验证表单
 * @author vfasky <vfasky@gmail.com>
###
ValidatorAttr = Template.Attr.subclass
    constructor: Template.Attr::constructor
    init: ->
        return false if @$el.is('form') == false

        @$el.data 'check', =>
            @initRules()
            @check()


    update: (value)->
        return if @$el.is('form')
        
        if value
            @$el.attr 'validator', value
        else
            @$el.removeAttr 'validator'

            
    check: ->
        isPass = true
        data = @$el.serializeObject()
        errFun = null
        $form = @$el

        $.each @rules, (k, v)->
            if v.type != 'required' and (data[v.name] == '' or data[v.name] == undefined)
                return

            $el = v.args[0]
            v.args[0] = data[v.name]

            if false == v.rule.apply(null, v.args)
                errFun = ->
                    $el: $el
                    err: v.err
                    $form: $form
                isPass = false
                return false

        isPass and data or errFun


    initRules: ->
        self = @
        @rules = []
        @$validators = @$el.find '[validator]'

        @$validators.each ->
            self.parseValidator $(this)
            

    # 解释验证规则
    parseValidator: ($el)->
        name = $el.attr 'name'
        return if !name
        $el.attr('validator').split('|').forEach (v)=>
            ix = String(v).indexOf ' err:'
            if ix != -1
                eT = v.split(' err:')
                v = eT[0]
                diyErr = eT[1]

            args = v.split(' ').filter (s)=>
                $.trim(s).length > 0

            ruleType = args[0]
            checkRule = rule[ruleType]

            if !checkRule
                console.log "validator rule: #{ruleType} undefined"
                return

            if diyErr
                err = diyErr
            else
                if $.isFunction(errMsg[ruleType])
                    msgArgs = util.clone args
                    msgArgs.splice 0, 1
                    err = errMsg[ruleType].apply null, msgArgs
                else
                    err = errMsg[ruleType] or 'error'
       
            args[0] = $el
            args[1] = @$el.find(args[1]).eq 0 if ruleType == 'equals'

            @rules.push
                name: name
                type: ruleType
                rule: checkRule
                args: args
                err: err


Template.regAttr 'validator', ValidatorAttr

exports = module.exports =
    add: (x, fun)->
        rule[x] = fun
        
    check: (args...)->
        return false if args.length < 2
        type = args[0]
        args.splice(0, 1)

        return false if !rule[type]

        rule[type].apply(null, args)

    addErrMsg: (type, msg)->
        errMsg[type] = msg

    ValidatorAttr: ValidatorAttr

