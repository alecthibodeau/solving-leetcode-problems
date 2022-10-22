/**
 * 1528. Shuffle String
 * Run locally: $ node shuffle-string.js
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

const s = 'codeleet';
const indices = [4,5,6,7,0,2,1,3];

var restoreString = function(s, indices) {
  const shuffled = {};
  let shuffledString = '';
  for (let i = 0; i < s.length; i++) {
   shuffled[indices[i]] = s[i];
  }
  Object.keys(shuffled).forEach(key => shuffledString += shuffled[key]);
  return shuffledString;
};

console.log(restoreString(s, indices));

/**
 * Success
 * Runtime: 138 ms, faster than 10.27% of JavaScript online submissions for Shuffle String.
 * Memory Usage: 44.7 MB, less than 24.84% of JavaScript online submissions for Shuffle String.
 */