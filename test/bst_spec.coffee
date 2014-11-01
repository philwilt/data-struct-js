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

  it "should report its depth", ->
    tree = new BinarySearchTree
    tree.depth().should.equal 0
    tree.insert(i) for i in [5,3,8,7,6,2,4,9,1,6]
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
