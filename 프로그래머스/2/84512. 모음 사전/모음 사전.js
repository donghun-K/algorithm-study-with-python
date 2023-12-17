function solution(word) {
  const chars = ['A', 'E', 'I', 'O', 'U'];

  let count = 0;
  let find = false;

  function dfs(str) {
    if (str.length > 5 || find) return;
    count++;
    for (const char of chars) {
      if (str + char === word) find = true;
      dfs(str + char);
    }
  }
    
  dfs('');

  return count;
}
