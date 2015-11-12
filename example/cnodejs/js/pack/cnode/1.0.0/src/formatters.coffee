###*
 * 过滤函数
 * @module cnode/formatters
 * @author vfasky <vfasky@gmail.com>
###
"use strict"

mcore = require 'mcore'
moment = require 'moment'
Markdownit = require 'markdown-it'
hljs = require 'hljs'

hljs.initHighlightingOnLoad()

Template = mcore.Template

highlight = do ->
    alias = [
        js: 'javascript'
        jscript: 'javascript'
        html: 'xml'
        htm: 'xml'
        coffee: 'coffeescript'
        'coffee-script': 'coffeescript'
        yml: 'yaml'
        pl: 'perl'
        ru: 'ruby'
        rb: 'ruby'
        csharp: 'cs'
    ]

    (str, lang)->
        lang = String(lang).toLowerCase() or 'javascript'
        lang = alias[lang] if alias[lang]

        if hljs.getLanguage(lang)
            try
                compiled = hljs.highlight(lang, str).value
            catch _
                compiled = hljs.highlightAuto(str).value
        else
            compiled = hljs.highlightAuto(str).value
                

        lines = compiled.split('\n')
        numbers = ''
        content = ''
        firstLine = 1

        lines.pop() if !lines[lines.length - 1]

        lines.forEach (item, i)->
            numbers += '<div class="line">' + (i + firstLine) + '</div>'
            content += '<div class="line">' + item + '</div>'

        result = '<figure class="highlight' + (lang ? ' ' + lang : '') + '">'

        result += """
            <table>
                <tr>
                    <td class=\"gutter\"><pre>#{numbers}</pre></td>
                    <td class=\"code\"><pre>#{content}</pre></td>
                </tr>
            </table>
        """
        
        result += '</figure>'

        result

markdown = new Markdownit
    html: false
    xhtmlOut: false
    breaks: true
    langPrefix: 'hljs '
    linkify: true
    typographer: false
    highlight: highlight


Template.formatters 'dateFormat', (value, format = 'YYYY-MM-DD')->
    moment(value).format format


Template.formatters 'fromNow', (value)->
    moment(value).fromNow()

    
Template.formatters 'markdown', (value)->
    markdown.render value

module.exports =
    markdown: (md)->
        markdown.render md




