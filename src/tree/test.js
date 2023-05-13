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
// const foundNode = tree.find(7)
// console.log("foundNode:", foundNode)

// tree.traverse()
// tree.traverse("inOrder")
// tree.traverse("postOrder")

// const height = tree.height()
// console.log("height:", height)

// const min = tree.min()
// console.log("min:", min)

// const tree_2 = new Tree()
// tree_2.insert(7)
// tree_2.insert(4)
// tree_2.insert(9)
// tree_2.insert(1)
// tree_2.insert(6)
// tree_2.insert(8)
// tree_2.insert(10)
// const isEqual = tree.equals(tree_2)
// console.log("isEqual:", isEqual)

// const isBinarySearchTree = tree.isBinarySearchTree()
// tree.swapTree(tree.root) // just for test non-binary search tree
// const isBinarySearchTree = tree.isBinarySearchTree()
// console.log("isBinarySearchTree:", isBinarySearchTree)

// tree.getNodesAtDistance(1)

// tree.levelOrderTraversal()

const values = tree.inorderTraversalIterative()
console.log(values)
