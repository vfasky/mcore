###*
# 
# @date 2015-08-25 10:02:41
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###

assert = require 'assert'
buildTpl = require '../../tool/buildTpl'

describe 'html to js', ->

    it 'html -> js', ->
        buildTpl.transform '''
<div>
    <p>{this.name}</p>
    <a href="this.url">
        test
    </a>
    <CommentBox name="John"/>
</div>
        '''

