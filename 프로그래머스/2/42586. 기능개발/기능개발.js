function solution(progresses, speeds) {
  const progressQueue = [...progresses];
  const speedArray = [...speeds];
  const result = [];
  while (progressQueue.length > 0) {
    let count = 0;
    for (let i = 0; i < progressQueue.length; i++) {
      progressQueue[i] += speedArray[i];
    }
    while (progressQueue[0] >= 100) {
      progressQueue.shift();
      speedArray.shift();
      count++;
    }
    if (count > 0) result.push(count);
  }
  return result;
}
