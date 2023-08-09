let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const table = {};

for (let i = 1; i <= n; i++) {
  table[i] = {};
}

for (let i = 1; i < n; i++) {
  const [start, end, distance] = input[i].split(' ').map(Number);
  table[start][end] = distance;
  table[end][start] = distance;
}

for (let i = n; i < n + m; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  let totalDistance = 0;
  let answer = Infinity;
  let visited = [];

  function dfs(s) {
    // console.log('s:', s);
    if (s === end) {
      answer = Math.min(totalDistance, answer);
      return;
    }
    for (let e of Object.keys(table[s]).map(Number)) {
      if (visited.includes(e)) continue;
      visited.push(e);
      totalDistance += table[s][e];
      // console.log(`${s} to ${e}: ${table[s][e]}`);
      // console.log('totalDistance', totalDistance);
      if (dfs(e)) return true;
      visited.pop();
      totalDistance -= table[s][e];
    }
    return false;
  }

  dfs(start);

  console.log(answer);
}
