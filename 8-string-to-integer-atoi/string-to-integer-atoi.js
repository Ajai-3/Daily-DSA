/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const match = s.trim().match(/^[-+]?\d+/);
    if (!match) return 0;
    
    let num = Number(match[0]);
    
    const min = -Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;
    
    if (num < min) return min;
    if (num > max) return max;
    
    return num;
};