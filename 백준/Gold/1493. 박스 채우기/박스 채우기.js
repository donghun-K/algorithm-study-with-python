const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

const [l, w, h] = input[0].split(' ').map(Number);
const cubes = Array(20).fill(0);

let n = Number(input[1]);
for (let i = 2; i <= n + 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  cubes[a] = b;
}

let size = Math.min(nearestSquare(l), nearestSquare(w), nearestSquare(h));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8;
  cur = 2 ** i;
  let required =
    parseInt(l / cur) * parseInt(w / cur) * parseInt(h / cur) - used;

  let usage = Math.min(required, cubes[i]);
  res += usage;
  used += usage;
}

if (used == l * w * h) console.log(res);
else console.log(-1);
