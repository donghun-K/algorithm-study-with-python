let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let N = Number(input[0]);

const dp = [[0, 0, 0]];

for (let line = 1; line <= N; line++) {
  const rgb = input[line].split(' ').map(Number);
  dp.push([]);
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      dp[line][0] = Math.min(dp[line - 1][1], dp[line - 1][2]) + rgb[0];
    } else if (i === 1) {
      dp[line][1] = Math.min(dp[line - 1][0], dp[line - 1][2]) + rgb[1];
    } else {
      dp[line][2] = Math.min(dp[line - 1][0], dp[line - 1][1]) + rgb[2];
    }
  }
}

console.log(Math.min(...dp[N]));
