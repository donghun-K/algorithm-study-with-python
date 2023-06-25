const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = [...input[0]];
n.sort((a, b) => b - a);
console.log(n.join(''));
