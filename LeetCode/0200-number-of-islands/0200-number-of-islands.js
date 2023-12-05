/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  const m = grid.length;
  const n = grid[0].length;

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '0') continue;
      const stack = [[i, j]];
      while (stack.length > 0) {
        const [row, col] = stack.pop();
        grid[row][col] = '0';
        for (let i = 0; i < 4; i++) {
          const newRow = row + dx[i];
          const newCol = col + dy[i];
          if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) continue;
          if (grid[newRow][newCol] === '0') continue;
          stack.push([newRow, newCol]);
        }
      }
      count++;
    }
  }

  return count;
};
