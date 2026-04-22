/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {}

    for (let num of nums) {
        freq[num] = (freq[num] || 0) +  1
    }

    console.log(freq)

    let count = 0
    let result = 0
    for (let n in freq) {
       if (freq[n] > count) {
        count = freq[n]
        result = Number(n)
       }
    }

    return result
};