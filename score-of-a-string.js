/**
 * 3110. Score of a String
 * Run locally: $ node score-of-a-string.js
 */

/**
 * @param {string} s
 * @return {number}
 */

// Input example 1
// const s = "hello";

// Input example 2
const s = "zaz";

var scoreOfString = function(s) {
  let output = 0;
  for (let i = 1; i < s.length; i++) {
    output += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }
  return output;
};

console.log(scoreOfString(s));

/**
 * Accepted
 * Runtime: 63 ms, Beats 43.56% of users with JavaScript
 * Memory: 50.02 MB, Beats 51.20% of users with JavaScript
 */
