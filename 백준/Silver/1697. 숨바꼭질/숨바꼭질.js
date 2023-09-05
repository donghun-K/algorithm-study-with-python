let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [n, k] = input[0].split(' ').map(Number);

let q = [];
let temp;
q.push(n);

const visited = Array(100001).fill(false);

let time = 0;

const bfs = () => {
  while (true) {
    time++;
    temp = [...q];
    q = [];
    for (const x of temp) {
      for (let i = 0; i < 3; i++) {
        let y;
        switch (i) {
          case 0:
            y = x - 1;
            break;
          case 1:
            y = x + 1;
            break;
          case 2:
            y = 2 * x;
            break;
        }
        if (y < 0 || y > 100000) continue;
        if (visited[y]) continue;
        if (y === k) return;
        visited[y] = true;
        q.push(y);
      }
    }
  }
};

if (n !== k) bfs();

console.log(time);
