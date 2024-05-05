/**
 * 2315. Count Asterisks
 * Run locally: $ node count-asterisks.js
 */

/**
 * @param {string} s
 * @return {number}
 */

// Input example 1
// const s = "l|*e*et|c**o|*de|";

// Input example 2
// const s = "iamprogrammer";

// Input example 3
const s = "yo|uar|e**|b|e***au|tifu|l";

var countAsterisks = function(s) {
  let count = 0;
  const nonPairs = s.split('|').filter((el, index) => { return !(index % 2) });
  nonPairs.forEach(nonPair => { count += nonPair.split('*').length - 1 });
  return count;
};

console.log(countAsterisks(s));
