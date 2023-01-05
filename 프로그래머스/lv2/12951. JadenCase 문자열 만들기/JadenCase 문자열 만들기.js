function solution(s) {
  const words = s.split(' ');
  const changedWords = words.map((word) =>
    word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ''
  );
  return changedWords.join(' ');
}
