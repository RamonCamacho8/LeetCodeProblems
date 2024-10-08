/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows === 0) return "";
    if(numRows === 1 ) return s;
    if(numRows >= s.length) return s;

    let down = false;
    const arraysOfRows = new Array(3);
    let k = 0;
    for (let i = 0; i < s.length; i++) {

        
        if(!arraysOfRows[k]) arraysOfRows[k] = []
        arraysOfRows[k] = arraysOfRows[k] + s[i];
        if(i % (numRows - 1) === 0 ) down = !down
        k = down ? k + 1 : k - 1;

        
        
    }
    
    return arraysOfRows.join("");

};


console.log(
convert("PAYPALISHIRING", 3)
)

module.exports = convert;