let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, M, H] = input[0].split(' ').map(Number);

const students = [null];

for (let i = 1; i <= N; i++) {
  students.push([0, ...input[i].split(' ').map(Number)]);
}

// console.log(students);

const dp = [];
for (let i = 0; i <= N; i++) {
  const arr = Array(H + 1).fill(0);
  dp.push(arr);
}
dp[0][0] = 1;

// console.log(dp);

for (let i = 1; i <= N; i++) {
  const blocks = students[i];
  for (let j = 0; j <= H; j++) {
    if (dp[i - 1][j] === 0) continue;
    blocks.forEach((x) => {
      if (j + x > H) return;
      dp[i][j + x] = (dp[i][j + x] + dp[i - 1][j]) % 10007;
    });
  }
  // console.log(dp);
}

console.log(dp[N][H]);