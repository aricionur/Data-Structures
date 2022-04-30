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

  findNode(value) {
    if (this.isEmpty()) return

    let node = this.first
    while (node) {
      if (node.value === value) return node
      node = node.next
    }

    return
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

  getKthFromTheEnd(k) {
    if (this.isEmpty()) return
    if (k < 1) return

    let firstPointer = this.first
    let lastPointer = this.first
    let currentDistance = 0
    const targetDistance = k

    while (lastPointer) {
      if (currentDistance !== targetDistance) currentDistance++
      else firstPointer = firstPointer.next

      lastPointer = lastPointer.next
    }

    if (currentDistance !== targetDistance) return // that means desired k th index is greater than the size of the Linked List !!!

    return firstPointer.value
  }

  printMiddle() {
    if (this.isEmpty()) {
      console.log("!!! List is empty !!!!")
      return
    }

    let slowPointer = this.first
    let fastPointer = this.first

    // The conditions in the while loop, checks very well if the size of list is an even or odd number. Hence, function can print one or two middle node perfectly
    while (fastPointer !== this.last && fastPointer.next !== this.last) {
      slowPointer = slowPointer.next
      fastPointer = fastPointer.next.next
    }

    if (fastPointer === this.last) console.log("Middle(s):", slowPointer.value)
    else console.log("Middle(s):", slowPointer.value, ",", slowPointer.next.value)
  }

  /**
   * This function implements the Floyd’s Cycle-finding Algorithm.
   */
  hasLoop() {
    if (this.isEmpty() || this.first === this.last) return false

    let slowPointer = this.first
    let fastPointer = this.first

    while (fastPointer) {
      slowPointer = slowPointer.next
      fastPointer = fastPointer.next && fastPointer.next.next

      if (slowPointer === fastPointer) return true
    }

    return false
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
