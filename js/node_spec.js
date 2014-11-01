(function() {
  var Node, should;

  should = require("chai").should();

  Node = require("./node").Node;

  describe("Node", function() {
    return it("should have a value", function() {
      var node;
      node = new Node("hi");
      return node.value.should.equal("hi");
    });
  });

}).call(this);
