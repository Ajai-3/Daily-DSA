/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;
    let num = Math.abs(x).toString();

    let ans = "";

    for (let i = num.length - 1; i >= 0; i--) {
        ans += num[i]
    }

    let result = Number(ans);

    if (isNegative) {
        result = -result
    }

    if (result < -(2**31) || result > (2**31 - 1)) return 0
    

    return result
};