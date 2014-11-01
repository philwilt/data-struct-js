class LinkedList
  size: 0,
  head: null

  insert: (node) ->
    if(@size > 0)
      @head.prev = node

    temp = this.head
    node.next = temp
    @head = node
    @size++
    @

  get: (index) ->
    curr = @head
    return @head if index == 0

    curr = curr.next for i in [0..(index - 1)]
    curr

  remove: (node) ->
    node.prev.next = node.next
    node.next.prev = node.prev
    this.size--
    node.value

  search: (value) ->
    curr = @head
    node = null
    while curr != null
      return curr if curr.value == value
      curr = curr.next
    null

  includes: (value) ->
    this.search(value) != null

  toString: () ->
    return '' if @size == 0
    curr = @head
    msg = ''
    while curr.next != null
      msg += curr.toString() + ' '
      curr = curr.next
    msg += curr.toString()

exports.LinkedList = LinkedList

