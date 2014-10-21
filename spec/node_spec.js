var should = chai.should();

describe("Node", function() {
  it("should have a value", function(){
    var node = new Node("hi");
    node.value.should.equal("hi");
  });
});
