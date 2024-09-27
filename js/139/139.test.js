const wordBreak = require("./139");

test("test case 1", () => {
  const s = "leetcode";
  const wordDict = ["leet", "code"];
  expect(wordBreak(s, wordDict)).toBe(true);
});

test("test case 2", () => {
  const s = "applepenapple";
  const wordDict = ["apple", "pen"];
  expect(wordBreak(s, wordDict)).toBe(true);
});

test("test case 3", () => {
  const s =
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
  const wordDict = [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaa",
    "aaaaaaaa",
    "aaaaaaaaa",
    "aaaaaaaaaa",
  ];

  expect(wordBreak(s, wordDict)).toBe(false);
});
