let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const OPERATOR = ['+', '-', '*', '/'];
const opers = [];

input[2]
  .split(' ')
  .map(Number)
  .forEach((x, i) => {
    for (let j = 0; j < Number(x); j++) {
      opers.push(OPERATOR[i]);
    }
  });

const visited = Array(n - 1).fill(false);

let minVal = Infinity;
let maxVal = -Infinity;

const calc = (x, y, op) => {
  switch (op) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return ~~(x / y);
  }
};

const dfs = (depth, prev) => {
  if (depth === n - 1) {
    // console.log('prev', prev);
    minVal = Math.min(minVal, prev);
    maxVal = Math.max(maxVal, prev);
    return;
  }
  if (depth === 0) prev = arr[0];
  for (let i = 0; i < n - 1; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    // console.log(prev, opers[i], arr[depth + 1]);
    const result = calc(prev, arr[depth + 1], opers[i]);
    // console.log(result);
    dfs(depth + 1, result);
    visited[i] = false;
  }
};

dfs(0, 0);

console.log(maxVal);
console.log(minVal);
