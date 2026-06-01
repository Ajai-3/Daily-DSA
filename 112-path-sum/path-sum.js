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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let sum = 0;
    let found = false;

    function traverse(node) {
       if (!node) return sum === targetSum

        sum += node.val;

       if (!node.left && !node.right) {
        if (sum === targetSum) {
            found = true;
            return
        }
       }

       traverse(node.left)
       traverse(node.right)

       sum -= node.val
    }

    traverse(root)

    return found;
};