const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...heights);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;

  for (h of heights) {
    if (h > mid) total += h - mid;
  }

  if (total >= m) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);
