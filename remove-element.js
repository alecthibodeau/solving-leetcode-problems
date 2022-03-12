/*
  27. Remove Element
  Run locally: $ node remove-element.js
 */

const nums = [1, 2, 3, 3, 3, 4, 5, 6, 3];
const val = 3;

var removeElement = function(nums, val) {
    let moveCount = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1)[0];
            nums.push('_');
            moveCount++;
        }
    }
    return nums.length - moveCount;
};

console.log(removeElement(nums, val));
