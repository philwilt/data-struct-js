var should = require('chai').should();
var Node = require('../js/node').Node
var LinkedList = require('../js/linkedList').LinkedList

describe("LinkedList", function() {
  it("should insert a node", function(){
    var list = new LinkedList();
    list.insert(new Node('hi'));
    list.head.value.should.equal("hi");
    list.insert(new Node('hello'));
    list.size.should.equal(2);
  });

  it("should know its size", function(){
    var list = new LinkedList();

    list.insert(new Node('hi'));
    list.head.value.should.equal("hi");

    list.insert(new Node('hello'));
    list.size.should.equal(2);
  });

  it("should get an el at an index", function(){
    var list = new LinkedList();

    list.insert(new Node('hi'));
    list.insert(new Node('hello'));
    list.insert(new Node('greetings'));

    list.get(0).value.should.equal('greetings');
    list.get(1).value.should.equal('hello');
    list.get(2).value.should.equal('hi');
  });

  it("should remove a node at an index", function(){
    var list = new LinkedList();
    var node = new Node('hello');
    list.insert(new Node('hi'));
    list.insert(node);
    list.insert(new Node('greetings'));

    val = list.remove(node);

    val.should.equal('hello')
    list.size.should.equal(2);
    list.get(0).value.should.equal('greetings');
    list.get(1).value.should.equal('hi');
  });

  it("should find a value", function (){
    var list = new LinkedList();
    for(var i = 0; i < 26; i++) {
      list.insert(new Node(i));
    }
    list.search(0).should.be.instanceof(Node);
  });

  it("should not find a value", function (){
    var list = new LinkedList();
    for(var i = 0; i < 26; i++) {
      list.insert(new Node(i));
    }
    should.not.exist(list.search(9384));
  });

  it("should include a value", function (){
    var list = new LinkedList();
    for(var i = 0; i < 26; i++) {
      list.insert(new Node(i));
    }
    list.includes(24).should.equal(true);
  });

  it("should not include a value", function (){
    var list = new LinkedList();
    for(var i = 0; i < 26; i++) {
      list.insert(new Node(i));
    }
    list.includes(39483).should.equal(false);
  });

  it("should have a to string", function (){
    var list = new LinkedList();
    for(var i = 0; i < 3; i++) {
      list.insert(new Node(i));
    }
    list.toString().should.equal('2 1 0');
  });
});
