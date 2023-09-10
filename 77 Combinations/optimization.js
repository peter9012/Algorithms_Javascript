/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const result = [];
  
  function backtrack(start, currentCombo) {
    if (currentCombo.length === k) {
      result.push([...currentCombo]);
      return;
    }
    
    // Optimize: Only continue if there are enough remaining elements to form a combination.
    if (currentCombo.length + (n - start + 1) < k) {
      return;
    }
    
    for (let i = start; i <= n; i++) {
      currentCombo.push(i);
      backtrack(i + 1, currentCombo);
      currentCombo.pop();
    }
  }
  
  backtrack(1, []);
  
  return result;
};

const n = 4;
const k = 2;
const combinations = combine(n, k);
console.log(combinations);
