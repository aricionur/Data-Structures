const { Node } = require("./Node")

class LinkedList {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  isEmpty() {
    if (!this.first) return true

    return false
  }

  addFirst(value) {
    const newNode = new Node(value, this.first)

    this.first = newNode
    if (!this.last) this.last = this.first

    this.size++
  }

  addLast(value) {
    const newNode = new Node(value)

    if (this.last) {
      this.last.next = newNode
      this.last = newNode
    } else this.first = this.last = newNode // That means list is empty

    this.size++
  }

  deleteFirst() {
    if (this.isEmpty()) return

    if (this.first === this.last) this.first = this.last = null // Dont forget to assign 'last' as null when one item left in list !!!
    else this.first = this.first.next

    this.size--
  }

  deleteLast() {
    if (this.isEmpty()) return

    if (this.first === this.last) {
      this.first = this.last = null // Dont forget to assign 'first' as null when one item left in list !!!
      this.size--
      return
    }

    let node = this.first
    // Find previous node of 'last' node
    while (node.next.next) node = node.next

    node.next = null
    this.last = node

    this.size--
  }

  contains(targetValue) {
    if (this.isEmpty()) return false

    let node = this.first
    while (node) {
      if (node.value === targetValue) return true
      node = node.next
    }

    return false
  }

  indexOf(targetValue) {
    if (this.isEmpty()) return -1

    let node = this.first
    let index = 0
    while (node) {
      if (node.value === targetValue) return index
      node = node.next
      index++
    }

    return -1
  }

  toArray() {
    if (this.isEmpty()) return []

    const array = []
    let node = this.first
    while (node) {
      array.push(node.value)
      node = node.next
    }

    return array
  }

  reverse() {
    if (this.isEmpty()) return

    let prevNode = this.first
    let node = prevNode.next
    while (node) {
      const tempNextNode = node.next

      node.next = prevNode
      prevNode = node
      node = tempNextNode
    }

    // swap the 'last' and 'first'
    const tempLast = this.last
    this.first.next = null // 'first' will be the 'last' at one line below code. Hence, drop the next link of first node, because it has still its prior to reverse link to the second node.
    this.last = this.first
    this.first = tempLast
  }
}

LinkedList.prototype.toString = function linkedListToString() {
  if (this.isEmpty()) return "[]"

  let node = this.first
  const linkedListAsArray = []
  while (node) {
    linkedListAsArray.push(node.value)
    node = node.next
  }

  return "[" + linkedListAsArray.join(", ") + "]"
}

module.exports = { LinkedList }
