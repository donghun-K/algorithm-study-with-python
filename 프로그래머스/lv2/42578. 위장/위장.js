function solution(clothes) {
  const hash = {};
  let answer = 1;
  clothes.forEach((cloth) => {
    if (hash[cloth[1]] === undefined) {
      hash[cloth[1]] = 2;
    } else {
      hash[cloth[1]] += 1;
    }
  });
  Object.values(hash).forEach((n) => {
    answer *= n;
  });
  answer--;

  return answer;
}