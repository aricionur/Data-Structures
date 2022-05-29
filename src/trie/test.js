const { Trie } = require("./Trie")

const trie = new Trie()
// trie.insert("can")
// trie.insert("cat")

trie.insert("canada")
// const isWordExist = trie.contains("can")
const isWordExist = trie.contains("canada")
console.log("isWordExist:", isWordExist)
