###*
#
# @date 2016-01-27 15:55:49
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

fs = require 'fs'
path = require 'path'
getHash = require './getHash'
glob = require 'glob'


module.exports = (options = {})->
    tplPath = options.tplPath or= ''
    out = options.out or = ''
    varMap = options.varMap or= {}

    ->
        # 读模板文件
        tplFiles = glob.sync tplPath
        tplMap = {}
        tplFiles.forEach (tplFile)->
            tplMap[tplFile] = fs.readFileSync tplFile, 'utf8'

        @plugin 'done', (stats)->
            packMap = stats.toJson().assetsByChunkName
            packs = Object.keys packMap

            # 注册 module:name
            packs.forEach (pack)->
                if Array.isArray(packMap[pack])
                    varMap['module:' + pack] = -> packMap[pack][0]

                    packMap[pack].forEach (filename)->
                        varMap["module:#{pack}#{path.extname filename}"] = -> filename
                else
                    varMap['module:' + pack] = -> packMap[pack]

            # 替换模板
            for tplFile, tpl of tplMap
                for reName, reValue of varMap
                    reg = new RegExp '#{' + reName + '}', 'g'
                    tpl = tpl.replace reg, reValue getHash

                outFile = path.join out, path.basename tplFile
                fs.writeFileSync outFile, tpl, 'utf8'
