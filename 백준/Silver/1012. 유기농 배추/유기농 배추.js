let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const tc = Number(input[0]);
let line = 0;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let i = 0; i < tc; i++) {
  line++;
  const [m, n, k] = input[line].split(' ').map(Number);
  const table = [];
  let count = 0;
  for (let j = 0; j < n; j++) {
    table.push(new Array(m).fill(false));
  }
  for (let j = 0; j < k; j++) {
    line++;
    const [x, y] = input[line].split(' ').map(Number);
    table[y][x] = true;
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (table[row][col]) {
        // console.log('발견', col, row);
        count++;
        dfs(col, row, n, m, table);
      }
    }
  }
  console.log(count);
}

function dfs(x, y, n, m, table) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if ((nx < 0) | (ny < 0) | (nx >= m) | (ny >= n)) continue;
    if (table[ny][nx]) {
      table[ny][nx] = false;
      dfs(nx, ny, n, m, table);
    }
  }
}