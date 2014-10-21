(function() {
  var LinkedList;

  exports.LinkedList = LinkedList = (function() {
    function LinkedList() {}

    LinkedList.prototype.size = 0;

    LinkedList.prototype.head = null;

    LinkedList.prototype.insert = function(node) {
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
      }
      for (i = _i = 0, _ref = index - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        curr = curr.next;
      }
      return curr;
    };

    LinkedList.prototype.remove = function(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.size--;
      return node.value;
    };

    LinkedList.prototype.search = function(value) {
      var curr, node;
      curr = this.head;
      node = null;
      while (curr !== null) {
        if (curr.value === value) {
          return curr;
        }
        curr = curr.next;
      }
      return null;
    };

    LinkedList.prototype.includes = function(value) {
      return this.search(value) !== null;
    };

    LinkedList.prototype.toString = function() {
      var curr, msg;
      if (this.size === 0) {
        return '';
      }
      curr = this.head;
      msg = '';
      while (curr.next !== null) {
        msg += curr.toString() + ' ';
        curr = curr.next;
      }
      return msg += curr.toString();
    };

    return LinkedList;

  })();

}).call(this);
