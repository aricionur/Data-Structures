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
    //
  }
}

module.exports = { Tree }
