const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [n, k] = input[0].split(' ').map(Number);

let f = 0;

for (let i = 1; i <= k; i++) {
  f += i;
}

if (f > n) {
  console.log(-1);
} else {
  while (f < n) {
    f += k;
  }
  console.log(f === n ? k - 1 : k);
}
