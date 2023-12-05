/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
  const LCA = (node) => {
    if (!node) return null;

    const left = LCA(node.left);
    const right = LCA(node.right);

    if (node === p || node === q) return node;
    else if (!!left && !!right) return node;
    else if (left ?? right) return left ?? right;
    else return null;
  };

  return LCA(root);
};