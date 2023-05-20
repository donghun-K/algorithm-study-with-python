function solution(age) {
  return [...String(age)]
    .map((char) => String.fromCharCode(Number(char) + 97))
    .join('');
}
