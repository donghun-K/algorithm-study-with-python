const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);
const arr = [];

for (let i = 0; i < N; i++) {
  const [color, size] = input[i + 1].split(' ').map(Number);
  arr.push([color, size, i]);
}

arr.sort((a, b) => a[1] - b[1]);

let summary = 0;
let colorSummary = Array(N + 1).fill(0);
let result = Array(N).fill(0);

let start = 0;
while (start < N) {
  let end = start;
  while (end < N && arr[start][1] === arr[end][1]) end++;

  for (let i = start; i < end; i++)
    result[arr[i][2]] = summary - colorSummary[arr[i][0]];

  for (let i = start; i < end; i++) {
    colorSummary[arr[i][0]] += arr[i][1];
    summary += arr[i][1];
  }
  start = end;
}

console.log(result.join('\n'));
