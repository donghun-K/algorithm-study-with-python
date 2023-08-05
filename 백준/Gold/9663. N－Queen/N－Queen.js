let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const selectedPos = [];

let count = 0;

function dfs(row) {
  if (row === n) {
    count++;
    return;
  }
  for (let col = 0; col < n; col++) {
    let isContinue = false;
    for (let pos of selectedPos) {
      if (pos[1] === col || Math.abs(pos[0] - row) === Math.abs(pos[1] - col))
        isContinue = true;
    }
    if (isContinue) continue;
    selectedPos.push([row, col]);
    dfs(row + 1);
    selectedPos.pop();
  }
}

dfs(0);

console.log(count);
