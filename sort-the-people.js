/**
 * 2418. Sort the People
 * Run locally: $ node sort-the-people.js
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

const names = ['Mary', 'John', 'Emma'];
const heights = [180, 165, 170];

var sortPeople = function(names, heights) {
  return names
    .map((value, index) => [value, heights[index]])
    .sort((a, b) => b[1] - a[1])
    .map(person => person[0]);
};

console.log(sortPeople(names, heights));

/**
 * Success
 * Runtime: 121 ms, faster than 77.75% of JavaScript online submissions for Sort the People.
 * Memory Usage: 47.3 MB, less than 43.87% of JavaScript online submissions for Sort the People.
 */
