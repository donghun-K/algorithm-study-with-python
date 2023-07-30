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
    if (selected[selected.length - 1] > i) continue;
    if (visited[i - 1]) continue;
    visited[i - 1] = true;
    selected.push(i);
    dfs(arr, depth + 1);
    visited[i - 1] = false;
    selected.pop();
  }
}

dfs(arr, 0);

console.log(answer);
