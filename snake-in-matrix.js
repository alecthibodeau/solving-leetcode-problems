/**
 * 3248. Snake in Matrix
 * Run locally: $ node snake-in-matrix.js
 */

/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */

// Input example 1
// const n = 2;
// const commands = ["RIGHT","DOWN"];

// Input example 2
const n = 3;
const commands = ["DOWN","RIGHT","UP"];

var finalPositionOfSnake = function(n, commands) {
  let i = 0;
  let j = 0;
  commands.forEach(command => {
    if (command === "RIGHT") j++;
    if (command === "LEFT") j--;
    if (command === "UP") i--;
    if (command === "DOWN") i++;
  });
  return (i * n) + j;
};

console.log(finalPositionOfSnake(n, commands));

/**
 * Accepted
 * Runtime: 1 ms, Beats 100% of users with JavaScript
 * Memory: 52.63 MB, Beats 84.19% of users with JavaScript
 */
