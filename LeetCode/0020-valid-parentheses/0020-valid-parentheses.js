/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let x of s) {
    if (x === '(' || x === '[' || x === '{') {
      stack.push(x);
    } else {
      if (stack.length === 0) return false;
      const y = stack.pop();
      if (x === ')' && y !== '(') return false;
      if (x === ']' && y !== '[') return false;
      if (x === '}' && y !== '{') return false;
    }
  }
  return stack.length === 0;
};
