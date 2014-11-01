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

exports.BinarySearchTree = BinarySearchTree
