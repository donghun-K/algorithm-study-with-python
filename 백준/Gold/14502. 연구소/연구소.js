let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [height, width] = input[0].split(' ').map(Number);

const map = [];
const newMap = [];

for (let i = 1; i <= height; i++) {
  map.push(input[i].split(' ').map(Number));
  newMap.push(new Array(width).fill(0));
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let result = 0;

function spreadVirus(row, col) {
  for (let i = 0; i < 4; i++) {
    let nCol = col + dx[i];
    let nRow = row + dy[i];
    if (nCol < 0 || nCol >= width || nRow < 0 || nRow >= height) continue;
    if (newMap[nRow][nCol] === 0) {
      newMap[nRow][nCol] = 2;
      spreadVirus(nRow, nCol);
    }
  }
}

function getSafeCount() {
  let count = 0;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (newMap[row][col] === 0) {
        count++;
      }
    }
  }
  return count;
}

function dfs(depth) {
  if (depth === 3) {
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        newMap[row][col] = map[row][col];
      }
    }
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        if (newMap[row][col] === 2) {
          spreadVirus(row, col);
        }
      }
    }
    result = Math.max(result, getSafeCount());
    return;
  }
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (map[row][col] === 0) {
        map[row][col] = 1;
        dfs(depth + 1);
        map[row][col] = 0;
      }
    }
  }
}

dfs(0);

console.log(result);