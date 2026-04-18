/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    function reverese(n) {

        const r = n.toString().split("").reverse().join("")

        return Number(r)
    }

    return Math.abs(n - reverese(n))
};