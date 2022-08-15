
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var inorderTraversal = function(root) {
  let res=[];
  const dfs=function(root){
      if(root===null){
          return ;
      }
      dfs(root.left);
      res.push(root.val);
      dfs(root.right);
  }
  dfs(root);
  return res;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(3);
tree.left.right = new TreeNode(1);
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(3);

console.log(tree);
console.log(inorderTraversal(tree));