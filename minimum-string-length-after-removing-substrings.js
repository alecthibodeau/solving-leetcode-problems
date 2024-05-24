/**
 * 2696. Minimum String Length After Removing Substrings
 * Run locally: $ node minimum-string-length-after-removing-substrings.js
 */

/**
 * @param {string} s
 * @return {number}
 */

// Input example 1
// const s = "ABFCACDB";

// Input example 2
const s = "ACBBD";

var minLength = function(s) {
  const regexABCD = new RegExp(/AB|CD/g);
  while (regexABCD.test(s)) {
    s = s.replaceAll(regexABCD, '');
  }
  return s.length;
};

console.log(minLength(s));
