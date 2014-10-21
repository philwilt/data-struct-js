exports.Node =

  class Node
    next: null,
    prev: null

    constructor: (@value) ->

    toString: () ->
      @value.toString()
