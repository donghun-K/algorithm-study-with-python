function solution(n) {
  let start = 1;
  let end = 1;
  let sum = 1;
  let count = 0;

  while (start <= n) {
    if (sum < n) {
      end++;
      sum += end;
    } else if (sum > n) {
      sum -= start;
      start++;
    } else {
      count++;
      end++;
      sum += end;
    }
  }
  return count;
}