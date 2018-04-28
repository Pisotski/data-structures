var Tree = function(value) {

  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var n = new Tree(value);
  this.children.push(n);
};

treeMethods.contains = function(target) {

  var trigger = false;
  _.each(this.children, function(el) {
    if (el.value === target) {
      trigger = true;
    } else {
      _.each(el.children, function(element) {
        if (element.value === target) {
          trigger = true;
        }
      });
    }
  });
  return trigger;
};