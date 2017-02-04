
// Function that takes a root node and prints the tree in 'depth level' order
// with a \n between each level.
function printLevel(node) {
  // The current level
  var queue = [];
  var current = null;
  var delim = '\n';

  queue.push(node);
  queue.push(delim);

  while(queue.length > 0) {
    current = queue.shift();
    if (current !== delim) {
      console.log(current.value + ' ');
      if (current.left != null) {
        queue.push(current.left);
      }
      if (current.right != null) {
        queue.push(current.right);
      }
    } else {
      console.log(delim);
      if (queue.length > 0) {
        queue.push(delim);
      }
    }

  };
}

module.exports = {
  printLevel: printLevel
};
