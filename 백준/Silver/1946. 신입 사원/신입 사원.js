const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const t = Number(input[0]);
let line = 0;

for (let tc = 0; tc < t; tc++) {
  line++;
  const n = Number(input[line]);
  const arr = [];
  for (let i = 0; i < n; i++) {
    line++;
    arr.push(input[line].split(' ').map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);

  let min = arr[0][1];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i][1]) {
      min = arr[i][1];
      count++;
    }
  }
  console.log(count);
}
