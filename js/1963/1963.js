/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {

    let open = 0;
    let notClosed = 0;

    for (let i = 0; i < s.length; i++) {
        if(s[i] === '[') open++;
        else {
            if(open > 0) open--;
            else notClosed++;
        }
    }

    return (~~(notClosed / 2)) + (notClosed % 2);
   
};

console.log(minSwaps("][]["))


module.exports = minSwaps;