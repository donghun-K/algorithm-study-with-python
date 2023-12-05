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
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [[root, 1]];
  let max = 0;
  while (queue.length > 0) {
    const [node, depth] = queue.shift();
    max = Math.max(max, depth);
    if (!!node.left) queue.push([node.left, depth + 1]);
    if (!!node.right) queue.push([node.right, depth + 1]);
  }
  return max;
};
