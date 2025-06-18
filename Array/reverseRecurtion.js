// reverseRecurtion.js

let arr = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5]

function reverseArray(arr) {
    if (arr.length <= 0) return arr
    return reverseArray(arr.slice(1)).concat(arr[0])
}

function reverseArray2(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    [arr[start], arr[end]] = [arr[end], arr[start]]

    return reverseArray2(arr, start + 1, end - 1)
}

console.log(reverseArray(arr))
reverseArray2(arr2);
console.log("In-place reversed array:", arr2);