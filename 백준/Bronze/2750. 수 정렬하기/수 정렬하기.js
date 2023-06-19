let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

let answer = '';
for (let i = 0; i < n; i++) {
  answer += arr[i] + '\n';
}
console.log(answer);


