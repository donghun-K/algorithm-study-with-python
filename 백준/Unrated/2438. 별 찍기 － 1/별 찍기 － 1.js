const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

for (let i = 0; i < n; i++) {
  console.log('*'.repeat(i + 1));
}