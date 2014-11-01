(function() {
  var BinarySearchTree, should;

  should = require("chai").should();

  BinarySearchTree = require("./binarySearchTree").BinarySearchTree;

  describe("BinarySearchTree", function() {
    var tree;
    tree = null;
    before(function() {
      return tree = new BinarySearchTree;
    });
    it("should have size 0 when empty", function() {
      return tree.size.should.equal(0);
    });
    it("should insert a value", function() {
      tree.insert.should.be.a("function");
      tree.insert(5);
      return tree.size.should.equal(1);
    });
    it("should record its size", function() {
      var i, _i;
      for (i = _i = 1; _i <= 10; i = ++_i) {
        tree.insert(i);
      }
      return tree.size.should.equal(10);
    });
    it("should not add duplicates", function() {
      tree.insert(5);
      return tree.size.should.equal(10);
    });
    it("should report if it contains a value", function() {
      tree.contains(8).should.be["true"];
      return tree.contains(1).should.be["true"];
    });
    it("should report if it does not contains a value", function() {
      tree.contains(1000).should.be["false"];
      return tree.contains(0).should.be["false"];
    });
    it("should report its depth", function() {
      var i, _i, _len, _ref;
      tree = new BinarySearchTree;
      tree.depth().should.equal(0);
      _ref = [5, 3, 8, 7, 6, 2, 4, 9, 1, 6];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        tree.insert(i);
      }
      return tree.depth().should.equal(4);
    });
    return it("should report its balance", function() {
      var i, _i, _len, _ref;
      tree = new BinarySearchTree;
      tree.insert(5);
      tree.balance().should.equal(0);
      tree.insert(6);
      tree.balance().should.equal(-1);
      tree.insert(7);
      tree.balance().should.equal(-2);
      _ref = [4, 3, 2, 1, 0];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        tree.insert(i);
      }
      return tree.balance().should.equal(3);
    });
  });

}).call(this);
