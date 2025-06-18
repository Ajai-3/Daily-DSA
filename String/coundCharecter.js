// coundCharecter.js
let str = "Hai I am Sreereag from Knoor"

let count = 0

for (let i = 0; i < str.length; i++) {
    let ch = str[i]
    if (ch !== " ") {
        count++
    }
}

console.log(count)