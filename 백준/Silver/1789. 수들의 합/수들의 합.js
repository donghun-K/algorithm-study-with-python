let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let s = Number(input[0]);
let sum = 0;

let i = 1;
while (sum < s) {
  sum += i;
  i++;
}

if (sum !== s) {
  i--;
}

console.log(i - 1);
