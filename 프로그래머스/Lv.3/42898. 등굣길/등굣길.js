function solution(m, n, puddles) {
  const memo = Array(m)
    .fill(true)
    .map((_) => Array(n).fill(0));

  memo[0][0] = 1;

  for (const [a, b] of puddles) {
    memo[a - 1][b - 1] = null;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (memo[i][j] === null) continue;
      const x = i - 1 >= 0 ? memo[i - 1][j] : 0;
      const y = j - 1 >= 0 ? memo[i][j - 1] : 0;
      memo[i][j] = (x + y) % 1_000_000_007;
    }
  }

  return memo[m - 1][n - 1];
}
