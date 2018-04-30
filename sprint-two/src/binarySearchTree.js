var BinarySearchTree = function(value) {
  // this.left =
  // this.right =

//should have methods named "insert", "contains", and "depthFirstLog"
  var tree = {};
  tree.value = value;

  tree.insert = function(value) {
    if (tree.value > value) {
      if (!tree.left) {
        tree.left = BinarySearchTree(value);
      } else {
        tree.left.insert(value);
      }
    } else {
      if (!tree.right) {
        tree.right = BinarySearchTree(value);
      } else {
        tree.right.insert(value);
      }
    }
  };

  tree.contains = function(value) {
    if (tree.value === value) {
      return true;
    } else {
      if (tree.value > value) {
        if (tree.left) {
          return tree.left.contains(value);
        } else {
          return false;
        }
      } else {
        if (tree.right) {
          return tree.right.contains(value);
        } else {
          return false;
        }
      }
    }
  };

  tree.depthFirstLog = function(cb) {

    cb(value);
    if (tree.left) {
      tree.left.depthFirstLog(cb);
    }
    if (tree.right) {
      tree.right.depthFirstLog(cb);
    }
  };
  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
