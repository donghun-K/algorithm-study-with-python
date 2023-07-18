const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [k, n] = input[0].split(' ').map(Number);

const lengths = [];

for (let i = 1; i <= k; i++) {
  lengths.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...lengths);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;

  for (l of lengths) {
    total += Math.floor(l / mid);
  }

  if (total >= n) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);
