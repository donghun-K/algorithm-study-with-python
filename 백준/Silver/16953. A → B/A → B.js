let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let count = 1;
let flag = false;

while (b >= a) {
  if (a === b) {
    flag = true;
    break;
  }
  if (b % 2 === 0) {
    b = Math.floor(b / 2);
  } else if (b % 10 === 1) {
    b = Math.floor(b / 10);
  } else {
    break;
  }
  count++;
}

if (!flag) count = -1;

console.log(count);
