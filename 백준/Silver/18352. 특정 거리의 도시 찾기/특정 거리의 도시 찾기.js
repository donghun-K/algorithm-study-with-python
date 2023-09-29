let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, M, K, X] = input[0].split(' ').map(Number);
// 도시의 개수 N, 도로의 개수 M, 거리 정보 K, 출발 도시의 번호 X

const cityMap = Array(N + 1);
const visited = Array(N + 1);

for (let i = 1; i <= N; i++) {
  cityMap[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [from, to] = input[i].split(' ').map(Number);
  cityMap[from].push(to);
}

// console.log(cityMap);

let queue = [X];
visited[X] = true;

let count = 0;

(() => {
  while (count < K) {
    count++;
    const temp = [...queue];
    queue = [];
    for (const from of temp) {
      const cities = cityMap[from];
      for (const to of cities) {
        if (visited[to]) continue;
        visited[to] = true;
        queue.push(to);
      }
    }
  }
})();

queue.sort((a, b) => a - b);

if (queue.length === 0) console.log(-1);
else queue.forEach((city) => console.log(city));
