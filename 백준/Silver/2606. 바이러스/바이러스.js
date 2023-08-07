let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);

const table = [null];

for (let i = 0; i < n; i++) {
  table.push([]);
}

for (let i = 2; i < m + 2; i++) {
  const [s, e] = input[i].split(' ').map(Number);
  table[s].push(e);
  table[e].push(s);
}
const visited = Array(n + 1).fill(false);

let count = 0;

function dfs(v) {
  const s = [];
  s.push(v);
  while (s.length > 0) {
    v = s.pop();
    if (visited[v]) continue;
    visited[v] = true;
    count++;
    for (let x of table[v]) {
      if (visited[x] === false) s.push(x);
    }
  }
}

dfs(1);

console.log(count - 1);
