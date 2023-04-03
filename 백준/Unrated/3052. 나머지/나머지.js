const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let mySet = new Set();

for (let i = 0; i < 10; i++) {
  mySet.add(Number(input[i]) % 42);
}

console.log(mySet.size);
