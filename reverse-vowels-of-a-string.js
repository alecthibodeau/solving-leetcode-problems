/**
 * 345. Reverse Vowels of a String
 * Run locally: $ node reverse-vowels-of-a-string.js
 */

/**
 * @param {string} s
 * @return {string}
 */

// Testcase
// const s = "hello";

// Input example
// const s = "leetcode";

// Input example
// const s = "aA";

// Input example
const s = "A man, a plan, a canal: Panama"

var reverseVowels = function(s) {
    const vowels = 'aeiou';
    const letters = s.split('');
    const reversals = [];

    for (let i = 0; i < letters.length; i++) {
      if (vowels.includes(letters[i].toLowerCase())) {
        reversals.unshift(letters[i]);
        letters[i] = null;
      }
    }

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === null) {
        letters[i] = reversals[0];
        reversals.shift();
      }
    };

    return letters.join('');
};

console.log(reverseVowels(s));

/**
 * Accepted
 * Runtime: 192 ms, Beats 9.99% of users with JavaScript
 * Memory: 56.65 MB, Beats 21.78% of users with JavaScript
 */
