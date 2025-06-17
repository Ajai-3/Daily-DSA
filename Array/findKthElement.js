// findKthElement.js

let arr = [2, 5, 1, 6, 9, 3, 8, 3]
let k = 3


function kthElement(arr, k) {

    for (let i = 0; i < arr.length; i++) {
        let max = -Infinity
        let index = -1
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > max) {
                max = arr[j]
                index = j
            }
        }
        if (i === k - 1) return max
        arr[index] = -Infinity
    }
    return -1
}

console.log(kthElement(arr, k))