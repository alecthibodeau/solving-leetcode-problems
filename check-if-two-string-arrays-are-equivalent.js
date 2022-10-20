/**
 * 1662. Check If Two String Arrays are Equivalent
 * Run locally: $ node check-if-two-string-arrays-are-equivalent.js
 */

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

const word1 = ['ab', 'c'];
const word2 = ['a', 'bc'];

var arrayStringsAreEqual = function(word1, word2) {
   return word1.join('') === word2.join('');
};

console.log(arrayStringsAreEqual(word1, word2));

/**
 * Success
 * Runtime: 118 ms, faster than 6.89% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
 * Memory Usage: 42 MB, less than 65.32% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
 */