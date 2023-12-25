function solution(n, computers) {
  const graph = [];
  for (let i = 0; i < n; i++) {
    graph.push([]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (computers[i][j] === 1) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }
  let count = 0;
  const visited = Array(n).fill(false);

  const dfs = (node) => {
    visited[node] = true;
    for (const next of graph[node]) {
      if (visited[next]) continue;
      dfs(next);
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i);
    count++;
  }

  return count;
}
