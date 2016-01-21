###*
# 
# @date 2016-01-21 19:36:17
###
'use strict'

patch = require './patch'

listDiff = require 'list-diff2'

{isString, each} = require './util'

diff = (oldTree, newTree) ->
    index = 0
    patches = {}
    dfsWalk oldTree, newTree, index, patches
    patches

dfsWalk = (oldNode, newNode, index, patches) ->
    currentPatch = []
    # node is removed
    if newNode == null
        # will be removed when perform reordering, so has no needs to do anthings in here
        # textNode content replacing
    else if isString(oldNode) and isString(newNode)
        if newNode != oldNode
            currentPatch.push
                type: patch.TEXT
                content: newNode
    # nodes are the same, diff its props and children
    else if oldNode.tagName == newNode.tagName and oldNode.key == newNode.key
        # diff props
        propsPatches = diffProps(oldNode, newNode)
        if propsPatches
            currentPatch.push
                type: patch.PROPS
                props: propsPatches
            # diff children
        diffChildren oldNode.children, newNode.children, index, patches, currentPatch
        # nodes are not the same, replace the old node with new node
    else
        currentPatch.push
            type: patch.REPLACE
            node: newNode
    if currentPatch.length
        patches[index] = currentPatch
    return


diffChildren = (oldChildren, newChildren, index, patches, currentPatch) ->
    diffs = listDiff(oldChildren, newChildren, 'key')
    newChildren = diffs.children
    if diffs.moves.length
        reorderPatch =
            type: patch.REORDER
            moves: diffs.moves
        currentPatch.push reorderPatch
    leftNode = null
    currentNodeIndex = index

    each oldChildren, (child, i) ->
        newChild = newChildren[i]
        currentNodeIndex = if leftNode and leftNode.count then currentNodeIndex + leftNode.count + 1 else currentNodeIndex + 1
        dfsWalk child, newChild, currentNodeIndex, patches
        leftNode = child
        return

    return


diffProps = (oldNode, newNode) ->
    count = 0
    oldProps = oldNode.props
    newProps = newNode.props
    propsPatches = {}

    for key, value of oldProps
        if newProps[key] != value
            count++
            propsPatches[key] = newProps[key]
    
    # find out new property
    for key, value in newProps
        if !oldProps.hasOwnProperty(key)
            count++
            propsPatches[key] = newProps[key]

    return null if count == 0

    propsPatches


module.exports = diff
