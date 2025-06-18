// reverseEachWord.js
let str = "Hello World"
let result = ""
let temp = ""

// let reverse = str.split(' ').map((str) => str.split('').reverse().join("")).join(" ")

// console.log(reverse)

// Without inbiuld methods
for (let i = 0; i <= str.length; i++) {
   let ch = (i < str.length) ? str[i] : " "

   if (ch !== " ") {
    temp = ch + temp 
   } else {
    result += temp + " ";
    temp = ""
   }
}

console.log(result)