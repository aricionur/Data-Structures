const { Heap } = require("./Heap")
const { heapify, findKthLargestNumber } = require("./exercises")

// const heap = new Heap()
// heap.insert(10)
// heap.insert(5)
// heap.insert(17)
// heap.insert(4)
// heap.insert(22)
// console.log("removed:", heap.remove())
// console.log("heap:", heap)

// sort number array
// const numbers = [10, 5, 17, 4, 22]
// const heap = new Heap()
// for (const number of numbers) heap.insert(number)
//sort descending order
// for (let i = 0; i < numbers.length; i++) numbers[i] = heap.remove()
// console.log("numbers ascending order:", numbers)
//sort ascending order
// for (let i = numbers.length - 1; i >= 0; i--) numbers[i] = heap.remove()
// console.log("numbers ascending order:", numbers)

// const testArray = [5, 3, 8, 4, 1, 2]
// console.log("testArray:", testArray)
// heapify(testArray)
// console.log("Heapified testArray:", testArray)

const testArray = [5, 3, 8, 4, 1, 2]
const foundNmber = findKthLargestNumber(testArray, 3)
console.log("foundNmber:", foundNmber)
