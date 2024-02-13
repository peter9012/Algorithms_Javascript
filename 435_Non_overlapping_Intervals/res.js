// Define the function
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;
    
    intervals.sort((a, b) => a[1] - b[1]); // Sort intervals by end time
    
    let count = 0;
    let end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            count++; // Overlapping interval found
        } else {
            end = intervals[i][1]; // Update end time
        }
    }
    
    return count;
};

// Example usage
const intervals = [[1,2], [2,3], [3,4], [1,3]]; // Sample input
const result = eraseOverlapIntervals(intervals);
console.log("Minimum intervals to erase:", result); // Output: 1
