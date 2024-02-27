/**
 * 2942. Find Words Containing Character
 * Run locally: $ find-words-containing-character.js
 */

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

// Testcase
// const words = ["leet","code"];
// const x = "e";

// Example
const words = ["abc","bcd","aaaa","cbc"];
const x = "a";

// Example
// const words = ["abc","bcd","aaaa","cbc"];
// const x = "z";

var findWordsContaining = function(words, x) {
  const output = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) output.push(i);
  }
  return output;
};

console.log(findWordsContaining(words, x));

/**
 * Accepted
 * Runtime: 78 ms, Beats 40.14% of users with JavaScript
 * Memory: 53.14 MB, Beats 26.87% of users with JavaScript
 */
