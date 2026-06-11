/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let leaf1 = [];
    let leaf2 = [];

    function traverse(node, res) {
        if (!node) return;

       traverse(node.left, res)
       if (!node.left && !node.right) {
        res.push(node.val)
       }
       traverse(node.right, res)
    }

    traverse(root1, leaf1);
    traverse(root2, leaf2);

    
    return leaf1.toString() === leaf2.toString()
};