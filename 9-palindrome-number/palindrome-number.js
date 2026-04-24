/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n = "";
    n += x
    let r = n.split("").reverse().join("")

   if (r === n) {
    return true
   }
   return false
};