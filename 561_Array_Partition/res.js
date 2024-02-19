/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let totalSum = 0;
    
    // Iterate through the sorted array, selecting every second number
    for (let i = 0; i < nums.length; i += 2) {
        totalSum += nums[i];
    }
    
    return totalSum;
};