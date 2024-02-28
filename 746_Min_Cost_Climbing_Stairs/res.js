var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    
    // Initialize an array to store the minimum cost to reach each step
    const dp = new Array(n);
    
    // Base cases
    dp[0] = cost[0];
    dp[1] = cost[1];
    
    // Iterate through the remaining steps
    for (let i = 2; i < n; i++) {
        // The minimum cost to reach step i is the cost of step i plus the minimum cost to reach either step i-1 or step i-2
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    
    // The minimum cost to reach the top is the minimum of the costs of the last two steps
    return Math.min(dp[n - 1], dp[n - 2]);
};

const cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost)); // Output: 15