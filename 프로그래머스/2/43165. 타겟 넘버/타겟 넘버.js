function solution(numbers, target) {
  let count = 0;
  const len = numbers.length;

  function dfs(total, depth) {
    if (depth === len) {
      if (total === target) count++;
      return;
    }

    dfs(total + numbers[depth], depth + 1);
    dfs(total - numbers[depth], depth + 1);
  }

  dfs(0, 0);

  return count;
}
