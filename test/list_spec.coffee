should = require("chai").should()
Node = require("./node").Node
LinkedList = require("./linkedList").LinkedList

describe "LinkedList", ->
  it "should insert a node", ->
    list = new LinkedList
    list.insert new Node("hi")
    list.head.value.should.equal "hi"
    list.insert new Node("hello")
    list.size.should.equal 2

  it "should know its size", ->
    list = new LinkedList
    list.insert new Node("hi")
    list.head.value.should.equal "hi"
    list.insert new Node("hello")
    list.size.should.equal 2

  it "should get an el at an index", ->
    list = new LinkedList
    list.insert new Node("hi")
    list.insert new Node("hello")
    list.insert new Node("greetings")
    list.get(0).value.should.equal "greetings"
    list.get(1).value.should.equal "hello"
    list.get(2).value.should.equal "hi"

  it "should remove a node at an index", ->
    list = new LinkedList
    node = new Node("hello")
    list.insert new Node("hi")
    list.insert node
    list.insert new Node("greetings")
    val = list.remove(node)
    val.should.equal "hello"
    list.size.should.equal 2
    list.get(0).value.should.equal "greetings"
    list.get(1).value.should.equal "hi"

  it "should find a value", ->
    list = new LinkedList
    i = 0

    while i < 26
      list.insert new Node(i)
      i++
    list.search(0).should.be.instanceof(Node);

  it "should not find a value", ->
    list = new LinkedList
    i = 0

    while i < 26
      list.insert new Node(i)
      i++
    should.not.exist list.search(9384)

  it "should include a value", ->
    list = new LinkedList
    i = 0

    while i < 26
      list.insert new Node(i)
      i++
    list.includes(24).should.equal true

  it "should not include a value", ->
    list = new LinkedList
    i = 0

    while i < 26
      list.insert new Node(i)
      i++
    list.includes(39483).should.equal false

  it "should have a to string", ->
    list = new LinkedList
    i = 0

    while i < 3
      list.insert new Node(i)
      i++
    list.toString().should.equal "2 1 0"
