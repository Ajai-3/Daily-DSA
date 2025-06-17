// Find the second largest even element in an array with recurtion
let arr = [2, 1, 9, 6, 10, 3, 5, 8]

let result = arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        if (cur > acc.max) {
            acc.sec = acc.max 
            acc.max = cur
        } else if (acc.sec < cur && acc.max > cur) {
            acc.sec = cur
        }
    }

    return acc
}, { max: -Infinity, sec: -Infinity })

console.log(result)
