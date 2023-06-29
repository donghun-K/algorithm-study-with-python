let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [n, val] = input[0].split(' ');
const coins = [];
let count = 0;

for (let i = 1; i <= n; i++) {
  coins.push(Number(input[i]));
}

coins.reverse();

for (let i = 0; i < n; i++) {
  if (val === 0) break;

  const coin = coins[i];

  if (val < coin) continue;

  count += Math.floor(val / coin);
  val = val % coin;
}

console.log(count);