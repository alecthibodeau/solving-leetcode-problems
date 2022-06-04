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
  const sArray = Array.from(s.replace(/[^A-Za-z0-9]/g, '').toLowerCase());
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== sArray[sArray.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(s));

/**
 * Success
 * Runtime: 114 ms, faster than 34.13% of JavaScript online submissions for Valid Palindrome.
 * Memory Usage: 44.6 MB, less than 66.05% of JavaScript online submissions for Valid Palindrome.
 */
