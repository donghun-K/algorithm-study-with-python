function solution(genres, plays) {
  const playTotal = {};
  const group = {};
  const result = [];

  const n = genres.length;

  for (let i = 0; i < n; i++) {
    const currentGenre = genres[i];
    if (playTotal[currentGenre] === undefined) playTotal[currentGenre] = 0;
    if (group[currentGenre] === undefined) group[currentGenre] = [];
    playTotal[currentGenre] += plays[i];
    group[currentGenre].push([i, plays[i]]);
  }

  const playTotalArray = Object.entries(playTotal);
  playTotalArray.sort((a, b) => b[1] - a[1]);

  playTotalArray.forEach(([genre, _]) => {
    const genreGroup = group[genre];
    genreGroup.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
    });
    for (let i = 0; i < Math.min(2, genreGroup.length); i++) {
      result.push(genreGroup[i][0]);
    }
  });

  console.log(result);
  return result;
}
