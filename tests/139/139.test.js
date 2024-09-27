const wordBreak = require('../139/139.js');

test('test case 1' , () => {
    const s = "leetcode";
    const wordDict = ["leet", "code"];
    expect(wordBreak(s,wordDict)).toBe(true);
});