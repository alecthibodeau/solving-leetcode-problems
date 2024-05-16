/**
 * 1450. Number of Students Doing Homework at a Given Time
 * Run locally: $ node number-of-students-doing-homework-at-a-given-time.js
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

// Input example 1
// const startTime = [1,2,3];
// const endTime = [3,2,7];
// const queryTime = 4;

// Input example 2
const startTime = [4];
const endTime = [4];
const queryTime = 4;

var busyStudent = function(startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) count++;
  }
  return count;
};

console.log(busyStudent(startTime, endTime, queryTime));

/**
 * Accepted
 * Runtime: 40 ms, Beats 98.31% of users with JavaScript
 * Memory: 48.71 MB, Beats 60.34% of users with JavaScript
 */
