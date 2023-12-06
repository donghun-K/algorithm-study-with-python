function solution(prices) {
  const stack = [];
  const result = Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] > prices[i]) {
      const [_, index] = stack.pop();
      result[index] = i - index;
    }
    stack.push([prices[i], i]);
  }
  for (const [_, index] of stack) {
    result[index] = prices.length - 1 - index;
  }

  return result;
}
