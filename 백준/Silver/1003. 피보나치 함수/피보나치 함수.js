const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let line = 0;
let T = Number(input[line++]);

const dp = Array(41).fill(undefined);
dp[0] = [1, 0];
dp[1] = [0, 1];

const fibo = (x) => {
  if (dp[x] !== undefined) {
    return dp[x];
  }
  const [x1, y1] = fibo(x - 2);
  const [x2, y2] = fibo(x - 1);
  dp[x] = [x1 + x2, y1 + y2];
  return dp[x];
};

while (T--) {
  let N = Number(input[line++]);
  console.log(fibo(N).join(' '));
}
