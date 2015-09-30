###*
 *
 * @module cnode/topic
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/topic',
['jquery', 'cnode/view', 'mcore-attr/scroller', 'cnode/formatters'], ($, View)->
    
    "use strict"

    View.subclass
        constructor: View::constructor
        run: (id)->
            @render 'cnode/topic.html',
                replieEnd: 5
                topic: @api.topic(id)
               
        watch: ->
            # 评伦分页
            @.$el.on 'scrollend', =>
                topic = @get 'topic'
                replieEnd = @get 'replieEnd'
                total = replieEnd + 5
                topicCount = Number topic.data.reply_count
                total = topicCount if total > topicCount

                return if total == replieEnd
                @set 'replieEnd', total
                
                    
