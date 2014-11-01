class Node
  @next = null
  @prev = null

  constructor: (@value) ->

  toString: () ->
    @value.toString()

exports.Node = Node
