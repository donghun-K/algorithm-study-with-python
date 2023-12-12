function solution(k, dungeons) {
  let maxClearCount = 0;

  const dungeonIds = Array(dungeons.length)
    .fill(true)
    .map((_, i) => i);

  function recursive(clearCount, fatigue, dungeonIdArr) {
    for (const dungeonId of dungeonIdArr) {
      const [required, consumption] = dungeons[dungeonId];
      if (fatigue < required) continue;
      const newClearCount = clearCount + 1;
      const newFatigue = fatigue - consumption;
      const newDungeonIdArr = [...dungeonIdArr].filter(
        (id) => id !== dungeonId
      );
      maxClearCount = Math.max(maxClearCount, newClearCount);
      recursive(newClearCount, newFatigue, newDungeonIdArr);
    }
  }

  recursive(0, k, dungeonIds);

  return maxClearCount;
}
