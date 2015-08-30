###*
# 编译模板
# @date 2015-08-25 09:37:14
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
# @version $Id$
###

reactTools = require 'react-tools'

defOptions =
    target: 'es5'



exports.transform = (html, options = defOptions)->
    arr = html.split '\n'

    code = """
        #{arr.join(',\n')}
    """

    js = 'return ' + reactTools.transform code, options

    console.log js

    js

