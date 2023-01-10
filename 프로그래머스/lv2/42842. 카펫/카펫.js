function solution(brown, yellow) {
  const size = brown + yellow;
  for (let i = 1; i < yellow / 2 + 1; i++) {
    if (yellow % i !== 0) {
      continue;
    }
    const width = yellow / i + 2;
    const height = i + 2;
    if (width * height == size) {
      return [width, height];
    }
  }
}