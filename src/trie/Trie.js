const { Node } = require("./Node")

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    let currentNode = this.root

    for (const char of word) {
      const index = char.charCodeAt() - 97

      if (!currentNode.children[index]) currentNode.children[index] = new Node(char)
      currentNode = currentNode.children[index]
    }

    currentNode.isEndOfWord = true
  }
}

module.exports = { Trie }
