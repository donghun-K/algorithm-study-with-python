const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const line = input[0].split(' ');

console.log(Number(line[0]) - Number(line[1]));