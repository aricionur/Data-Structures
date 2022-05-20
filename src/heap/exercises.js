const { Heap } = require("./Heap")

const heapify = array => {
  for (let index = 0; index < array.length; index++) {
    const leftChildIndex = index * 2 + 1
    const rightChildIndex = index * 2 + 2
    const leftChild = array[leftChildIndex]
    const rightChild = array[rightChildIndex]

    if (leftChild && leftChild > array[index]) swap(array, index, leftChildIndex)
    if (rightChild && rightChild > array[index]) swap(array, index, rightChildIndex)
  }
}

const swap = (array, index1, index2) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

const findKthLargestNumber = (array, k) => {
  if (k < 1) return

  const heap = new Heap()

  for (const item of array) heap.insert(item)

  for (let i = 0; i < k - 1; i++) heap.remove()

  return heap.max()
}

module.exports = { heapify, findKthLargestNumber }
