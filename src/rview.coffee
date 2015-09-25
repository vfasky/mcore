###*
 * React View
 * @module mcore/rview
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore/rview', ['mcore/rtemplate'], (Template)->
    
    "use strict"

    _id = 0

    (proto = {}, tagName)->
        if !tagName
            tagName = 'McoreView_' + _id
            _id++

        -> new Template tagName, proto



