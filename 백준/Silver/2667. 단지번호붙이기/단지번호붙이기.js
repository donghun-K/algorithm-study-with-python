let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const map = [];

for (let i = 1; i <= n; i++) {
  map.push([...input[i]].map((x) => (x === '1' ? true : false)));
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const result = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!map[i][j]) continue;
    let count = 0;

    function dfs(x, y) {
      if (x < 0 || y < 0 || x >= n || y >= n) return;
      if (!map[x][y]) return;
      count++;
      map[x][y] = false;
      for (let k = 0; k < 4; k++) {
        dfs(x + dx[k], y + dy[k]);
      }
    }

    dfs(i, j);

    result.push(count);
  }
}

console.log(result.length);
result.sort((a, b) => a - b);
result.forEach((x) => {
  console.log(x);
});
