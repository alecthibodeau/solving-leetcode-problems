/**
 * 1221. Split a String in Balanced Strings
 * Run locally: $ node split-a-string-in-balanced-strings.js
 */

/**
 * @param {string} s
 * @return {number}
 */

// Input example 1
// const s = "RLRRLLRLRL";

// Input example 2
// const s = "RLRRRLLRLL";

// Input example 3
const s = "LLLLRRRR";

var balancedStringSplit = function(s) {
  let balance = 0;
  let substrings = 0;
  for (letter of s) {
    letter === 'L' ? balance-- : balance++;
    if (!balance) substrings++;
  }
  return substrings;
};

console.log(balancedStringSplit(s));

/**
 * Accepted
 * Runtime: 52 ms, Beats 64.35% of users with JavaScript
 * Memory: 49.94 MB, Beats 8.33 % of users with JavaScript
 */
