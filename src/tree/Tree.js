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

  equals(targetTree) {
    if (!targetTree) return false

    return this.equalsRec(this.root, targetTree.root)
  }

  equalsRec(node1, node2) {
    if (!node1 && !node2) return true

    if (node1 && node2) return node1.value === node2.value && this.equalsRec(node1.leftChild, node2.leftChild) && this.equalsRec(node1.rightChild, node2.rightChild)

    return false
  }

  swapTree(root) {
    const temp = root.leftChild
    root.leftChild = root.rightChild
    root.rightChild = temp
  }

  isBinarySearchTree() {
    return this.isBinarySearchTreeRec(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
  }

  isBinarySearchTreeRec(node, rangeMin, rangeMax) {
    if (!node) return true

    return rangeMin < node.value && node.value < rangeMax && this.isBinarySearchTreeRec(node.leftChild, rangeMin, node.value) && this.isBinarySearchTreeRec(node.rightChild, node.value, rangeMax)
  }

  getNodesAtDistance(targetDistance) {
    if (!this.root) return

    const nodesAtDistance = []

    this.getNodesAtDistanceRec(this.root, targetDistance, 0, nodesAtDistance)

    return nodesAtDistance
  }

  getNodesAtDistanceRec(node, targetDistance, currentDistance, nodesAtDistance) {
    if (!node) return

    if (targetDistance === currentDistance) {
      nodesAtDistance.push(node)
      // console.log(node.value)
      return
    }

    this.getNodesAtDistanceRec(node.leftChild, targetDistance, currentDistance + 1, nodesAtDistance)
    this.getNodesAtDistanceRec(node.rightChild, targetDistance, currentDistance + 1, nodesAtDistance)
  }

  levelOrderTraversal() {
    if (!this.root) return

    const heightOfTree = this.height()

    for (let i = 0; i <= heightOfTree; i++) {
      const nodes = this.getNodesAtDistance(i)
      for (const node of nodes) console.log(node.value)
    }
  }

  inorderTraversalIterative() {
    const values = []
    const stack = []
    let node = this.root

    while (node || stack.length) {
      while (node) {
        stack.push(node)
        node = node.leftChild
      }
      node = stack.pop()
      values.push(node.value)
      node = node.rightChild
    }

    return values
  }

  isSymmetric() {
    return isSymmetricRec(this.root.left, this.root.right)
  }

  isSymmetricRec(node1, node2) {
    if (!node1 && !node2) return true

    if (node1 && node2) return node1.val === node2.val && isSymmetricRec(node1.left, node2.right) && isSymmetricRec(node1.right, node2.left)

    return false
  }

  isSymmetricIterative() {
    const stack = [this.root.left, this.root.right]

    while (stack.length) {
      const right = stack.pop()
      const left = stack.pop()

      if (!left && !right) continue
      if (left?.val !== right?.val) return false

      stack.push(left.left, right.right)
      stack.push(left.right, right.left)
    }

    return true
  }

  sumOfLeftLeaves(root) {
    if (!this.root) return 0

    return sumOfLeftLeavesRec(this.root, 0)
  }

  sumOfLeftLeavesRec(node, sum, isLeftLeaf) {
    if (!node) return 0
    if (isLeaf(node) && isLeftLeaf) return sum + node.val

    return sumOfLeftLeavesRec(node.left, sum, true) + sumOfLeftLeavesRec(node.right, sum, false)
  }

  breadthFirstSearch() {
    const queue = [this.root]
    const visited = []

    while (queue.length) {
      const node = queue.shift()
      visited.push(node.value)

      if (node.leftChild) queue.push(node.leftChild)
      if (node.rightChild) queue.push(node.rightChild)
    }

    return visited
  }
}

module.exports = { Tree }
