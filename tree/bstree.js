function Node(val, left, right) {
  this.value = val;
  this.left = left || null;
  this.right = right || null;
}

function BSTree(root) {
  this._root = root;
}

BSTree.prototype.constructor = BSTree;
//TODO: This doesn't rebalance, we should do something about that.
BSTree.prototype.add = function(value) {
  var toAdd = new Node(value);
  var current = this._root;

  if (this._root === null) {
    this._root = toAdd;
  } else {
    while (true) {
      if (current.value === value) {
        throw new Error('Cannot allow duplicates in BSTree');
      }
      if (value > current.value) {
        if (current.right != null) {
          current = current.right;
        } else {
          current.right = new Node(value);
          break;
        }
      }

      if (value < current.value) {
        if (current.left != null) {
          current = current.left;
        } else {
          current.left = new Node(value);
          break;
        }
      }
    }
  }
};
BSTree.prototype.remove = function(value) {
  var current = this._root;
  if (this._root.value === value) {
    this._root = null ;
  }

  while(current) {
    if (current.right != null && current.value > value) {
      current = current.right;
    }
  }
};
BSTree.prototype.contains = function(value) {
  var found = false;
  this._traverse(function(tree, node) {
    if (node.value === value) {
      found = true;
    }
  });
  return found;
};
BSTree.prototype.size = function() {
  var size = 0;
  this._traverse(function(tree, node) {
    size++;
  });
  return size;
};
BSTree.prototype.toArray = function() {
  var arrayTree = [];
  this._traverse(function(tree, node) {
    arrayTree.push(node);
  });
  return arrayTree;
};
BSTree.prototype.toString = function() {
  var stringTree = '';
  this._traverse(function(tree, node) {
    stringTree += node.value + ' ';
  });
  return stringTree;
};

BSTree.prototype._traverse = function(cb) {

  function helper(node) {
    if (node) {
      if (node.left !== null) {
        helper(node.left);
      }

      cb(this, node);

      if (node.right !== null) {
        helper(node.right);
      }
    }
  }

  helper(this._root);
};

module.exports = {
  BSTree: BSTree,
  Node: Node
};
