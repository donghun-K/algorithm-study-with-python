let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

const map1 = [];
const map2 = [];

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

for (let i = 1; i <= n; i++) {
  const arr = [...input[i]];
  map1.push(arr);
  map2.push(arr.map((x) => (x === 'G' ? 'R' : x)));
}

let count1 = 0;
let count2 = 0;

function dfs(x, y, letter, map) {
  if (x < 0 || y < 0 || x >= n || y >= n) return;
  if (map[x][y] === false || map[x][y] !== letter) return;
  // console.log(x, y);
  map[x][y] = false;
  for (let i = 0; i < 4; i++) {
    dfs(x + dx[i], y + dy[i], letter, map);
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map1[i][j] !== false) {
      dfs(i, j, map1[i][j], map1);
      count1++;
    }
    if (map2[i][j] !== false) {
      dfs(i, j, map2[i][j], map2);
      count2++;
    }
  }
}

console.log(count1, count2);
