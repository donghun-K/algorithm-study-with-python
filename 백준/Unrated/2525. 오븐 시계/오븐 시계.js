const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [h, m] = input[0].split(' ').map(Number);
let t = Number(input[1]);

let totalMinute = h * 60 + m + t;
totalMinute %= 1440;

let hour = Math.floor(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + ' ' + minute);
