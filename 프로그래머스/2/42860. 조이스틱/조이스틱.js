function solution(name) {
  let answer = 0;
  let length = name.length;
  let move = length - 1;

  for (let i = 0; i < length; i++) {
    answer += Math.min(
      name.charCodeAt(i) - 'A'.charCodeAt(0),
      'Z'.charCodeAt(0) - name.charCodeAt(i) + 1
    );

    let next = i + 1;
    while (next < length && name[next] === 'A') {
      next++;
    }

    move = Math.min(move, i * 2 + length - next, (length - next) * 2 + i);
  }

  answer += move;
  return answer;
}
