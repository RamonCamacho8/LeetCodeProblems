/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const stringLength = s.length;
    let longestPalindrome = "";

    if (stringLength === 0) return longestPalindrome;
    if (stringLength === 1) return s[0];

    const check = (l, r, s) => {
        
        if(l <= 0 || stringLength <= r) return [l, r];
        l--;
        r++;
        if(s[l] !== s[r]) {
            return [l + 1, r - 1] ;
        };
        if(s[l] === s[r]) {
            return check(l, r, s);
        }
    } 


    for (let i = 0; i < stringLength; i++) {

        let left = i;
        let rigth = i;

        // Si se puede entonces
        if(!(s[left - 1] === undefined || s[rigth + 1] === undefined)) {
            
            [left, rigth] = check(left, rigth,s);
            
        }

        let slice = s.slice(left, rigth + 1);
        if(longestPalindrome.length < slice.length) longestPalindrome = slice;

        left = i;
        rigth = i + 1;

        if(s[left] === s[rigth]) {

            if(!(s[left - 1] === undefined || s[rigth + 1] === undefined)) {
            
            

                [left, rigth] = check(left, rigth,s);
                
            }
            slice = s.slice(left, rigth + 1);
            if(longestPalindrome.length < slice.length) longestPalindrome = slice;
        }


    }
    console.log(longestPalindrome)
    return longestPalindrome;
};

const case_1 = "22322";

longestPalindrome(case_1);
