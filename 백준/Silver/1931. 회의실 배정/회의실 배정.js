const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const times = [];

for (let i = 1; i <= n; i++) {
  times.push(input[i].split(' ').map(Number));
}

times.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let end = 0;
let count = 0;

times.forEach(([s, e]) => {
  if (s >= end) {
    count++;
    end = e;
  }
});

console.log(count);
