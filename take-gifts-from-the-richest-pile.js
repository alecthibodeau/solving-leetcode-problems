/**
 * 2558. Take Gifts From the Richest Pile
 * Run locally: $ node take-gifts-from-the-richest-pile.js
 */

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */

// Input example 1
// const gifts = [25,64,9,4,100];
// const k = 4;

// Input example 2
const gifts = [1,1,1,1];
const k = 4;

var pickGifts = function(gifts, k) {
  for (let i = 0; i < k; i++) {
    const maxIndex = gifts.indexOf(Math.max(...gifts));
    gifts[maxIndex] = Math.floor(Math.sqrt(gifts[maxIndex]));
  }
  return gifts.reduce((a, b) => a + b, 0);
};

console.log(pickGifts(gifts, k));

/**
 * Accepted
 * Runtime: 76 ms, Beats 65.52% of users with JavaScript
 * Memory: 49.77 MB, Beats 62.07% of users with JavaScript
 */
