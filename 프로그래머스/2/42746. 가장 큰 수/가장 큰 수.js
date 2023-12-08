function solution(numbers) {
  const result = numbers
    .map((num) => String(num))
    .sort((a, b) => {
      return a + b < b + a ? 1 : -1;
    })
    .join('');

  return result[0] === '0' ? '0' : result;
}

