const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let result = '';

for (let i = 0; i < n; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  result += `${a + b}\n`;
}

console.log(result);