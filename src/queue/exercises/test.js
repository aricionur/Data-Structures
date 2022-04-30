const { ArrayQueue } = require("../ArrayQueue")

const queue = new ArrayQueue(5)

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.dequeue())
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.dequeue())
queue.enqueue(60)
queue.enqueue(70)
console.log(queue.dequeue())
queue.enqueue(80)

console.log(queue.peek())
