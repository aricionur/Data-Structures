class Heap {
  constructor() {
    this.items = []
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  insert(value) {
    this.items[this.size++] = value

    this.bubbleUp(this.size - 1)
  }

  bubbleUp(index) {
    let parentIndex = this.parentIndex(index)

    while (index > 0 && this.items[index] > this.items[parentIndex]) {
      this.swap(index, parentIndex)
      index = this.parentIndex(index) // increase index to the parent index to go up in heap.
      parentIndex = this.parentIndex(index)
    }
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  swap(index1, index2) {
    const temp = this.items[index1]
    this.items[index1] = this.items[index2]
    this.items[index2] = temp
  }

  remove() {
    if (this.isEmpty()) return

    // Always remove the  root fo the heap
    const root = this.items[0]
    this.items[0] = this.items[--this.size]

    let index = 0
    while (index <= this.size && !this.isValidParent(index)) {
      const largerChildIndex = this.largerChildIndex(index)

      this.swap(index, largerChildIndex)
      index = largerChildIndex
    }

    return root
  }

  largerChildIndex(index) {
    if (!this.hasLeftChild()) return this.rightChildIndex(index)
    if (!this.hasRightChild()) return this.leftChildIndex(index)

    return this.leftChild(index) > this.rightChild(index) ? this.leftChildIndex(index) : this.rightChildIndex(index)
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) <= this.size
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) <= this.size
  }

  isValidParent(index) {
    if (!this.hasLeftChild(index)) return true

    let isValid = this.items[index] >= this.leftChild(index)

    if (this.hasRightChild(index)) isValid &= this.items[index] >= this.rightChild(index)

    return isValid
  }

  leftChild(index) {
    this.items[this.leftChildIndex(index)]
  }

  rightChild(index) {
    this.items[this.rightChildIndex(index)]
  }

  leftChildIndex(index) {
    return index * 2 + 1
  }

  rightChildIndex(index) {
    return index * 2 + 2
  }
}

module.exports = { Heap }
