/**
 * 2974. Minimum Number Game
 * Run locally: $ node minimum-number-game.js
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Input example 1
// const nums = [5,4,2,3];

// Input example 2
// const nums = [2,5];

// Input example 3
const nums = [17,2,4,11,14,18];

var numberGame = function(nums) {
  const arr = [];
  while (nums.length) {
    const aliceMove = nums.splice(nums.indexOf(Math.min(...nums)), 1)[0];
    const bobMove = nums.splice(nums.indexOf(Math.min(...nums)), 1)[0];
    arr.push(bobMove);
    arr.push(aliceMove);
  }
  return arr;
};

console.log(numberGame(nums));

/**
 * Accepted
 * Runtime: 78 ms, Beats 31.77% of users with JavaScript
 * Memory: 52.54 MB, Beats 27.50% of users with JavaScript
 */
