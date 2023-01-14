function solution(arr) {
  let answer = [];
  arr.forEach((n, i) => {
    if (i === 0 || arr[i - 1] !== n) {
      answer.push(n);
    }
  });
  return answer;
}
