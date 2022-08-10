/**
 * 389. Find the Difference
 * Run locally: $ node find-the-difference.js
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const s = 'abcd';
const t = 'abcde';
// const s = '';
// const t = 'y';

var findTheDifference = function(s, t) {
  s = s.split('').sort();
  t = t.split('').sort();
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) return t[i];
  }
};

console.log(findTheDifference(s, t));

/**
 * Success
 * Runtime: 88 ms, faster than 76.51% of JavaScript online submissions for Find the Difference.
 * Memory Usage: 43.5 MB, less than 78.37% of JavaScript online submissions for Find the Difference.
 */
