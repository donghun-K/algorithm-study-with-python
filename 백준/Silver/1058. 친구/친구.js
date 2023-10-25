let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const friends = Array(n)
  .fill(true)
  .map((_) => new Set());

const graph = [];
for (let i = 1; i <= n; i++) {
  const row = [...input[i].trim()];
  graph.push(row);

  row.forEach((x, idx) => {
    if (x === 'Y') {
      friends[i - 1].add(idx);
    }
  });
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (graph[i][k] === 'Y' && graph[k][j] === 'Y') {
        friends[i].add(j);
      }
    }
  }
}

console.log(Math.max(...friends.map((set) => set.size)));
