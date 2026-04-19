/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    function fibonacci(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;

        return fibonacci(n - 1) + fibonacci(n - 2)
    }

    return fibonacci(n)
};