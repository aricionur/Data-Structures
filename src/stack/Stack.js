class Stack extends Array {
  constructor(...args) {
    super(...args)
  }

  peek() {
    return this[this.length - 1]
  }

  isEmpty() {
    if (!this.length) return true
    return false
  }
}

module.exports = { Stack }
