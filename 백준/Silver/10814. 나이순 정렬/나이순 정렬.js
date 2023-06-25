const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);
const table = [];

for (let i = 1; i <= n; i++) {
  const [age, name] = input[i].split(' ');
  table.push([Number(age), name, i]);
}

table.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[2] - b[2];
});

let answer = '';

for (person of table) {
  answer += `${person[0]} ${person[1]}\n`;
}

console.log(answer);
