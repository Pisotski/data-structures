var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //value === {};

    var node = new Node(value);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      if (this.head.next === null) {
        this.head.next = node;
      }
      this.tail.next = node;
      this.tail = this.tail.next;
      this.length++;
    }
  };

  list.removeHead = function() {
    var h = this.head;
    this.head = this.head.next;
    this.length;
    return h.value;
  };

  list.contains = function(target) {

    var node = this.head; //null.value === undefined
    // FIND TARGET IN LIST;
    var l = this.length;
    while(l > 0) {
      if (node === null) {
        return false; 
      } else if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
      l--;
    }
    return false;
  };

    
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
