let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let N = Number(input[0]);

const dp = [];
const triagle = [];

for (let line = 1; line <= N; line++) {
  triagle.push(input[line].split(' ').map(Number));
  dp.push(Array(line).fill(null));
}

dp[0][0] = triagle[0][0];

for (let depth = 1; depth < N; depth++) {
  for (let i = 0; i < dp[depth].length; i++) {
    dp[depth][i] =
      Math.max(dp[depth - 1][i - 1] ?? 0, dp[depth - 1][i] ?? 0) +
      triagle[depth][i];
  }
}

console.log(Math.max(...dp[N - 1]));
