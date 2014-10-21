var should = require('chai').should();
var Node = require('../js/node').Node

describe("Node", function() {
  it("should have a value", function(){
    var node = new Node("hi");
    node.value.should.equal("hi");
  });
});
