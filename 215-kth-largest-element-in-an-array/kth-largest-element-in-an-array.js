/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    function quickSelect(nums, k) {
        let mid = [];
        let left = [];
        let right = [];

        let pivot = nums[Math.floor(Math.random() * nums.length)];

        for (let num of nums) {
            if (num > pivot) left.push(num)
            else if (num < pivot) right.push(num)
            else mid.push(num)
        }

        if (k <= left.length) {
            return quickSelect(left, k)
        }

        if (k <= (left.length + mid.length)) {
            return pivot
        }
     
        return quickSelect(right, (k - (left.length + mid.length)))
    }

    return quickSelect(nums, k)
};