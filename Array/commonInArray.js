// commonInArray.js
let arr = [1, 2, 3, 4, 5, 9, 20, 11]
let arr2 = [4, 5, 6, 7, 8, 1]

let result = []

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
       if (arr[i] === arr2[j]) {
        result.push(arr2[j])
       }
    }
}

console.log(result)