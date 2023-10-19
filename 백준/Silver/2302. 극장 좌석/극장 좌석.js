let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);

const vips = Array(N).fill(false);

let line = 2;
for (let i = 0; i < M; i++) {
  vips[Number(input[line++]) - 1] = true;
}

const dp = Array(N).fill(0);
dp[0] = 1;
dp[1] = 2;

for (let i = 2; i < N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] * 1;
}

const blocks = [];
let count = -1;

for (let i = 0; i < N; i++) {
  if (vips[i]) {
    blocks.push(count);
    count = -1;
    continue;
  }
  count++;
}
blocks.push(count);

let sum = 1;

blocks.forEach((x) => {
  if (x !== -1) sum *= dp[x];
});

console.log(sum);
