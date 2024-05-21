/**
 * 3120. Count the Number of Special Characters I
 * Run locally: $ node count-the-number-of-special-characters-i.js
 */

/**
 * @param {string} word
 * @return {number}
 */

// Input example 1
const word = "aaAbcBC";

// Input example 2
// const word = "abc";

var numberOfSpecialChars = function(word) {
  const count = [];
  for (let i = 0; i < word.length; i++) {
    if (
      word.includes(word[i].toLowerCase()) &&
      word.includes(word[i].toUpperCase()) &&
      !count.includes(word[i].toLowerCase())
    ) {
      count.push(word[i].toLowerCase());
    }
  }
  return count.length;
};

console.log(numberOfSpecialChars(word));
