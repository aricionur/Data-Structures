const { Node } = require("./Node")

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    let currentNode = this.root

    for (const char of word) {
      if (!currentNode.hasChild(char)) currentNode.addChild(char)
      currentNode = currentNode.getChild(char)
    }

    currentNode.isEndOfWord = true
  }

  contains(word) {
    if (!word) return false

    let currentNode = this.root
    for (const char of word) {
      currentNode = currentNode.getChild(char)
      if (!currentNode) return false
    }

    if (currentNode.isEndOfWord) return true
    return false
  }

  traverse() {
    this.traverseRec(this.root)
  }

  traverseRec(root) {
    // Pre-order traverse
    // if (root.value) console.log(root.value)

    for (const child of root.getChildren()) {
      if (child) this.traverseRec(child)
    }

    // Post-order traverse
    if (root.value) console.log(root.value)
  }

  remove(word) {
    if (!word) return

    this.removeRec(this.root, word, 0)
  }

  removeRec(root, word, charIndex) {
    if (charIndex === word.length) {
      root.isEndOfWord = false
      return
    }

    const currentWordChar = word[charIndex]
    const child = root.getChild(currentWordChar)
    if (!child) return

    this.removeRec(child, word, charIndex + 1)

    if (!child.hasChildren() && !child.isEndOfWord) root.removeChild(currentWordChar)
  }
}

module.exports = { Trie }
