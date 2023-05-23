function solution(array, n) {
  array.sort((a, b) => a - b);
  let answer = 0;
  let gap = Infinity;
  array.forEach((num) => {
    if (Math.abs(num - n) < gap) {
      gap = Math.abs(num - n);
      answer = num;
    }
  });
  return answer;
}
