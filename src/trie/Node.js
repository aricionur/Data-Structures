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

  hasChildren() {
    // const len = this.children.length
    // const protoLen = this.children.__proto__.length
    const realLength = this.children.some(x => x)
    return realLength
  }

  addChild(char) {
    this.children[this.getIndex(char)] = new Node(char)
  }

  getChild(char) {
    return this.children[this.getIndex(char)]
  }

  getChildren() {
    return this.children
  }

  removeChild(char) {
    this.children.splice(this.getIndex(char), 1)
  }
}

const asciiOfChara = 97

module.exports = { Node }
