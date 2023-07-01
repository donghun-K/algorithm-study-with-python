let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let count = 0;
let flag = false;

while (n >= 0) {
  if (n % 5 === 0) {
    count += parseInt(n / 5);
    flag = true;
    break;
  }
  n -= 3;
  count++;
}

if (!flag) {
  count = -1;
}

console.log(count);
