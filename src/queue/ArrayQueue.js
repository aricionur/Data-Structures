/**
 * Circular array concept is implemented to provide memory efficiency.
 */
class ArrayQueue {
  constructor(size) {
    this.size = size
    this.items = Array(size)
    this.front = 0
    this.rear = 0
    this.count = 0
  }

  enqueue(item) {
    if (this.isFull()) throw new Error("Queue is full!")

    this.items[this.rear] = item
    this.rear = (this.rear + 1) % this.size
    this.count++
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is empty!")

    const item = this.items[this.front]

    this.front = (this.front + 1) % this.size
    this.count--

    return item
  }

  peek() {
    return this.items[this.front]
  }

  isEmpty() {
    return this.count === 0
  }

  isFull() {
    return this.count === this.size
  }
}

module.exports = { ArrayQueue }
