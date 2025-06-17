// mostFrequentChar.js
function mostFrequentChar(str) {
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1
    }

    let freq = 0
    let string = ""

    for (let key in obj) {
       if (obj[key] > freq) {
         freq = obj[key]
         string = key
       }
    }

    return { String: string, Count: freq }
}

console.log(mostFrequentChar("aaabbccddddeee")); 