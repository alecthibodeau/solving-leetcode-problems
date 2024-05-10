

/**
 * 1684. Count the Number of Consistent Strings
 * Run locally: $ node count-the-number-of-consistent-strings.js
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

// Input example 1
// const allowed = "ab";
// const words = ["ad","bd","aaab","baa","badab"];

// Input example 2
// const allowed = "abc";
// const words = ["a","b","c","ab","ac","bc","abc"];

// Input example 3
const allowed = "cad";
const words = ["cc","acd","b","ba","bac","bad","ac","d"];

var countConsistentStrings = function(allowed, words) {
  let count = 0;
  for (const word of words) {
    let consistent = 0;
    for (const letter of word) {
      if (allowed.includes(letter)) consistent++;
    }
    if (consistent === word.length) count++;
  }
  return count;
};

console.log(countConsistentStrings(allowed, words));
