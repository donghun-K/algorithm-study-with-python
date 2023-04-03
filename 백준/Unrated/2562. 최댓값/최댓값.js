const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = 0;
let index;

for (let i = 0; i < 9; i++) {
  const num = Number(input[i]);
  if (num > max) {
    max = num;
    index = i + 1;
  }
}

console.log(max);
console.log(index);
