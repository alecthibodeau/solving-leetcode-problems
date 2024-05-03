/**
 * 1832. Check if the Sentence Is Pangram
 * Run locally: $ node check-if-the-sentence-is-pangram.js
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */

// Input example 1
const sentence = "thequickbrownfoxjumpsoverthelazydog";

// Input example 2
// const sentence = "leetcode";

var checkIfPangram = function(sentence) {
  const letters = {};
  for (let i = 0; i < sentence.length; i++) {
    letters[sentence[i]] ? letters[sentence[i]]++ : letters[sentence[i]] = 1;
  }
  return Object.keys(letters).length === 26;
};

console.log(checkIfPangram(sentence));

/**
 * Accepted
 * Runtime: 58 ms, Beats 33.45% of users with JavaScript
 * Memory: 49.97 MB, Beats 62.56% of users with JavaScript
 */
