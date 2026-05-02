/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let minDis = Infinity;
    let first = {};  
    let second = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if (first[n] === undefined) {
            first[n] = i;
        } else if (second[n] === undefined) {
            second[n] = i;
        } else {
            let i_ = first[n];
            let j_ = second[n];
            let k_ = i;

            let currentDist = (j_ - i_) + (k_ - j_) + (k_ - i_);

            if (currentDist < minDis) {
                minDis = currentDist;
            }

            first[n] = second[n];
            second[n] = i;
        }
    }

    return minDis === Infinity ? -1 : minDis;
};