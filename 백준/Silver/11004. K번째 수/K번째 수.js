let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map((x) => Number(x));
let arr = input[1].split(' ').map((x) => Number(x));

arr.sort((a, b) => a - b);

console.log(arr[k - 1]);
