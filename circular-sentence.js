/**
 * 2490. Circular Sentence
 * Run locally: $ node circular-sentence.js
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */

// Input example 1
// const sentence = "leetcode exercises sound delightful";

// Input example 2
// const sentence = "eetcode";

// Input example 3
const sentence = "Leetcode is cool";


var isCircularSentence = function(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if ((sentence[0] !== sentence[sentence.length - 1]) || (sentence[i] === ' ' && (sentence[i - 1] !== sentence[i + 1]))) {
      return false;
    }
  }
  return true;
};

console.log(isCircularSentence(sentence));

/**
 * Accepted
 * Runtime: 46 ms, Beats 92.40% of users with JavaScript
 * Memory: 49.58 MB, Beats 25.73% of users with JavaScript
 */
