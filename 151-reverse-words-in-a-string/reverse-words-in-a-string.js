/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = "";
    let words = s.split(' ');

    console.log(words)

    for (let i = words.length - 1; i >= 0; i--) {
        console.log(result[result.length - 1], words[i])
        if (words[i] !== "") {
            if (result.length > 0) {
                result += " ";
            }
            
            result += words[i]
        } 
    }

    return result;
};