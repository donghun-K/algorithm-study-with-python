const { SlowBuffer } = require('buffer');
const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);

const dp = Array(N + 1).fill(0);

dp[1] = 0;
dp[2] = 1;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
}

console.log(dp[N]);