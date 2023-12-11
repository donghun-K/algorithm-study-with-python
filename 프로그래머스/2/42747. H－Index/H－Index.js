function solution(citations) {
  const citationArray = [...citations];
  citationArray.sort((a, b) => a - b);
  const n = citationArray.length;
  for (let i = n; i >= 0; i--) {
    const count = citationArray.filter((n) => n >= i).length;
    if (count >= i) return i;
  }
}
