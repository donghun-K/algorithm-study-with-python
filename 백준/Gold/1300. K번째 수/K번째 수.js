const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let k = Number(input[1]);

let s = 1;
let e = 10 ** 10;

let result = 0;
while (s <= e) {
  let mid = Math.floor((s + e) / 2);
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += Math.min(Math.floor(mid / i), n);
  }
  if (total >= k) {
    result = mid;
    e = mid - 1;
  } else {
    s = mid + 1;
  }
}
console.log(result);