const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let arr = input[1].split(' ').map((el) => Number(el));
let max = Math.max(...arr);

let sum = arr.reduce((acc, cur) => acc + cur);

console.log(((sum / max) * 100) / n);
