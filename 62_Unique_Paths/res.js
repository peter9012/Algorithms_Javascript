/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Create an array to store the minimum cost to reach each step
    const dp = new Array(cost.length);
    
    // Base case: cost to reach the first and second step
    dp[0] = cost[0];
    dp[1] = cost[1];
    
    // Iterate through the remaining steps to calculate the minimum cost
    for (let i = 2; i < cost.length; i++) {
        // Minimum cost to reach the current step is the cost of the current step plus the minimum cost of reaching the previous two steps
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
    }
    
    // The minimum cost to reach the top is the minimum cost of reaching the last two steps
    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};
