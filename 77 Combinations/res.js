function combine(n, k) {
  const result = [];
  
  function backtrack(start, currentCombo) {
    if (currentCombo.length === k) {
      result.push([...currentCombo]);
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
}

// Example usage:
const n = 4;
const k = 2;
const combinations = combine(n, k);
console.log(combinations);