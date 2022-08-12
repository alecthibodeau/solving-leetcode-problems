/**
 * 2351. First Letter to Appear Twice
 * Run locally: $ node first-letter-to-appear-twice.js
 */

/**
 * @param {string} s
 * @return {character}
 */

// const s = 'abccbaacz';
const s = 'abcdd';

 var repeatedCharacter = function(s) {
  let letters = '';
  for (let i = 0; i < s.length; i++) {
    if (letters.includes(s[i])) {
      return s[i];
    } else {
      letters += s[i];
    }
  }
};

console.log(repeatedCharacter(s));

/**
 * Success
 * Runtime: Runtime: 74 ms, faster than 76.97% of JavaScript online submissions for First Letter to Appear Twice.
 * Memory Usage: 42.1 MB, less than 50.89% of JavaScript online submissions for First Letter to Appear Twice.
 */
