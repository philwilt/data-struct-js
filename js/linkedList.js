(function() {
  var LinkedList;

  exports.LinkedList = LinkedList = (function() {
    function LinkedList() {}

    LinkedList.prototype.size = 0;

    LinkedList.prototype.head = null;

    LinkedList.prototype.add = function(node) {
      var temp;
      if (this.size > 0) {
        this.head.prev = node;
      }
      temp = this.head;
      node.next = temp;
      this.head = node;
      this.size++;
      return this;
    };

    LinkedList.prototype.get = function(index) {
      var curr, i, _i, _ref;
      curr = this.head;
      if (index === 0) {
        return this.head;
      } else {
        for (i = _i = 0, _ref = index - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          curr = curr.next;
        }
      }
      return curr;
    };

    LinkedList.prototype.remove = function(index) {
      var node;
      node = this.get(index);
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.size--;
      return node;
    };

    LinkedList.prototype.getIndex = function(value) {
      var curr, i, idx, _i, _ref;
      curr = this.head;
      idx = null;
      for (i = _i = 0, _ref = this.size - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
      }
      return idx;
    };

    LinkedList.prototype.includes = function(value) {
      return this.getIndex(value) !== null;
    };

    return LinkedList;

  })();

}).call(this);
