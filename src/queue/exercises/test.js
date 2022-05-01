const { ArrayQueue } = require("../ArrayQueue")
const { PriorityQueue } = require("../PriorityQueue")

const queue = new ArrayQueue(5)

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.dequeue())
// queue.enqueue(40)
// queue.enqueue(50)
// console.log(queue.dequeue())
// queue.enqueue(60)
// queue.enqueue(70)
// console.log(queue.dequeue())
// queue.enqueue(80)

// console.log(queue.peek())

const priorityQueue = new PriorityQueue(5)

// priorityQueue.enqueue(60) // check queue is full
priorityQueue.enqueue(10)
priorityQueue.enqueue(40)
priorityQueue.enqueue(30)
priorityQueue.enqueue(50)
priorityQueue.enqueue(20)
console.log(priorityQueue.remove())
console.log(priorityQueue.remove())
console.log(priorityQueue.remove())
console.log(priorityQueue.remove())
console.log(priorityQueue.remove())
// console.log(priorityQueue.remove()) // check queue is empty
