function solution(n, wires) {
  let answer = Infinity;
  for (const curWire of wires) {
    const newWires = [...wires].filter((wire) => curWire !== wire);

    let visited = Array(n + 1).fill(false);
    const graph = [null];
    for (let i = 0; i < n; i++) {
      graph.push([]);
    }

    for (const [v1, v2] of newWires) {
      graph[v1].push(v2);
      graph[v2].push(v1);
    }

    const connected = [];

    function dfs(curVertex) {
      visited[curVertex] = true;
      for (let nextVertex of graph[curVertex]) {
        if (visited[nextVertex]) continue;
        dfs(nextVertex);
      }
    }

    for (let i = 1; i < n + 1; i++) {
      if (visited[i]) continue;
      dfs(i, 0);
      connected.push(visited.filter((n) => n === true).length);
    }

    if (connected.length === 2)
      answer = Math.min(
        answer,
        Math.abs(connected[0] - (connected[1] - connected[0]))
      );
  }
  return answer;
}
