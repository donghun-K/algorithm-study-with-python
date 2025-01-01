function solution(answers) {
  const user1 = [1, 2, 3, 4, 5];
  const user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const scores = [0, 0, 0];

  answers.forEach((answer, i) => {
    if (answer === user1[i % user1.length]) scores[0] += 1;
    if (answer === user2[i % user2.length]) scores[1] += 1;
    if (answer === user3[i % user3.length]) scores[2] += 1;
  });

  const highScore = Math.max(...scores);

  const result = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highScore) result.push(i + 1);
  }

  return result;
}
