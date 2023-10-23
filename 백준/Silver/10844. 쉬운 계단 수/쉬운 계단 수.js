let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);

const dp = [null];

dp.push(Array(10).fill(1));
dp[1][0] = 0;

for (let i = 2; i <= N; i++) {
  dp.push(Array(10).fill(0));
  for (let j = 0; j < 10; j++) {
    if (j - 1 >= 0) {
      dp[i][j] += dp[i - 1][j - 1];
    }
    if (j + 1 < 10) {
      dp[i][j] += dp[i - 1][j + 1];
    }
    dp[i][j] %= Number(1e9);
  }
}

console.log(dp[N].reduce((acc, cur) => (acc + cur) % Number(1e9), 0));
