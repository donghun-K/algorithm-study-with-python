let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let t = Number(input[0]);
let line = 1;

const bfs = (x, graph, visited) => {
  let queue = [];
  queue.push(x);
  visited[x] = 0;
  while (queue.length > 0) {
    y = queue.pop();
    for (const z of graph[y]) {
      if (!visited[z]) {
        visited[z] = (visited[y] + 1) % 2;
        queue.push(z);
      }
    }
  }
};

const isBiapartite = (graph, visited) => {
  for (let x = 1; x < visited.length; x++) {
    for (const y of graph[x]) if (visited[x] === visited[y]) return false;
  }
  return true;
};

while (t--) {
  const [v, e] = input[line++].split(' ').map(Number);

  const graph = [];

  for (let i = 1; i <= v; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < e; i++) {
    const [s, e] = input[line++].split(' ').map(Number);
    graph[s].push(e);
    graph[e].push(s);
  }

  const visited = Array(v + 1).fill(false);

  for (let i = 1; i <= v; i++) {
    if (!visited[i]) {
      bfs(i, graph, visited);
    }
  }

  if (isBiapartite(graph, visited)) console.log('YES');
  else console.log('NO');
}
