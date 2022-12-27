/**
 * 49. Group Anagrams
 * Run locally: $ node group-anagrams.js
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

var groupAnagrams = function(strs, groups = {}) {
  for (let word of strs) {
    const sortedWord = word.split('').sort().join('');
    groups[sortedWord] !== undefined
      ? groups[sortedWord].push(word)
      : groups[sortedWord] = [word];
    console.log(word, groups)
  }
  return Object.values(groups);
};

console.log(groupAnagrams(strs));

/**
 * Success
 * Runtime: 147 ms, Beats 78.45%
 * Memory Usage: 53.9 MB, Beats 40.29%
 */
