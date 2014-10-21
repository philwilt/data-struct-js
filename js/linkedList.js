(function() {
  this.LinkedList = (function() {
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
      node.prev = null;
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

    return LinkedList;

  })();

}).call(this);
