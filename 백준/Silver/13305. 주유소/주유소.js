const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const distances = input[1].split(' ').map(Number);

const prices = input[2].split(' ').map(Number);

let answer = 0;
let d = 0;
let minPrice = Infinity;

for (let i = distances.length - 1; i >= 0; i--) {
  const price = prices[i];
  const distance = distances[i];

  if (price <= minPrice) {
    minPrice = price;
    d += distance;
  } else {
    answer += d * minPrice;
    d = distance;
    minPrice = price;
  }
}

answer += d * minPrice;

console.log(answer);
