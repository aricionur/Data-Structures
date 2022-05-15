const { AVLNode } = require("./AVLNode")

class AVLTree {
  constructor(root) {
    this.root = root
  }

  insert(value) {
    this.root = this.insertRec(value, this.root)
  }

  insertRec(value, root) {
    if (!root) return new AVLNode(value)

    if (value < root.value) root.leftChild = this.insertRec(value, root.leftChild)
    else root.rightChild = this.insertRec(value, root.rightChild)

    this.setHeight(root)

    root = this.balance(root)

    return root
  }

  height(node) {
    return node ? node.height : -1
  }

  balanceFactor(node) {
    return this.height(node.leftChild) - this.height(node.rightChild)
  }

  isLeftHeavy(node) {
    return this.balanceFactor(node) > 1 ? true : false
  }

  isRightHeavy(node) {
    return this.balanceFactor(node) < -1 ? true : false
  }

  balance(root) {
    if (this.isLeftHeavy(root)) {
      if (this.balanceFactor(root.leftChild) < 0) root.leftChild = this.leftRotate(root.leftChild)
      root = this.rightRotate(root)
    } else if (this.isRightHeavy(root)) {
      if (this.balanceFactor(root.rightChild) > 0) root.rightChild = this.rightRotate(root.rightChild)
      root = this.leftRotate(root)
    }

    return root
  }

  leftRotate(root) {
    const newRoot = root.rightChild

    root.rightChild = newRoot.leftChild
    newRoot.leftChild = root

    this.setHeight(root)
    this.setHeight(newRoot)

    return newRoot
  }

  rightRotate(root) {
    const newRoot = root.leftChild

    root.leftChild = newRoot.rightChild
    newRoot.rightChild = root

    this.setHeight(root)
    this.setHeight(newRoot)

    return newRoot
  }

  setHeight(node) {
    node.height = Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1
  }
}

module.exports = { AVLTree }
