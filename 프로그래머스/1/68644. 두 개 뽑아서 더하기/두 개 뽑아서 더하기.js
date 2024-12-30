function solution(numbers) {
  const list = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      list.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(list)].sort((a, b) => a - b);
}
