/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let freq = {}

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }

    for (let n in freq) {
        if (freq[n] === 1) {
            return Number(n)
        }
    }
};