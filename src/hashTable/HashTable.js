const { LinkedList } = require("../linkedList/LinkedList")

class HashTable {
  constructor(size, storeType) {
    this.size = size || 5
    this.storeType = storeType || "chaining"
    this.tableArray = Array(size)
    this.prime = this.findNearestPrime()
  }

  put(key, value) {
    if (this.storeType === "chaining") {
      const index = this.hash(key)
      if (!this.tableArray[index]) this.tableArray[index] = new LinkedList() // No entry inserted yet into this linkedList. So, put a new Linked List into that linkedList

      // traverse the linked list linkedList, to decide to update same key or insert a new entry.
      const linkedList = this.tableArray[index]
      for (const entry of linkedList) {
        if (entry[key]) {
          entry[key] = value // update the value of the key
          return
        }
      }

      linkedList.addLast({ [key]: value })
    }
  }

  get(key) {
    if (this.storeType === "chaining") {
      const index = this.hash(key)
      const linkedList = this.tableArray[index]

      let node = linkedList.first
      while (node) {
        if (node.value[key]) return node.value[key]
        node = node.next
      }
    } else {
      // TODO: implement the
    }
  }

  remove(key) {
    if (this.storeType === "chaining") {
      const index = this.hash(key)
      const linkedList = this.tableArray[index]

      let node = linkedList.first
      let nodeIndex = 0
      while (node) {
        if (node.value[key]) {
          linkedList.deleteAt(nodeIndex)
          return
        }
        node = node.next
        nodeIndex++
      }
    }
  }

  hash(key) {
    return (typeof key === "string" ? this.sumAsciiValues(key) : key) % this.size
  }

  findEmptyIndex(key) {
    // Currently, it is assumed that 'key' can be integer or string. Algorithm can be extendted for other tpes in future...
    const totalAsciiValuOfTheKey = typeof key === "string" ? this.sumAsciiValues(key) : key
    const hash1 = totalAsciiValuOfTheKey % this.size
    const hash2 = this.prime - (totalAsciiValuOfTheKey % this.prime)
    const calculateDoubleHash = x => (hash1 + x * hash2) % this.size
    let hashIterationCounter = 0
    let index = calculateDoubleHash(hashIterationCounter)

    console.log("totalAsciiValuOfTheKey:", totalAsciiValuOfTheKey)
    console.log("hash1:", hash1)
    console.log("hash2:", hash2)

    // try to find an empty slot(index) from table array
    while (this.tableArray[index]) {
      index = calculateDoubleHash(hashIterationCounter)
      //   index = (hash1 + i++ * hash2) % this.size
      console.log("index:", index)

      if (i === 100) throw new Error("Index finding iteration exceeded the 100!")
    }

    return index
  }

  sumAsciiValues(key) {
    let sum = 0

    for (const char of key) sum += char.charCodeAt()

    return sum
  }

  findNearestPrime() {
    const primes = []
    const isPrime = n => {
      let start = 2
      const suareRootOfTheNumber = Math.sqrt(n)
      while (start <= suareRootOfTheNumber) if (n % start++ < 1) return false
      return n > 1
    }

    for (let i = 2; i < this.size; i++) if (isPrime(i)) primes.push(i)

    return primes.pop()
  }
}

module.exports = { HashTable }
