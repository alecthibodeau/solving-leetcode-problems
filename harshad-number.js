/**
 * 3099. Harshad Number
 * Run locally: $ node harshad-number.js
 */

/**
 * @param {number} x
 * @return {number}
 */

// Input example 1
const x = 18;

// Input example 2
// const x = 23;

var sumOfTheDigitsOfHarshadNumber = function(x) {
  const sum = x.toString().split('').reduce((a, b) => +a + +b, 0);
  return x % sum === 0 ? sum : -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(x));
