/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    for (let i = 0; i < chars.length; i++) {
        let count = 1;
        for (let j = i + 1; j < chars.length; j++) {
            console.log(chars[i], chars[j], j)
           if (chars[i] === chars[j]) {
            count++
           } else {
             break;
           }
        }
        

        if (count > 1) {
           let str = count.toString();
           chars.splice(i + 1, count - 1, ...str.split(""))
           i += str.length
        } 

    }


    return chars.length;
};