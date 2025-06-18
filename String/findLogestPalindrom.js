// findLogestPalindrom.js

let str = "arattytt"
let max = ""

for (let i = 0; i < str.length; i++) {
    let val = str[i]
    for (let j = i + 1; j < str.length; j++) {
         val += str[j]
        let rev = val.split("").reverse().join("")
        console.log(val, rev)

        if (val === rev && val.length > max.length) {
            max = val
        }
    }
}

console.log(max)