/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var moveZeroes = function(nums) {
  var pos = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
    }
  }
  for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

const nums = [0,1,2,2,3,0,4,2];
console.log(moveZeroes(nums));