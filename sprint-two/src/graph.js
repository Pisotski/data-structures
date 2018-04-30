

// Instantiate a new graph
var Graph = function() {
  this.nodes = []; //[2, 3, 4, 5, 6, 7]
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node); 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  return this.nodes.indexOf(node) > -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  var ind = this.nodes.indexOf(node);
  this.nodes.splice(ind, 1);
  var that = this;
  if (this.edges[node]) {
    Object.keys(this.edges[node]).forEach(function(el) {
      that.removeEdge(node, el);
    });
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { 

  return !!this.edges[fromNode] && !!this.edges[fromNode][toNode]; //<== convert truthy to true;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { //3, 6

  //this.edges[3] = {6: true};
  //this.edged[6] = {3: true};
  //edges = {3: {6: true}, 6:{3:true}};
  if (this.edges[fromNode]) {
    this.edges[fromNode][toNode] = true;
  } else {
    var obj = {};
    obj[toNode] = true;
    this.edges[fromNode] = obj;
  }
  if (this.edges[toNode]) {
    this.edges[toNode][fromNode] = true;
  } else {
    var obj = {};
    obj[fromNode] = true;
    this.edges[toNode] = obj;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */