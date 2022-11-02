/**
 * 1859. Sorting the Sentence
 * Run locally: $ node sorting-the-sentence.js
 */

/**
 * @param {string} s
 * @return {string}
 */

const s = 'is2 sentence4 This1 a3';

var sortSentence = function(s) {
  return s
    .split(' ')
    .sort((a, b) => { return a.charAt(a.length - 1) - b.charAt(b.length - 1) })
    .map(word => { return word.slice(0, word.length - 1) })
    .join(' ');
};

console.log(sortSentence(s));

/**
 * Success
 * Runtime: 95 ms, faster than 49.82% of JavaScript online submissions for Sorting the Sentence.
 * Memory Usage: 41.9 MB, less than 54.32% of JavaScript online submissions for Sorting the Sentence.
 */
