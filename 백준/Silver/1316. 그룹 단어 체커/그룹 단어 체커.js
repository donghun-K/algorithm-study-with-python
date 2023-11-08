const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const N = Number(input[0]);
let line = 1;
let count = 0;

for (let i = 0; i < N; i++) {
  const word = input[line++].trim();
  const letters = [...word];

  const mySet = new Set();
  const myArr = [];
  for (let i = 0; i < letters.length; i++) {
    mySet.add(letters[i]);
    if (i + 1 === letters.length) myArr.push(letters[i]);
    else if (letters[i] === letters[i + 1]) continue;
    else myArr.push(letters[i]);
  }

  if (mySet.size === myArr.length) count++;
}

console.log(count);
