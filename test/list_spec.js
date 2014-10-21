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

  it("should remove a node at an index", function(){
    var list = new LinkedList();

    list.add(new Node('hi'));
    list.add(new Node('hello'));
    list.add(new Node('greetings'));
    node = list.remove(1);

    node.value.should.equal('hello')
    list.size.should.equal(2);
    list.get(0).value.should.equal('greetings');
    list.get(1).value.should.equal('hi');
  });

  it("should return an index of a value", function (){
    var list = new LinkedList();
    for(var i = 0; i < 26; i++) {
      list.add(new Node(i));
    }
    list.getIndex(0).should.equal(25);
  });

  it("should include a value", function (){
    var list = new LinkedList();
    for(var i = 0; i < 26; i++) {
      list.add(new Node(i));
    }
    list.includes(24).should.equal(true);
  });
});
