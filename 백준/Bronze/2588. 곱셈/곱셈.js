const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[0];
const b = input[1];

console.log(Number(a) * Number(b[2]));
console.log(Number(a) * Number(b[1]));
console.log(Number(a) * Number(b[0]));
console.log(Number(a) * Number(b));

