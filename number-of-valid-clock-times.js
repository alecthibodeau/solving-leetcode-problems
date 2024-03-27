/**
 * 2437. Number of Valid Clock Times
 * Run locally: $ node number-of-valid-clock-times.js
 */

// Input example 1
// const time = "?5:00";

// Input example 2
// const time = "0?:0?";

// Input example 3
// const time = "??:??";

// Input example 4
// const time = "07:?3";

// Input example 5
// const time = "2?:??";

// Input example 6
const time = "1?:?6";

var countTime = function(time) {
  let choices;

  for (let i = 0; i < time.length; i++) {
    const hoursAndMinutes = {
      0: time[1] < 4 ? 3 : 2,
      1: time[0] < 2 ? 10 : 4,
      3: 6,
      4: 10
    };

    if (time[i] === '?') {
      if (i < 2) {
        choices = choices ? 24 : hoursAndMinutes[i];
      }
      if (i > 2) {
        choices = hoursAndMinutes[i] * (choices ? choices : 1);
      }
    }
  }
  return choices ? choices : 1;
};

console.log(countTime(time));

/**
 * Accepted
 * Runtime: 59 ms, Beats 13.04% of users with JavaScript
 * Memory: 48.82 MB, Beats 30.43% of users with JavaScript
 */
