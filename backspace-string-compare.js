/**
 * 844. Backspace String Compare
 * Run locally: $ node backspace-string-compare.js
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Input example 1
// const s = "ab#c";
// const t = "ad#c";

// Input example 2
// const s = "ab##";
// const t = "c#d#";

// Input example 3
const s = "a#c";
const t = "b";

var backspaceCompare = function(s, t) {
  let backspaceS = '';
  let backspaceT = '';
  for (let i = 0; i < s.length; i++) {
    backspaceS = s[i] === '#'
    ? backspaceS.substring(0, backspaceS.length - 1)
    : backspaceS + s[i];
  }
  for (let i = 0; i < t.length; i++) {
    backspaceT = t[i] === '#'
    ? backspaceT.substring(0, backspaceT.length - 1)
    : backspaceT + t[i];
  }
  return backspaceS === backspaceT;
};

console.log(backspaceCompare(s, t));
