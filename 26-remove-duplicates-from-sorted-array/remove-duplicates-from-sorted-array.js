/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        if (!seen[nums[i]]) {
            seen[nums[i]] = true;
            nums[index] = nums[i]
            index++
        }
        continue;
    }

    nums.length = index

    return index
};