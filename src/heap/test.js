const { Heap } = require("./Heap")

const heap = new Heap()
heap.insert(10)
heap.insert(5)
heap.insert(17)
heap.insert(4)
heap.insert(22)
heap.remove()

console.log("heap:", heap)
