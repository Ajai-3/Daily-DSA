/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = "" + num;

    if (str.length === 1) {
        return num;
    }

    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i])
    }

    return addDigits(sum);
};