(function() {
  var Node;

  exports.Node = Node = (function() {
    Node.prototype.next = null;

    Node.prototype.prev = null;

    function Node(value) {
      this.value = value;
    }

    Node.prototype.toString = function() {
      return this.value.toString();
    };

    return Node;

  })();

}).call(this);
