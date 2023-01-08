/**
 * 1417. Reformat The String
 * Run locally: $ node reformat-the-string.js
 */

/**
 * @param {string} s
 * @return {string}
 */

const s = 'a0b1c2';

var reformat = function(s) {
  const numbers = [];
  const letters = [];
  let output = '';
  let longerArray;
  let shorterArray;
  for (let i = 0; i < s.length; i++) {
    /^\d$/.test(s[i]) ? numbers.push(s[i]) : letters.push(s[i]);
  }
  if (!numbers.length && letters.length === 1) {
    return letters[0];
  }
  if (!letters.length && numbers.length === 1) {
    return numbers[0];
  }
  if ((Math.abs(numbers.length - letters.length) > 1)) {
    return output;
  }
  if (numbers.length > letters.length) {
    longerArray = numbers;
    shorterArray = letters;
  } else {
    longerArray = letters;
    shorterArray = numbers;
  }
  for (let i = 0; i < longerArray.length; i++) {
    output += longerArray[i];
    if (shorterArray[i]) output += shorterArray[i];
  }
  return output;
};

console.log(reformat(s));

/**
 * Accepted
 * Runtime: 77 ms, Beats 84.9%
 * Memory: 47.6 MB, Beats 45.45%
 */
