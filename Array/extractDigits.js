function extractDigits(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            result.push(str[i]);
        }
    }

    if (result.length > 0) {
        return result;
    } else {
        return []; // or return "" if you want empty string
    }
}

console.log(extractDigits("a1b2c3")); // [ '1', '2', '3' ]
console.log(extractDigits("abc"));    // []
