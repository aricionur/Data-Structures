const { Tree } = require("./Tree")

const tree = new Tree()
tree.insert(7)
tree.insert(4)
tree.insert(9)
tree.insert(1)
tree.insert(6)
tree.insert(8)
tree.insert(10)

// // const foundNode = tree.find(9)
// const foundNode = tree.find(4)
// console.log("foundNode:", foundNode)

// tree.traverse()
// tree.traverse("inOrder")
tree.traverse("postOrder")
