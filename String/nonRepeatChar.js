// nonRepeatChar.js
let str = "swiss"

function nonRepeatChar(str) {
    let obj = {}
    let result = ""

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            result = key;
            return result
        }
    }
}

console.log(nonRepeatChar(str))