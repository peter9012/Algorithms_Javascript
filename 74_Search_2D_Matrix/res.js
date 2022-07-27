/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  let m = matrix.length;
  if (m == 0) return false;
  let n = matrix[0].length;
  
  let left = 0, right = m * n - 1;
  while (left <= right) {
    let pivotIdx = Math.floor((left + right) / 2);
    let pivotElement = matrix[Math.floor(pivotIdx/n)][pivotIdx%n];
    if (target == pivotElement)
      return true;
    else {
      if (target < pivotElement)
        right = pivotIdx - 1;
      else
        left = pivotIdx + 1;
      }
    }
   return false;
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]; 
let target = 3
console.log(searchMatrix(matrix,target));