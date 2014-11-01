(function() {
  var Node;

  Node = (function() {
    Node.next = null;

    Node.prev = null;

    function Node(value) {
      this.value = value;
    }

    Node.prototype.toString = function() {
      return this.value.toString();
    };

    return Node;

  })();

  exports.Node = Node;

}).call(this);
