let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const virusTable = [];
let queue = [];

for (let row = 0; row < N; row++) {
  const arr = input[row + 1].split(' ').map(Number);
  virusTable.push(arr);
  for (let col = 0; col < N; col++) {
    const virusNum = arr[col];
    if (virusNum === 0) continue;
    queue.push([virusNum, [row, col]]);
  }
}

queue.sort((a, b) => {
  return a[0] - b[0];
});

// console.log(virusTable);
// console.log(queue);

const [S, X, Y] = input[N + 1].split(' ').map(Number);
let count = 0;
while (count < S) {
  count++;
  const temp = [...queue];
  queue = [];
  for (const [virusNum, [row, col]] of temp) {
    for (let i = 0; i < 4; i++) {
      const newRow = row + dy[i];
      const newCol = col + dx[i];
      if (newRow < 0 || newRow >= N || newCol < 0 || newCol >= N) continue;
      if (virusTable[newRow][newCol] !== 0) continue;
      virusTable[newRow][newCol] = virusNum;
      queue.push([virusNum, [newRow, newCol]]);
    }
  }
}
// console.log(virusTable);

console.log(virusTable[X - 1][Y - 1]);
