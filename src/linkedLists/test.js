const { LinkedList } = require("./LinkedList")

const linkedList = new LinkedList()
linkedList.addFirst("surname")
linkedList.addFirst("name")
// linkedList.addLast("age")
linkedList.addLast(34)

console.log(linkedList.toString())

// linkedList.deleteFirst()
// linkedList.deleteFirst()
// linkedList.deleteFirst()
// linkedList.deleteFirst()
// linkedList.deleteFirst()
// console.log(linkedList.toString())

// console.log(linkedList.toString())
// linkedList.deleteLast()
// console.log(linkedList.toString())
// linkedList.deleteLast()
// console.log(linkedList.toString())
// linkedList.deleteLast()
// console.log(linkedList.toString())
// linkedList.deleteLast()

// const isContain = linkedList.contains("test")
// const isContain = linkedList.contains("age")
// console.log("isContain:", isContain)

// const index = linkedList.indexOf("test")
// const index = linkedList.indexOf("name")
// const index = linkedList.indexOf("surname")
// const index = linkedList.indexOf(34)
// console.log("index:", index)

// console.log(linkedList.size)
// linkedList.deleteLast()
// console.log(linkedList.size)
// linkedList.deleteFirst()
// linkedList.deleteFirst()
// console.log(linkedList.size)
// linkedList.deleteFirst()
// console.log(linkedList.size)

// const listAsArray = linkedList.toArray()
// console.log("listAsArray:", listAsArray)

linkedList.reverse()
console.log(linkedList.toString())
