/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
    let result = 0;
    let left = 0;
    let currentRunningSum = 0;
    let deque = []; 

    for (let right = 0; right < chargeTimes.length; right++) {
        currentRunningSum += runningCosts[right];

        while (deque.length > 0 && chargeTimes[deque[deque.length - 1]] <= chargeTimes[right]) {
            deque.pop();
        }
        deque.push(right);

        while (left <= right && (chargeTimes[deque[0]] + (right - left + 1) * currentRunningSum) > budget) {
            currentRunningSum -= runningCosts[left];
            left++;
            if (deque[0] < left) {
                deque.shift();
            }
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};