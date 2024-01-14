function solution(maps) {
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from(Array(n), () => Array(m).fill(false));

  const queue = [];
  queue.push([[0, 0], 1]);

  while (queue.length > 0) {
    const [[x, y], length] = queue.shift();
    if (x === n - 1 && y === m - 1) return length;

    for (let i = 0; i < 4; i++) {
      const nX = x + dx[i];
      const nY = y + dy[i];
      if (nX < 0 || nX >= n || nY < 0 || nY >= m) continue;
      if (maps[nX][nY] === 0) continue;
      if (visited[nX][nY]) continue;
      visited[nX][nY] = true;
      queue.push([[nX, nY], length + 1]);
    }
  }

  return -1;
}
