/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    let dp = []
    //初始化
    dp[0] = 1
    dp[1] = 1
    for(let i = 2; i <=n; i++) {
        //dp状态转移方程
        dp[i] = dp[i - 1] + dp[i - 2]
        dp[i] > 1000000007? dp[i] = dp[i] % 1000000007 : dp[i] = dp[i]
    }
    return dp[n]
  }