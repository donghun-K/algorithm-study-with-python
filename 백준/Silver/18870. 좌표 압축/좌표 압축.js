const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const arr = input[1].split(' ').map(Number);
const newArr = [...new Set(arr)].sort((a, b) => a - b);

const myMap = new Map();

newArr.forEach((n, i) => {
  myMap.set(n, i);
});

let answer = '';
for (n of arr) answer += myMap.get(n) + ' ';

console.log(answer);