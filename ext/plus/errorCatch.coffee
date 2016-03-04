###*
 *
 * 错误收集
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

module.exports = (send = ->)->
    window.onerror = (errMsg, scriptURI, lineNumber, columnNumber, errObj)->
        stack = errObj.stack

        send
            errMsg: errMsg
            scriptURI: scriptURI
            lineNumber: lineNumber
            columnNumber: columnNumber
            stack: stack or= errObj
