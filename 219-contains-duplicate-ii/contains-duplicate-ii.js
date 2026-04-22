/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let lastSeenAt = {}

    for (let i = 0; i < nums.length; i++) {
        let value = nums[i]

        if (lastSeenAt[value] !== undefined) {
            let j = lastSeenAt[value]

            if (i - j <= k) {
                return true
            }
        }
        
        lastSeenAt[value] = i
    }

    return false
};