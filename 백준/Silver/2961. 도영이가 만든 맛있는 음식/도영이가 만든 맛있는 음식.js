let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const ingredients = [];
const visited = Array(n).fill(false);
const selected = [];

let minValue = Infinity;
let totalS = 1;
let totalB = 0;

for (let i = 1; i <= n; i++) {
  ingredients.push(input[i].split(' ').map(Number));
}

function dfs(depth) {
  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    const [s, b] = ingredients[i];

    selected.push(i);
    visited[i] = true;
    totalS *= s;
    totalB += b;

    minValue = Math.min(Math.abs(totalS - totalB), minValue);

    dfs(depth + 1);

    selected.pop();
    visited[i] = false;
    totalS /= s;
    totalB -= b;
  }
  if (depth === n) {
    return;
  }
}

dfs(0);

console.log(minValue);
