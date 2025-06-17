// validateAnagram.js

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false

    let count1 = {}
    let count2 = {}

    for (let i = 0; i < str1.length; i++) {
        let ch1 = str1[i]
        let ch2 = str2[i]

        count1[ch1] = (count1[ch1] || 0) + 1
        count2[ch2] = (count2[ch2] || 0) + 1
    }

    for (let key in count1) {
        if (count1[key] !== count2[key]) {
            return false
        }
    }

    return true
}



console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")) // false