

var HashTable = function() {            
  this._limit = 8;                      
  this._storage = LimitedArray(this._limit);
};                                          

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); //
  if (!this._storage[index]) {
    this._storage[index] = [];
  }

  for (var tuple of this._storage[index]) {
    if (tuple[0] === k) {
      tuple[1] = v;
      return; //<== to stop function;
    }
  }
  this._storage[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var tuple of bucket) {
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var tuple of bucket) {
    if (tuple[0] === k) {
      var i = bucket.indexOf(tuple);
      bucket.splice(i, 1);
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


