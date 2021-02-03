/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(!root) {
       return null 
    }
    [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)] //解构赋值+递归
    return root

    //注意代码的规范性
   /*  if(!root) return null;
    [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
    return root */

};