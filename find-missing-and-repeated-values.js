/**
 * 2965. Find Missing and Repeated Values
 * Run locally: $ node find-missing-and-repeated-values.js
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */

// Input example 1
// const grid = [[1,3],[2,2]];

// Input example 2
const grid = [[9,1,7],[8,9,2],[3,4,6]];

var findMissingAndRepeatedValues = function(grid) {
  const values = Array(grid.length * grid.length).fill(null);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      values[grid[i][j] - 1] = values[grid[i][j] - 1] ? true : grid[i][j];
    }
  }
  return [values.indexOf(true) + 1, values.indexOf(null) + 1];
};

console.log(findMissingAndRepeatedValues(grid));

/**
 * Accepted
 * Runtime: 70 ms, Beats 74.75% of users with JavaScript
 * Memory: 51.52 MB, Beats 85.19% of users with JavaScript
 */
