should = require("chai").should()
Node = require("./node").Node

describe "Node", ->

  it "should have a value", ->
    node = new Node("hi")
    node.value.should.equal "hi"
