/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals based on the start value
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let previous = merged[merged.length - 1];

        // If there's an overlap, merge the intervals
        if (current[0] <= previous[1]) {
            previous[1] = Math.max(previous[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
};