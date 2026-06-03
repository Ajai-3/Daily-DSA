/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let check1 = str1 + str2;
    let check2 = str2 + str1;

    let length1 = str1.length;
    let length2 = str2.length;

    if (check1 !== check2) return ""

    function findGCD (a, b) {
       while (b !== 0) {
         let reminder = a % b;
         a = b;
         b = reminder
       }
       return a;
    }

    return str1.slice(0, findGCD(length1, length2))
};