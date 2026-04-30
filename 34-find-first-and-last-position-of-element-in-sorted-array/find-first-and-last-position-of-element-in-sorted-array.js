/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            let start = mid;
            let end = mid;

            while (nums[start] === target) start--
            while (nums[end] === target) end++

            return [start + 1, end - 1]
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        }
    }

    return [-1, -1]
};