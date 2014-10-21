exports.LinkedList =

  class LinkedList
    size: 0,
    head: null

    insert: (node) ->
      if(this.size > 0)
        this.head.prev = node

      temp = this.head
      node.next = temp
      this.head = node
      this.size++
      this

    get: (index) ->
      curr = this.head
      return this.head if index == 0

      for i in [0..(index - 1)]
        curr = curr.next
      curr

    remove: (node) ->
      node.prev.next = node.next
      node.next.prev = node.prev
      this.size--
      node.value

    search: (value) ->
      curr = this.head
      node = null
      while curr != null
        return curr if curr.value == value
        curr = curr.next
      null

    includes: (value) ->
      this.search(value) != null


