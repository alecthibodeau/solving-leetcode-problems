/**
 * 2678. Number of Senior Citizens
 * Run locally: $ node number-of-senior-citizens.js
 */

/**
 * @param {string[]} details
 * @return {number}
 */

// Input example 1
// const details = ["7868190130M7522","5303914400F9211","9273338290F4010"];

// Input example 2
// const details = ["1313579440F2036","2921522980M5644"];

// Input example 3
const details = ["5612624052M0130","5378802576M6424","5447619845F0171","2941701174O9078"];

var countSeniors = function(details) {
  let count = 0;
  for (let i = 0; i < details.length; i++) {
    if (+(details[i].charAt(11).toString()+details[i].charAt(12)) > 60) count++;
  }
  return count;
};

console.log(countSeniors(details));

/**
 * Accepted
 * Runtime: 50 ms, Beats 84.72% of users with JavaScript
 * Memory: 51.49 MB, Beats 18.13% of users with JavaScript
 */
