###*
# 
# @date 2016-01-07 22:03:26
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

el = virtualDom.el
diff = virtualDom.diff
patch = virtualDom.patch

tree = el 'div', {'id': 'container', 'class': 'test'}, [
    el('h1', {style: 'color: blue'}, ['simple virtal dom']),
    el('p', ['Hello, virtual-dom']),
    el('ul', [el('li')])
]

root = tree.render()

newTree = el('div', {'id': 'container'}, [
    el('h1', {style: 'color: red'}, ['simple virtal dom']),
    el('p', ['Hello, virtual-dom']),
    el('ul', [el('li'), el('li')])
])

patches = diff(tree, newTree)

console.log root, patches

document.body.appendChild root

setTimeout ->
    patch root, patches
, 1000
