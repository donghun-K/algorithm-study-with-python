function solution(begin, target, words) {
  const queue = [[begin, 0]];
  const l = begin.length;
  const visited = {};

  while (queue.length > 0) {
    const [current, step] = queue.shift();

    if (current === target) return step;

    for (const word of words) {
      if (current === word) continue;
      if (visited[word]) continue;
      let count = 0;
      for (let i = 0; i < l; i++) {
        if (current[i] !== word[i]) count++;
        if (count > 1) break;
      }
      if (count === 1) {
        visited[word] = true;
        queue.push([word, step + 1]);
      }
    }
  }

  return 0;
}
