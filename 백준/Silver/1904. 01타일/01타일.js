const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);
// N = 1일 때
// 1
// N = 2일 때
// 00, 11
// N = 3일 때
// 001, 100, 111
// N = 4일 때
// 0011, 0000, 1001, 1100, 1111
// N = 5일 때
// 00111 10011 11001 11100 11111 00001 10000 00100

const dp = Array(N + 1).fill(null);
dp[1] = 1;
dp[2] = 2;

// const getNumOfCases = (x) => {
//   if (dp[x] !== null) {
//     return dp[x];
//   }
//   dp[x] = getNumOfCases(x - 1) + getNumOfCases(x - 2);
//   return dp[x];
// };

// console.log(getNumOfCases(N));
for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[N]);

