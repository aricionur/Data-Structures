const { reverseString } = require("./reverseString")
const { isBalanced } = require("./isBalanced")

// const testString = "abcd"
// const reversedSring = reverseString(testString)
// console.log("testString:", testString)
// console.log("reversedString:", reversedSring)

// const testString = "("
// const testString = "()"
// const testString = "(asdf)"
const testString = "(([1] +  <2>))[a]"
const isBalancedString = isBalanced(testString)
console.log("testString:", testString)
console.log("isBalancedString:", isBalancedString)
