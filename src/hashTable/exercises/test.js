const { findFirstNonRepeatingChar } = require("./findNonRepetingChar")
const { HashTable } = require("../HashTable")

// const testString = "A green Apple 1"
// const firstNonRepeatingChar = findFirstNonRepeatingChar(testString)
// console.log("firstNonRepeatingChar:", firstNonRepeatingChar)

const hashTable = new HashTable(5)
hashTable.put("a", "name")
hashTable.put("b", "surnme")
hashTable.put("a", "overriden_name")
hashTable.put("c", "11")
hashTable.put("c", 22)
hashTable.put("c", 33)
console.log("a:", hashTable.get("a"))
console.log("b:", hashTable.get("b"))
console.log("c:", hashTable.get("c"))

hashTable.remove("a")
console.log("a:", hashTable.get("a"))
console.log("b:", hashTable.get("b"))
console.log("c:", hashTable.get("c"))

hashTable.remove("b")
console.log("a:", hashTable.get("a"))
console.log("b:", hashTable.get("b"))
console.log("c:", hashTable.get("c"))

hashTable.remove("c")
console.log("a:", hashTable.get("a"))
console.log("b:", hashTable.get("b"))
console.log("c:", hashTable.get("c"))

hashTable.remove("a")
