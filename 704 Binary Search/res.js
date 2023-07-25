/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // right是数组最后一个数的下标+1，nums[right]不在查找范围内，是左闭右开区间
  let left = 0, right = nums.length;    
  // 当left=right时，由于nums[right]不在查找范围，所以不必包括此情况
  while (left < right) {
      let mid = left + Math.floor((right - left)/2);
      // 如果中间值大于目标值，中间值不应在下次查找的范围内，但中间值的前一个值应在；
      // 由于right本来就不在查找范围内，所以将右边界更新为中间值，如果更新右边界为mid-1则将中间值的前一个值也踢出了下次寻找范围
      if (nums[mid] > target) {
          right = mid;  // 去左区间寻找
      } else if (nums[mid] < target) {
          left = mid + 1;   // 去右区间寻找
      } else {
          return mid;
      }
  }
  return -1;
};