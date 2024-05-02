/**
 * 1672. Richest Customer Wealth
 * Run locally: $ node richest-customer-wealth.js
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */

// Input example 1
// const accounts = [[1,2,3],[3,2,1]];

// Input example 2
// const accounts = [[1,5],[7,3],[3,5]];

// Input example 3
const accounts = [[2,8,7],[7,1,3],[1,9,5]];

var maximumWealth = function(accounts) {
  return Math.max(...accounts.map(account => account.reduce((accumulator, currentValue) => accumulator + currentValue, 0)));
};

console.log(maximumWealth(accounts));

/**
 * Accepted
 * Runtime: 58 ms, Beats 23.43% of users with JavaScript
 * Memory: 49.22 MB, Beats 29.33% of users with JavaScript
 */
