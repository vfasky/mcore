###*
# 扩展自 simple-virtual-dom
# @date 2016-01-21 19:39:03
###
'use strict'

REPLACE = 0
REORDER = 1
PROPS = 2
TEXT = 3

{setElementAttr, removeElementAttr, toArray, each} = require './util'

patch = (node, patches) ->
    walker = index: 0
    dfsWalk node, walker, patches
    return

dfsWalk = (node, walker, patches) ->
    currentPatches = patches[walker.index]
    len = if node.childNodes then node.childNodes.length else 0
    i = 0
    while i < len
        child = node.childNodes[i]
        walker.index++
        dfsWalk child, walker, patches
        i++
    if currentPatches
        applyPatches node, currentPatches
    return

applyPatches = (node, currentPatches) ->
    for currentPatch in currentPatches
        switch currentPatch.type
            when REPLACE
              node.parentNode.replaceChild currentPatch.node.render(), node
            when REORDER
                reorderChildren node, currentPatch.moves
            when PROPS
                setProps node, currentPatch.props
            when TEXT
                if node.textContent
                    node.textContent = currentPatch.content
                else
                    # fuck ie
                    node.nodeValue = currentPatch.content
            else
                throw new Error('Unknown patch type ' + currentPatch.type)
    return


setProps = (node, props) ->
    for key of props
        if props[key] == undefined
            removeElementAttr node, key if key != '_mc'
        else
            value = props[key]
            setElementAttr node, key, value


reorderChildren = (node, moves) ->
    staticNodeList = toArray node.childNodes
    maps = {}
    each staticNodeList, (node) ->
        if node.nodeType == 1
            key = node.getAttribute('key')
        if key
            maps[key] = node
        return

    each moves, (move) ->
        index = move.index
        if move.type == 0
            # remove item
            if staticNodeList[index] == node.childNodes[index]
                # maybe have been removed for inserting
                el = node.childNodes[index]
                el._element.destroy() if el._element and el._element.destroy
                node.removeChild el
            staticNodeList.splice index, 1
        else if move.type == 1
            # insert item
            insertNode = if maps[move.item.key] then maps[move.item.key] else if typeof move.item == 'object' then move.item.render() else document.createTextNode(move.item)
            staticNodeList.splice index, 0, insertNode
            node.insertBefore insertNode, node.childNodes[index] or null
        return
    return

patch.REPLACE = REPLACE
patch.REORDER = REORDER
patch.PROPS = PROPS
patch.TEXT = TEXT
module.exports = patch