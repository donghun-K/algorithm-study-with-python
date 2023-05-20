function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (acc.includes(cur) ? acc : acc + cur),
    ''
  );
}