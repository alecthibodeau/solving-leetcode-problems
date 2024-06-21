/**
 * 121. Best Time to Buy and Sell Stock
 * Run locally: $ node best-time-to-buy-and-sell-stock.js
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

// Input example 1
// const prices = [7,1,5,3,6,4];

// Input example 2
const prices = [7,6,4,3,1];

var maxProfit = function(prices) {
  let cheapest = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < cheapest) cheapest = prices[i];
    if (prices[i] - cheapest > maxProfit) maxProfit = prices[i] - cheapest;
  }
  return maxProfit;
};

console.log(maxProfit(prices));
