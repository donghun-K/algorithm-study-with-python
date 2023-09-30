let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, K, M] = input[0].split(' ').map(Number);
// 역의 수 N과 한 하이퍼튜브가 서로 연결하는 역의 개수 K, 하이퍼튜브의 개수 M

const graph = Array(N + 1);
for (let i = 1; i <= N + M; i++) {
  graph[i] = [];
}

for (let i = 1; i <= M; i++) {
  let line = input[i].split(' ').map(Number);
  for (const x of line) {
    graph[x].push(N + i);
    graph[N + i].push(x);
  }
}

let queue = [];
const visited = Array(N + M + 1).fill(false);

queue.push(1);
visited[1] = true;

let count = 1;

if (1 !== N) {
  let find;
  find = (() => {
    while (queue.length > 0) {
      const temp = [...queue];
      queue = [];
      count++;
      for (const from of temp) {
        const toArr = graph[from];
        for (const to of toArr) {
          if (visited[to]) continue;
          if (to === N) return true;
          visited[to] = true;
          queue.push(to);
        }
      }
    }
    return false;
  })();
  console.log(find ? Math.ceil(count / 2) : -1);
} else {
  console.log(1);
}
