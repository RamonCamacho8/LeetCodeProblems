const Trie = require('../../problems/208/208');

test('test case 1', () => {
  let trie = new Trie();
  trie.insert('apple');
  expect(trie.search('apple')).toBe(true);
  expect(trie.search('app')).toBe(false);
  expect(trie.startsWith('app')).toBe(true);
  trie.insert('app');
  expect(trie.search('app')).toBe(true);
});