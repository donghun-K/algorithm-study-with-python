function solution(array, commands) {
  const answer = []
  commands.forEach(command => {
      [i, j, k] = command;
      let arr = []
      for (let n=i-1; n<j; n++) {
          arr.push(array[n])
      }
      arr = arr.sort((a, b) => a - b)
      answer.push(arr[k-1])
  })
  return answer
}