/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] != nums[i]) 
          nums[++i] = nums[j];
  }
  return ++i;
};

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));