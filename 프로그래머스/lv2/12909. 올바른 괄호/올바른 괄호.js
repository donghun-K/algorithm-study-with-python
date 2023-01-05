function solution(s) {
    if (s[0] == ')') {
        return false
    }
  const stack = [];
  s.split('').forEach((c) => {
    if (c === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    } else {
      stack.push(c);
    }
  });
  if (stack.length === 0) {
    return true;
  }
  return false;
}