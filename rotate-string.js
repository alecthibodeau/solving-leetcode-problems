/**
 * 796. Rotate String
 * Run locally: $ node rotate-string.js
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

// Input example 1
// const s = "abcde";
// const goal = "cdeab";

// Input example 2
const s = "abcde"
const goal = "abced";

var rotateString = function(s, goal) {
  for (const character of s) {
    s = s.slice(1) + character;
    if (s === goal) return true;
  }
  return false;
};

console.log(rotateString(s, goal));
