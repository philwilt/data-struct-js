class BinarySearchTree

  constructor: ->
    @val = null
    @size = 0
    @right = null
    @left = null

  insert: (val) ->
    return false if @val == val
    if (@val == null)
      @val = val
      @size++
      return true

    if val < @val
      @left = new BinarySearchTree unless @left
      @size++ if @left.insert(val)
    else
      @right = new BinarySearchTree unless @right
      @size++ if @right.insert(val)

  delete: (val) ->
    if (@val == val)
      if @right
        @val = @right.val
        @right.delete(@val)
      else if @left
        @val = @left.val
        @left.delete(@val)
      else
        @val = null
      @size--
      true
    else
      if val < @val
        return false unless @left
        if @left.delete(val)
          @size--
          return true
        false
      else if val > @val
        return false unless @right
        if @right.delete(val)
          @size--
          return true
        false

  depth: ->
    return 0 if @size == 0
    left = 0
    right = 0
    left = @left.depth() if @left
    right = @right.depth() if @right
    1 + Math.max(left, right)

  contains: (val) ->
    return true if @val == val
    if val < @val
      return false unless @left
      @left.contains(val)
    else
      return false unless @right
      @right.contains(val)

  balance: ->
    balance = 0
    balance += ( 1 + Math.abs( @left.balance() ) ) if @left
    balance -= ( 1 + Math.abs( @right.balance() ) ) if @right
    balance

  inOrderTraversal: ->
    inOrderTraversal(this, [])

  preOrderTraversal: ->
    preOrderTraversal(this, [])

  postOrderTraversal: ->
    postOrderTraversal(this, [])

  breadthFirstTraversal: ->
    arr = []
    queue = []
    queue.push(this)
    while queue.length > 0
      node = queue.shift()
      arr.push(node.val)
      queue.push node.left if node.left
      queue.push node.right if node.right
    arr

  lowestCommonAncestor: (val1, val2) ->
    if @val > val1 && @val > val2
      return @left.lowestCommonAncestor(val1, val2)
    if @val < val1 && @val < val2
      return @right.lowestCommonAncestor(val1, val2)
    return @val if @contains(val1) && @contains(val2)
    false

  inOrderTraversal = (node, arr) ->
    arr.push(node.left.inOrderTraversal()) if node.left
    arr.push node.val
    arr.push (node.right.inOrderTraversal()) if node.right
    arr.concat.apply([], arr)

  preOrderTraversal = (node, arr) ->
    arr.push node.val
    arr.push(node.left.preOrderTraversal()) if node.left
    arr.push (node.right.preOrderTraversal()) if node.right
    arr.concat.apply([], arr)

  postOrderTraversal = (node, arr) ->
    arr.push(node.left.postOrderTraversal()) if node.left
    arr.push (node.right.postOrderTraversal()) if node.right
    arr.push node.val
    arr.concat.apply([], arr)

exports.BinarySearchTree = BinarySearchTree
