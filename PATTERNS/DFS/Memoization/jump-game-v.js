// 1340-jump-game-v
/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
    const n = arr.length;
    const dp = new Array(n).fill(-1);

    function dfs(i) {
        // already calculated
        if (dp[i] !== -1) return dp[i];

        let ans = 1; // count current index

        // check left side
        for (let j = i - 1; j >= Math.max(0, i - d); j--) {
            // stop if blocked
            if (arr[j] >= arr[i]) break;

            ans = Math.max(ans, 1 + dfs(j));
        }

        // check right side
        for (let j = i + 1; j <= Math.min(n - 1, i + d); j++) {
            // stop if blocked
            if (arr[j] >= arr[i]) break;

            ans = Math.max(ans, 1 + dfs(j));
        }

        dp[i] = ans;
        return ans;
    }

    let result = 1;

    for (let i = 0; i < n; i++) {
        result = Math.max(result, dfs(i));
    }

    return result;
};