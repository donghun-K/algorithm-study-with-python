let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [];
const visited = new Array(n).fill(false);
const selected = [];
let answer = '';

for (let i = 1; i <= n; i++) arr.push(i);

function dfs(arr, depth) {
  if (depth === m) {
    answer += selected.join(' ') + '\n';
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (visited.includes(i)) continue;
    visited.push(i);
    selected.push(i);
    dfs(arr, depth + 1);
    visited.pop(i);
    selected.pop();
  }
}

dfs(arr, 0);

console.log(answer);
