const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((x, y) => x - y);
const x = Number(input[2]);

let start = 0;
let end = n - 1;

let count = 0;

while (start < end) {
  let sum = arr[start] + arr[end];
  if (sum === x) {
    count++;
    start++;
    end--;
  } else if (sum < x) {
    start++;
  } else {
    end--;
  }
}

console.log(count);
