let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);

const graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

const invited = Array(n + 1).fill(false);

for (let i = 2; i <= m + 1; i++) {
  const [f1, f2] = input[i].split(' ').map(Number);
  graph[f1].push(f2);
  graph[f2].push(f1);
}

let queue = [1];
let loop = 2;

invited[1] = true;

while (loop--) {
  const temp = [...queue];
  queue = [];
  for (const f1 of temp) {
    for (const f2 of graph[f1]) {
      if (invited[f2]) continue;
      invited[f2] = true;
      queue.push(f2);
    }
  }
}

console.log(invited.filter((f) => f).length - 1);
