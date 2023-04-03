const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let array = input[1].split(' ').map(Number);

let [min, max] = [1_000_000, -1_000_000];

for (let i = 0; i < n; i++) {
  let num = array[i];
  if (num < min) min = num;
  if (num > max) max = num;
}

console.log(min, max);

