/**
 * 125. Valid Palindrome
 * Run locally: $ node valid-palindrome.js
 */

/**
 * @param {string} s
 * @return {boolean}
 */

const s = 'A man, a plan, a canal: Panama';

var isPalindrome = function(s) {
  s = Array.from(s.replace(/[^A-Za-z0-9]/g, '').toLowerCase());
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(s));

/**
 * Success
 * Runtime: 109 ms, faster than 39.32% of JavaScript online submissions for Valid Palindrome.
 * Memory Usage: 44.9 MB, less than 60.92% of JavaScript online submissions for Valid Palindrome.
 */
