let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let i = 0;

while (true) {
  let line = input[i++].split(' ').map(Number);
  const n = line.shift();
  line = line.sort((a, b) => a - b);

  if (n === 0) break;

  const selected = []; // 고른 숫자들
  const visited = Array(n).fill(false); // 방문 여부

  function dfs(depth, start) {
    if (depth === 6) {
      console.log(selected.join(' '));
      return;
    }

    for (let j = start; j < n; j++) {
      if (visited[j]) continue;
      selected.push(line[j]);
      visited[j] = true;
      dfs(depth + 1, j + 1);
      selected.pop();
      visited[j] = false;
    }
  }

  dfs(0, 0);

  console.log(' ');
}
