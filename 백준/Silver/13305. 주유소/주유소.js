const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const distances = input[1].split(' ').map(Number);

const prices = input[2].split(' ').map(Number);

let answer = 0;
let minPrice = Infinity;

for (let i = 0; i < distances.length; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }
  answer += minPrice * distances[i];
}

console.log(answer);
