// removeSpace.js
// Remove the space (2 space is okay more than 2 is not allowed) between the words without inbiuld methods.
let str = "Hai I   am Rahul    from            Kochi"

let spaceCount = 0
let result = ""

for (let i = 0; i < str.length; i++) {
    let ch = str[i]

    if (ch === " ") {
        spaceCount++
        if (spaceCount <= 2) {
            result += " "
        }
    } else {
        spaceCount = 0
        result += ch
    }
}

console.log(result)