/**
 * 925. Long Pressed Name
 * Run locally: $ node long-pressed-name.js
 */

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

// Input example 1
// const name = "alex";
// const typed = "aaleex";

// Input example 2
// const name = "saeed";
// const typed = "ssaaedd";

// Input example 3
const name = "alexd";
const typed = "ale";

var isLongPressedName = function(name, typed) {
  let typedFormatted = '';
  let j = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[j]) {
      typedFormatted += typed[i];
      j++;
    } else if (typed[i] !== name[j - 1]) {
      return false;
    }
  }
  return typedFormatted === name;
};

console.log(isLongPressedName(name, typed));
