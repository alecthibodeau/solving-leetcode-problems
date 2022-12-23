/**
 * 1816. Truncate Sentence
 * Run locally: $ node truncate-sentence.js
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const s = 'Hello how are you Contestant';
const k = 4;

var truncateSentence = function(s, k) {
  return s.split(' ').slice(0, k).join(' ');
};

console.log(truncateSentence(s, k));

/**
 * Success
 * Runtime: 64 ms, faster than 92.09% of JavaScript online submissions for Truncate Sentence.
 * Memory Usage: 41.9 MB, less than 83.69% of JavaScript online submissions for Truncate Sentence.
 */
