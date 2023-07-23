const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map((x) => Number(x));

arr.reverse();

let d = [0];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

for (x of arr) {
  if (d[d.length - 1] < x) {
    d.push(x);
  } else {
    let idx = lowerBound(d, x, 0, d.length);
    d[idx] = x;
  }
}

console.log(n - d.length + 1);
