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
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;

    function traverse(node, prevVal) {
        if (!node) return;
        
        let val = node.val;

        if (val >= prevVal) {
            count++
            prevVal = val
        }

        traverse(node.left, prevVal)
        traverse(node.right, prevVal)
        
    }

    traverse(root, -Infinity)

    return count;
};