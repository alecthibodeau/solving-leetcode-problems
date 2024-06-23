/**
 * 392. Is Subsequence
 * Run locally: $ node is-subsequence.js
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Input example 1
const s = "abc";
const t = "ahbgdc";

// Input example 2
// const s = "axc";
// const t = "ahbgdc";

var isSubsequence = function(s, t) {
  if (!s.length) return true;
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) count++;
    if (count === s.length) return true;
  }
  return false;
};

console.log(isSubsequence(s, t));

/**
 * Accepted
 * Runtime: 45 ms, Beats 93.17% of users with JavaScript
 * Memory: 48.93 MB, Beats 69.14% of users with JavaScript
 */
