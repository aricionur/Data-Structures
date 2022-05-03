const { Node } = require("./Node")

class Tree {
  constructor(root) {
    this.root = root
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    let currentNode = this.root
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.leftChild) {
          currentNode.leftChild = newNode
          return
        }
        currentNode = currentNode.leftChild
      } else {
        if (!currentNode.rightChild) {
          currentNode.rightChild = newNode
          return
        }
        currentNode = currentNode.rightChild
      }
    }
  }

  find(value) {
    let node = this.root
    while (node) {
      if (node.value === value) return node
      if (value < node.value) node = node.leftChild
      else node = node.rightChild
    }
  }

  traverse(travarseType) {
    if (!travarseType) this.traversePreOrder(this.root)
    else if (travarseType === "inOrder") this.traverseInOrder(this.root)
    else if (travarseType === "postOrder") this.traversePostOrder(this.root)
  }

  traversePreOrder(node) {
    if (!node) return

    console.log(node.value)
    this.traversePreOrder(node.leftChild)
    this.traversePreOrder(node.rightChild)
  }

  traverseInOrder(node) {
    if (!node) return

    this.traverseInOrder(node.leftChild)
    console.log(node.value)
    this.traverseInOrder(node.rightChild)
  }

  traversePostOrder(node) {
    if (!node) return

    this.traversePostOrder(node.leftChild)
    this.traversePostOrder(node.rightChild)
    console.log(node.value)
  }

  height() {
    if (!this.root) return -1

    return this.heightRecursive(this.root)
  }

  heightRecursive(node) {
    if (this.isLeaf(node)) return 0
    return 1 + Math.max(this.heightRecursive(node.leftChild), this.heightRecursive(node.rightChild))
  }

  min() {
    if (!this.root) return

    return this.minRecursive(this.root)
  }

  minRecursive(node) {
    if (this.isLeaf(node)) return node.value

    const minLeft = node.leftChild && this.minRecursive(node.leftChild)
    const minRight = node.rightChild && this.minRecursive(node.rightChild)

    // handle unbalanced sub-trees.
    if (!minLeft) return Math.min(minRight, node.value)
    if (!minRight) return Math.min(minLeft, node.value)

    return Math.min(Math.min(minLeft, minRight), node.value)
  }

  isLeaf(node) {
    return !node.leftChild && !node.rightChild
  }
}

module.exports = { Tree }
