// numbersSumTarget.js
let arr = [1, 2, 3, 4, 7, 7, 8, 8, 9, 6, 7, 5];
let target = 7
let result = []

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (i !== j && arr[i] + arr[j] === target) {
            result.push([arr[i], arr[j]])
        }
    }
}

console.log(result)