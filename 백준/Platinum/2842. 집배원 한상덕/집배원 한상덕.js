const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);
const townMap = [];
const heights = [];

for (let i = 1; i <= N; i++) {
  townMap.push(input[i].split(''));
}
for (let i = N + 1; i <= N + N; i++) {
  heights.push(input[i].split(' ').map(Number));
}

let uniqueHeights = new Set();
let kCount = 0;
let result = Infinity;
let startRow;
let startCol;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    uniqueHeights.add(heights[i][j]);
    if (townMap[i][j] === 'P') {
      startRow = i;
      startCol = j;
    }
    if (townMap[i][j] === 'K') kCount++;
  }
}

uniqueHeights = [...uniqueHeights].sort((a, b) => a - b);

let left = 0;
let right = 0;
let middle = 0;

for (let i = 0; i < uniqueHeights.length; i++) {
  if (uniqueHeights[i] === heights[startRow][startCol]) {
    right = i;
    middle = i;
    break;
  }
}

const dRow = [-1, -1, 0, 1, 1, 1, 0, -1];
const dCol = [0, 1, 1, 1, 0, -1, -1, -1];

let visited;
let count = 0;

const dfs = (row, col) => {
  visited[row][col] = true;
  if (townMap[row][col] === 'K') count++;
  for (let i = 0; i < 8; i++) {
    let nRow = row + dRow[i];
    let nCol = col + dCol[i];
    if (nRow < 0 || nRow >= N || nCol < 0 || nCol >= N) continue;
    if (visited[nRow][nCol]) continue;
    if (
      heights[nRow][nCol] >= uniqueHeights[left] &&
      heights[nRow][nCol] <= uniqueHeights[right]
    ) {
      dfs(nRow, nCol);
    }
  }
};

while (true) {
  while (true) {
    visited = [];
    for (let i = 0; i < N; i++) visited.push(Array(N).fill(false));
    count = 0;
    dfs(startRow, startCol);
    if (right < uniqueHeights.length - 1 && count < kCount) right += 1;
    else break;
  }
  if (count === kCount) {
    result = Math.min(result, uniqueHeights[right] - uniqueHeights[left]);
  }
  left++;
  if (left > middle || right >= uniqueHeights) break;
}

console.log(result);
