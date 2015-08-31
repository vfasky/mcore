###*
 *
 * @module tpl/test
 * @author vfasky <vfasky@gmail.com>
###
define 'tpl/test', [], ()->
    
    "use strict"

    exports = {}

    exports['t1'] = '''
        <div>hello</div>
    '''

    exports['t2'] = '''
        <div class="t1" rv-each-v="self:testData">
            {v}
        </div>
    '''

    exports['t3'] = '''
        <div rv-test>...</div>
    '''

    exports['t4'] = '''
        <div rv-test="self:t">...</div>
    '''

    exports['t5'] = '''
        <test list="self:data" />
    '''




    exports
