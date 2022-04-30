const { Stack } = require("../Stack")

const reverseString = string => {
  const stack = new Stack()

  for (const ch of string) stack.push(ch)

  const reversedStringChars = []
  while (!stack.isEmpty()) {
    reversedStringChars.push(stack.pop())
  }

  return reversedStringChars.join("")
}

module.exports = { reverseString }
