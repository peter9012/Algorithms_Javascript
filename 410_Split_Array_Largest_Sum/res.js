function splitArray(nums, m) {
    let left = 0; // Initialize the left boundary
    let right = 0; // Initialize the right boundary
    
    // Calculate the range of possible values for the largest sum
    for (let num of nums) {
        left = Math.max(left, num); // Update the left boundary
        right += num; // Update the right boundary
    }
    
    // Perform binary search
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2); // Calculate the potential largest sum
        let count = 1; // Initialize the count of subarrays
        let sum = 0; // Initialize the sum of current subarray
        
        // Greedily split the array to minimize the largest sum
        for (let num of nums) {
            if (sum + num > mid) {
                count++; // Increment the count of subarrays
                sum = num; // Start a new subarray
            } else {
                sum += num; // Add the current number to the current subarray
            }
        }
        
        // Adjust the search range based on the count of subarrays
        if (count > m) {
            left = mid + 1; // Update the left boundary
        } else {
            right = mid; // Update the right boundary
        }
    }
    
    return left; // Return the result
}
