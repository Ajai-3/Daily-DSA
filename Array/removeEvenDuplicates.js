// removeEvenDuplicates.js
let arr = [1, 1, 2, 4, 2, 5, 4, 2]

let seen = {}
let index = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        if (seen[arr[i]]) {
            continue
        } else {
            seen[arr[i]] = true
        }
    }

    arr[index] = arr[i]
    index++
}

arr.length = index

console.log(arr)