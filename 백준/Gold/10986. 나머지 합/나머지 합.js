const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const prefixSum = [];
const counter = {
  0: 1,
};

for (let i = 0; i < N; i++) {
  if (i === 0) prefixSum.push(A[i]);
  else prefixSum.push(prefixSum[i - 1] + A[i]);
}

for (let i = 0; i < N; i++) {
  let processed = prefixSum[i] % M;
  if (processed in counter) counter[processed] += 1;
  else counter[processed] = 1;
}

let result = 0;

for (let i = 0; i < M; i++) {
  if (i in counter) result += parseInt((counter[i] * (counter[i] - 1)) / 2);
}

console.log(result);
