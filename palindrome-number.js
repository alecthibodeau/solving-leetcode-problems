/*
  9. Palindrome Number
  Run locally: $ node palindrome-number.js <number>
 */

const x = process.argv[2];

var isPalindrome = function(x) {
    x = x.toString();
    const index = x.length % 2 === 0 ? x.length/2 : Math.round((x.length/2) - 1);
    const segmentOne = x.slice(0, index);
    const segmentTwoReversed = x.slice(-index).split('').reverse().join('');
    return x >= +0 && ((x.length === 1) || (segmentOne === segmentTwoReversed));
};

console.log(isPalindrome(x));
