class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor(size, priorityOrder = "ascending") {
    if (!size) throw new Error("queue size must be provided !!!")
    if (!["ascending", "descending"].includes(priorityOrder)) throw new Error("queue order type must be provided !!!")

    this.priorityOrder = priorityOrder
    this.size = size
    this.items = Array(size)
    this.count = 0
  }

  enqueue(value, priority) {
    if (this.isFull()) throw new Error("Queue is full!")

    const node = new Node(value, priority)

    let index = this.count - 1
    while (index >= 0) {
      if (this.priorityOrder === "ascending") {
        if (this.items[index].priority > priority) this.items[index + 1] = this.items[index] // shift all greater values to the right.
        else break
      } else {
        if (this.items[index].priority < priority) this.items[index + 1] = this.items[index] // shift all smaller values to the right.
        else break
      }

      index--
    }

    this.items[index + 1] = node
    this.count++
  }

  remove() {
    if (this.isEmpty()) throw new Error("Queue is empty!")

    return this.items[--this.count].value
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
