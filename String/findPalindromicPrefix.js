// findPalindromicPrefix.js

let str = "sdfjjggjjdfsggigg"

let result = []

for (let i = 0; i < str.length; i++) {
    let val = str[i]
    for (let j = i + 1; j < str.length; j++) {
        val += str[j]
        let rev = val.split("").reverse().join("")

        if (val === rev) {
            if (!result.includes(val)) {
                result.push(val)
            }
        }
    }
}

console.log(result)
