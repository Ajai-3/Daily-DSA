// reverseRecurtion.js
// Reverse a string with recurtion

let str = "hello hai"

function reverseString(str) {
  if (str.length <= 0) return str
  return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString(str))