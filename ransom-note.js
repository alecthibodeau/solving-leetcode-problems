/**
 * 383. Ransom Note
 * Run locally: $ node ransom-note.js
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const ransomNote = 'aa';
const magazine = 'aab';

var canConstruct = function(ransomNote, magazine) {
  const letterCounts = {};

  for (let i = 0; i < ransomNote.length; i++) {
    letterCounts[ransomNote[i]] = (letterCounts[ransomNote[i]] | 0) + 1;
  }

  for (let i = 0; i < magazine.length; i++) {
    if (letterCounts[magazine[i]]) letterCounts[magazine[i]]--;
    if ((letterCounts[magazine[i]]) === 0) delete letterCounts[magazine[i]];
    if (!Object.keys(letterCounts).length) return true;
  }

  return false;
};

console.log(canConstruct(ransomNote, magazine));

/**
 * Accepted
 * Runtime: 131 ms, Beats 54.50%
 * Memory: 49.8 MB, Beats 9.86%
 */
