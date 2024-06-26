/**
 * 3083. Existence of a Substring in a String and Its Reverse
 * Run locally: $ node existence-of-a-substring-in-a-string-and-its-reverse.js
 */

/**
 * @param {string} s
 * @return {boolean}
 */

// Input example 1
// const s = "leetcode";

// Input example 2
// const s = "abcba";

// Input example 3
const s = "abcd";

var isSubstringPresent = function(s) {
  for (let i = s.length - 1; i > 0; i--) {
    if (s.includes(s[i] + s[i - 1])) return true;
  }
  return false;
};

console.log(isSubstringPresent(s));

/**
 * Accepted
 * Runtime: 59 ms, Beats 75.97% of users with JavaScript
 * Memory: 49.96 MB, Beats 92.21% of users with JavaScript
 */
