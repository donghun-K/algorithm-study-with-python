let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

let line = 1;

const dfs = (x, graph, visited, finished, result) => {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    while (y != x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
};

for (let i = 0; i < n; i++) {
  const t = Number(input[line++]);
  const graph = [0, ...input[line++].split(' ').map(Number)];
  const visited = new Array(t + 1).fill(false);
  const finished = new Array(t + 1).fill(false);
  const result = [];

  for (let x = 1; x <= t; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }

  console.log(t - result.length);
}
