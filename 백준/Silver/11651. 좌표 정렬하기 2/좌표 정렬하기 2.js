const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const points = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  points.push([x, y]);
}

points.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = '';

points.forEach(([x, y]) => {
  answer += x + ' ' + y + '\n';
});

console.log(answer);