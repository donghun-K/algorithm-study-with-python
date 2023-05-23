function solution(i, j, k) {
  let str = '';
  for (let start = i; start <= j; start++) {
    str += start.toString();
  }
  return [...str].filter((v) => v === k.toString()).length;
}