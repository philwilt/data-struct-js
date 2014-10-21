var should = require('chai').should();
var Node = require('../js/node').Node
var LinkedList = require('../js/linkedList').LinkedList

describe("LinkedList", function() {
  it("should add a node", function(){
    var list = new LinkedList();
    list.add(new Node('hi'));
    list.head.value.should.equal("hi");
    list.add(new Node('hello'));
    list.size.should.equal(2);
  });

  it("should know its size", function(){
    var list = new LinkedList();

    list.add(new Node('hi'));
    list.head.value.should.equal("hi");

    list.add(new Node('hello'));
    list.size.should.equal(2);
  });

  it("should get an el at an index", function(){
    var list = new LinkedList();

    list.add(new Node('hi'));
    list.add(new Node('hello'));
    list.add(new Node('greetings'));

    list.get(0).value.should.equal('greetings');
    list.get(1).value.should.equal('hello');
    list.get(2).value.should.equal('hi');
  });
});
