/**
 * 290. Word Pattern
 * Run locally: $ node word-pattern.js
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

const pattern = 'abca';
const s = 'dog cat fish dog';

var wordPattern = function(pattern, s) {
  const words = s.split(' ');
  const match = {};
  if (pattern.length !== words.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (!match[pattern[i]]) match[pattern[i]] = words[i];
    for (const key in match) {
      if (
          match[key] === words[i] && key !== pattern[i]
          || match[pattern[i]] !== words[i]
        ) {
        return false;
      }
    }
  }
  return true;
};

console.log(wordPattern(pattern, s));

/**
 * Success
 * Runtime: 94 ms, faster than 47.08% of JavaScript online submissions for Word Pattern.
 * Memory Usage: 42.2 MB, less than 24.43% of JavaScript online submissions for Word Pattern.
 */
