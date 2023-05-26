function solution(lines) {
  let DICT = {};
  lines.forEach(([start, end]) => {
    for (let i = start; i < end; i++) {
      DICT[i] = DICT[i] ? DICT[i] + 1 : 1;
    }
  });
  return Object.entries(DICT).filter(([_, v]) => v > 1).length;
}