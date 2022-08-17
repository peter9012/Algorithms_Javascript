function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var inorderTraversal = function(root, res = []) {
  const stack = [];
  let cur = root;
  while(stack.length || cur) {
      if(cur) {
          stack.push(cur);
          // 左
          cur = cur.left;
      } else {
          // --> 弹出 中
          cur = stack.pop();
          res.push(cur.val); 
          // 右
          cur = cur.right;
      }
  };
  return res;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(3);
tree.left.right = new TreeNode(1);
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(3);

console.log(tree);
console.log(inorderTraversal(tree));