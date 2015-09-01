###*
 * 过滤函数
 * @module cnode/formatters
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/formatters',
['mcore', 'moment', 'markdown-it'], (mcore, moment, Markdownit)->
    
    "use strict"

    Template = mcore.Template
    
    markdown = new Markdownit
        html: false
        xhtmlOut: false
        breaks: true
        langPrefix: 'language-'
        linkify: true
        typographer: false


    Template.formatters 'dateFormat', (value, format = 'YYYY-MM-DD')->
        moment(value).format format


    Template.formatters 'fromNow', (value)->
        moment(value).fromNow()

        
    Template.formatters 'markdown', (value)->
        markdown.render value

    


