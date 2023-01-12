function solution(people, limit) {
  let s = people.sort((a, b) => a - b);
  let count = 0;
  let [l, r] = [0, people.length - 1];
  while (l < r) {
    if (s[l] + s[r] > limit) {
      count++;
      r--;
    } else {
      count++;
      l++;
      r--;
    }
  }
  if (l === r) {
    count++;
  }
  return count;
}