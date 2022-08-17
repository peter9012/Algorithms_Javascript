function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var preorderTraversal = function(root, res = []) {
  if(!root) return res;
  const stack = [root];
  let cur = null;
  while(stack.length) {
      cur = stack.pop();
      res.push(cur.val);
      cur.right && stack.push(cur.right);
      cur.left && stack.push(cur.left);
  }
  return res;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(3);
tree.left.right = new TreeNode(1);
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(3);

console.log(tree);
console.log(preorderTraversal(tree));