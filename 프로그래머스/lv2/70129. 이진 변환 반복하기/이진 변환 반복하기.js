function solution(s) {
  let zero = 0;
  let times = 0;

  while (s !== '1') {
    const temp = [];
    s.split('').forEach((c) => {
      if (c === '0') {
        zero++;
      } else {
        temp.push(c);
      }
    });
    s = temp.join('').length.toString(2);
    times++;
  }
  return [times, zero];
}
