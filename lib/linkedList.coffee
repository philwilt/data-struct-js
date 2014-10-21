exports.LinkedList =

  class LinkedList
    size: 0,
    head: null

    add: (node) ->
      if(this.size > 0)
        this.head.prev = node

      temp = this.head
      node.next = temp
      node.prev = null
      this.head = node
      this.size++
      this

    get: (index) ->
      curr = this.head
      if index == 0
        return this.head
      else
        for i in [0..(index - 1)]
          curr = curr.next
      curr


