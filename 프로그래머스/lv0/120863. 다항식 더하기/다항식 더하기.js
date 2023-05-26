function solution(polynomial) {
  let x = 0;
  let n = 0;
  polynomial.split(' + ').forEach((v) => {
    if (v === 'x') {
      x += 1;
    } else if (v.includes('x')) {
      console.log(v);
      x += parseInt(v.replace('x', ''));
    } else {
      n += parseInt(v);
    }
  });
  const answer = [];
  if (x > 0) {
    if (x === 1) {
      answer.push('x');
    } else {
      answer.push(`${x}x`);
    }
  }
  if (n > 0) {
    answer.push(n);
  }
  return answer.join(' + ');
}