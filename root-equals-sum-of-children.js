/**
 * 2236. Root Equals Sum of Children
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Input example 1
// const root = [10,4,6];

// Input example 2
const root = [5,3,1];

var checkTree = function(root) {
  return root.val === root.left.val + root.right.val;
};

console.log(checkTree(root));
