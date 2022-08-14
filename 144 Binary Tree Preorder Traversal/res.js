function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root) {
  let res=[];
  const dfs=function(root){
    if(root===null)return ;
    res.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return res;    
};

const tree = new TreeNode(1, new TreeNode(3,null,new TreeNode(1)), new TreeNode(2,new TreeNode(3),null));
console.log(tree);
console.log(preorderTraversal(tree));