function solution(rsp) {
  const TABLE = { 2: 0, 5: 2, 0: 5 };
  return rsp
    .split('')
    .map((v) => TABLE[v])
    .join('');
}