const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let line = 0;
let count = 0;
const changes = Array(10001).fill(false);
const apples = [];
const graph = [];

// 상 우 하 좌
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

let curDirectionIndex = 1;

const changeDirection = (turn) => {
  let newIndex;
  if (turn === 'L') {
    newIndex = curDirectionIndex - 1;
    if (newIndex < 0) newIndex += 4;
  } else {
    newIndex = curDirectionIndex + 1;
    if (newIndex >= 4) newIndex -= 4;
  }
  curDirectionIndex = newIndex;
};

const N = Number(input[line++]);
const K = Number(input[line++]);

for (let i = 0; i < N; i++) {
  graph.push(Array(N).fill('empty'));
}

graph[0][0] = 'snake';

for (let i = 0; i < K; i++) {
  const [row, col] = input[line++].split(' ').map(Number);
  graph[row - 1][col - 1] = 'apple';
}

const L = Number(input[line++]);

for (let i = 0; i < L; i++) {
  const [t, d] = input[line++].split(' ');
  changes[Number(t)] = d;
}

let queue = [[0, 0]];

while (true) {
  count++;
  const [curRow, curCol] = queue[queue.length - 1];
  const newRow = curRow + dy[curDirectionIndex];
  const newCol = curCol + dx[curDirectionIndex];
  if (newRow < 0 || newRow >= N || newCol < 0 || newCol >= N) break;
  if (graph[newRow][newCol] === 'snake') break;
  if (graph[newRow][newCol] !== 'apple') {
    const [tailRow, tailCol] = queue.shift();
    graph[tailRow][tailCol] = 'empty';
  }
  graph[newRow][newCol] = 'snake';
  queue.push([newRow, newCol]);

  if (changes[count] !== false) {
    // console.log(changes[count]);
    changeDirection(changes[count]);
  }
  // console.log(graph.map((line) => line.join(' ')));
  // console.log('count', count);
  // console.log('curDirectionIndex', curDirectionIndex);
  // console.log();
}

console.log(count);
