/**
 * 1351. Count Negative Numbers in a Sorted Matrix
 * Run locally: $ node count-negative-numbers-in-a-sorted-matrix.js
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

// Input example 1
// const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];

// Input example 2
const grid = [[3,2],[1,0]];

var countNegatives = function(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) count++;
    }
  }
  return count;
};

console.log(countNegatives(grid));

/**
 * Accepted
 * Runtime: 67 ms, Beats 8.56% of users with JavaScript
 * Memory: 50.97 MB, Beats 67.11% of users with JavaScript
 */
