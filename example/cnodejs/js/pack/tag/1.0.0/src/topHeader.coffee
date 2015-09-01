###*
 * 通用顶部
 * <top-header title="self:title" back="self.back" />
 * @module tag/topHead
 * @author vfasky <vfasky@gmail.com>
###
define 'tag/topHeader', ['mcore'], (mcore)->
    
    "use strict"

    mcore.Template.regTag 'top-header',
        attr: ['title', 'back']
        template: ->
            '''
            <div class="bar bar-header bar-royal">
                <button rv-on-click="back" class="button button-icon icon ion-ios-arrow-thin-left"></button>

                <h1 class="title" rv-text="title | substr 0 13"></h1>
            </div>
            '''
        init: (el, data)->
            data
