/**
 * 2586. Count the Number of Vowel Strings in Range
 * Run locally: $ node count-the-number-of-vowel-strings-in-range.js
 */

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

// Input example 1
// const words = ["are","amy","u"];
// const left = 0;
// const right = 2;

// Input example 2
words = ["hey","aeo","mu","ooo","artro"];
const left = 1;
const right = 4;

var vowelStrings = function(words, left, right) {
  const vowels = 'aeiou';
  let count = 0;
  for (let i = left; i <= right; i++) {
    if (vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length - 1])) {
      count++;
    }
  }
  return count;
};

console.log(vowelStrings(words, left, right));

/**
 * Accepted
 * Runtime: 69 ms, Beats 92.80% of users with JavaScript
 * Memory: 53.88 MB, Beats 81.36% of users with JavaScript
 */
