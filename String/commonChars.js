// commonInString.js
function commonChars(str1, str2) {
    let result = []
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                result.push(str1[i])
                str2 = str2.slice(0, j) + str2.slice(j + 1)
                break
            }
        }
    }
    return result
}

console.log(commonChars("apple", "pineapple")); 