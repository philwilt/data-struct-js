(function() {
  this.Node = (function() {
    Node.prototype.next = null;

    Node.prototype.prev = null;

    function Node(value) {
      this.value = value;
    }

    return Node;

  })();

}).call(this);
