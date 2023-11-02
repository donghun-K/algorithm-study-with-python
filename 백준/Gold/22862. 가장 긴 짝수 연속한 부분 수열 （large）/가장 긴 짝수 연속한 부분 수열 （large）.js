const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const S = input[1].split(' ').map(Number);

let maxLength = 0;
let removeCount = 0;

for (let start = 0, end = 0; start < N; start++) {
  while (end < N) {
    if (S[end] % 2 === 0) end++;
    else {
      if (removeCount === K) break;
      removeCount++;
      end++;
    }
  }
  maxLength = Math.max(maxLength, end - start - removeCount);
  if (S[start] % 2 === 1) removeCount--;
}

console.log(maxLength);
