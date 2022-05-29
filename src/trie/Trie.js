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
}

module.exports = { Trie }
