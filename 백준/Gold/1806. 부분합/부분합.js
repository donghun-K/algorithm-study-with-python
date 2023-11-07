const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const prefixSum = [0];

for (let i = 1; i <= N; i++) {
  prefixSum.push(prefixSum[i - 1] + A[i - 1]);
}

let shortest = Infinity;

let s = 0;
let e = 1;

while (e <= N) {
  if (prefixSum[e] - prefixSum[s] >= S) {
    shortest = Math.min(shortest, e - s);
    s++;
  } else e++;
}

console.log(shortest === Infinity ? 0 : shortest);
