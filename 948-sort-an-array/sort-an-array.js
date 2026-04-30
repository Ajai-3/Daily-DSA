/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(nums) {
        if (nums.length <= 1) return nums;

        let mid = Math.floor(nums.length / 2);

        let left = mergeSort(nums.slice(0, mid));
        let right = mergeSort(nums.slice(mid));

        return merge(left, right)
    }

    function merge(left, right) {
        let result = [];

        while (left.length > 0 && right.length > 0) {
            result.push(left[0] < right[0] ? left.shift() : right.shift())
        }

        return [...result, ...left, ...right]
    }

    return mergeSort(nums)
};