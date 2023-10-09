let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, L, R] = input[0].split(' ').map(Number);

const graph = [];

for (let line = 1; line <= N; line++) {
  graph.push(input[line].split(' ').map(Number));
}

// console.log('graph', graph);

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let count = 0;

while (true) {
  let moved = false;
  const visited = [];
  for (let i = 0; i < N; i++) {
    visited.push(Array(N).fill(false));
  }

  // console.log('visited', visited);

  const bfs = (row, col) => {
    let sum = graph[row][col];
    const allied = [[row, col]];
    const queue = [[row, col]];
    visited[row][col] = true;

    while (queue.length > 0) {
      const [row, col] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const newRow = row + dy[i];
        const newCol = col + dx[i];
        if (newRow < 0 || newRow >= N || newCol < 0 || newCol >= N) continue;
        if (visited[newRow][newCol]) continue;
        const diff = Math.abs(graph[row][col] - graph[newRow][newCol]);
        if (diff >= L && diff <= R) {
          queue.push([newRow, newCol]);
          allied.push([newRow, newCol]);
          sum += graph[newRow][newCol];
          visited[newRow][newCol] = true;
          moved = true;
        }
      }
    }

    let avg = Math.floor(sum / allied.length);
    for (const [row, col] of allied) {
      graph[row][col] = avg;
    }
  };

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (visited[row][col]) continue;
      bfs(row, col);
    }
  }

  if (moved) count++;
  else break;
}

console.log(count);
