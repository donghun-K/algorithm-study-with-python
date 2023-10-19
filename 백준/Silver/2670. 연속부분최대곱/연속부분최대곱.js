let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);

const nums = [];
const dp = Array(N).fill(0);

let line = 1;

let loop = N;
while (loop--) {
  nums.push(Number(input[line++]));
}

dp[0] = nums[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(nums[i], dp[i - 1] * nums[i]);
}

console.log(Math.max(...dp).toFixed(3));
