/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let freq = {};
    let result = [];

    for (let val of nums) {
        freq[val] = (freq[val] || 0) + 1
    }

    console.log(freq)

    for (let f in freq) {
        if (freq[f] > 1) {
            let val = Number(f);
            result.push(val);
            break;
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            result.push(i)
            break
        }
    }


    

    return result;
};