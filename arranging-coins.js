/**
 * 441. Arranging Coins
 * Run locally: $ node arranging-coins.js
 */

/**
 * @param {number} n
 * @return {number}
 */

const n = 5;

var arrangeCoins = function(n) {
  let completeCoins = 0;
  for (let i = 1; i <= n; i++) {
    completeCoins = completeCoins + i;
    if (completeCoins >= n) return n - completeCoins ? i - 1 : i;
  }
};

console.log(arrangeCoins(n));

/**
 * Success
 * Runtime: 154 ms, faster than 22.95% of JavaScript online submissions for Arranging Coins.
 * Memory Usage: 44.4 MB, less than 41.64% of JavaScript online submissions for Arranging Coins.
 */
