(function() {
  var BinarySearchTree;

  BinarySearchTree = (function() {
    function BinarySearchTree() {
      this.val = null;
      this.size = 0;
      this.right = null;
      this.left = null;
    }

    BinarySearchTree.prototype.insert = function(val) {
      if (this.val === val) {
        return false;
      }
      if (this.val === null) {
        this.val = val;
        this.size++;
        return true;
      }
      if (val < this.val) {
        if (!this.left) {
          this.left = new BinarySearchTree;
        }
        if (this.left.insert(val)) {
          return this.size++;
        }
      } else {
        if (!this.right) {
          this.right = new BinarySearchTree;
        }
        if (this.right.insert(val)) {
          return this.size++;
        }
      }
    };

    BinarySearchTree.prototype.depth = function() {
      var left, right;
      if (this.size === 0) {
        return 0;
      }
      left = 0;
      right = 0;
      if (this.left) {
        left = this.left.depth();
      }
      if (this.right) {
        right = this.right.depth();
      }
      return 1 + Math.max(left, right);
    };

    BinarySearchTree.prototype.contains = function(val) {
      if (this.val === val) {
        return true;
      }
      if (val < this.val) {
        if (!this.left) {
          return false;
        }
        return this.left.contains(val);
      } else {
        if (!this.right) {
          return false;
        }
        return this.right.contains(val);
      }
    };

    BinarySearchTree.prototype.balance = function() {
      var balance;
      balance = 0;
      if (this.left) {
        balance += 1 + Math.abs(this.left.balance());
      }
      if (this.right) {
        balance -= 1 + Math.abs(this.right.balance());
      }
      return balance;
    };

    return BinarySearchTree;

  })();

  exports.BinarySearchTree = BinarySearchTree;

}).call(this);
