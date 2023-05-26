function solution(board) {
  let n = board.length;
  const D = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  let dangerZone = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        dangerZone.add(`${i},${j}`);
        D.forEach(([dx, dy]) => {
          let x = i + dx;
          let y = j + dy;
          if (x >= 0 && x < n && y >= 0 && y < n) dangerZone.add(`${x},${y}`);
        });
      }
    }
  }
  console.log(dangerZone);
  return n ** 2 - dangerZone.size;
}