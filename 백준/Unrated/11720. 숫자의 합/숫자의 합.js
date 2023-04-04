const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let s = input[1];

let sum = 0;

for (let num of s) {
  sum += Number(num);
}

console.log(sum);
