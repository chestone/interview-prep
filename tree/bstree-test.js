var BSTree = require('./bstree').BSTree;
var Node = require('./bstree').Node;
var printLevel = require('./tree-utils').printLevel;

var tree = new BSTree(new Node(10));
tree.add(11);
tree.add(1);
tree.add(2);
// tree.remove(11);
console.log('Size: ', tree.size());
console.log(tree.toString());
console.log('Does the tree contain \'11\'?', tree.contains(11));
console.log('Does the tree contain \'13\'?', tree.contains(13));

printLevel(tree._root);
