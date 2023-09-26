let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const t = Number(input[0]);
let line = 1;

const dx = [1, 2, 2, 1, -1, -2, -2, -1];
const dy = [-2, -1, 1, 2, 2, 1, -1, -2];

for (let i = 0; i < t; i++) {
  const l = Number(input[line++]);
  const startPos = input[line++].split(' ').map(Number);
  const endPos = input[line++].split(' ').map(Number);

  // console.log('startPos', startPos);
  // console.log('endPos', endPos);

  const isVisited = [];
  for (let j = 0; j < l; j++) {
    isVisited.push(Array(l).fill(false));
  }

  let count = 0;

  let queue = [];
  isVisited[startPos[0]][startPos[1]] = true;
  queue.push(startPos);

  (() => {
    while (queue.length > 0) {
      const posArr = [...queue];
      queue = [];
      for (let j = 0; j < posArr.length; j++) {
        const [x, y] = posArr[j];
        if (x === endPos[0] && y === endPos[1]) return;
        for (let k = 0; k < 8; k++) {
          const newX = x + dx[k];
          const newY = y + dy[k];
          if (newX < 0 || newX >= l || newY < 0 || newY >= l) continue;
          if (isVisited[newX][newY]) continue;
          isVisited[newX][newY] = true;
          queue.push([newX, newY]);
        }
      }
      // console.log('queue', queue);
      count++;
    }
  })();

  console.log(count);
}
