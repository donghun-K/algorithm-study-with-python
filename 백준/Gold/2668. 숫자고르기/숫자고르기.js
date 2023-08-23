let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const graph = [0];

for (let i = 1; i <= n; i++) {
  graph.push(Number(input[i]));
}

const visited = Array(n + 1).fill(false);
const finished = Array(n + 1).fill(false);

function dfs(x) {
  if (finished[x]) return;
  // console.log('visit', x);
  visited[x] = true;
  let y = graph[x];
  // console.log('y', y);
  if (visited[y]) {
    while (x !== y) {
      finished[y] = true;
      // console.log(y, 'finished');
      y = graph[y];
    }
    finished[x] = true;
    // console.log(x, 'finished');
  } else if (!finished[y]) {
    dfs(y);
  }
  visited[x] = false;
}

for (let i = 1; i < n; i++) {
  if (!finished[i]) dfs(i);
}

// console.log(finished);

const answer = [];
finished.forEach((x, i) => {
  if (x) answer.push(i);
});
console.log(answer.length);
answer.forEach((x) => console.log(x));
