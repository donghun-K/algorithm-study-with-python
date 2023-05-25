function solution(score) {
  const avgScores = score.map((scores) => (scores[0] + scores[1]) / 2);
  return avgScores.map((avgScore) => {
    let count = 1;
    avgScores.forEach((score) => {
      if (avgScore < score) count++;
    });
    return count;
  });
}