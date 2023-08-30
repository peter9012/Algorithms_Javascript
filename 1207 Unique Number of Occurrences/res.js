/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const numFrequency = new Map();

// Count the frequency of each number
for (const num of arr) {
  if (numFrequency.has(num)) {
      numFrequency.set(num, numFrequency.get(num) + 1);
  } else {
      numFrequency.set(num, 1);
  }
}

const frequencySet = new Set();

// Check if the frequency of occurrences is unique
for (const freq of numFrequency.values()) {
  if (frequencySet.has(freq)) {
      return false;
  }
  frequencySet.add(freq);
}

return true;
};