/**
 * 557. Reverse Words in a String III
 * Run locally: $ node reverse-words-in-a-string-iii.js
 */

/**
 * @param {string} s
 * @return {string}
 */

const s = 'Let\'s take LeetCode contest';

var reverseWords = function(s) {
  let output = '';

  s.split(' ').forEach(word => {
    output = output + word.split('').reverse().join('') + ' ';
  });

  return output.trim();
};

console.log(reverseWords(s));

/**
 * Success
 * Runtime: 132 ms, faster than 13.74% of JavaScript online submissions for Reverse Words in a String III.
 * Memory Usage: 48.7 MB, less than 30.39% of JavaScript online submissions for Reverse Words in a String III.
 */
