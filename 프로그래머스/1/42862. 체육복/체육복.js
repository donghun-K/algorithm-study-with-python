function solution(n, lost, reserve) {
  const arr = Array(n).fill(1);

  for (let i of lost) {
    arr[i - 1]--;
  }
  for (let i of reserve) {
    arr[i - 1]++;
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) continue;
    if (i > 0 && arr[i - 1] > 1) {
      arr[i - 1]--;
      arr[i]++;
    } else if (i < n - 1 && arr[i + 1] > 1) {
      arr[i + 1]--;
      arr[i]++;
    }
  }

  return arr.filter((x) => x !== 0).length;
}
