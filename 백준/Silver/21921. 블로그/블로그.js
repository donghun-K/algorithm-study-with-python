const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, X] = input[0].split(' ').map(Number);

let max = 0;
let sum = 0;
const visitors = input[1].split(' ').map(Number);

for (let i = 0; i < X; i++) {
  sum += visitors[i];
}

max = sum;

let count = 1;

for (let i = 0; i < N - X; i++) {
  sum -= visitors[i];
  sum += visitors[i + X];
  if (sum > max) {
    count = 1;
    max = sum;
  } else if (sum === max) {
    count++;
  }
}

if (max === 0) {
  console.log('SAD');
} else {
  console.log(max);
  console.log(count);
}
