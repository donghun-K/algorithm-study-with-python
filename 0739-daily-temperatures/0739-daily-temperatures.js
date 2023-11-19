/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = Array(temperatures.length).fill(0);
  temperatures.forEach((temperature, currentIdx) => {
    while (stack.length > 0 && stack[stack.length - 1][0] < temperature) {
      const [_, idx] = stack.pop();
      result[idx] = currentIdx - idx;
    }
    stack.push([temperature, currentIdx]);
  });
  return result;
};
