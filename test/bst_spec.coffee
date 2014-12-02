should = require("chai").should()
BinarySearchTree = require("./binarySearchTree").BinarySearchTree

describe "BinarySearchTree", ->
  tree = null

  before ->
    tree = new BinarySearchTree

  it "should have size 0 when empty", ->
    tree.size.should.equal 0

  it "should insert a value", ->
    tree.insert.should.be.a("function")
    tree.insert(5)
    tree.size.should.equal 1

  it "should record its size", ->
    tree.insert(i) for i in [1..10]
    tree.size.should.equal 10

  it "should not add duplicates", ->
    tree.insert(5)
    tree.size.should.equal 10

  it "should report if it contains a value", ->
    tree.contains(8).should.be.true
    tree.contains(1).should.be.true

  it "should report if it does not contains a value", ->
    tree.contains(1000).should.be.false
    tree.contains(0).should.be.false

  it "should delete a value", ->
    tree = new BinarySearchTree
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1]
    size = tree.size
    tree.delete(2).should.be.true
    tree.contains(2).should.be.false
    tree.size.should.equal (size - 1)

  it "should return false if delete fails", ->
    tree = new BinarySearchTree
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1]
    size = tree.size
    tree.delete(100).should.be.false
    tree.size.should.equal (size)

  it "should report its depth", ->
    tree = new BinarySearchTree
    tree.depth().should.equal 0
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1]
    tree.depth().should.equal 4

  it "should report its balance", ->
    tree = new BinarySearchTree
    tree.insert(5)
    tree.balance().should.equal 0
    tree.insert(6)
    tree.balance().should.equal -1
    tree.insert(7)
    tree.balance().should.equal -2
    tree.insert(i) for i in [4,3,2,1,0]
    tree.balance().should.equal 3

  it "should have an in-order traversal", ->
    tree = new BinarySearchTree
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1,6]
    tree.inOrderTraversal().should.deep.equal [1, 2, 3, 4, 5, 6, 7, 8, 9]

  it "should have a pre-order traversal", ->
    tree = new BinarySearchTree
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1,6]
    tree.preOrderTraversal().should.deep.equal [5,3,2,1,4,8,7,6,9]

  it "should have a post-order traversal", ->
    tree = new BinarySearchTree
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1,6]
    tree.postOrderTraversal().should.deep.equal [1,2,4,3,6,7,9,8,5]

  it "should have a breadth first traversal", ->
    tree = new BinarySearchTree
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1]
    tree.breadthFirstTraversal().should.deep.equal [5,3,8,2,4,7,9,1,6]

  it "should find a lowest common ancestor", ->
    tree = new BinarySearchTree
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1]
    tree.lowestCommonAncestor(6,9).should.equal 8
    tree.lowestCommonAncestor(3,1).should.equal 3
    tree.lowestCommonAncestor(8,9).should.equal 8

  it "should return false if given an ancestor not in tree", ->
    tree = new BinarySearchTree
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1]
    tree.lowestCommonAncestor(6,10).should.be.false
