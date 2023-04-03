const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(Number);
  let m = line[0];
  let avg = line.slice(1).reduce((a, b) => a + b) / m;
  let cnt = 0;
  for (let j = 1; j <= m; j++) {
    if (line[j] > avg) cnt++;
  }
  console.log(`${((cnt / m) * 100).toFixed(3)}%`);
}