function solution(s) {
  let stack = [];
  s.split(' ').forEach((v) => {
    if (v === 'Z') {
      stack.pop();
    } else {
      stack.push(Number(v));
    }
  });
  return stack.reduce((a, b) => a + b, 0);
}