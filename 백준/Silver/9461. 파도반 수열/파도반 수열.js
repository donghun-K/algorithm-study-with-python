let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let T = Number(input[0]);

let line = 1;

const dp = Array(100).fill(false);
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;

while (T--) {
  const N = Number(input[line++]);
  if (!dp[N - 1])
    for (let i = 3; i < N; i++) {
      if (dp[i]) continue;
      dp[i] = dp[i - 3] + dp[i - 2];
    }

  console.log(dp[N - 1]);
}
