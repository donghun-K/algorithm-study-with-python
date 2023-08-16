let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const chickens = [];
const houses = [];

for (let i = 0; i < n; i++) {
  let line = input[i + 1].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] === 0) continue;
    else if (line[j] === 1) houses.push([i, j]);
    else chickens.push([i, j]);
  }
}

const selected = [];
const visited = new Array(chickens.length).fill(false);

let answer = Infinity;

function dfs(start, depth) {
  if (depth === m) {
    let total = 0;
    for (let x of houses) {
      let [a1, b1] = x;
      let minDist = Infinity;
      for (let y of selected) {
        let [a2, b2] = chickens[y];
        minDist = Math.min(minDist, Math.abs(a1 - a2) + Math.abs(b1 - b2));
      }
      total += minDist;
    }
    answer = Math.min(answer, total);
  }

  for (let i = start; i < chickens.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(i + 1, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0, 0);

console.log(answer);
