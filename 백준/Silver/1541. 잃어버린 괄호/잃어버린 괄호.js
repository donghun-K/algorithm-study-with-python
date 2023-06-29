let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const terms = input[0].split('-');

let sum = 0;

terms.forEach((term, i) => {
  let n = term.includes('+')
    ? term
        .split('+')
        .map(Number)
        .reduce((acc, cur) => (acc += cur), 0)
    : Number(term);
  if (i === 0) sum += n;
  else sum -= n;
});

console.log(sum);
