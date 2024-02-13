function TwoSum(nums: number[], target: number): number[] {
  const numToIndexMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numToIndexMap.has(complement)) {
          return [numToIndexMap.get(complement)!, i];
      }
      numToIndexMap.set(nums[i], i);
  }

  throw new Error('No two numbers found that add up to the target.');
}

const num = [2, 7, 11, 15];
const tar = 22;
console.log(TwoSum(num, tar));