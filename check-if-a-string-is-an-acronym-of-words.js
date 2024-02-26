/**
 * 2828. Check if a String Is an Acronym of Words
 * Run locally: $ node check-if-a-string-is-an-acronym-of-words.js
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */

// Testcase
// const words = ["alice","bob","charlie"];
// const s = "abc";

// Example
// const words = ["an","apple"];
// const s = "a";

// Example
const words = ["never","gonna","give","up","on","you"];
const s = "ngguoy";

var isAcronym = function(words, s) {
  if (words.length === s.length) {
    let i = 0;
    while (i < words.length && words[i].charAt(0) === s.charAt(i)) i++;
    if (i === words.length) return true;
  }
  return false;
};

console.log(isAcronym(words, s));

/**
 * Accepted
 * Runtime: 99 ms, Beats 12.12% of users with JavaScript
 * Memory: 53.81 MB, Beats 28.08% of users with JavaScript
 */
