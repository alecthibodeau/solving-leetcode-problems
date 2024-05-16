/**
 * 821. Shortest Distance to a Character
 * Run locally: $ node shortest-distance-to-a-character.js
 */

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

// Input example 1
// const s = "loveleetcode";
// const c = "e";

// Input example 2
const s = "aaab";
const c = "b";

var shortestToChar = function(s, c) {
  const output = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i + j] === c || s[i - j] === c) {
        output.push(j);
        break;
      }
    }
  }
  return output;
};

console.log(shortestToChar(s, c));

/**
 * Accepted
 * Runtime: 63 ms, Beats 67.35% of users with JavaScript
 * Memory: 51.19 MB, Beats 92.65% of users with JavaScript
 */
