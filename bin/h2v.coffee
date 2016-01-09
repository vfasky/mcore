###*
# 转换 html 到 virtual Dom 
# @date 2016-01-08 20:12:21
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

htmlparser = require 'htmlparser2'

# for id
_forId = 0

# 生成的私有变量前缀
_preNS = '__mc__'

# 构造空格
bNS = (len)->
    ('' for i in [0 ... len * 4]).join ' '


### 
# 解释 <div mc-for="v, k in scope.list"></div>
###
parserAttrFor = (code, dom, ix, children)->
    fid = _forId++

    # 删除 dom 的 mc-for 属性
    delete dom.attribs['mc-for']

    script = ''
    # Array for
    if code.indexOf(' in ') != -1
        # 数组key变量名
        _ix =  _preNS + '$ix_'

        # 取数组变量名
        _arr = code.split(' in ').pop()

        # 数组 item 值
        _vName = code.split(' ')[0].replace ',', ''

        # 取自定义key for v, k in x 
        if code.indexOf(',') != -1
            _ix = code.split(',').pop().split(' in')[0].trim()

        script = """
#{bNS ix + 1}// for
#{bNS ix + 1}var #{_preNS}arr = #{_arr} || [];
#{bNS ix + 1}for(var #{_ix}=0, len=#{_preNS}arr.length; #{_ix} < len; #{_ix}++){
#{bNS ix + 1}    var children_for_#{fid} = [], attr = {};
#{bNS ix + 1}    var #{_vName} = #{_preNS}_arr[#{_ix}];
#{bNS ix + 1}    #{parserAttr dom.attribs, ix}
"""

    # Object for <div mc-for="v of scope.list"></div>
    else if code.indexOf(' of ') != -1
        _key = code.split(' of ')[0]
        _obj = code.split(' of ').pop()

        script = """
#{bNS ix + 1}// for
#{bNS ix + 1}var #{_preNS}obj = #{_obj} || {};
#{bNS ix + 1}for(var #{_key} in #{_preNS}obj){
#{bNS ix + 1}    var children_for_#{fid} = [], attr = {};
#{bNS ix + 1}    #{parserAttr dom.attribs, ix}
"""

    # 子元素
    if dom.children and dom.children.length > 0
        script += parseTree dom.children, ix + 1, "children_for_#{fid}"
        

    script += """
#{bNS ix + 1}   tree.push( el('#{dom.name}', attr, children_for_#{fid}) );
#{bNS ix + 1}}
#{bNS ix + 1}// endFor \n"""


### 
# 解释属性
###
parserAttr = (attribs, ix)->
    script = ''
    
    attr = Object.keys attribs
    attr.forEach (key)->
        val = attribs[key]
        if key.indexOf('mc-') == 0
            key = key.replace 'mc-', ''
            script += "#{bNS ix + 1}attr['#{key}'] = #{val};"
        else
            script += "#{bNS ix + 1}attr['#{key}'] = '#{val}';"
            
    script + '\n'

    
###
# 解释dom结构
###
parseDom = (dom, ix, id)->
    script = "\n#{bNS ix + 1}var children_#{id} = [], attr = {};\n"
    
    # 解释 for
    if dom.attribs and dom.attribs['mc-for']
        script += parserAttrFor dom.attribs['mc-for'], dom, ix, "children_#{id}"
        return script

    # 解释属性
    if dom.attribs
        script += parserAttr dom.attribs, ix

    # 子元素
    if dom.children and dom.children.length > 0 and ix < 3
        script += parseTree dom.children, ix, "children_#{id}"

    # tag 处理 ? 自定义组件处理
    if dom.name
        script += "\n#{bNS ix + 1}tree.push( el('#{dom.name}', attr, children_#{id}) );"
    # 文本处理
    else if dom.type == 'text'
        # 解释 { xx }
        text = dom.data
        if text.indexOf('{') != -1 and text.indexOf('}') != -1
            code = text.replace /\{/g, '" + ('
                       .replace /\}/g, ') + "'
            code = '"' + code + '"'
            script += "\n#{bNS ix + 1}tree.push( #{code} );"
        else
            script += "\n#{bNS ix + 1}tree.push( '#{dom.data}' );"

    script


# 解释 dom tree
parseTree = (tree, ix=0, children='children_0')->
    script = "\n#{bNS ix + 1}(function(scope, tree){ // startTree #{ix}\n"

    tree.forEach (dom, id)->
        # 过滤空行
        if dom.type != 'text' or (dom.type == 'text' and dom.data.trim().length > 0)
            script += "#{parseDom dom, ix + 1, id}"

    script += "\n#{bNS ix + 1}})(scope, #{children}); // endTree #{ix}\n"
    script


# 将 dom 转成 js
domToScript = (tree)->
    script = """
    var mcore = require('mcore');
    var el = mcore.virtualDom.el;
 
    module.exports = function(scope){
        var children_0 = [];
    """

    script += "\n    #{parseTree tree}"

    script += """
    
        return el('div', {'class': 'mc-vd'}, children_0);
    };
    """
    console.log script
    script

    
module.exports = (html)->
    domTree = htmlparser.parseDOM html
    domToScript domTree

