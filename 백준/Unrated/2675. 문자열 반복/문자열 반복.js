const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let [a, b] = input[i].split(' ');
  a = Number(a);
  let line = '';
  for (let l of b) {
    line += String(l).repeat(a);
  }
  console.log(line);
}
