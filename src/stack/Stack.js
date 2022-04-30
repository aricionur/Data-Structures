class Stack extends Array {
  peek() {
    return this[this.length - 1]
  }

  isEmpty() {
    return this.length === 0
  }
}

module.exports = { Stack }
