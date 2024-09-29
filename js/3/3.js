var lengthOfLongestSubstring = function(s) {

    if (s.length === 0) {
        return 0;
    }

    let maxLength = 0;
    let start = 0;
    let end = 0;
    let map = new Map();

    while (end < s.length) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }

    return maxLength;
    
};


module.exports = lengthOfLongestSubstring;