const { Trie } = require("./Trie")

const trie = new Trie()
// trie.insert("can")
// trie.insert("cat")

// trie.insert("canada")
// // const isWordExist = trie.contains("can")
// const isWordExist = trie.contains("canada")
// console.log("isWordExist:", isWordExist)

// trie.insert("care")
// trie.traverse()

// // trie.insert("car")
// trie.insert("care")
// // trie.remove("car")
// trie.remove("care")
// console.log()

trie.insert("car")
trie.insert("card")
trie.insert("care")
trie.insert("careful")
trie.insert("egg")
const foundWords = trie.findWords("egg")
console.log("foundWords:", foundWords)
