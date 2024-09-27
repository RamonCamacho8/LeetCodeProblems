/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Map();

    const helper = function(s) {
        if (s.length === 0) {
            return true;
        }
        
        if (memo.has(s)) {
            return memo.get(s);
        }

        for (const word of wordDict) {
            if (s.startsWith(word)) {
                const remainingString = s.slice(word.length);
                if (helper(remainingString)) {
                    memo.set(s, true);
                    return true;
                }
            }
        }

        memo.set(s, false);
        return false;
    }

    return helper(s);
};


module.exports = wordBreak;

/* const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
const wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];

console.log(wordBreak(s,wordDict)); */

