const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let count = 0;
let start = 0;
let end = 0;

let sum = A[0];

while (end < N) {
  if (sum === M) {
    count++;
    end++;
    if (end < N) sum += A[end];
  } else if (sum < M) {
    end++;
    if (end < N) sum += A[end];
  } else {
    sum -= A[start];
    start++;
  }
}

console.log(count);
