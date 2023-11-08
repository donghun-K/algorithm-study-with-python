let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [r, c] = input[0].split(' ').map(Number);

const graph = [];

for (let i = 1; i <= r; i++) {
  graph.push([...input[i].trim()]);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const visited = {};
let maxDepth = 1;

function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (visited[graph[nx][ny]]) continue;

    visited[graph[nx][ny]] = true;
    dfs(depth + 1, nx, ny);
    visited[graph[nx][ny]] = false;
  }
}

visited[graph[0][0]] = true;
dfs(1, 0, 0);

console.log(maxDepth);
