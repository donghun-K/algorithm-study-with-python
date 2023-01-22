function solution(answers) {
  const a1 = [1, 2, 3, 4, 5]
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]  
  const s = [[0, 1], [0, 2], [0, 3]]  
  const answer = []  
  answers.forEach((answer, i)=>{
      if (answer === a1[i % 5]) {
          s[0][0]++
      }
      if (answer === a2[i % 8]) {
          s[1][0]++
      }
      if (answer === a3[i % 10]) {
          s[2][0]++
      }
  })  
  let max = Math.max(s[0][0], s[1][0], s[2][0])
  s.forEach(([score, student])=>{
      if (score === max) {
          answer.push(student)
      }
  })  
  return answer;
}