const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

for (let i = 1; i <= n; i++) {
  let str = input[i].trim();
  if (isPalindrome(str)) console.log(0);
  else {
    let found = false;
    let l = str.length;
    for (let j = 0; j < Math.floor(l / 2); j++) {
      if (str[j] !== str[l - j - 1]) {
        if (isPalindrome(str.slice(0, j) + str.slice(j + 1, l))) found = true;
        if (isPalindrome(str.slice(0, l - j - 1) + str.slice(l - j, l)))
          found = true;
        break;
      }
    }
    console.log(found ? 1 : 2);
  }
}
