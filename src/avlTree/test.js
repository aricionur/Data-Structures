const { AVLTree } = require("./AVLTree")

const avlTree = new AVLTree()

// check left heavy tree rotations
// avlTree.insert(10)
// avlTree.insert(20)
// avlTree.insert(30)
// ----
// avlTree.insert(10)
// avlTree.insert(30)
// avlTree.insert(20)

// check right heavy tree rotations
// avlTree.insert(30)
// avlTree.insert(20)
// avlTree.insert(10)
// ----
avlTree.insert(30)
avlTree.insert(10)
avlTree.insert(20)
