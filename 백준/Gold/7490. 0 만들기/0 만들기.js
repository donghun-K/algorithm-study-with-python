let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  const n = Number(input[i]);
  const arr = [];

  function dfs(depth) {
    if (depth === n - 1) {
      let str = '';
      for (let j = 0; j < n - 1; j++) str += j + 1 + arr[j];
      str += n;
      if (eval(str.split(' ').join('')) === 0) console.log(str);
      return;
    }

    for (let x of [' ', '+', '-']) {
      arr.push(x);
      dfs(depth + 1);
      arr.pop();
    }
  }

  dfs(0);
  console.log('');
}
