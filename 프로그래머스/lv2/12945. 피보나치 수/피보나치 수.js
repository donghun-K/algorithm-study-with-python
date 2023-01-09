function solution(n) {
  let fiboBoard = [0, 1];
  for (let i = 2; i <= n; i++) {
    fiboBoard[i] = (fiboBoard[i - 1] % 1234567) + (fiboBoard[i - 2] % 1234567);
  }
  return fiboBoard[n] % 1234567;
}

