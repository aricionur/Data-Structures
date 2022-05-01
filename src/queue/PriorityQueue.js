class PriorityQueue {
  constructor(size) {
    this.size = size
    this.items = Array(size)
    this.front = 0
    this.rear = 0
    this.count = 0
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is empty!")

    const item = this.items[this.front]

    this.front = (this.front + 1) % this.size
    this.count--

    return item
  }

  enqueue(item) {
    if (this.isFull()) throw new Error("Queue is full!")

    let index = this.count - 1
    while (index >= 0) {
      if (this.items[index] > item) this.items[index + 1] = this.items[index] // shift all greater values to the right.
      else break
      index--
    }

    this.items[index + 1] = item

    this.count++
  }

  remove() {
    if (this.isEmpty()) throw new Error("Queue is empty!")

    return this.items[--this.count]
  }

  peek() {
    return this.items[0]
  }

  isEmpty() {
    return this.count === 0
  }

  isFull() {
    return this.count === this.size
  }
}

module.exports = { PriorityQueue }
