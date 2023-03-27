let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

console.log(parseInt(line[0]) + parseInt(line[1]));