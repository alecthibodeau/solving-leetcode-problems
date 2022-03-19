/**
 * 242. Valid Anagram
 * Run locally: $ node valid-anagram.js
 */

const s = 'stripes';
const t = 'persist';

var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram(s, t));

/**
 * Success
 * Runtime: 137 ms, faster than 32.90% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 47.6 MB, less than 26.01% of JavaScript online submissions for Valid Anagram.
 */
