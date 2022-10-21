/**
 * 771. Jewels and Stones
 * Run locally: $ node jewels-and-stones.js
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

const jewels = 'aA';
const stones = 'aAAbbbb';

var numJewelsInStones = function(jewels, stones) {
  let jewelsCounts = {};
  jewels.split('').forEach(jewel => jewelsCounts[jewel] = 0);
  let stonesArray = stones.split('');
  stonesArray.forEach(stone => {
    if (jewelsCounts[stone] > -1) jewelsCounts[stone] += 1;
  });
  return Object.values(jewelsCounts).reduce((a, b) => a + b, 0);
};

console.log(numJewelsInStones(jewels, stones));

/**
 * Success
 * Runtime: 111 ms, faster than 23.82% of JavaScript online submissions for Jewels and Stones.
 * Memory Usage: 43.7 MB, less than 18.67% of JavaScript online submissions for Jewels and Stones.
 */
