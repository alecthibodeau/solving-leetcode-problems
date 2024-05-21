/**
 * 3127. Make a Square with the Same Color
 * Run locally: $ node make-a-square-with-the-same-color.js
 */

/**
 * @param {character[][]} grid
 * @return {boolean}
 */

// Input example
// const grid = [["B","W","B"],["B","W","W"],["B","W","B"]];

// Input example 2
// const grid = [["B","W","B"],["W","B","W"],["B","W","B"]];

// Input example 2
const grid = [["B","W","B"],["B","W","W"],["B","W","W"]];

var canMakeSquare = function(grid) {
  const bits = {
    B: 1,
    W: 0
  };
  const squares = [
    bits[grid[0][0]] + bits[grid[0][1]] + bits[grid[1][0]] + bits[grid[1][1]],
    bits[grid[0][1]] + bits[grid[0][2]] + bits[grid[1][1]] + bits[grid[1][2]],
    bits[grid[1][0]] + bits[grid[1][1]] + bits[grid[2][0]] + bits[grid[2][1]],
    bits[grid[1][1]] + bits[grid[1][2]] + bits[grid[2][1]] + bits[grid[2][2]]
  ];
  for (const square of squares) {
    if (square !== 2) return true;
  }
  return false;
};

console.log(canMakeSquare(grid));
