let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);
const dp = Array(N).fill(0);
const wines = [];

for (let line = 1; line <= N; line++) {
  wines.push(Number(input[line]));
}

dp[0] = wines[0];
dp[1] = wines[0] + wines[1];
dp[2] = Math.max(wines[0] + wines[1], wines[0] + wines[2], wines[1] + wines[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    wines[i] + dp[i - 2],
    wines[i] + wines[i - 1] + dp[i - 3]
  );
}

console.log(dp[N - 1]);
