let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const k = Number(input[0]);
const signs = input[1].split(' ');
const selected = [];
const results = [];
function dfs(depth) {
  if (depth === k + 1) {
    results.push(selected.join(''));
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (selected.includes(i)) continue;
    if (depth !== 0) {
      if (!eval(`${selected[depth - 1]}${signs[depth - 1]}${i}`)) continue;
    }
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
  }
}

dfs(0);

console.log(results[results.length - 1]);
console.log(results[0]);
