let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const arr1 = input[1].split(' ').map(Number);
const arr2 = input[3].split(' ').map(Number);

const result = [];

function lowerBound(arr, target, start, end) {
  let mid = 0;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  let mid = 0;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

arr1.sort((x, y) => x - y);

for (x of arr2) {
  const leftValue = lowerBound(arr1, x, 0, arr1.length);
  const rightValue = upperBound(arr1, x, 0, arr1.length);

  result.push(rightValue - leftValue);
}

console.log(result.join(' '));
