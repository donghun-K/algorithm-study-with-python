const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);
const prefixSum = [0];
for (let i = 0; i < N; i++) {
  prefixSum.push(prefixSum[i] + A[i]);
}
const M = Number(input[2]);
let answer = '';
for (let i = 3; i < M + 3; i++) {
  let [s, e] = input[i].split(' ').map(Number);
  answer += '' + prefixSum[e] - prefixSum[s - 1] + '\n';
}
console.log(answer);
