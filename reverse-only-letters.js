/**
 * 2418. Reverse Only Letters
 * Run locally: $ node reverse-only-letters.js
 */

/**
 * @param {string} s
 * @return {string}
 */

const s = 'a-bC-dEf-ghIj';

var reverseOnlyLetters = function(s) {
  const characters = {};
  let letters = [];
  for (let i = 0; i < s.length; i++) {
    characters[i] = s[i];
    if (/[a-zA-Z]/.test(s[i])) letters.push(s[i]);
  }
  letters = letters.reverse();
  Object.keys(characters).forEach(key => {
    if (/[a-zA-Z]/.test(characters[key])) {
      characters[key] = letters[0];
      letters.shift();
    }
  });
  return Object.values(characters).join('');
};

console.log(reverseOnlyLetters(s));

/**
 * Success
 * Runtime: 127 ms, faster than 5.26% of JavaScript online submissions for Reverse Only Letters.
 * Memory Usage: 43.8 MB, less than 7.02% of JavaScript online submissions for Reverse Only Letters.
 */
