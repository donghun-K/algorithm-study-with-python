function solution(operations) {
  let dpq = [];
  operations.forEach((operation) => {
    const [operator, value] = operation.split(' ');

    if (operator === 'I') {
      dpq.push(Number(value));
    } else if (dpq.length > 0) {
      if (value === '1') {
        const max = Math.max(...dpq);
        dpq = dpq.filter((n) => n !== max);
      } else {
        const min = Math.min(...dpq);
        dpq = dpq.filter((n) => n !== min);
      }
    }
  });

  return dpq.length > 0 ? [Math.max(...dpq), Math.min(...dpq)] : [0, 0];
}