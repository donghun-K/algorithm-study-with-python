/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const check = {};
  nums.forEach((num) => {
    check[num] = true;
  });

  let max = 0;

  nums.forEach((num) => {
    let current = num;
    if (!check[current - 1]) {
      let count = 1;
      while (check[current + 1]) {
        current = current + 1;
        count++;
      }
      max = Math.max(max, count);
    }
  });
    return max;
};
