let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [s, t] = input[0].split(' ').map(Number);

if (s === t) console.log(0);
else {
  const OPS = ['*', '+', '-', '/'];

  const queue = [];

  queue.push({
    value: s,
    ops: [],
  });

  const visited = new Set();
  visited.add(s);

  let notFound = true;

  while (queue.length > 0) {
    const x = queue.shift();
    const { value, ops } = x;

    if (value === t) {
      console.log(ops.join(''));
      notFound = false;
      break;
    }

    for (const OP of OPS) {
      let newValue = value;
      if (OP === '*') {
        newValue *= value;
      } else if (OP === '+') {
        newValue += value;
      } else if (OP === '-') {
        newValue -= value;
      } else if (OP === '/') {
        if (newValue === 0) continue;
        newValue = 1;
      }
      if (newValue > 1e9) continue;
      if (visited.has(newValue)) continue;
      visited.add(newValue);
      queue.push({
        value: newValue,
        ops: [...ops, OP],
      });
    }
  }
  if (notFound) console.log(-1);
}
