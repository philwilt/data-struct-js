exports.LinkedList =

  class LinkedList
    size: 0,
    head: null

    add: (node) ->
      if(this.size > 0)
        this.head.prev = node

      temp = this.head
      node.next = temp
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

    remove: (index) ->
      node = this.get(index)
      node.prev.next = node.next
      node.next.prev = node.prev
      this.size--
      node

    getIndex: (value) ->
      curr = this.head
      idx = null
      for i in [0..(this.size - 1)]
        if(curr.value == value)
          return i
        curr = curr.next
      return idx

    includes: (value) ->
      this.getIndex(value) != null


