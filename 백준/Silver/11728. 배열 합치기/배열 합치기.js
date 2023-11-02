const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let combined = [];

let p1 = 0;
let p2 = 0;

while (p1 < N && p2 < M) {
  if (A[p1] < B[p2]) {
    combined.push(A[p1]);
    p1++;
  } else {
    combined.push(B[p2]);
    p2++;
  }
}

if (p1 === N) {
  while (p2 < M) {
    combined.push(B[p2]);
    p2++;
  }
} else {
  while (p1 < N) {
    combined.push(A[p1]);
    p1++;
  }
}

console.log(combined.join(' '));
