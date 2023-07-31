let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const table = [];
const selected = [];
const visited = Array(n).fill(false);
let minCost = Infinity;

for (let i = 1; i <= n; i++) {
  table.push(input[i].split(' ').map(Number));
}

function dfs(depth) {
  if (depth === n - 1) {
    let totalCost = 0;
    const path = [0, ...selected, 0];
    for (let i = 0; i < n; i++) {
      let cost = table[path[i]][path[i + 1]];
      if (cost === 0) return;
      totalCost += cost;
    }
    minCost = Math.min(minCost, totalCost);
  }
  for (let i = 1; i < n; i++) {
    if (visited[i] === true) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0);

console.log(minCost);