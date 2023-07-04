const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const fibos = [0, 1];

for (let i = 1; i <= n; i++) {
  let t = Number(input[i]);

  while (fibos[fibos.length - 1] < t) {
    fibos.push(fibos[fibos.length - 1] + fibos[fibos.length - 2]);
  }

  let idx = fibos.length - 1;
  let arr = [];

  while (t > 0) {
    if (fibos[idx] > t) {
      idx--;
      continue;
    }
    arr.push(fibos[idx]);
    t -= fibos[idx];
    idx--;
  }

  arr.reverse();
  console.log(arr.join(' '));
}