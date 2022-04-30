const { Stack } = require("../Stack")

const openingBracketsMapper = { "(": ")", "{": "}", "[": "]", "<": ">" }

const closingBrackets = { ")": 1, "}": 1, "]": 1, ">": 1 }

const isBalanced = string => {
  if (!string) return string

  const stack = new Stack()

  for (ch of string) {
    if (openingBracketsMapper[ch]) stack.push(openingBracketsMapper[ch])
    else if (closingBrackets[ch] && stack.pop() !== ch) return false
  }

  // stack has to be empty if the given string is a balanced string.
  if (!stack.isEmpty()) return false
  return true
}

module.exports = { isBalanced }
