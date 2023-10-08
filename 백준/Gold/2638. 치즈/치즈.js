let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

let board = [];
let visited = [];
for (let line = 1; line <= N; line++) {
  const row = input[line].split(' ').map(Number);
  board.push(row);
  visited.push(Array(M).fill(false));
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let hour = 0;
let hasCheese = true;

while (hasCheese) {
  hasCheese = false;
  let queue = [[0, 0]];
  visited[0][0] = true;
  while (queue.length > 0) {
    const temp = [...queue];
    queue = [];
    for (const [x, y] of temp) {
      for (let i = 0; i < 4; i++) {
        const newX = x + dx[i];
        const newY = y + dy[i];
        if (newX < 0 || newX >= N || newY < 0 || newY >= M) continue;
        if (visited[newX][newY]) continue;
        if (board[newX][newY] > 0) {
          board[newX][newY] += 1;
          hasCheese = true;
        }
        if (board[newX][newY] === 0) {
          visited[newX][newY] = true;
          queue.push([newX, newY]);
        }
      }
    }
  }

  if (hasCheese) {
    hour++;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        visited[i][j] = false;
        if (board[i][j] >= 3) {
          board[i][j] = 0;
        }
        if (board[i][j] === 2) {
          board[i][j] = 1;
        }
      }
    }
  }
}

console.log(hour);
