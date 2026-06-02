/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    let l1 = word1.length;
    let l2 = word2.length;
    let length = l1 === l2 ? l1 : l1 > l2 ? l1 : l2


    for (let i = 0; i < length; i++) {
       if (i < word1.length) {
         result += word1[i]
       }

       if (i < word2.length) {
           result += word2[i]
       }
    }


    return result;
};