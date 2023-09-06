let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = BigInt(input[0]);

for (let i = 1; i <= n; i++) {
  let x = BigInt(input[i]);
  let isValue = true;
  for (let j = BigInt(2); j < BigInt(1000001); j++) {
    if (x % j === BigInt(0)) {
      isValue = false;
      break;
    }
  }
  console.log(isValue ? 'YES' : 'NO');
}
