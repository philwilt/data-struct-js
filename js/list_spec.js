(function() {
  var LinkedList, Node, should;

  should = require('chai').should();

  Node = require('./node').Node;

  LinkedList = require('./linkedList').LinkedList;

  describe('LinkedList', function() {
    it('should insert a node', function() {
      var list;
      list = new LinkedList;
      list.insert(new Node('hi'));
      list.head.value.should.equal('hi');
      list.insert(new Node('hello'));
      return list.size.should.equal(2);
    });
    it('should know its size', function() {
      var list;
      list = new LinkedList;
      list.insert(new Node('hi'));
      list.head.value.should.equal('hi');
      list.insert(new Node('hello'));
      return list.size.should.equal(2);
    });
    it('should get an el at an index', function() {
      var list;
      list = new LinkedList;
      list.insert(new Node('hi'));
      list.insert(new Node('hello'));
      list.insert(new Node('greetings'));
      list.get(0).value.should.equal('greetings');
      list.get(1).value.should.equal('hello');
      return list.get(2).value.should.equal('hi');
    });
    it('should remove a node at an index', function() {
      var list, node, val;
      list = new LinkedList;
      node = new Node('hello');
      list.insert(new Node('hi'));
      list.insert(node);
      list.insert(new Node('greetings'));
      val = list.remove(node);
      val.should.equal('hello');
      list.size.should.equal(2);
      list.get(0).value.should.equal('greetings');
      return list.get(1).value.should.equal('hi');
    });
    it('should find a value', function() {
      var i, list;
      list = new LinkedList;
      i = 0;
      while (i < 26) {
        list.insert(new Node(i));
        i++;
      }
      return list.search(0).should.be["instanceof"](Node);
    });
    it('should not find a value', function() {
      var i, list;
      list = new LinkedList;
      i = 0;
      while (i < 26) {
        list.insert(new Node(i));
        i++;
      }
      return should.not.exist(list.search(9384));
    });
    it('should include a value', function() {
      var i, list;
      list = new LinkedList;
      i = 0;
      while (i < 26) {
        list.insert(new Node(i));
        i++;
      }
      return list.includes(24).should.equal(true);
    });
    it('should not include a value', function() {
      var i, list;
      list = new LinkedList;
      i = 0;
      while (i < 26) {
        list.insert(new Node(i));
        i++;
      }
      return list.includes(39483).should.equal(false);
    });
    return it('should have a to string', function() {
      var i, list;
      list = new LinkedList;
      list.toString().should.equal('');
      i = 0;
      while (i < 3) {
        list.insert(new Node(i));
        i++;
      }
      return list.toString().should.equal('2 1 0');
    });
  });

}).call(this);
