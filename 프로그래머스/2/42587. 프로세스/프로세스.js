function solution(priorities, location) {
  let sortedPriorities = [...priorities].sort((a, b) => b - a);
  let count = 0;
  const processQueue = priorities.map((priority, i) => [i, priority]);

  while (true) {
    const [pid, priority] = processQueue.shift();
    if (priority === sortedPriorities[0]) {
      count++;
      sortedPriorities.shift();
      if (pid === location) break;
    } else {
      processQueue.push([pid, priority]);
    }
  }

  return count;
}
