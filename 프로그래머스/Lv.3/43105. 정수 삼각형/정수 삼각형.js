function solution(triangle) {
  const memo = Array(triangle.length)
    .fill(true)
    .map((_, i) => Array(i + 1).fill(0));
  console.log(memo);
  memo[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      const a = j > 0 ? memo[i - 1][j - 1] : 0;
      const b = j < i ? memo[i - 1][j] : 0;
      memo[i][j] = Math.max(a, b) + triangle[i][j];
    }
  }

  return Math.max(...memo[triangle.length - 1]);
}
