/**
 * 2706. Buy Two Chocolates
 * Run locally: $ node buy-two-chocolates.js
 */

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */

// Input example 1
// const prices = [1,2,2];
// const money = 3;

// Input example 2
// const prices = [3,2,3];
// const money = 3;

// Input example 3
const prices = [98,54,6,34,66,63,52,39];
const money = 62;

var buyChoco = function(prices, money) {
  let leftover = -1;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const difference = money - (prices[i] + prices[j]);
      if (difference > leftover) leftover = difference;
    }
  }
  return leftover !== -1 ? leftover : money;
};

console.log(buyChoco(prices, money));

/**
 * Accepted
 * Runtime: 91 ms, Beats 67.89% of users with JavaScript
 * Memory: 53.86 MB, Beats 60.53% of users with JavaScript
 */
