const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let count = 0;

let arrow = new Array(1000001).fill(0);

for (let x of arr) {
  if (arrow[x] > 0) {
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    count++;
    arrow[x - 1] += 1;
  }
}

console.log(count);