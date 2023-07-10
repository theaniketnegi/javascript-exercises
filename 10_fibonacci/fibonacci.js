const fibonacci = function(n) {
    if(n<0)
        return "OOPS";
    let dp = [0,1];
    for(let i = 1; i<n; i++){
        dp.push(dp[i]+dp[i-1]);
    }
    return dp[n];
};

// Do not edit below this line
module.exports = fibonacci;
