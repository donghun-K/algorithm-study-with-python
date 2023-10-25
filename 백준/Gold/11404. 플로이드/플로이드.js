let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);

const graph = [null];

for (let i = 0; i < n; i++) {
  const row = [null];
  for (let j = 0; j < n; j++) {
    row.push(i === j ? 0 : Infinity);
  }
  graph.push(row);
}

for (let line = 2; line < m + 2; line++) {
  const [a, b, c] = input[line].split(' ').map(Number);
  graph[a][b] = Math.min(graph[a][b], c);
}

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const cost = graph[a][k] + graph[k][b];
      graph[a][b] = Math.min(graph[a][b], cost);
    }
  }
}

for (let i = 1; i <= n; i++) {
  const buffer = [];
  for (let j = 1; j <= n; j++) {
    buffer.push(graph[i][j] === Infinity ? 0 : graph[i][j]);
  }
  console.log(buffer.join(' '));
}
