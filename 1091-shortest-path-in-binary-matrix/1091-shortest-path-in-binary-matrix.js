/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] !== 0) return -1;

  const n = grid.length;

  const visited = [];
  for (let i = 0; i < n; i++) {
    visited.push(Array(n).fill(false));
  }

  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  const queue = [[0, 0, 1]];
  visited[0][0] = true;

  while (queue.length > 0) {
    const [row, col, currentLength] = queue.shift();
    if (row === n - 1 && col === n - 1) return currentLength;

    for (let i = 0; i < 8; i++) {
      const newRow = row + dy[i];
      const newCol = col + dx[i];
      if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n) continue;
      if (visited[newRow][newCol]) continue;
      if (grid[newRow][newCol] !== 0) continue;
      queue.push([newRow, newCol, currentLength + 1]);
      visited[newRow][newCol] = true;
    }
  }

  return -1;
};
