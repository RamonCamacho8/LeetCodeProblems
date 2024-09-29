const lengthOfLongestSubstring = require("./3");

test("Test case 1", () => {
  const input = "abcabcbb";
  const expected = 3;

  expect(lengthOfLongestSubstring(input)).toEqual(expected);
});

test("Test case 2", () => {
  const input = "bbbbb";
  const expected = 1;

  expect(lengthOfLongestSubstring(input)).toEqual(expected);
});

test("Test case 3", () => {
  const input = "pwwkew";
  const expected = 3;

  expect(lengthOfLongestSubstring(input)).toEqual(expected);
});
