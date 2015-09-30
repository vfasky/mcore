###*
 * @user 连接的处理
 * @module attr/userLink
 * @author vfasky <vfasky@gmail.com>
###
define 'attr/userLink', ['jquery', 'mcore', 'cnode/formatters'],
($, mcore, format)->
    
    "use strict"

    mcore.Template.regAttr 'user-link', mcore.Template.Attr.subclass
        constructor: mcore.Template.Attr::constructor
        init: ->
            @ix = @.$el.attr 'data-ix'
            @.$el.on 'click', 'a', ->
                href = String $(@).attr 'href'

                if href.indexOf('/user/') == 0
                    window.location.href = '#' + href
                    return false

        update: (replies)->
            @replies = JSON.parse JSON.stringify replies

            self = @

            @.$el.find('a').each ->
                $el = $ @
                txt = $el.text()
                href = $el.attr 'href'

                return if txt.indexOf('@') != 0 or href.indexOf('/user/') != 0

                userName = txt.replace '@', ''
                replies = self.replies.slice 0, self.ix
                replies.reverse()
                
                quote = ''
                
                $.each replies, (k, v)->
                    if v.author.loginname == userName
                        quote = v
                        return false

                if quote
                    $quote = $ """
                        <blockquote>
                            #{format.markdown quote.content}
                        </blockquote>
                    """
                    $quote.insertBefore $el


