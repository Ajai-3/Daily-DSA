let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumOfArrayRecurtion(arr, index = 0) {
    if (index >= arr.length) return 0

    return arr[index] + sumOfArrayRecurtion(arr, index + 1)
}

console.log(sumOfArrayRecurtion(arr))