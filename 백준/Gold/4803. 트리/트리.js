let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let line = 0;
let tc = 1;

while (true) {
  let [n, m] = input[line++].split(' ').map(Number);
  if (n === 0 && m === 0) break;

  let graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 1; i <= m; i++) {
    let [s, e] = input[line++].split(' ').map(Number);
    graph[s].push(e);
    graph[e].push(s);
  }
  let visited = new Array(n + 1).fill(false);
  let count = 0;

  function isCycle(s, prev) {
    visited[s] = true;
    for (let x of graph[s]) {
      if (visited[x]) {
        if (x === prev) continue;
        return true;
      }
      if (isCycle(x, s)) return true;
    }
    return false;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i] === false) {
      if (isCycle(i, 0) === false) count++;
    }
  }
  if (count === 0) console.log(`Case ${tc}: No trees.`);
  else if (count === 1) console.log(`Case ${tc}: There is one tree.`);
  else console.log(`Case ${tc}: A forest of ${count} trees.`);
  tc++;
}
