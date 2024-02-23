/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    // Convert the number to an array of digits
    let digits = Array.from(String(N), Number);
    let n = digits.length;
    let pivot = n;
    
    // Find the pivot point where the digits start decreasing
    for (let i = n - 1; i > 0; i--) {
        if (digits[i - 1] > digits[i]) {
            pivot = i;
            digits[i - 1]--;
        }
    }
    
    // Set all digits after the pivot to 9
    for (let i = pivot; i < n; i++) {
        digits[i] = 9;
    }
    
    // Adjust digits before the pivot to maintain monotone increasing order
    for (let i = pivot - 1; i > 0; i--) {
        if (digits[i - 1] > digits[i]) {
            digits[i - 1]--;
            digits[i] = 9;
        }
    }
    
    // Convert the array of digits back to a number
    return parseInt(digits.join(''));
};
