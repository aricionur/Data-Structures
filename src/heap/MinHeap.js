class MinHeap {
  constructor() {
    this.items = []
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  min() {
    return this.items[0]
  }

  insert(value) {
    this.items[this.size++] = value

    this.bubbleUp(this.size - 1)
  }

  remove() {
    if (this.isEmpty()) return

    const root = this.items[0]
    this.items[0] = this.items[--this.size]

    this.bubbleDown()

    return root
  }

  bubbleUp(index) {
    let parentIndex = this.getParentIndex(index)

    while (index > 0 && this.items[index] < this.items[parentIndex]) {
      this.swap(index, parentIndex)
      index = parentIndex
      parentIndex = this.getParentIndex(index)
    }
  }

  bubbleDown() {
    let index = 0
    while (index <= this.size && !this.isValidParent(index)) {
      const smallerChildIndex = this.smallerChildIndex(index)

      this.swap(index, smallerChildIndex)
      index = smallerChildIndex
    }
  }

  smallerChildIndex(index) {
    if (!this.hasLeftChild(index)) return this.rightChildIndex(index)
    if (!this.hasRightChild(index)) return this.leftChildIndex(index)

    return this.leftChild(index) < this.rightChild(index) ? this.leftChildIndex(index) : this.rightChildIndex(index)
  }

  isValidParent(index) {
    if (!this.hasLeftChild(index)) return true

    let isValid = this.items[index] <= this.leftChild(index)

    if (this.hasRightChild(index)) isValid &= this.items[index] <= this.rightChild(index)

    return isValid
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  swap(i1, i2) {
    const temp = this.items[i1]
    this.items[i1] = this.items[i2]
    this.items[i2] = temp
  }

  leftChildIndex(index) {
    return index * 2 + 1
  }

  rightChildIndex(index) {
    return index * 2 + 2
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) < this.size
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) < this.size
  }

  leftChild(index) {
    return this.items[this.leftChildIndex(index)]
  }

  rightChild(index) {
    return this.items[this.rightChildIndex(index)]
  }
}

MinHeap.prototype.toString = function () {
  return this.items.join(", ")
}

module.exports = { MinHeap }
