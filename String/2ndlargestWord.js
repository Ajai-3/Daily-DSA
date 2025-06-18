// 2ndlargestWord.js
let str = "Hello I am T3xture from korea"

let max = ""
let sec = ""
let word = ""

for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        word += str[i]
    } else {
        if (max.length < word.length) {
            sec = max
            max = word
        }
        if (sec.length < word.length && word.length < max.length) {
            sec = word
        }

        word = ""
    }
}

console.log(sec)