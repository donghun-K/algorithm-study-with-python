const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ');
let x, y;
x = a[2] + a[1] + a[0];
y = b[2] + b[1] + b[0];

console.log(Math.max(x, y));