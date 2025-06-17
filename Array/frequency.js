// frequency.js
let arr= [2, 1, 3, 4, 5, 7, 4, 4, 3, 2, 5, 8, 9, 7, 1]

let frequency = {}

for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1
}

console.log(frequency)