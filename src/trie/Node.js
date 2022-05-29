class Node {
  constructor(value) {
    this.value = value
    this.children = []
    this.isEndOfWord
  }

  // !!! below functions are implemented to create 'abstraction' between Node and Trie classes !!!
  getIndex(char) {
    return char.charCodeAt() - asciiOfChara
  }

  hasChild(char) {
    return !!this.children[this.getIndex(char)]
  }

  addChild(char) {
    this.children[this.getIndex(char)] = new Node(char)
  }

  getChild(char) {
    return this.children[this.getIndex(char)]
  }
}

const asciiOfChara = 97

module.exports = { Node }
