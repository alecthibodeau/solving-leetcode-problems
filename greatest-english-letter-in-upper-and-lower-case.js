/**
  * 2309. Greatest English Letter in Upper and Lower Case
 * Run locally: $ node greatest-english-letter-in-upper-and-lower-case.js
 */

/**
 * @param {string} s
 * @return {string}
 */

// Input example 1
// const s = "lEeTcOdE";

// Input example 2
const s = "arRAzFif";

// Input example 3
// const s = "AbCdEfGhIjK";

var greatestLetter = function(s) {
  let code = 0;
  for (let i = 0; i < s.length; i++) {
    const ascii = s[i].charCodeAt(0);
    if (ascii <= 90 && ascii > code && s.split('').includes(s[i].toLowerCase())) {
      code = ascii;
    }
  }
  return code ? String.fromCharCode(code) : '';
};

console.log(greatestLetter(s));
