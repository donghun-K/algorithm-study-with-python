let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const arr = input.map(Number);
arr.sort((a, b) => a - b);

let answer = '';
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + ' ';
}

console.log(answer);