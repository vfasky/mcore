###*
 *
 * @module cnode/topic
 * @author vfasky <vfasky@gmail.com>
###
define 'cnode/topic',
['jquery', 'cnode/view', 'mcore-attr/scroller', 'cnode/formatters', 'attr/userLink'], ($, View)->
    
    "use strict"

    View.subclass
        constructor: View::constructor
        run: (id)->
            @render 'cnode/topic.html',
                replieEnd: 5
                topic: @api.topic(id).then (res)->
                    res.data.replies.forEach (v, k)->
                        v.ix = k
                    res
               
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
                
                    
