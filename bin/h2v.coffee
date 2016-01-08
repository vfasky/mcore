###*
# 转换 html 到 virtual Dom 
# @date 2016-01-08 20:12:21
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

htmlparser = require 'htmlparser2'

buildNamespace = (len)-> ('' for i in [0 ... len]).join ' '

forId = 0

### 
# 解释 for
###
parserAttrFor = (code, dom, ix, children)->
    fid = forId++

    script = ''
    # Array for
    if code.indexOf(' in ') != -1
        _ix = '__mc__$ix_'
        _arr = code.split(' in ').pop()
        _vName = code.split(' ')[0].replace ',', ''
        # for v, k in x
        if code.indexOf(',') != -1
            _ix = code.split(',').pop().split(' in')[0].trim()

        delete dom.attribs['mc-for']
        script = """
#{buildNamespace (ix + 1) * 4}// for
#{buildNamespace (ix + 1) * 4}var __mc__arr = #{_arr} || [];
#{buildNamespace (ix + 1) * 4}for(var #{_ix}=0, len=__mc__arr.length; #{_ix} < len; #{_ix}++){
#{buildNamespace (ix + 1) * 4}    var children_for_#{fid} = [], attr = {};
#{buildNamespace (ix + 1) * 4}    var #{_vName} = __mc__arr[#{_ix}];
#{buildNamespace (ix + 1) * 4}    #{parserAttr dom.attribs, ix}
"""

    # Object for
    #else if code.indexOf(' of ') != -1
    
    # 子元素
    if dom.children and dom.children.length > 0
        script += parseTree dom.children, ix + 1, "children_for_#{fid}"


    script += """
#{buildNamespace (ix + 2) * 4}tree.push( el('#{dom.name}', attr, children_for_#{fid}) );
#{buildNamespace (ix + 1) * 4}}// end for \n"""


    
### 
# 解释 for
###
parserAttr = (attribs, ix)->
    script = ''
    
    attr = Object.keys attribs
    attr.forEach (key)->
        val = attribs[key]
        if key.indexOf('mc-') == 0
            key = key.replace 'mc-', ''
            script += "#{buildNamespace (ix + 1) * 4 }attr['#{key}'] = #{val};"
        else
            script += "#{buildNamespace (ix + 1) * 4 }attr['#{key}'] = '#{val}';"
            
    script + '\n'

    
###
# 解释dom结构，生成
# (function(children){
#     children.push(el('h1', {style: 'color: blue'}, ['simple virtal dom']));
# }(children);
###
parseDom = (dom, ix, id)->
    script = "\n#{buildNamespace (ix + 1) * 4 }var children_#{id} = [], attr = {};\n"
    
    # 解释for
    if dom.attribs and dom.attribs['mc-for']
        script += parserAttrFor dom.attribs['mc-for'], dom, ix, "children_#{id}"
        return script

    # 解释属性
    if dom.attribs
        script += parserAttr dom.attribs, ix

    # 子元素
    if dom.children and dom.children.length > 0 and ix < 3
        script += parseTree dom.children, ix, "children_#{id}"

    if dom.name
        script += "\n#{buildNamespace (ix + 1) * 4 }tree.push( el('#{dom.name}', attr, children_#{id}) );"
    else if dom.type == 'text'
        text = dom.data.trim()
        if text.indexOf('{') == 0 and text[text.length - 1] == '}'
            code = text.replace /\{/g, '" + ('
                       .replace /\}/g, ') + "'
            code = '"' + code + '"'
            script += "\n#{buildNamespace (ix + 1) * 4 }tree.push( #{code} );"
        else
            script += "\n#{buildNamespace (ix + 1) * 4 }tree.push( '#{dom.data}' );"

    script

parseTree = (tree, ix=0, children='children_0')->
    script = "\n#{buildNamespace (ix + 1) * 4 }(function(scope, tree){ //[start tree #{ix}]\n"

    tree.forEach (dom, id)->
        if dom.type != 'text' or (dom.type == 'text' and dom.data.trim().length > 0)
            script += "#{parseDom dom, ix + 1, id}"

    script += "\n#{buildNamespace (ix + 1) * 4 }})(scope, #{children}); //[end tree #{ix}]\n"
    script


    
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

module.exports = (html)->

    domTree = htmlparser.parseDOM html
    domToScript domTree

