let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);
let q = input[1].split(' ').map(Number);

q.sort((a, b) => a - b);

let t = 0;

for (let i = 0; i < n; i++) {
  t += (n - i) * q[i];
}

console.log(t);
