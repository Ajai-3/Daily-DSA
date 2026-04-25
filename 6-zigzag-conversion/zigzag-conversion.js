/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let row = 0;
    let col = 0;
    let matrix = [];
    let result = "";
    let goBottom = true;

    for (let char of s) {
        if (!matrix[row]) {
            matrix[row] = []
        } 

        matrix[row][col] = char;

        if (goBottom) {
           row++;

           if (row === numRows - 1) {
            goBottom = false
           }
        } else {
            col++
            row--

            if (row === 0) {
                goBottom = true
            }
        }
    }

    console.log(matrix)

    for (let i = 0; i < numRows; i++) {
        let colCount = matrix[i].length
        for (let j = 0; j < colCount; j++) {
            let char = matrix[i][j];
            if (typeof char === 'string') {
                result += char
            }
        }
    }

    return result 
};