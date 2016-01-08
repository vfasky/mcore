var el = virtualDom.el;
var diff = virtualDom.diff;
var patch = virtualDom.patch;

var tpl = function(scope){
    var children_0 = [];

   (function(scope, tree){ //[start tree 0]

       var children_0 = [], attr = {};
       attr['data-id'] = scope.id;

       (function(scope, tree){ //[start tree 1]

           var children_1 = [], attr = {};


           (function(scope, tree){ //[start tree 2]

               var children_1 = [], attr = {};
               // for
               var __mc__arr = scope.list || [];
               for(var __mc__$ix_=0, len=__mc__arr.length; __mc__$ix_ < len; __mc__$ix_++){
                   var children_for_0 = [], attr = {};
                   var v = __mc__arr[__mc__$ix_];


                   (function(scope, tree){ //[start tree 4]

                       var children_0 = [], attr = {};

                       tree.push( "" + (v.name) + "" );
                   })(scope, children_for_0); //[end tree 4]
                   tree.push( el('li', attr, children_for_0) );
               }// end for

           })(scope, children_1); //[end tree 2]

           tree.push( el('ul', attr, children_1) );
           var children_3 = [], attr = {};


           (function(scope, tree){ //[start tree 2]

               var children_1 = [], attr = {};
               // for
               var __mc__arr = scope.list || [];
               for(var k=0, len=__mc__arr.length; k < len; k++){
                   var children_for_1 = [], attr = {};
                   var v = __mc__arr[k];


                   (function(scope, tree){ //[start tree 4]

                       var children_0 = [], attr = {};

                       tree.push( "" + (v.name) + " " + (k) + "" );
                   })(scope, children_for_1); //[end tree 4]
                   tree.push( el('li', attr, children_for_1) );
               }// end for

           })(scope, children_3); //[end tree 2]

           tree.push( el('ul', attr, children_3) );
       })(scope, children_0); //[end tree 1]

       tree.push( el('div', attr, children_0) );
   })(scope, children_0); //[end tree 0]

    return el('div', {'class': 'mc-vd'}, children_0);
};

var tree = tpl({
    id: '1',
    list: [
        {name: 'test1'},
        {name: 'test2'},
    ]
});

var root = tree.render();


var newTree = tpl({
    id: '1',
    list: [
        {name: 'test1'},
        {name: 'test2'},
        {name: 'test3'},
        {name: 'test4'},
        {name: 'test5'},
    ]
});

var patches = diff(tree, newTree);

setTimeout(function(){
    patch(root, patches);
}, 3000);

document.body.appendChild(root);


