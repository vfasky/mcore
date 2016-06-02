###*
 *
 * 多国语言
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

{sprintf} = require '../vendor/sprintf'

module.exports = (mcore)->
    {Template, util} = mcore

    # 存放语言包翻译字典
    _dict =
        'zh-CN': {}

    # 默认语言包
    _local = 'zh-CN'

    # 取当前语言的字典
    getDict = -> _dict[_local] or {}


    # 翻译
    i18n = (args...)->
        dict = getDict()
        args[0] = String(args[0]).trim()

        # 字典存在，翻译
        if dict[args[0]]
            args[0] = dict[args[0]]
        else
            i18n.noMatchDict args[0], _local

        # 不需要替换字符，直接返回
        if args.length < 2
            return args[0] or ''

        for v, k in args
            # 如果要替换的占位符是数组，返回数组的长度
            if util.isArray(v)
                args[k] = v.length
            else if v == undefined
                args[k] = ''

        sprintf.apply @, args

    # 没有找到字典的处理
    i18n.noMatchDict = (txt, local)->

    # 设置语言
    i18n.setLocale = (name)-> _local = name

    # 取当前语言
    i18n.getLocale = -> _local

    # 加载字典
    i18n.loadDict = (name, dict)-> _dict[name] = dict

    Template.formatters['i18n'] = Template.formatters['_'] = i18n

    i18n
