const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(' ').map(Number));
}

const K = Number(input[N + 1]);

const prefixSum = [];
for (let i = 0; i <= N; i++) {
  prefixSum.push(Array(M + 1).fill(0));
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    prefixSum[i][j] =
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1] +
      arr[i - 1][j - 1];
  }
}

for (let line = N + 2; line < N + 2 + K; line++) {
  const [i, j, x, y] = input[line].split(' ').map(Number);
  console.log(
    prefixSum[x][y] -
      prefixSum[i - 1][y] -
      prefixSum[x][j - 1] +
      prefixSum[i - 1][j - 1]
  );
}
